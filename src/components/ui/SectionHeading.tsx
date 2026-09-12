import { type ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  size = "md",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  size?: "md" | "lg";
}) {
  const alignClasses = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const eyebrowColor = tone === "dark" ? "text-copper-light" : "text-copper";
  const titleColor = tone === "dark" ? "text-cream" : "text-espresso";
  const descColor = tone === "dark" ? "text-cream-dim" : "text-brown";
  const titleSize = size === "lg" ? "text-display-lg" : "text-display-md";

  return (
    <div className={`flex flex-col gap-5 ${alignClasses}`}>
      {eyebrow ? <span className={`eyebrow ${eyebrowColor}`}>{eyebrow}</span> : null}
      <h2 className={`font-display ${titleSize} leading-[1.05] ${titleColor}`}>{title}</h2>
      {description ? (
        <p className={`max-w-xl text-base md:text-lg leading-relaxed ${descColor}`}>{description}</p>
      ) : null}
    </div>
  );
}
