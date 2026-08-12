import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xs px-7 py-3.5 text-[0.8125rem] font-bold tracking-[0.16em] uppercase transition-colors duration-300";

export const ctaPrimary = `${base} bg-gold text-brand-deep hover:bg-offwhite`;
export const ctaSecondary = `${base} border border-gold/70 text-gold hover:bg-gold hover:text-brand-deep`;
export const ctaOutlineDark = `${base} border border-brand/30 text-brand hover:bg-brand hover:text-offwhite`;

export function CtaLink({
  to,
  href,
  variant = "primary",
  children,
  external,
  className = "",
  ...rest
}: {
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
  external?: boolean;
  className?: string;
  [key: string]: unknown;
}) {
  const cls = `${
    variant === "primary" ? ctaPrimary : variant === "secondary" ? ctaSecondary : ctaOutlineDark
  } ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={to!} className={cls} {...rest}>
      {children}
    </Link>
  );
}