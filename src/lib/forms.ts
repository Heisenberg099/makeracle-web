/**
 * Every public form, defined once and shared by the browser (rendering)
 * and the server (validation in /api/leads).
 *
 * To add a field: add it to the form's `fields`. To add a form: add a key
 * to `forms`, then render <LeadForm type="your-key" />. That's it.
 */

export type FieldKind =
  | "text"
  | "email"
  | "tel"
  | "number"
  | "date"
  | "month"
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
  placeholder?: string;
  hint?: string;
  full?: boolean; // span both columns
};

export type FormDef = {
  title: string;
  submitLabel: string;
  success: { title: string; body: string; steps?: string[] };
  fields: Field[];
  /** at least one field in each group must be filled */
  oneOf?: string[][];
};

const roles = ["Principal", "Coordinator", "Computer teacher", "Owner", "Other"] as const;
const boards = ["CBSE", "ICSE", "State board", "Other"] as const;
const classes = ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] as const;
const devices = ["Lab PCs", "Tablets", "Phones", "Projector only"] as const;
const internet = ["Reliable", "Patchy", "None"] as const;
export const states = [
  "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
  "Odisha", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Uttar Pradesh", "Uttarakhand",
  "West Bengal", "Other",
] as const;

const consent: Field = {
  name: "consent",
  label: "I agree to be contacted by Makeracle about this request (email and WhatsApp).",
  kind: "consent",
  required: true,
  full: true,
};

const schoolBasics: Field[] = [
  { name: "contactName", label: "Your name", kind: "text", required: true, placeholder: "Mrs. Sunita Rao" },
  { name: "schoolName", label: "School name", kind: "text", required: true },
  { name: "role", label: "Your role", kind: "chips", required: true, options: roles, full: true },
  { name: "city", label: "City", kind: "text", required: true },
  { name: "state", label: "State", kind: "select", required: true, options: states },
  { name: "board", label: "Board", kind: "select", required: true, options: boards },
  { name: "phone", label: "Phone (WhatsApp)", kind: "tel", placeholder: "+91 98xxx xxxxx" },
  { name: "email", label: "Email", kind: "email", placeholder: "principal@school.edu.in" },
  { name: "classes", label: "Classes interested", kind: "multichips", options: classes, full: true },
  { name: "students", label: "Approx. number of students", kind: "number" },
  { name: "devices", label: "Devices available", kind: "multichips", options: devices, full: true },
  { name: "internet", label: "Internet", kind: "chips", options: internet },
];

