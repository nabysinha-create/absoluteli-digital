export type Industry = {
  slug: string;
  name: string;
  image: string;
};

// Photo credits (Unsplash License — free to use, no permission required):
// interiors-furniture: Obegi Home (unsplash.com/@obegihome)
// restaurants-cafes: Eirc Shi (unsplash.com/@wwolf5566)
// beauty-skincare: Karen Morales (unsplash.com/@karenm28)
// fashion-lifestyle: Valeriia Miller (unsplash.com/@valeriiamiller)
// hospitality: Henry Möllers (unsplash.com/@henry_moellers1901)
export const INDUSTRIES: Industry[] = [
  { slug: "interiors-furniture", name: "Interiors & Furniture", image: "/images/industries-photo/interiors-furniture.jpg" },
  { slug: "restaurants-cafes", name: "Restaurants & Cafés", image: "/images/industries-photo/restaurants-cafes.jpg" },
  { slug: "beauty-skincare", name: "Beauty & Skincare", image: "/images/industries-photo/beauty-skincare.jpg" },
  { slug: "fashion-lifestyle", name: "Fashion & Lifestyle", image: "/images/industries-photo/fashion-lifestyle.jpg" },
  { slug: "hospitality", name: "Hospitality", image: "/images/industries-photo/hospitality.jpg" },
];
