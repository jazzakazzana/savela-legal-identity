import type { ReactNode } from "react";

export function Section({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "muted" | "brand" | "deep";
  className?: string;
}) {
  const tones = {
    light: "bg-background text-foreground",
    muted: "bg-offwhite text-foreground",
    brand: "bg-brand text-offwhite",
    deep: "bg-brand-deep text-offwhite",
  } as const;
  return (
    <section className={`${tones[tone]} py-20 md:py-28 ${className}`}>
      <div className="container-site">{children}</div>
    </section>
  );
}

export function Article({ blocks }: { blocks: Array<{ heading: string; body: string[] }> }) {
  return (
    <div className="measure space-y-14">
      {blocks.map((block) => (
        <div key={block.heading}>
          <h2 className="font-display text-2xl text-brand md:text-3xl">{block.heading}</h2>
          <span className="hairline mt-4 mb-6 max-w-16" aria-hidden="true" />
          <div className="space-y-4 text-[1.0625rem] leading-relaxed font-light text-graphite">
            {block.body.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}