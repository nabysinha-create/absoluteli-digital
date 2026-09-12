export type ServicePillar = {
  number: string;
  title: string;
  statement: string;
  description: string;
  supportingCopy: string;
  capabilities: string[];
};

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    number: "01",
    title: "Creative Production",
    statement: "Turn what you have into something people want to watch.",
    description: "Cinematic product films, campaign visuals and lifestyle transformations.",
    supportingCopy:
      "From a single product photograph or completed space to campaign-ready visual content, we create assets designed for today's digital channels.",
    capabilities: [
      "Cinematic Product Films",
      "Product-to-Lifestyle Transformations",
      "Project Reveal Films",
      "Short-Form Video & Reels",
      "AI-Assisted Visual Production",
      "Campaign Visuals",
      "Product & Brand Storytelling",
      "Creative Concepts & Art Direction",
    ],
  },
  {
    number: "02",
    title: "Social Media & Content",
    statement: "From occasional posting to a brand people recognize.",
    description: "Strategy, content and consistent presence across the channels that matter.",
    supportingCopy:
      "We combine strategy, creative direction and consistent content to build a stronger presence across the channels that matter to your audience.",
    capabilities: [
      "Social Media Strategy",
      "Creative Direction",
      "Content Planning",
      "Reels & Short-Form Video",
      "Static Posts & Carousels",
      "Stories",
      "Content Calendars",
      "Caption & Copy Development",
      "Publishing & Scheduling",
      "Community Support",
      "Performance Reporting",
    ],
  },
  {
    number: "03",
    title: "Campaign & Brand Creative",
    statement: "Give every launch something worth noticing.",
    description: "Launch, seasonal and promotional creative that carries a brand story.",
    supportingCopy:
      "We develop the visual direction and campaign assets that help products, promotions and brand moments stand apart.",
    capabilities: [
      "Product Launch Campaigns",
      "Seasonal Campaigns",
      "Promotional Campaigns",
      "Campaign Concepts",
      "Visual Art Direction",
      "Brand Storytelling",
      "Digital Advertising Creative",
      "Catalogues & Digital Brochures",
      "Promotional Assets",
    ],
  },
  {
    number: "04",
    title: "Performance Marketing",
    statement: "Great creative deserves the right audience.",
    description: "Putting creative in front of the right audience, and refining what works.",
    supportingCopy:
      "We connect creative production with paid distribution, testing and optimization so campaigns can move beyond attention toward measurable growth.",
    capabilities: [
      "Meta Advertising",
      "Google Advertising",
      "Retargeting",
      "Campaign Setup",
      "Audience Strategy",
      "Creative Testing",
      "Campaign Optimization",
      "Performance Reporting",
    ],
  },
];

export const ADDITIONAL_CAPABILITIES = ["Ecommerce", "Landing Pages", "SEO", "Website Management"];

// Richer version of the above, used by the dedicated /services page (section 5).
export const DIGITAL_CAPABILITIES = [
  {
    title: "E-commerce",
    description: "Storefront optimization, campaign landing experiences and content integration.",
  },
  {
    title: "Landing Pages",
    description: "Focused digital destinations for campaigns, launches and lead generation.",
  },
  {
    title: "SEO",
    description: "Foundational search optimization and content visibility.",
  },
  {
    title: "Website Management",
    description: "Content updates, campaign integration and ongoing digital support.",
  },
];
