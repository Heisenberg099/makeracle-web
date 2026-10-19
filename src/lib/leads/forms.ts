/**
 * Form types and validation, shared by the browser (rendering) and the
 * server (validation in /api/leads). The forms themselves — fields, labels,
 * buttons and success messages — live with the rest of the copy in
 * src/content/website/en.ts.
 *
 * To add a field: add it to the form's `fields` in en.ts. To add a form: add
 * a key to `forms` in en.ts, then render <LeadForm type="your-key" />.
 */
import { forms, formCopy } from "@/content/website/en";

export type FieldKind =
  | "text"
  | "email"
  | "tel"
  | "number"
  | "select"
  | "chips" // pick one
  | "multichips" // pick many
  | "textarea"
  | "consent";

export type Field = {
  name: string;
  label: string;
  kind: FieldKind;
  required?: boolean;
  options?: readonly string[];
  /** shown before each chip, e.g. "Class " */
  optionPrefix?: string;
  placeholder?: string;
  hint?: string;
  autoComplete?: string;
  /** message when a required field is left empty */
  error?: string;
  full?: boolean; // span both columns
};

export type FormDef = {
  title: string;
  submitLabel: string;
  success: string;
  fields: readonly Field[];
  /** at least one field in each group must be filled */
  oneOf?: readonly (readonly string[])[];
};

export { forms };
export type FormType = keyof typeof forms;
export const formTypes = Object.keys(forms) as FormType[];

export type FormValues = Record<string, string | string[] | boolean>;

/** Accepts 10-digit Indian mobiles, with or without +91 / 0 and spaces. */
export function isMobile(s: string) {
  const d = s.replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(d);
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Validate and clean submitted values. Returns field errors (empty = valid). */
export function validate(type: FormType, raw: unknown): { values: FormValues; errors: Record<string, string> } {
  const def: FormDef = forms[type];
  const e = formCopy.errors;
  const input = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const values: FormValues = {};
  const errors: Record<string, string> = {};

  for (const f of def.fields) {
    const v = input[f.name];
    if (f.kind === "multichips") {
      const arr = Array.isArray(v) ? v.filter((x): x is string => typeof x === "string" && (f.options ?? []).includes(x)) : [];
      values[f.name] = arr;
      if (f.required && arr.length === 0) errors[f.name] = f.error ?? e.choose;
    } else if (f.kind === "consent") {
      values[f.name] = v === true;
      if (f.required && v !== true) errors[f.name] = e.consent;
    } else {
      const s = typeof v === "string" ? v.trim().slice(0, 2000) : "";
      values[f.name] = s;
      if (!s) {
        if (f.required) errors[f.name] = f.error ?? (f.kind === "chips" || f.kind === "select" ? e.choose : f.kind === "tel" ? e.phone : f.kind === "email" ? e.email : e.required);
        continue;
      }
      if ((f.kind === "chips" || f.kind === "select") && f.options && !f.options.includes(s)) errors[f.name] = e.choose;
      if (f.kind === "email" && !emailRe.test(s)) errors[f.name] = e.email;
      if (f.kind === "tel" && !isMobile(s)) errors[f.name] = e.phone;
      if (f.kind === "number" && !/^\d{1,6}$/.test(s)) errors[f.name] = e.number;
      if (f.name === "phoneOrEmail" && !emailRe.test(s) && !isMobile(s)) {
        errors[f.name] = s.includes("@") ? e.email : e.phone;
      }
    }
  }
  for (const group of def.oneOf ?? []) {
    if (!group.some((n) => values[n])) {
      for (const n of group) errors[n] ??= e.phoneOrEmail;
    }
  }
  return { values, errors };
}
