"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { formCopy } from "@/content/en";
import { forms, validate, type Field, type FormDef, type FormType, type FormValues } from "@/lib/forms";

type Props = {
  type: FormType;
  /** extra values sent with the lead (e.g. which course page it came from) */
  context?: Record<string, string>;
};

function initialValues(fields: readonly Field[]): FormValues {
  const v: FormValues = {};
  for (const f of fields) v[f.name] = f.kind === "multichips" ? [] : f.kind === "consent" ? false : "";
  return v;
}

/** Campaign tags from the URL, saved with every lead. */
function campaign(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "course"]) {
    const v = p.get(k);
    if (v) out[k] = v;
  }
  return out;
}

export function LeadForm({ type, context }: Props) {
  const def: FormDef = forms[type];
  const uid = useId();
  const pathname = usePathname();
  const successRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<FormValues>(() => initialValues(def.fields));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  const set = (name: string, v: string | string[] | boolean) => {
    setValues((s) => ({ ...s, [name]: v }));
    if (errors[name])
      setErrors((s) => {
        const next = { ...s };
        delete next[name];
        return next;
      });
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const check = validate(type, values);
    setErrors(check.errors);
    if (Object.keys(check.errors).length) {
      const first = def.fields.find((f) => check.errors[f.name]);
      if (first) document.getElementById(`${uid}-${first.name}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, values: check.values, source: pathname, campaign: campaign(), context }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (body.errors) setErrors(body.errors);
        setStatus("failed");
        return;
      }
      setStatus("sent");
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="stack" style={{ gap: 18, outline: "none" }}>
        <div style={{ width: 64, height: 64, borderRadius: 999, background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 14 L12 20 L22 8" />
          </svg>
        </div>
        <p className="lead" style={{ fontWeight: 600 }}>
          {def.success}
        </p>
        <button
          type="button"
          className="tog"
          style={{ alignSelf: "flex-start" }}
          onClick={() => {
            setValues(initialValues(def.fields));
            setStatus("idle");
          }}
        >
          {formCopy.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label={def.title}>
      <p className="sm muted" style={{ marginBottom: 20 }}>
        {formCopy.requiredNote}
      </p>
      <div className="form-grid">
        {def.fields.map((f) => (
          <FieldInput key={f.name} id={`${uid}-${f.name}`} field={f} value={values[f.name]} error={errors[f.name]} onChange={(v) => set(f.name, v)} />
        ))}
      </div>
      {status === "failed" && (
        <p className="sm" role="alert" style={{ color: "var(--red-text)", marginTop: 16 }}>
          {formCopy.failed}
        </p>
      )}
      <button type="submit" className="btn btn-lg btn-block" style={{ marginTop: 28 }} disabled={status === "sending"}>
        {status === "sending" ? formCopy.sending : def.submitLabel}
      </button>
    </form>
  );
}

function FieldInput({
  id,
  field: f,
  value,
  error,
  onChange,
}: {
  id: string;
  field: Field;
  value: FormValues[string];
  error?: string;
  onChange: (v: string | string[] | boolean) => void;
}) {
  const errId = `${id}-err`;
  const described = error ? errId : undefined;
  const cls = `fld${f.full ? " full" : ""}`;
  const req = f.required ? (
    <span className="req" aria-hidden="true">
      {" "}
      *
    </span>
  ) : null;
  const err = error ? (
    <span id={errId} className="err">
      {error}
    </span>
  ) : null;

  if (f.kind === "consent") {
    return (
      <div className={cls}>
        <label className="check" style={{ fontWeight: 400 }}>
          <input
            id={id}
            type="checkbox"
            checked={value === true}
            onChange={(e) => onChange(e.target.checked)}
            aria-describedby={described}
            aria-invalid={!!error}
            aria-required={f.required || undefined}
          />
          <span>
            {f.label}{" "}
            <Link href="/privacy" target="_blank">
              {formCopy.privacyLink}
            </Link>
            .{req}
          </span>
        </label>
        {err}
      </div>
    );
  }

  if (f.kind === "chips" || f.kind === "multichips") {
    const multi = f.kind === "multichips";
    const arr = Array.isArray(value) ? value : [];
    return (
      <fieldset className={cls} aria-describedby={described} aria-required={f.required || undefined}>
        <legend>
          {f.label}
          {req}
        </legend>
        <div className="toggles" style={{ marginTop: 8 }}>
          {(f.options ?? []).map((o, i) => {
            const on = multi ? arr.includes(o) : value === o;
            return (
              <button
                key={o}
                id={i === 0 ? id : undefined}
                type="button"
                className={`tog${multi ? " tog-red" : ""}`}
                aria-pressed={on}
                onClick={() => {
                  if (multi) onChange(on ? arr.filter((x) => x !== o) : [...arr, o]);
                  else onChange(on ? "" : o);
                }}
              >
                {f.optionPrefix && o !== "Other" ? `${f.optionPrefix}${o}` : o}
              </button>
            );
          })}
        </div>
        {err}
      </fieldset>
    );
  }

  const common = {
    id,
    "aria-describedby": described,
    "aria-invalid": !!error,
    "aria-required": f.required || undefined,
    value: typeof value === "string" ? value : "",
    placeholder: f.placeholder,
    autoComplete: f.autoComplete,
  };

  return (
    <div className={cls}>
      <label htmlFor={id}>
        {f.label}
        {req}
      </label>
      {f.kind === "select" ? (
        <select {...common} onChange={(e) => onChange(e.target.value)}>
          <option value="">{formCopy.choose}</option>
          {(f.options ?? []).map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : f.kind === "textarea" ? (
        <textarea {...common} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input
          {...common}
          type={f.kind === "number" ? "text" : f.kind}
          inputMode={f.kind === "number" ? "numeric" : f.kind === "tel" ? "tel" : undefined}
          autoComplete={f.autoComplete ?? (f.kind === "email" ? "email" : f.kind === "tel" ? "tel" : undefined)}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {f.hint && <span className="hint">{f.hint}</span>}
      {err}
    </div>
  );
}
