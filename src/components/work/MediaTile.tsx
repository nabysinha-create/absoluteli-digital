import Image from "next/image";
import { LazyVideo } from "@/components/ui/LazyVideo";
import type { MediaItem } from "@/data/case-studies";

export function MediaTile({
  item,
  aspectClassName = "aspect-[4/5]",
  className = "",
  sizes = "(min-width: 1024px) 40vw, 90vw",
  showCaption = true,
  objectPosition = "object-center",
}: {
  item: MediaItem;
  aspectClassName?: string;
  className?: string;
  sizes?: string;
  showCaption?: boolean;
  objectPosition?: string;
}) {
  return (
    <div
      className={`glow-border-hover group relative w-full overflow-hidden border border-line-dark bg-sand ${aspectClassName} ${className}`}
    >
      {item.type === "video" ? (
        <LazyVideo src={item.src} poster={item.poster} />
      ) : (
        <Image
          src={item.src}
          alt={item.caption ?? item.label ?? "Campaign visual"}
          fill
          sizes={sizes}
          className={`object-cover ${objectPosition} transition-transform duration-700 ease-out group-hover:scale-105`}
        />
      )}

      {item.label ? (
        <span className="eyebrow absolute left-5 top-5 text-cream drop-shadow-[0_1px_3px_rgba(16,13,11,0.8)]">
          {item.label}
        </span>
      ) : null}

      {showCaption && item.caption ? (
        <div className="absolute inset-x-5 bottom-5">
          <p className="text-sm text-cream drop-shadow-[0_1px_3px_rgba(16,13,11,0.8)]">{item.caption}</p>
        </div>
      ) : null}
    </div>
  );
}
