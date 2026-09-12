import { type ElementType, type ReactNode } from "react";

export function Container({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag className={`mx-auto w-full max-w-[1440px] px-6 md:px-10 xl:px-16 ${className}`}>
      {children}
    </Tag>
  );
}
