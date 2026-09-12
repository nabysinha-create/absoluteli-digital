export type WorkProject = {
  slug: string;
  title: string;
  industry: string;
  campaignType: string;
  description: string;
  image: string;
  // Concept work is unpaid/speculative — never presented as commissioned client work.
  concept?: boolean;
};

// Seed set for the homepage. Add real projects here as they're produced —
// the grid and cards pick up new entries automatically.
export const FEATURED_WORK: WorkProject[] = [
  {
    slug: "lounge-beanbag",
    title: "Lounge Bean Bag",
    industry: "Furniture & Interiors",
    campaignType: "Product Transformation",
    description: "A single product photograph reimagined as a luxury lifestyle campaign film.",
    image: "/images/work/featured/lounge-beanbag.jpg",
    concept: true,
  },
  {
    slug: "atelier-lookbook",
    title: "Atelier Lookbook",
    industry: "Fashion & Lifestyle",
    campaignType: "Campaign Visuals",
    description: "A seasonal lookbook translated into short-form campaign content.",
    image: "/images/work/featured/atelier-lookbook.jpg",
    concept: true,
  },
  {
    slug: "botanical-skincare",
    title: "Botanical Skincare",
    industry: "Beauty & Skincare",
    campaignType: "Product Reveal Film",
    description: "A packaging shot turned into a cinematic product reveal.",
    image: "/images/work/featured/botanical-skincare.jpg",
    concept: true,
  },
  {
    slug: "corner-table",
    title: "Corner Table",
    industry: "Restaurants & Cafés",
    campaignType: "Brand Storytelling",
    description: "Menu and interior photography built into a brand story reel.",
    image: "/images/industries/restaurants-cafes.svg",
    concept: true,
  },
  {
    slug: "cafe-aesthetics",
    title: "Cafe Aesthetics",
    industry: "Restaurants & Cafés",
    campaignType: "Cinematic Food Content",
    description: "A slow-motion pour transformed into rich, cinematic café storytelling.",
    image: "/images/work/featured/cafe-aesthetics.jpg",
    concept: true,
  },
];
