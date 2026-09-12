import Image from "next/image";
import Link from "next/link";
import type { WorkProject } from "@/data/work";

export function WorkCard({
  project,
  tone = "light",
  variant = "full",
  aspectClassName = "aspect-[4/5]",
  className = "",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 45vw, 90vw",
}: {
  project: WorkProject;
  tone?: "light" | "dark";
  variant?: "full" | "minimal";
  aspectClassName?: string;
  className?: string;
  sizes?: string;
}) {
  const dark = tone === "dark";

  return (
    <Link href={`/our-work/${project.slug}`} className={`group flex flex-col gap-4 ${className}`}>
      <div
        className={`glow-border-hover relative w-full overflow-hidden border border-transparent bg-sand ${aspectClassName} ${
          dark ? "border-line-dark" : ""
        }`}
      >
        <Image
          src={project.image}
          alt={`${project.title} — ${project.industry}`}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {project.concept ? (
          <span className="eyebrow absolute left-4 top-4 rounded-full bg-espresso-deep/70 px-3 py-1 text-[10px] text-cream backdrop-blur-sm">
            Concept Project
          </span>
        ) : null}
      </div>

      <div className="flex flex-col gap-1">
        <span className={`eyebrow ${dark ? "text-copper-light" : "text-copper"}`}>{project.industry}</span>
        <h3 className={`font-display text-xl ${dark ? "text-cream" : "text-espresso"}`}>{project.title}</h3>
        {variant === "full" ? (
          <>
            <p className={`text-sm ${dark ? "text-cream-dim" : "text-brown"}`}>{project.campaignType}</p>
            <p className={`mt-1 text-sm leading-relaxed ${dark ? "text-cream-dim/80" : "text-brown/80"}`}>
              {project.description}
            </p>
          </>
        ) : null}
        <span
          className={`eyebrow mt-3 transition-colors ${
            dark ? "text-cream group-hover:text-copper-light" : "text-espresso group-hover:text-copper"
          }`}
        >
          View Project →
        </span>
      </div>
    </Link>
  );
}
