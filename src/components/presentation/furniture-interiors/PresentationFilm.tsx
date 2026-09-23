"use client";

import { useState } from "react";
import Image from "next/image";

// Click-to-play cinematic film block. Nothing is fetched until the visitor
// presses play — zero video bytes on page load, so it can't hurt Core Web
// Vitals or page speed. Sound plays normally once clicked (a deliberate user
// gesture), never on page load. When `src` is omitted, renders an honest
// "coming soon" placeholder instead — swap in `src`/`poster` later and this
// section works with no other changes.
export function PresentationFilm({
  src,
  poster,
  emptyLabel = "Film Coming Soon",
}: {
  src?: string;
  poster?: string;
  emptyLabel?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (!src) {
    return (
      <div className="relative flex aspect-video w-full items-center justify-center border border-dashed border-line-dark bg-espresso-deep/95">
        <span className="eyebrow text-ivory-dim/50">{emptyLabel}</span>
      </div>
    );
  }

  return (
    <div className="glow-border-hover relative aspect-video w-full overflow-hidden border border-line-dark bg-espresso-deep">
      {playing ? (
        <video
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play film"
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          {poster ? (
            <Image
              src={poster}
              alt=""
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-cover"
            />
          ) : null}
          <span
            aria-hidden
            className="absolute inset-0 bg-espresso-deep/20 transition-colors duration-500 group-hover:bg-espresso-deep/5"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ivory/70 bg-espresso-deep/40 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 md:h-20 md:w-20">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-1 h-5 w-5 text-ivory md:h-6 md:w-6"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
