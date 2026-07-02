import { ArrowUp } from "lucide-react";
import { site, socials } from "@/data/portfolio";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:flex-row sm:justify-between sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-semibold text-ink">
            {site.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 font-mono text-xs text-muted">
            © {new Date().getFullYear()} — {site.role}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <SocialIcon key={social.label} social={social} />
          ))}
          <a
            href="#main"
            aria-label="Back to top"
            className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-contrast transition-transform hover:-translate-y-0.5"
          >
            <ArrowUp className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
