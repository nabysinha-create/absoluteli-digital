import Link from "next/link";
import { type ReactNode } from "react";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "on-dark" | "on-dark-outline";
  className?: string;
};

const VARIANT_STYLES: Record<NonNullable<ButtonBaseProps["variant"]>, string> = {
  primary:
    "bg-espresso text-cream hover:bg-copper hover:text-espresso border border-espresso hover:border-copper",
  secondary:
    "bg-transparent text-espresso border border-espresso hover:bg-espresso hover:text-cream",
  "on-dark":
    "bg-cream text-espresso border border-cream hover:bg-copper hover:text-cream hover:border-copper",
  "on-dark-outline":
    "bg-transparent text-cream border border-cream/50 hover:border-cream hover:bg-cream/10",
};

const BASE =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300 ease-out";

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonBaseProps & {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const classes = `${BASE} ${VARIANT_STYLES[variant]} ${className}`;

  if (href) {
    // Off-site links (WhatsApp, Calendly, mailto) get a plain anchor so they
    // can open safely in a new tab; internal routes keep client-side <Link>.
    const isMailto = href.startsWith("mailto:");
    const isExternal = isMailto || href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          onClick={onClick}
          className={classes}
          {...(isMailto ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
