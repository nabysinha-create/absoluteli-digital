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
  async headers() {
    // Belt-and-suspenders alongside each page's metadata.robots: unlisted
    // /presentation/* and /concepts/* pages stay reachable by direct URL,
    // just excluded from indexing at the HTTP-header level too, not only
    // via the <meta> tag.
    const noindexHeaders = [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }];
    return [
      { source: "/presentation/:path*", headers: noindexHeaders },
      { source: "/concepts/:path*", headers: noindexHeaders },
    ];
  },
};

export default nextConfig;
