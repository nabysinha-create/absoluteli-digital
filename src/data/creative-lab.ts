export type LabPiece = {
  slug: string;
  title: string;
  category: "Concept" | "Creative Experiment";
  image: string;
  video?: string;
  poster?: string;
  aspect: string;
};

export const LAB_PIECES: LabPiece[] = [
  { slug: "color-study", title: "Color Study", category: "Creative Experiment", image: "/images/work/creative-lab/experiment-1.jpg", aspect: "aspect-[4/5]" },
  { slug: "motion-test", title: "Motion Test", category: "Creative Experiment", image: "/images/work/creative-lab/experiment-2.jpg", aspect: "aspect-square" },
  { slug: "material-exploration", title: "Material Exploration", category: "Concept", image: "/images/work/creative-lab/experiment-3.jpg", aspect: "aspect-[3/4]" },
  { slug: "light-study", title: "Light Study", category: "Creative Experiment", image: "/images/work/creative-lab/experiment-4.jpg", aspect: "aspect-square" },
  {
    slug: "product-fantasy",
    title: "Product Fantasy",
    category: "Concept",
    image: "/images/work/creative-lab/experiment-5-poster.jpg",
    video: "/images/work/creative-lab/experiment-5.mp4",
    poster: "/images/work/creative-lab/experiment-5-poster.jpg",
    aspect: "aspect-[4/5]",
  },
];
