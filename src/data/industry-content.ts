export type IndustryContent = {
  slug: string;
  number: string;
  name: string;
  headline: string;
  supportingCopy: string;
  haveList: string[];
  createList: string[];
  ctaLabel: string;
  // Matches a value in WORK_INDUSTRIES (src/data/case-studies.ts) so the CTA
  // can pre-select the right filter on /our-work.
  workFilterValue: string;
};

export const INTERIORS_FURNITURE: IndustryContent = {
  slug: "interiors-furniture",
  number: "01",
  name: "Interiors & Furniture",
  headline: "Beautiful spaces deserve more than static photographs.",
  supportingCopy:
    "Showrooms, completed projects, furniture collections and product photography already contain the ingredients for powerful content. We transform those assets into stories designed to be watched, shared and remembered.",
  haveList: [
    "Product Photography",
    "Completed Project Photography",
    "Showroom Images",
    "Furniture Collections",
    "Interior Renders",
    "Existing Videos",
  ],
  createList: [
    "Cinematic Product Films",
    "Project Reveal Films",
    "Before/After Stories",
    "Product Transformations",
    "Social Reels",
    "Campaign Visuals",
    "Collection Launches",
    "Paid Advertising Creative",
    "Pinterest Content",
  ],
  ctaLabel: "Explore Furniture & Interior Work →",
  workFilterValue: "Furniture & Interiors",
};

export const RESTAURANTS_CAFES: IndustryContent = {
  slug: "restaurants-cafes",
  number: "02",
  name: "Restaurants & Cafés",
  headline: "People taste with their eyes first.",
  supportingCopy:
    "From a signature dish to the atmosphere of an entire space, we turn the restaurant experience into content that creates curiosity before a guest walks through the door.",
  haveList: [
    "Food Photography",
    "Menu Items",
    "Restaurant Interiors",
    "Chef Stories",
    "Customer Experience",
    "Existing Social Content",
  ],
  createList: [
    "Cinematic Food Reels",
    "Menu Launch Campaigns",
    "Restaurant Storytelling",
    "Interior & Ambience Films",
    "Promotional Content",
    "Seasonal Campaigns",
    "Social Media Content",
    "Paid Advertising Creative",
  ],
  ctaLabel: "Explore Food & Hospitality Work →",
  workFilterValue: "Restaurants & Cafés",
};

export const BEAUTY_SKINCARE: IndustryContent = {
  slug: "beauty-skincare",
  number: "03",
  name: "Beauty & Skincare",
  headline: "Turn the product into a world.",
  supportingCopy:
    "We take packaging, ingredients, textures and product photography and build visual stories around the feeling the brand wants customers to experience.",
  haveList: [],
  createList: [
    "Product Reveal Films",
    "Ingredient Stories",
    "Texture & Macro Visuals",
    "Lifestyle Transformations",
    "Product Launch Campaigns",
    "Social Reels",
    "Campaign Visuals",
    "Paid Social Creative",
  ],
  ctaLabel: "View Related Work →",
  workFilterValue: "Beauty & Skincare",
};

export const FASHION_LIFESTYLE: IndustryContent = {
  slug: "fashion-lifestyle",
  number: "04",
  name: "Fashion & Lifestyle",
  headline: "Don't just show the product. Build the attitude around it.",
  supportingCopy:
    "Collections become stronger when customers understand the world, identity and emotion surrounding them.",
  haveList: [],
  createList: [
    "Campaign Concepts",
    "Collection Launches",
    "Lookbook Films",
    "Fashion Reels",
    "Lifestyle Visuals",
    "Social Campaigns",
    "Promotional Creative",
    "Paid Advertising Assets",
  ],
  ctaLabel: "View Related Work →",
  workFilterValue: "Fashion & Lifestyle",
};

export const HOSPITALITY: IndustryContent = {
  slug: "hospitality",
  number: "05",
  name: "Hospitality",
  headline: "Sell the feeling before the stay.",
  supportingCopy:
    "Hotels, resorts and hospitality spaces aren't simply rooms. They're experiences. We build content around the atmosphere guests are choosing.",
  haveList: [],
  createList: [
    "Property Films",
    "Room & Suite Stories",
    "Dining Content",
    "Experience Reels",
    "Destination Storytelling",
    "Seasonal Campaigns",
    "Social Content",
    "Paid Campaign Creative",
  ],
  ctaLabel: "View Related Work →",
  workFilterValue: "Hospitality",
};
