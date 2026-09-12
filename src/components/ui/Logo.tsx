import Image from "next/image";

const LOGO_ASPECT = 654 / 210;

export function Logo({
  variant = "dark",
  className = "h-7",
  priority = false,
}: {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
}) {
  const src =
    variant === "dark"
      ? "/images/brand/absoluteli-logo-dark.png"
      : "/images/brand/absoluteli-logo-light.png";

  return (
    <Image
      src={src}
      alt="Absoluteli Digital"
      width={654}
      height={210}
      priority={priority}
      className={`w-auto ${className}`}
      style={{ aspectRatio: LOGO_ASPECT }}
    />
  );
}
