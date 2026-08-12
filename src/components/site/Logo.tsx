import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const main = tone === "light" ? "text-offwhite" : "text-brand-deep";
  return (
    <Link
      to="/"
      className="group flex items-center gap-3"
      aria-label={`${siteConfig.business.name} — página inicial`}
    >
      <span
        aria-hidden="true"
        className="flex h-10 w-10 items-center justify-center border border-gold/60 font-display text-lg text-gold transition-colors group-hover:bg-gold group-hover:text-brand-deep"
      >
        PS
      </span>
      <span className={`flex flex-col leading-none whitespace-nowrap ${main}`}>
        <span className="font-display text-sm tracking-[0.16em] uppercase sm:text-base">
          Patrícia Savela
        </span>
        <span className="mt-1.5 text-[0.5rem] font-light tracking-[0.22em] uppercase opacity-70 sm:text-[0.5625rem]">
          Advocacia e Consultoria Jurídica
        </span>
      </span>
    </Link>
  );
}