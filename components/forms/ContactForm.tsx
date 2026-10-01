"use client";

import { useId, useState, type FocusEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/content/company";
import { SECTOR_LISTING } from "@/lib/content/sectors";

const invalidClasses = "border-red-700/70";

const fieldClasses =
  "w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/60 focus:border-crimson-500 focus:outline-none focus:ring-2 focus:ring-crimson-500/30 disabled:bg-ivory-100/60 disabled:text-ink-500";

// Public Formspree form endpoint (not a secret — it is called from the browser).
// Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env.local; see .env.example.
const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type Status = "idle" | "submitting" | "success" | "error";
type FieldName = "name" | "phone" | "email" | "sector" | "message";
type Errors = Partial<Record<FieldName, string>>;

// Each message says what to add, never what the visitor did wrong.
const MESSAGES = {
  name: "Add a name so we know who to ask for.",
  sector: "Choose what the uniforms are for.",
  message: "Add a few lines about what is needed.",
  email: "Add a complete email, like name@school.in.",
  contact: "Add a phone number or an email so we know where to reply.",
};

const ORDER: FieldName[] = ["name", "phone", "email", "sector", "message"];

function control(form: HTMLFormElement, name: FieldName) {
  return form.elements.namedItem(name) as
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLTextAreaElement;
}

// Returns the message for one field, or undefined when it is fine. A phone number
// or an email is enough, so the "reply" message sits on the phone box and only
// appears once both are empty.
function problem(form: HTMLFormElement, name: FieldName): string | undefined {
  const value = control(form, name).value.trim();
  if (name === "name" || name === "sector" || name === "message") {
    return value ? undefined : MESSAGES[name];
  }
  const phone = control(form, "phone").value.trim();
  const email = control(form, "email").value.trim();
  if (name === "email") {
    if (email && !control(form, "email").checkValidity()) return MESSAGES.email;
    return undefined;
  }
  return !phone && !email ? MESSAGES.contact : undefined;
}

export function ContactForm() {
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  // Blur-first: nothing is flagged while someone is still typing in a field.
  function handleBlur(event: FocusEvent<HTMLFormElement>) {
    const target = event.target as HTMLElement & { name?: string };
    const name = target.name as FieldName | undefined;
    if (!name || !ORDER.includes(name)) return;
    const form = event.currentTarget;
    setErrors((current) => {
      const next = { ...current };
      const message = problem(form, name);
      if (message) next[name] = message;
      else delete next[name];
      return next;
    });
  }

  // …and the message goes the moment the field is edited.
  function handleInput(event: FormEvent<HTMLFormElement>) {
    const target = event.target as HTMLElement & { name?: string };
    const name = target.name as FieldName | undefined;
    if (!name || !ORDER.includes(name)) return;
    setErrors((current) => {
      if (!current[name] && !(name === "email" && current.phone)) return current;
      const next = { ...current };
      delete next[name];
      if (name === "email" || name === "phone") delete next.phone;
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    // Never show a false confirmation. If the endpoint is missing, say so and
    // point at channels that do work rather than swallowing the enquiry.
    if (!ENDPOINT) {
      setStatus("error");
      setErrorMessage(
        "This form isn't connected yet. Please reach us on WhatsApp, or by phone or email — the details are on this page.",
      );
      return;
    }

    // Check every field, show what is missing beside it, and move to the first one.
    const found: Errors = {};
    for (const name of ORDER) {
      const message = problem(form, name);
      if (message) found[name] = message;
    }
    setErrors(found);
    const first = ORDER.find((name) => found[name]);
    if (first) {
      control(form, first).focus();
      return;
    }

    // Label the email by sector so enquiries are triageable from the subject
    // line alone, rather than every one reading as a school enquiry.
    const formData = new FormData(form);
    const sector = String(formData.get("sector") || "").trim();
    const subject = form.elements.namedItem("_subject");
    if (subject instanceof HTMLInputElement) {
      subject.value = sector
        ? `New enquiry: ${sector} — uniformedge.co.in`
        : "New uniform enquiry — uniformedge.co.in";
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      const data = await response.json().catch(() => null);
      const detail =
        data?.errors?.map((e: { message: string }) => e.message).join(", ") ??
        null;
      setStatus("error");
      setErrorMessage(
        detail ??
          "Something went wrong sending your enquiry. Please try again, or reach us directly using the details on this page.",
      );
    } catch {
      setStatus("error");
      setErrorMessage(
        "We couldn't reach the server — please check your connection and try again, or contact us directly using the details on this page.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-navy-900/10 bg-white p-8 text-center"
      >
        <p className="font-display text-xl text-navy-900">Thank you.</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-700">
          Your enquiry has been sent to our team and we&apos;ll get back to you.
          If it&apos;s urgent, call us on{" "}
          <a
            href={COMPANY.phoneHref}
            className="underline decoration-crimson-500/60 underline-offset-4"
          >
            {COMPANY.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  const busy = status === "submitting";
  const fieldProps = (name: FieldName, describedBy?: string) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby":
      [errors[name] ? `${formId}-${name}-error` : null, describedBy]
        .filter(Boolean)
        .join(" ") || undefined,
  });
  const errorLine = (name: FieldName) =>
    errors[name] ? (
      <p
        id={`${formId}-${name}-error`}
        className="mt-2 text-sm leading-snug text-red-800"
      >
        {errors[name]}
      </p>
    ) : null;
  const cls = (name: FieldName) =>
    errors[name] ? `${fieldClasses} ${invalidClasses}` : fieldClasses;

  return (
    <form
      onSubmit={handleSubmit}
      onBlur={handleBlur}
      onInput={handleInput}
      noValidate
      className="space-y-5 rounded-2xl border border-navy-900/10 bg-white p-8"
    >
      <input
        type="hidden"
        name="_subject"
        defaultValue="New uniform enquiry — uniformedge.co.in"
      />
      {/* Spam trap: bots fill this, people never see it. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div>
        <label
          htmlFor={`${formId}-name`}
          className="mb-2 block text-sm font-medium text-navy-900"
        >
          Full name
        </label>
        <input
          id={`${formId}-name`}
          name="name"
          type="text"
          required
          disabled={busy}
          autoComplete="name"
          className={cls("name")}
          {...fieldProps("name")}
        />
        {errorLine("name")}
      </div>

      <div>
        <label
          htmlFor={`${formId}-school`}
          className="mb-2 block text-sm font-medium text-navy-900"
        >
          Organisation
        </label>
        <input
          id={`${formId}-school`}
          name="school"
          type="text"
          disabled={busy}
          autoComplete="organization"
          className={fieldClasses}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${formId}-phone`}
            className="mb-2 block text-sm font-medium text-navy-900"
          >
            Phone or WhatsApp
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            disabled={busy}
            autoComplete="tel"
            className={cls("phone")}
            {...fieldProps("phone", `${formId}-reach`)}
          />
          {errorLine("phone")}
        </div>
        <div>
          <label
            htmlFor={`${formId}-email`}
            className="mb-2 block text-sm font-medium text-navy-900"
          >
            Email
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            disabled={busy}
            autoComplete="email"
            className={cls("email")}
            {...fieldProps("email", `${formId}-reach`)}
          />
          {errorLine("email")}
        </div>
      </div>
      <p id={`${formId}-reach`} className="-mt-2 text-sm text-ink-500">
        Give us at least one — we&apos;ll reply on whichever you choose.
      </p>

      <div>
        <label
          htmlFor={`${formId}-sector`}
          className="mb-2 block text-sm font-medium text-navy-900"
        >
          What do you need uniforms for?
        </label>
        <select
          id={`${formId}-sector`}
          name="sector"
          required
          disabled={busy}
          defaultValue=""
          className={cls("sector")}
          {...fieldProps("sector")}
        >
          <option value="" disabled>
            Select a sector
          </option>
          {SECTOR_LISTING.map((sector) => (
            <option key={sector.slug} value={sector.name}>
              {sector.name}
            </option>
          ))}
          <option value="Other">Something else</option>
        </select>
        {errorLine("sector")}
      </div>

      <div>
        <label
          htmlFor={`${formId}-message`}
          className="mb-2 block text-sm font-medium text-navy-900"
        >
          What do you need?
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          required
          disabled={busy}
          className={cls("message")}
          {...fieldProps("message")}
        />
        {errorLine("message")}
      </div>

      {status === "error" && errorMessage && (
        <p
          role="alert"
          className="rounded-lg border border-red-600/25 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-800"
        >
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        className="w-full sm:w-auto"
        disabled={busy}
      >
        {busy ? "Sending…" : "Send enquiry"}
      </Button>

      <p aria-live="polite" className="sr-only">
        {busy ? "Sending your enquiry" : ""}
      </p>
    </form>
  );
}
