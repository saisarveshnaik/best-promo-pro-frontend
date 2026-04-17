import { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  hasDropdown?: boolean;
  active?: boolean;
};

export type FeatureItem = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

export type CategoryItem = {
  name: string;
  image: string;
};

export type ProductItem = {
  id: string;
  title: string;
  category: string;
  image: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  secondaryBadge?: string;
  featured?: boolean;
  rating?: number;
};

export type HeroSlide = {
  title: string;
  subtitle: string;
  kicker: string;
  image: string;
  buttonText: string;
  bg: string;
  darkText?: boolean;
};

export type SideBanner = {
  title: string;
  subtitle: string;
  image: string;
  bg: string;
};

export type PromoBanner = {
  title: string;
  subtitle: string;
  kicker: string;
  image: string;
  bg: string;
  large?: boolean;
};

export type FashionItem = {
  id: string;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  badge?: string;
  sale?: string;
};

export type BrandItem = {
  id: string;
  name: string;
  image: string;
};

export type BlogItem = {
  id: string;
  title: string;
  image: string;
  author: string;
};
