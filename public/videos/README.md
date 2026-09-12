# Video assets

- `hero.mp4` — homepage hero background, referenced in `src/components/sections/Hero.tsx`.
  This is a re-encoded version of the client-supplied `AD-Hero Section.mp4`: downscaled
  from 4K to 1920×1080, audio stripped (the hero is always muted), H.264/CRF 25,
  `+faststart`. Went from 35MB → 7.3MB. To swap in a different cut, replace this file
  and re-run the same ffmpeg pass, or drop in an already-optimized file directly —
  no component code needs to change either way.

Recommended export settings for future replacements: H.264 MP4, muted, ≤ 8MB for a
fast first paint (the hero preloads this file).
