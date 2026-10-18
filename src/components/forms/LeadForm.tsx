"use client";

import { useId, useState } from "react";
import { usePathname } from "next/navigation";
import { forms, validate, type Field, type FormType, type FormValues } from "@/lib/forms";

type Props = {
  type: FormType;
  /** extra values sent with the lead (e.g. which course page it came from) */
  context?: Record<string, string>;
  compact?: boolean;
};

function initialValues(fields: Field[]): FormValues {
  const v: FormValues = {};
  for (const f of fields) v[f.name] = f.kind === "multichips" ? [] : f.kind === "consent" ? false : "";
  return v;
}

function utm(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  for (const k of ["utm_source", "utm_medium", "utm_campaign", "course"]) {
    const v = p.get(k);
    if (v) out[k] = v;
  }
  return out;
}

export function LeadForm({ type, context, compact }: Props) {
  const def = forms[type];
  const uid = useId();
  const pathname = usePathname();
  const [values, setValues] = useState<FormValues>(() => initialValues(def.fields));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  const set = (name: string, v: string | string[] | boolean) => setValues((s) => ({ ...s, [name]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const check = validate(type, values);
    setErrors(check.errors);
    if (Object.keys(check.errors).length) {
      const first = Object.keys(check.errors)[0];
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, values: check.values, source: pathname, campaign: utm(), context }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (body.errors) setErrors(body.errors);
        setStatus("failed");
        return;
      }
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="stack" style={{ gap: 18 }}>
        <div style={{ width: 64, height: 64, borderRadius: 999, background: "var(--red)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 14 L12 20 L22 8" />
          </svg>
        </div>
        <h3 className="cap" style={{ fontSize: compact ? 32 : 56, color: "inherit" }}>
          {def.success.title}
        </h3>
        <p className="body">{def.success.body}</p>
        {"steps" in def.success && def.success.steps && (
          <ol style={{ margin: 0, paddingLeft: 20, fontSize: 13, lineHeight: 1.9 }}>
            {def.success.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        )}
        <button
          type="button"
          className="tog"
          style={{ alignSelf: "flex-start" }}
          onClick={() => {
            setValues(initialValues(def.fields));
            setStatus("idle");
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label={def.title}>
      <div className={compact ? "stack" : "form-grid"}>
        {def.fields.map((f) => (
          <FieldInput key={f.name} id={`${uid}-${f.name}`} field={f} value={values[f.name]} error={errors[f.name]} onChange={(v) => set(f.name, v)} />
        ))}
      </div>
      {status === "failed" && (
        <p className="sm" role="alert" style={{ color: "var(--red-text)", marginTop: 16 }}>
          Something went wrong sending this. Please check the fields above, or WhatsApp us.
        </p>
      )}
      <button type="submit" className={`btn${compact ? "" : " btn-lg btn-block"}`} style={{ marginTop: compact ? 12 : 28 }} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : def.submitLabel}
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
  const req = f.required ? " *" : "";
  const err = error ? (
    <span id={errId} className="err">
      {error}
    </span>
  ) : null;

  if (f.kind === "consent") {
    return (
      <div className={cls}>
        <label className="check" style={{ fontWeight: 400 }}>
          <input id={id} type="checkbox" checked={value === true} onChange={(e) => onChange(e.target.checked)} aria-describedby={described} aria-invalid={!!error} />
          <span>
            {f.label}
            {req}
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
      <fieldset className={cls} aria-describedby={described}>
        <legend>
          {f.label}
          {req}
        </legend>
        <div className="toggles" style={{ marginTop: 6 }}>
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
                {f.name === "classes" || f.name === "classesTaught" ? `Class ${o}` : o}
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
  };

  return (
    <div className={cls}>
      <label htmlFor={id}>
        {f.label}
        {req}
      </label>
      {f.kind === "select" ? (
        <select {...common} onChange={(e) => onChange(e.target.value)}>
          <option value="">Choose…</option>
          {(f.options ?? []).map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : f.kind === "textarea" ? (
        <textarea {...common} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input
          {...common}
          type={f.kind}
          inputMode={f.kind === "number" ? "numeric" : undefined}
          autoComplete={f.kind === "email" ? "email" : f.kind === "tel" ? "tel" : undefined}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {f.hint && <span className="hint">{f.hint}</span>}
      {err}
    </div>
  );
}
