// Simple stacked "Our Work" segments — each a niche with three symmetric
// image slots, matching the visual layout previously used for the Cloud
// Comfort case study. Slots start empty (no `src`) until real creative is
// provided; empty slots render an honest "Coming Soon" placeholder rather
// than a stand-in stock image. Fill in `src` (and `type`/`poster` for video)
// on a slot once the asset exists — no layout changes needed.
export type WorkSegmentSlot = {
  label: string;
  src?: string;
  type?: "image" | "video";
  poster?: string;
  caption?: string;
};

export type WorkSegment = {
  slug: string;
  industry: string;
  title: string;
  slots: [WorkSegmentSlot, WorkSegmentSlot, WorkSegmentSlot];
};

export const WORK_SEGMENTS: WorkSegment[] = [
  {
    slug: "beverage",
    industry: "Food & Beverage",
    title: "Beverage Campaign",
    slots: [
      { label: "01 / Original", src: "/images/work/beverage/original.jpg", caption: "Original product photography" },
      { label: "02 / Reimagined", src: "/images/work/beverage/transformed.jpg", caption: "Luxury lifestyle product visual" },
      { label: "03 / Campaign", src: "/images/work/beverage/campaign.jpg", caption: "Full product range campaign visual" },
    ],
  },
  {
    slug: "fitness",
    industry: "Fitness & Wellness",
    title: "Fitness Campaign",
    slots: [
      { label: "01 / Original", src: "/images/work/fitness/original.jpg", caption: "Original gym photography" },
      { label: "02 / Reimagined", src: "/images/work/fitness/transformed.jpg", caption: "Cinematic lifestyle visual" },
      { label: "03 / Campaign", src: "/images/work/fitness/campaign.jpg", caption: "Finished activewear campaign ad" },
    ],
  },
  {
    slug: "cafe",
    industry: "Restaurants & Cafés",
    title: "Café Campaign",
    slots: [
      { label: "01 / Original", src: "/images/work/cafe/original.jpg", caption: "Original café photography" },
      { label: "02 / Reimagined", src: "/images/work/cafe/transformed.jpg", caption: "Styled product visual" },
      { label: "03 / Campaign", src: "/images/work/cafe/campaign.jpg", caption: "Finished café campaign ad" },
    ],
  },
  {
    slug: "fashion",
    industry: "Fashion & Lifestyle",
    title: "Fashion Campaign",
    slots: [
      { label: "01 / Original", src: "/images/work/fashion-campaign/original.jpg", caption: "Original product mockup" },
      { label: "02 / Reimagined", src: "/images/work/fashion-campaign/transformed.jpg", caption: "Lifestyle model visual" },
      { label: "03 / Campaign", src: "/images/work/fashion-campaign/campaign.jpg", caption: "Finished fashion campaign ad" },
    ],
  },
  {
    slug: "furniture",
    industry: "Furniture & Interiors",
    title: "Furniture Campaign",
    slots: [
      { label: "01 / Original", src: "/images/work/furniture-campaign/original.jpg", caption: "Original showroom photography" },
      { label: "02 / Reimagined", src: "/images/work/furniture-campaign/transformed.jpg", caption: "Styled lifestyle visual" },
      {
        label: "03 / Campaign",
        type: "video",
        src: "/images/work/furniture-campaign/campaign.mp4",
        poster: "/images/work/furniture-campaign/campaign-poster.jpg",
        caption: "Cinematic campaign film",
      },
    ],
  },
];
