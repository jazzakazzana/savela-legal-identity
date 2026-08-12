import { Link } from "@tanstack/react-router";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Você está aqui" className="text-[0.6875rem] tracking-[0.16em] uppercase">
      <ol className="flex flex-wrap items-center gap-2 text-current/60">
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            {i < items.length - 1 ? (
              <>
                <Link to={item.path} className="link-underline">
                  {item.name}
                </Link>
                <span aria-hidden="true" className="text-gold">
                  /
                </span>
              </>
            ) : (
              <span aria-current="page" className="text-current/90">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}