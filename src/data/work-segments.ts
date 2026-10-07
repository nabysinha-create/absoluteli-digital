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
  /** Featured segments render on a dark stage: slots 1–2 side by side, slot 3 as a full-width landscape film. */
  featured?: boolean;
  description?: string;
  slots: [WorkSegmentSlot, WorkSegmentSlot, WorkSegmentSlot];
  /** Full-width landscape films stacked under the image row (under slot 3 on featured segments). */
  extraFilms?: WorkSegmentSlot[];
};

export const WORK_SEGMENTS: WorkSegment[] = [
  {
    slug: "furniture",
    industry: "Furniture & Interiors",
    title: "Home & Interiors",
    featured: true,
    description:
      "From a plain showroom shot to a styled lifestyle visual and a cinematic campaign film — built entirely from the brand's existing product photography.",
    slots: [
      { label: "01 / Original", src: "/images/work/furniture-campaign/original.jpg", caption: "Original showroom photography" },
      { label: "02 / Reimagined", src: "/images/work/furniture-campaign/transformed.jpg", caption: "Styled lifestyle visual" },
      {
        label: "03 / Campaign Film",
        type: "video",
        src: "/images/work/furniture-campaign/section1-demo.mp4",
        poster: "/images/work/furniture-campaign/section1-demo-poster.jpg",
        caption: "Cinematic product campaign film",
      },
    ],
    extraFilms: [
      {
        label: "04 / Room Transformation",
        type: "video",
        src: "/images/work/furniture-campaign/empty-room-transformation.mp4",
        poster: "/images/work/furniture-campaign/empty-room-transformation-poster.jpg",
        caption: "Empty room to fully furnished interior",
      },
      {
        label: "05 / Interior Film",
        type: "video",
        src: "/images/work/furniture-campaign/interior-film.mp4",
        poster: "/images/work/furniture-campaign/interior-film-poster.jpg",
        caption: "Cinematic interior campaign film",
      },
      {
        label: "06 / Bean Bag Promo",
        type: "video",
        src: "/images/work/furniture-campaign/bean-bag-film.mp4",
        poster: "/images/work/furniture-campaign/bean-bag-film-poster.jpg",
        caption: "Luxury lifestyle promo film for a statement bean bag",
      },
    ],
  },
  {
    slug: "beverage",
    industry: "Food & Beverage",
    title: "Beverage Campaign",
    slots: [
      { label: "01 / Original", src: "/images/work/beverage/original.jpg", caption: "Original product photography" },
      { label: "02 / Reimagined", src: "/images/work/beverage/transformed.jpg", caption: "Luxury lifestyle product visual" },
      { label: "03 / Campaign", src: "/images/work/beverage/campaign.jpg", caption: "Full product range campaign visual" },
    ],
    extraFilms: [
      {
        label: "04 / Campaign Film",
        type: "video",
        src: "/images/work/beverage/assam-tea-film.mp4",
        poster: "/images/work/beverage/assam-tea-film-poster.jpg",
        caption: "Cinematic Assam tea product film",
      },
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
    extraFilms: [
      {
        label: "04 / Campaign Film",
        type: "video",
        src: "/images/work/fitness/fitness-film.mp4",
        poster: "/images/work/fitness/fitness-film-poster.jpg",
        caption: "Cinematic fitness brand film",
      },
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
    extraFilms: [
      {
        label: "04 / Campaign Film",
        type: "video",
        src: "/images/work/cafe/cafe-film.mp4",
        poster: "/images/work/cafe/cafe-film-poster.jpg",
        caption: "Cinematic café brand film for Vesper",
      },
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
];
