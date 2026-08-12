/**
 * Slot de fotografia — placeholders temporários.
 * Para substituir: troque o arquivo em src/assets/ mantendo o mesmo nome,
 * ou ajuste o import. Use objectPosition para reenquadrar a foto.
 */
export function Figure({
  src,
  alt,
  width,
  height,
  className = "",
  objectPosition = "center",
  priority = false,
  slot,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  objectPosition?: string;
  priority?: boolean;
  slot: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-photo-slot={slot}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      style={{ objectFit: "cover", objectPosition }}
      className={`h-full w-full ${className}`}
    />
  );
}