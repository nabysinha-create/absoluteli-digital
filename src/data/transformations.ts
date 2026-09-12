export type TransformationStage = {
  label: string;
  caption: string;
  type: "image" | "video";
  src: string;
  poster?: string;
};

export type Transformation = {
  slug: string;
  industry: string;
  title: string;
  stages: [TransformationStage, TransformationStage, TransformationStage];
};

// Add more entries here to extend the homepage showcase — no layout code
// needs to change.
export const TRANSFORMATIONS: Transformation[] = [
  {
    slug: "esse-skincare",
    industry: "Beauty & Skincare",
    title: "ESSE Beauty — Anti-Blemish Tea Tree Gel",
    stages: [
      {
        label: "Original",
        caption: "Product photograph",
        type: "image",
        src: "/images/projects/esse-skincare/original.jpg",
      },
      {
        label: "Transformed",
        caption: "Luxury lifestyle environment",
        type: "image",
        src: "/images/projects/esse-skincare/transformed.jpg",
      },
      {
        label: "Campaign Film",
        caption: "Cinematic advertisement",
        type: "video",
        src: "/images/projects/esse-skincare/campaign-film.mp4",
        poster: "/images/projects/esse-skincare/campaign-film-poster.jpg",
      },
    ],
  },
];
