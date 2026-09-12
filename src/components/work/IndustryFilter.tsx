"use client";

import { WORK_INDUSTRIES } from "@/data/case-studies";

const OPTIONS = ["All", ...WORK_INDUSTRIES];

export function IndustryFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="sticky top-[73px] z-40 border-b border-line-dark bg-espresso-deep/90 backdrop-blur-md md:top-[83px]">
      <div className="no-scrollbar mx-auto flex w-full max-w-[1440px] gap-8 overflow-x-auto px-6 py-4 md:px-10 xl:px-16">
        {OPTIONS.map((option) => {
          const isActive = option === active;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`eyebrow shrink-0 whitespace-nowrap border-b pb-1 transition-colors duration-300 ${
                isActive
                  ? "border-copper-light text-copper-light"
                  : "border-transparent text-cream-dim hover:text-cream"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
