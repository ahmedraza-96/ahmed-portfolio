"use client";

import { useState } from "react";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { contact } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type FormStatus = "idle" | "sending" | "success" | "error";

const KEY_IS_PLACEHOLDER = contact.web3formsAccessKey === "YOUR_WEB3FORMS_ACCESS_KEY";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (KEY_IS_PLACEHOLDER) {
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("access_key", contact.web3formsAccessKey);
    data.append("subject", "New message from the portfolio contact form");

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading number="07" label="Contact" title={contact.heading} />

      <div className="mt-12 grid gap-12 lg:grid-cols-[2fr_3fr]">
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-muted">{contact.blurb}</p>

          <ul className="mt-8 space-y-4">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-4"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-accent transition-colors group-hover:border-accent">
                  <Mail className="h-[18px] w-[18px]" />
                </span>
                <span className="font-mono text-sm text-muted transition-colors group-hover:text-ink">
                  {contact.email}
                </span>
              </a>
            </li>
            <li>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="group flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-accent transition-colors group-hover:border-accent">
                  <Phone className="h-[18px] w-[18px]" />
                </span>
                <span className="font-mono text-sm text-muted transition-colors group-hover:text-ink">
                  {contact.phone}
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-accent">
                <MapPin className="h-[18px] w-[18px]" />
              </span>
              <span className="font-mono text-sm text-muted">{contact.location}</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-line bg-surface p-7"
          >
            {/* Honeypot — hidden from humans, catches bots */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-line bg-bg px-4 py-2.5 text-ink placeholder:text-muted/60 focus:border-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-line bg-bg px-4 py-2.5 text-ink placeholder:text-muted/60 focus:border-accent"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={5}
                placeholder="Tell me about your project…"
                className="w-full resize-y rounded-lg border border-line bg-bg px-4 py-2.5 text-ink placeholder:text-muted/60 focus:border-accent"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-glow inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-contrast hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {status === "sending" ? "Sending…" : "Send message"}
              </button>

              <p aria-live="polite" className="font-mono text-sm">
                {status === "success" && (
                  <span className="text-accent">
                    Message sent — thanks! I&apos;ll get back to you soon.
                  </span>
                )}
                {status === "error" &&
                  (KEY_IS_PLACEHOLDER ? (
                    <span className="text-muted">
                      Form isn&apos;t configured yet — email me directly at{" "}
                      <a href={`mailto:${contact.email}`} className="text-accent underline">
                        {contact.email}
                      </a>
                      .
                    </span>
                  ) : (
                    <span className="text-muted">
                      Something went wrong — please email me directly.
                    </span>
                  ))}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
