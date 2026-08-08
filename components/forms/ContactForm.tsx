"use client";

import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

const fieldClasses =
  "w-full rounded-lg border border-navy-900/15 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/60 focus:border-brass-500 focus:outline-none focus:ring-2 focus:ring-brass-500/30";

export function ContactForm() {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);

  // TODO: wire this up to a real submission endpoint (API route + email
  // service, or a form backend) once one is chosen. No data is sent anywhere
  // yet — this only demonstrates the UI/UX and client-side validation.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-navy-900/10 bg-white p-8 text-center"
      >
        <p className="font-display text-xl text-navy-900">Thank you.</p>
        <p className="mt-2 text-sm text-ink-700">
          Your message has been noted. Our form isn&apos;t yet wired to a live
          inbox — please also reach us through the details on this page while
          that&apos;s finalised.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={false}
      className="space-y-5 rounded-2xl border border-navy-900/10 bg-white p-8"
    >
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
          autoComplete="name"
          className={fieldClasses}
        />
      </div>

      <div>
        <label
          htmlFor={`${formId}-school`}
          className="mb-2 block text-sm font-medium text-navy-900"
        >
          School / organisation
        </label>
        <input
          id={`${formId}-school`}
          name="school"
          type="text"
          autoComplete="organization"
          className={fieldClasses}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
            required
            autoComplete="email"
            className={fieldClasses}
          />
        </div>
        <div>
          <label
            htmlFor={`${formId}-phone`}
            className="mb-2 block text-sm font-medium text-navy-900"
          >
            Phone
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClasses}
          />
        </div>
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
          className={fieldClasses}
        />
      </div>

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
