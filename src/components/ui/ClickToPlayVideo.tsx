"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

// Broadcast when any film starts, so only one plays (with sound) at a time.
const PLAY_EVENT = "click-to-play-video";

/**
 * Click-to-play video fill layer. Until the visitor presses play, only the
 * poster loads (through next/image, so it is resized and compressed per
 * device) — zero video bytes on page load. Pressing play mounts the real
 * <video> with sound and native controls; starting another film pauses this
 * one. `overlay` (labels, captions) shows over the poster and hides once the
 * film is playing so it never covers the controls.
 *
 * Renders as an absolutely-positioned fill layer — use inside a `relative`
 * container the way `<Image fill>` is used elsewhere in this codebase.
 */
export function ClickToPlayVideo({
  src,
  poster,
  posterAlt = "",
  sizes = "(min-width: 1024px) 80vw, 95vw",
  overlay,
  posterClassName = "object-cover",
}: {
  src: string;
  poster?: string;
  posterAlt?: string;
  sizes?: string;
  overlay?: ReactNode;
  posterClassName?: string;
}) {
  const id = useId();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const onOtherPlay = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== id) videoRef.current?.pause();
    };
    window.addEventListener(PLAY_EVENT, onOtherPlay);
    return () => window.removeEventListener(PLAY_EVENT, onOtherPlay);
  }, [id]);

  const announcePlay = () => window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: id }));

  if (started) {
    return (
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full bg-espresso-deep object-contain"
        src={src}
        poster={poster}
        controls
        autoPlay
        playsInline
        onPlay={announcePlay}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setStarted(true)}
      aria-label={posterAlt ? `Play film: ${posterAlt}` : "Play film"}
      className="group/play absolute inset-0 h-full w-full cursor-pointer"
    >
      {poster ? (
        <Image
          src={poster}
          alt={posterAlt}
          fill
          sizes={sizes}
          className={`${posterClassName} transition-transform duration-700 ease-out group-hover/play:scale-105`}
        />
      ) : null}
      <span
        aria-hidden
        className="absolute inset-0 bg-espresso-deep/25 transition-colors duration-500 group-hover/play:bg-espresso-deep/10"
      />
      <span aria-hidden className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ivory/70 bg-espresso-deep/40 backdrop-blur-sm transition-transform duration-500 group-hover/play:scale-110 md:h-20 md:w-20">
          <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-5 w-5 text-ivory md:h-6 md:w-6">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
      {overlay}
    </button>
  );
}
