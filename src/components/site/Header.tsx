import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "./nav";
import { whatsappUrl } from "@/config/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-gold/15 bg-brand-deep/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-20 items-center justify-between md:h-24">
        <Logo />

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="link-underline text-[0.75rem] font-light tracking-[0.1em] whitespace-nowrap text-offwhite/85 uppercase transition-colors hover:text-offwhite [&.active]:text-gold xl:text-[0.8125rem]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xs border border-gold/70 px-4 py-2.5 text-[0.6875rem] font-bold tracking-[0.12em] whitespace-nowrap text-gold uppercase transition-colors hover:bg-gold hover:text-brand-deep xl:px-5 xl:text-[0.75rem]"
          >
            Falar com a advogada
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="p-2 text-offwhite lg:hidden"
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      id="menu-mobile"
      hidden={!open}
      className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-brand-deep px-6 pt-8 pb-16 lg:hidden"
    >
      <nav aria-label="Navegação principal (mobile)" className="flex flex-col">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={onClose}
            className="border-b border-offwhite/10 py-5 font-display text-2xl text-offwhite [&.active]:text-gold"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex w-full items-center justify-center rounded-xs bg-gold px-6 py-4 text-[0.8125rem] font-bold tracking-[0.16em] text-brand-deep uppercase"
      >
        Falar com a advogada
      </a>
    </div>
  );
}