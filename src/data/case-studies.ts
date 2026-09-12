export type MediaItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
  label?: string;
  caption?: string;
};

export type CaseStudy = {
  slug: string;
  industry: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  media: MediaItem[];
  // Concept work is speculative/unpaid — never presented as commissioned client work.
  concept?: boolean;
};

// Filter values shown on /our-work. Add a matching `industry` on a CaseStudy
// to have it appear when that filter is active.
export const WORK_INDUSTRIES = [
  "Furniture & Interiors",
  "Restaurants & Cafés",
  "Beauty & Skincare",
  "Fashion & Lifestyle",
  "Hospitality",
] as const;

export const CLOUD_COMFORT: CaseStudy = {
  slug: "cloud-comfort",
  industry: "Furniture & Interiors",
  title: "Cloud Comfort",
  tagline: "Product Transformation + Cinematic Campaign",
  description:
    "A simple product photograph transformed into a luxury lifestyle world — then developed into a cinematic social campaign.",
  tags: ["Product Transformation", "AI Art Direction", "Campaign Visuals", "Cinematic Film", "Social Creative"],
  concept: true,
  media: [
    {
      type: "image",
      src: "/images/projects/furniture/beanbag-original.jpg",
      label: "01 / Original",
      caption: "Original client/product photography",
    },
    {
      type: "image",
      src: "/images/projects/furniture/beanbag-lifestyle.jpg",
      label: "02 / Reimagined",
      caption: "Luxury lifestyle environments and campaign visuals",
    },
    {
      type: "video",
      src: "/images/projects/furniture/beanbag-film.mp4",
      poster: "/images/projects/furniture/beanbag-film-poster.jpg",
      label: "03 / In Motion",
      caption: "Cinematic campaign film",
    },
  ],
};

export const DEARGALS: CaseStudy = {
  slug: "deargals",
  industry: "Fashion & Lifestyle",
  title: "DearGals",
  tagline: "Campaign Creative",
  description:
    "Product assets developed into fashion imagery, campaign creative, social storytelling and digital advertising content.",
  tags: ["Art Direction", "AI Model Campaigns", "Social Content", "UGC Creative", "Ad Creative"],
  concept: true,
  media: [
    { type: "image", src: "/images/work/deargals/original.jpg", label: "Original Asset", caption: "Product graphic" },
    { type: "image", src: "/images/work/deargals/ai-modelling.jpg", label: "Lifestyle Modelling", caption: "Fashion campaign visual" },
    { type: "image", src: "/images/work/deargals/ad-creative.jpg", label: "Ad Creative", caption: "Digital advertising" },
    { type: "image", src: "/images/work/deargals/social-content.jpg", label: "Social Content", caption: "Feed & story creative" },
    { type: "image", src: "/images/work/deargals/ugc-content.jpg", label: "UGC Creative", caption: "Short-form video" },
  ],
};

export const BOTANICAL_SKINCARE: CaseStudy = {
  slug: "botanical-skincare-work",
  industry: "Beauty & Skincare",
  title: "Botanical Skincare",
  tagline: "From packaging shot to product world",
  description: "A basic product photograph transformed into premium lifestyle imagery and cinematic campaign content.",
  tags: ["Product Visualization", "Beauty Creative", "Lifestyle Imagery", "Product Film"],
  concept: true,
  media: [
    { type: "image", src: "/images/work/botanical-skincare/original.jpg", label: "01", caption: "Original product image" },
    { type: "image", src: "/images/work/botanical-skincare/lifestyle.jpg", label: "02", caption: "Botanical lifestyle visual" },
    { type: "image", src: "/images/work/botanical-skincare/model-integration.jpg", label: "03", caption: "Beauty & model integration" },
    { type: "image", src: "/images/work/botanical-skincare/cinematic-ad.jpg", label: "04", caption: "Cinematic product advertisement" },
  ],
};

export const RESTAURANT_CONCEPT: CaseStudy = {
  slug: "restaurant-concept",
  industry: "Restaurants & Cafés",
  title: "Make People Taste It Before They Arrive",
  tagline: "Concept Demonstration",
  description:
    "A speculative look at what Absoluteli can bring to restaurants and cafés — from food photography to cinematic food films and social reels.",
  tags: ["Food Photography", "Menu Campaigns", "Interior Storytelling", "Cinematic Food Film", "Social Reels"],
  concept: true,
  media: [
    { type: "image", src: "/images/work/restaurant-concept/food-photography.jpg", caption: "Food photography transformation" },
    { type: "image", src: "/images/work/restaurant-concept/interior.jpg", caption: "Restaurant interiors" },
    { type: "image", src: "/images/work/restaurant-concept/menu-campaign.jpg", caption: "Menu & promotional campaign" },
    { type: "image", src: "/images/work/restaurant-concept/food-cooking.jpg", caption: "Cinematic food film" },
    { type: "image", src: "/images/work/restaurant-concept/social-dining.jpg", caption: "Social reel" },
  ],
};