export const forms = {
  workshop: {
    title: "Book a free workshop",
    submitLabel: "Request my free workshop →",
    success: {
      title: "Request received.",
      body: "We've sent a confirmation to your email and WhatsApp. Our team will call within 1 working day to fix the date.",
      steps: [
        "Call to fix the date",
        "Calendar invite to you and your computer teacher",
        "Setup checklist the day before",
        "Workshop day — certificates and student links after",
      ],
    },
    fields: [
      ...schoolBasics,
      { name: "preferredDates", label: "Preferred dates", kind: "text", placeholder: "e.g. 2nd week of November" },
      {
        name: "heardFrom",
        label: "How did you hear about us?",
        kind: "select",
        options: ["Another school", "Sahodaya cluster", "Social media", "Search", "Event", "Other"],
      },
      consent,
    ],
    oneOf: [["phone", "email"]],
  },
  pilot: {
    title: "Request a pilot proposal",
    submitLabel: "Request a pilot proposal →",
    success: {
      title: "Thank you.",
      body: "We'll prepare a pilot proposal for your school and call within 1 working day to walk you through it.",
    },
    fields: [
      ...schoolBasics,
      { name: "students68", label: "Total students in Classes 6–8", kind: "number" },
      { name: "computerTeachers", label: "Number of computer teachers", kind: "number" },
      { name: "currentDelivery", label: "Current CT & AI delivery", kind: "chips", options: ["None", "In-house", "Other vendor"], full: true },
      { name: "budgetWindow", label: "Budget window (month)", kind: "month" },
      { name: "decisionMaker", label: "Decision-maker name", kind: "text" },
      consent,
    ],
    oneOf: [["phone", "email"]],
  },
  partner: {
    title: "Partner with us",
    submitLabel: "Request a partnership call →",
    success: { title: "Thanks — we'll be in touch.", body: "Someone from our team will call you within 2 working days." },
    fields: [
      { name: "orgName", label: "Organisation name", kind: "text", required: true },
      {
        name: "orgType",
        label: "Type",
        kind: "select",
        required: true,
        options: ["School chain", "Sahodaya cluster", "Lab vendor", "CSR", "NGO", "Government", "Other"],
      },
      { name: "contactName", label: "Contact name", kind: "text", required: true },
      { name: "phone", label: "Phone", kind: "tel", required: true },
      { name: "email", label: "Email", kind: "email", required: true },
      { name: "schoolsReached", label: "Number of schools reached", kind: "number" },
      { name: "region", label: "Region", kind: "text" },
      { name: "message", label: "Message", kind: "textarea", full: true },
      consent,
    ],
  },
  contact: {
    title: "Contact us",
    submitLabel: "Send message →",
    success: { title: "Message sent.", body: "We reply to every message within 1 working day." },
    fields: [
      { name: "name", label: "Name", kind: "text", required: true },
      { name: "phoneOrEmail", label: "Phone or email", kind: "text", required: true },
      { name: "iam", label: "I am a", kind: "chips", required: true, options: ["School", "Teacher", "Parent", "Partner", "Other"], full: true },
      { name: "message", label: "Message", kind: "textarea", full: true },
      consent,
    ],
  },
  newsletter: {
    title: "Newsletter",
    submitLabel: "Join",
    success: { title: "You're on the list.", body: "CBSE explainers and project stories, about once a month." },
    fields: [
      { name: "email", label: "Email", kind: "email", required: true },
      { name: "iam", label: "I am a", kind: "chips", options: ["School", "Teacher", "Parent"] },
    ],
  },
  "teacher-signup": {
    title: "Join the Teacher hub waitlist",
    submitLabel: "Join the waitlist →",
    success: {
      title: "You're on the list.",
      body: "We'll invite you as soon as the Teacher hub opens — first to teachers at our pilot schools.",
    },
    fields: [
      { name: "name", label: "Name", kind: "text", required: true },
      { name: "school", label: "School (or invite code)", kind: "text", required: true },
      { name: "phone", label: "Phone (WhatsApp)", kind: "tel", required: true },
      { name: "email", label: "Email", kind: "email", required: true },
      { name: "subjects", label: "Subjects", kind: "text", placeholder: "Computer Science, Maths" },
      { name: "languages", label: "Languages you teach in", kind: "text", placeholder: "English, Hindi" },
      { name: "classesTaught", label: "Classes taught", kind: "multichips", options: classes, full: true },
      { name: "coding", label: "Coding experience", kind: "chips", options: ["None", "Basic", "Strong"], full: true },
      consent,
    ],
  },
  "workshop-feedback": {
    title: "Workshop feedback",
    submitLabel: "Send feedback →",
    success: { title: "Thank you.", body: "Your feedback goes straight to the team that ran your workshop." },
    fields: [
      { name: "school", label: "School name", kind: "text", required: true },
      { name: "rating", label: "Rating", kind: "chips", required: true, options: ["1", "2", "3", "4", "5"], full: true },
      { name: "pilot", label: "Would you run a term pilot?", kind: "chips", required: true, options: ["Yes", "Maybe", "No"], full: true },
      { name: "worked", label: "What worked", kind: "textarea", full: true },
      { name: "change", label: "What should we change", kind: "textarea", full: true },
    ],
  },
} satisfies Record<string, FormDef>;

export type FormType = keyof typeof forms;
export const formTypes = Object.keys(forms) as FormType[];

export type FormValues = Record<string, string | string[] | boolean>;

/** Validate and clean submitted values. Returns field errors (empty = valid). */
export function validate(type: FormType, raw: unknown): { values: FormValues; errors: Record<string, string> } {
  const def: FormDef = forms[type];
  const input = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const values: FormValues = {};
  const errors: Record<string, string> = {};

  for (const f of def.fields) {
    const v = input[f.name];
    if (f.kind === "multichips") {
      const arr = Array.isArray(v) ? v.filter((x): x is string => typeof x === "string" && (f.options ?? []).includes(x)) : [];
      values[f.name] = arr;
      if (f.required && arr.length === 0) errors[f.name] = "Pick at least one";
    } else if (f.kind === "consent") {
      values[f.name] = v === true;
      if (f.required && v !== true) errors[f.name] = "Please tick to continue";
    } else {
      const s = typeof v === "string" ? v.trim().slice(0, 2000) : "";
      if ((f.kind === "chips" || f.kind === "select") && s && f.options && !f.options.includes(s)) {
        errors[f.name] = "Choose one of the options";
      }
      if (f.kind === "email" && s && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)) errors[f.name] = "Enter a valid email";
      if (f.kind === "tel" && s && s.replace(/\D/g, "").length < 10) errors[f.name] = "Enter a 10-digit number";
      if (f.kind === "number" && s && !/^\d{1,6}$/.test(s)) errors[f.name] = "Enter a number";
      values[f.name] = s;
      if (f.required && !s) errors[f.name] = "Required";
    }
  }
  for (const group of def.oneOf ?? []) {
    if (!group.some((n) => values[n])) {
      for (const n of group) errors[n] ??= "Give a phone number or an email";
    }
  }
  return { values, errors };
}
