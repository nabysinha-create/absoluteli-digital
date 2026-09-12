import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder assets are served as SVG until real photography/video
    // replaces them (see /src/data). Safe here since all sources are local
    // and trusted, never user-uploaded.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
