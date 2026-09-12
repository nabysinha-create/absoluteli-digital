import { type ReactNode } from "react";

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-display text-2xl text-espresso md:text-3xl">{title}</h2>
      <div className="flex flex-col gap-4 text-base leading-relaxed text-brown md:text-lg">
        {children}
      </div>
    </div>
  );
}
