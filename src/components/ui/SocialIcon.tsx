import { Github, Linkedin, Mail, Phone } from "lucide-react";
import type { Social } from "@/data/portfolio";

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
} as const;

interface SocialIconProps {
  social: Social;
  className?: string;
}

export function SocialIcon({ social, className }: SocialIconProps) {
  const Icon = ICONS[social.icon];
  const external = social.href.startsWith("https");

  return (
    <a
      href={social.href}
      aria-label={social.label}
      title={social.label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={
        className ??
        "flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
      }
    >
      <Icon className="h-[18px] w-[18px]" />
    </a>
  );
}
