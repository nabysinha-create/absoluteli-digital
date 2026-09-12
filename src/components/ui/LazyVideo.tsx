"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Defers loading an autoplay background video until it scrolls near the
 * viewport, instead of every <video autoPlay> on the page fetching
 * immediately on mount regardless of scroll position. Shows the poster
 * frame (as a plain <img>, so it costs nothing extra — the same file the
 * <video poster> would have loaded anyway) until then, then swaps in the
 * real <video> once intersecting.
 *
 * Starts `visible` false on both server and client render so hydration
 * always agrees (the poster markup matches); the switch to the real
 * <video> happens only after mount, via the effect below.
 *
 * Renders as an absolutely-positioned fill layer — use inside a `relative`
 * container the way `<Image fill>` is used elsewhere in this codebase.
 */
export function LazyVideo({
  src,
  poster,
  mediaClassName = "h-full w-full object-cover",
}: {
  src: string;
  poster?: string;
  mediaClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0">
      {visible ? (
        <video
          className={mediaClassName}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : poster ? (
        // This is only the poster frame standing in until the real <video>
        // mounts, not a next/image-managed content asset.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt="" className={mediaClassName} />
      ) : null}
    </div>
  );
}
