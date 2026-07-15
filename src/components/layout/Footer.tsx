import { site } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line-strong">
      <div className="text-label mx-auto flex max-w-[80rem] flex-col items-center gap-4 px-6 py-10 text-muted sm:flex-row sm:justify-between sm:px-10">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Karachi, Pakistan (GMT+5)</p>
        <a href="#main" className="link-underline text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
