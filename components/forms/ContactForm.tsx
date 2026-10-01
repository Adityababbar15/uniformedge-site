"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { COMPANY } from "@/lib/content/company";
import { SECTOR_LISTING } from "@/lib/content/sectors";

const fieldClasses =
  "w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/60 focus:border-crimson-500 focus:outline-none focus:ring-2 focus:ring-crimson-500/30 disabled:bg-ivory-100/60 disabled:text-ink-500";

// Public Formspree form endpoint (not a secret — it is called from the browser).
// Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env.local; see .env.example.
const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

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

    // A school office is as likely to want a call or a WhatsApp as an email, so
    // either one is enough — but we need at least one way to reply.
    const email = String(new FormData(form).get("email") || "").trim();
    const phone = String(new FormData(form).get("phone") || "").trim();
    if (!email && !phone) {
      setStatus("error");
      setErrorMessage(
        "Add a phone number or an email so we know where to reply.",
      );
      phoneRef.current?.focus();
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

  return (
    <form
      onSubmit={handleSubmit}
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
          className={fieldClasses}
        />
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
            ref={phoneRef}
            name="phone"
            type="tel"
            inputMode="tel"
            disabled={busy}
            autoComplete="tel"
            className={fieldClasses}
          />
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
            className={fieldClasses}
          />
        </div>
      </div>
      <p className="-mt-2 text-sm text-ink-500">
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
          className={fieldClasses}
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
          className={fieldClasses}
        />
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
