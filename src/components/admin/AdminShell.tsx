import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  getAdminSession,
  isAdmin,
  signOutAdmin,
  type AuthSession,
} from "@/lib/cms";

interface AdminShellProps {
  title: string;
  description?: string;
  children: (session: AuthSession) => ReactNode;
  actions?: ReactNode;
}

export function AdminShell({ title, description, children, actions }: AdminShellProps) {
  const navigate = useNavigate();
  const [session, setSession] = useState<AuthSession | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let active = true;

    void (async () => {
      const current = await getAdminSession();
      if (!current || !(await isAdmin(current).catch(() => false))) {
        await signOutAdmin(current);
        if (active) void navigate({ to: "/admin/login", replace: true });
        return;
      }

      if (active) {
        setSession(current);
        setChecking(false);
      }
    })();

    return () => {
      active = false;
    };
  }, [navigate]);

  async function handleSignOut() {
    await signOutAdmin(session);
    void navigate({ to: "/admin/login", replace: true });
  }

  if (checking || !session) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#f5f3ed] px-6 text-brand-deep">
        <p className="text-sm font-light tracking-wide">Verificando acesso administrativo…</p>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f3ed] text-ink">
      <header className="border-b border-brand/15 bg-brand-deep text-offwhite">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-6 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <Link to="/admin" className="font-display text-2xl tracking-tight text-offwhite">
              Patrícia Savela · Admin
            </Link>
            <p className="mt-1 text-xs font-light text-offwhite/60">
              {session.user.email ?? "Usuário administrativo"}
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-bold tracking-[0.14em] uppercase">
            <Link to="/admin" activeProps={{ className: "text-gold" }}>
              Painel
            </Link>
            <Link to="/admin/conteudos" activeProps={{ className: "text-gold" }}>
              Conteúdos
            </Link>
            <Link to="/" target="_blank" className="text-offwhite/70 hover:text-offwhite">
              Ver site
            </Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="border border-offwhite/25 px-4 py-2 text-offwhite/80 transition-colors hover:border-gold hover:text-gold"
            >
              Sair
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-6 py-10 lg:px-10 lg:py-14">
        <div className="mb-10 flex flex-col gap-5 border-b border-brand/15 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.6875rem] font-bold tracking-[0.22em] text-gold uppercase">
              Área administrativa
            </p>
            <h1 className="mt-3 font-display text-4xl text-brand-deep md:text-5xl">{title}</h1>
            {description ? (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed font-light text-graphite">
                {description}
              </p>
            ) : null}
          </div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>

        {children(session)}
      </main>
    </div>
  );
}

export const adminNoIndexMeta = (title: string) => ({
  meta: [
    { title: `${title} | Admin Patrícia Savela` },
    { name: "robots", content: "noindex, nofollow, noarchive" },
  ],
});
