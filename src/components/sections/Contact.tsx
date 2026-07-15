import { contact, site, socials } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";

export function Contact() {
  const links = [
    { label: "LinkedIn", value: "linkedin.com/in/ahmedraza101", href: socials.find((s) => s.icon === "linkedin")!.href },
    { label: "GitHub", value: "github.com/ahmedraza-96", href: socials.find((s) => s.icon === "github")!.href },
    { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { label: "Résumé", value: "Download PDF", href: site.resumeFile, download: true },
  ];

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-[80rem] px-6 py-28 sm:px-10 sm:py-36 lg:py-44">
        <SectionHeading number="05" label="Contact" title={contact.heading} />

        <div className="mt-14 lg:mt-20">
          <Reveal>
            <p className="max-w-[52ch] leading-[1.8] text-muted">{contact.blurb}</p>
          </Reveal>

          {/* The mailto IS the CTA */}
          <TextReveal
            as="p"
            className="mt-12 lg:mt-16"
            lines={[
              <a
                key="email"
                href={`mailto:${contact.email}`}
                className="text-display-lg link-underline break-all text-ink transition-colors hover:text-accent"
              >
                {contact.email}
              </a>,
            ]}
          />

          <div className="mt-16 lg:mt-24">
            {links.map((link) => (
              <Reveal key={link.label}>
                <a
                  href={link.href}
                  {...(link.download
                    ? { download: true }
                    : link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  className="group grid grid-cols-[7rem_1fr_auto] items-baseline gap-4 border-t border-line py-5 transition-colors hover:bg-surface sm:grid-cols-[10rem_1fr_auto]"
                >
                  <span className="text-label text-muted">{link.label}</span>
                  <span className="truncate text-ink transition-colors group-hover:text-accent">
                    {link.value}
                  </span>
                  <span aria-hidden className="text-muted transition-colors group-hover:text-accent">
                    ↗
                  </span>
                </a>
              </Reveal>
            ))}
            <div className="rule" />
          </div>

          <Reveal>
            <p className="text-label mt-10 text-muted">{contact.availability}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
