import {
  BadgeDollarSign,
  Box,
  CreditCard,
  Headset,
  LayoutGrid,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import slider2Image from "../assets/images/slider2-1280x680.jpeg";
import slider3Image from "../assets/images/slider3-1280x680.jpg";
import womensSunglassesBanner from "../assets/images/banner-womens-sunglasses.jpeg";
import smartWatchBanner from "../assets/images/banner-waterproof-smart-watch.jpeg";
import smartphoneCategoryImage from "../assets/images/Cate_1-180x180.jpeg";
import sofaBannerImage from "../assets/images/sofa.jpg";
import phonesBannerImage from "../assets/images/phones.jpeg";
import shoesBannerImage from "../assets/images/shoes.jpeg";
import bagBannerImage from "../assets/images/bag.jpeg";
import hikokiBrandImage from "../assets/images/hikoki.png";
import lgBrandImage from "../assets/images/lg.png";
import samsungBrandImage from "../assets/images/samsung.png";
import thinkpadBrandImage from "../assets/images/thinkpad.png";
import vivoBrandImage from "../assets/images/vivo.png";
import huaweiBrandImage from "../assets/images/huawei.png";
import sonyBrandImage from "../assets/images/sony.png";
import fashionCategoryImage from "../assets/images/Cate_2-180x180.jpeg";
import headphoneCategoryImage from "../assets/images/Cate_3-180x180.jpeg";
import furnitureCategoryImage from "../assets/images/Cate_4-180x180.jpeg";
import cosmeticsCategoryImage from "../assets/images/Cate_5-180x180.jpeg";
import sneakersCategoryImage from "../assets/images/Cate_6-180x180.jpeg";
import handbagsCategoryImage from "../assets/images/Cate_7-180x180.jpeg";
import type {
  BlogItem,
  BrandItem,
  CategoryItem,
  FashionItem,
  FeatureItem,
  HeroSlide,
  NavItem,
  ProductItem,
  PromoBanner,
  SideBanner,
} from "../types/ui";

export const topNavItems: NavItem[] = [
  { label: "Home", hasDropdown: true, active: true },
  { label: "Feature", hasDropdown: true },
  { label: "Shop" },
  { label: "Pages", hasDropdown: true },
  { label: "Blog", hasDropdown: true },
  { label: "About" },
];

export const utilityIcons = [UserRound, ShoppingCart, Search, LayoutGrid];

export const accountIcons = [UserRound, ShoppingCart];

export const topActionIcons = [UserRound, ShoppingCart];

export const heroSlides: HeroSlide[] = [
  {
    kicker: "BLACK FRIDAY SALE!",
    title: "Louis Vuitton Sunglasses",
    subtitle: "Up to 50% Off when paying via credit card",
    buttonText: "SHOP NOW",
    image: slider2Image,
    bg: "",
  },
  {
    kicker: "LIMITED EDITION",
    title: "Signature Fashion Week",
    subtitle: "Get the latest trends with up to 45% discount",
    buttonText: "SHOP NOW",
    image: slider3Image,
    bg: "",
    darkText: true,
  },
];

export const sideBanners: SideBanner[] = [
  {
    subtitle: "NEW ARRIVALS",
    title: "Women's Sunglasses",
    image: womensSunglassesBanner,
    bg: "bg-[#f7f7f7]",
  },
  {
    subtitle: "NEW ARRIVALS",
    title: "Waterproof Smart Watch",
    image: smartWatchBanner,
    bg: "bg-[#f2efec]",
  },
];

export const features: FeatureItem[] = [
  {
    title: "Free Shipping",
    subtitle: "On order over $49.00",
    icon: Box,
  },
  {
    title: "Money Guarantee",
    subtitle: "Within 30 days for an exchange",
    icon: BadgeDollarSign,
  },
  {
    title: "Online Support",
    subtitle: "24 hours a day, 7 days a week",
    icon: Headset,
  },
  {
    title: "Flexible Payment",
    subtitle: "Pay with Multiple Credit Cards",
    icon: CreditCard,
  },
];

export const categories: CategoryItem[] = [
  {
    name: "Smartphone",
    image: smartphoneCategoryImage,
  },
  {
    name: "Fashion",
    image: fashionCategoryImage,
  },
  {
    name: "Headphone",
    image: headphoneCategoryImage,
  },
  {
    name: "Furniture",
    image: furnitureCategoryImage,
  },
  {
    name: "Cosmetics",
    image: cosmeticsCategoryImage,
  },
  {
    name: "Sneakers",
    image: sneakersCategoryImage,
  },
  {
    name: "Handbags",
    image: handbagsCategoryImage,
  },
];

export const dealProducts: ProductItem[] = [
  {
    id: "d1",
    title: "2025 New Tablet 10 inch Android 14 Tablets",
    category: "Smartphone & Tablet",
    image:
      "https://images.pexels.com/photos/4065905/pexels-photo-4065905.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 99.22,
    oldPrice: 121,
    badge: "SALE",
  },
  {
    id: "d2",
    title: "Amazon Basics Mesh Mid-Back Adjustable",
    category: "Furniture & Decor",
    image:
      "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 115,
    oldPrice: 135,
    badge: "SALE",
  },
  {
    id: "d3",
    title: "Apple Watch Series 9 Pink Plus 1\" 128GB",
    category: "Smartphone & Tablet",
    image:
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 45,
    oldPrice: 76,
    badge: "SALE",
  },
  {
    id: "d4",
    title: "Apple Watch Series 9 White Plus 128GB",
    category: "Smartphone & Tablet",
    image:
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 70,
    oldPrice: 82,
    featured: true,
  },
  {
    id: "d5",
    title: "Boat Shaped Slab Base Table Primy Drafting",
    category: "Furniture & Decor",
    image:
      "https://images.pexels.com/photos/4846433/pexels-photo-4846433.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 115,
    oldPrice: 130,
    badge: "SALE",
  },
  {
    id: "d6",
    title: "Collagen Daily Face Moisturizer",
    category: "Health & Beauty",
    image:
      "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 67,
    oldPrice: 79,
    badge: "SALE",
  },
  {
    id: "d7",
    title: "Fujifilm Instax Mini 9 Instant Camera",
    category: "Smartphone & Tablet",
    image:
      "https://images.pexels.com/photos/920381/pexels-photo-920381.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 70,
    oldPrice: 81,
    badge: "SALE",
  },
  {
    id: "d8",
    title: "HomePop Upholstered Primy Drafting Modern",
    category: "Furniture & Decor",
    image:
      "https://images.pexels.com/photos/6969834/pexels-photo-6969834.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 62,
    oldPrice: 79,
    badge: "SALE",
  },
  {
    id: "d9",
    title: "iPhone 15 Natural Titanium M4 512GB",
    category: "Electronics Smartphone & Tablet",
    image:
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 60,
    oldPrice: 69,
    badge: "SALE",
  },
  {
    id: "d10",
    title: "SAMSUNG Galaxy A36 5G A Series",
    category: "Smartphone & Tablet",
    image:
      "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 500,
    oldPrice: 511,
    featured: true,
  },
];

export const promoBanners: PromoBanner[] = [
  {
    kicker: "DEAL OF THE DAY",
    title: "Sofas & Armchairs",
    subtitle: "20% Off when buying and paying online",
    image: sofaBannerImage,
    bg: "bg-[#d8e0ea]",
    large: true,
  },
  {
    kicker: "SPECIAL OFFER",
    title: "Galaxy S24 Ultra",
    subtitle: "20% Off when buying and paying online",
    image: phonesBannerImage,
    bg: "bg-[#efd8df]",
    large: true,
  },
  {
    kicker: "",
    title: "Suede Heel Shoes",
    subtitle: "Simple and Luxurious design",
    image: shoesBannerImage,
    bg: "bg-[#e4e4e6]",
  },
  {
    kicker: "",
    title: "Women's Shoulder Bag",
    subtitle: "Simple and Luxurious design",
    image: bagBannerImage,
    bg: "bg-[#e0e8db]",
  },
];

export const tabProducts: Record<string, ProductItem[]> = {
  "Best Sellers": [
    {
      id: "bs1",
      title: "Evolvetogether Lip Balm for Women",
      category: "Health & Beauty",
      image:
        "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 115,
      badge: "NEW",
    },
    {
      id: "bs2",
      title: "Whipped Organic Beef Tallow for Skin",
      category: "Health & Beauty",
      image:
        "https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 67,
      oldPrice: 98,
      badge: "NEW",
      secondaryBadge: "SALE",
    },
    {
      id: "bs3",
      title: "Beauty Youth Activating Melon Serum",
      category: "Health & Beauty",
      image:
        "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 117,
      badge: "NEW",
    },
    {
      id: "bs4",
      title: "L'Oreal Paris Makeup Voluminous",
      category: "Health & Beauty",
      image:
        "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 127,
      badge: "NEW",
    },
    {
      id: "bs5",
      title: "BS-MALL Makeup Brush Set amet 18",
      category: "Health & Beauty",
      image:
        "https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 113,
      featured: true,
    },
  ],
  "New Arrivals": [
    {
      id: "na1",
      title: "Evolvetogether Lip Balm for Women",
      category: "Health & Beauty",
      image:
        "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 115,
      badge: "NEW",
    },
    {
      id: "na2",
      title: "Whipped Organic Beef Tallow for Skin",
      category: "Health & Beauty",
      image:
        "https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 67,
      oldPrice: 98,
      badge: "NEW",
      secondaryBadge: "SALE",
    },
    {
      id: "na3",
      title: "Beauty Youth Activating Melon Serum",
      category: "Health & Beauty",
      image:
        "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 117,
      badge: "NEW",
    },
    {
      id: "na4",
      title: "L'Oreal Paris Makeup Voluminous",
      category: "Health & Beauty",
      image:
        "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 127,
      badge: "NEW",
    },
    {
      id: "na5",
      title: "BS-MALL Makeup Brush Set amet 18",
      category: "Health & Beauty",
      image:
        "https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 113,
      featured: true,
    },
  ],
  "Most Rating": [
    {
      id: "mr1",
      title: "Lip Gloss Essentials Box",
      category: "Health & Beauty",
      image:
        "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 139,
      badge: "NEW",
    },
    {
      id: "mr2",
      title: "Hydrating Skin Recovery Serum",
      category: "Health & Beauty",
      image:
        "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 89,
      oldPrice: 112,
      badge: "NEW",
      secondaryBadge: "SALE",
    },
    {
      id: "mr3",
      title: "Beauty Youth Activating Melon Serum",
      category: "Health & Beauty",
      image:
        "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 117,
      badge: "NEW",
    },
    {
      id: "mr4",
      title: "Classic Scent Collection Set",
      category: "Health & Beauty",
      image:
        "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 127,
      badge: "NEW",
    },
    {
      id: "mr5",
      title: "BS-MALL Makeup Brush Set amet 18",
      category: "Health & Beauty",
      image:
        "https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: 113,
      featured: true,
    },
  ],
};

export const fashionProducts: FashionItem[] = [
  {
    id: "f1",
    title: "Womens Sweaters Casual Beauty Fashion",
    image:
      "https://images.pexels.com/photos/6311388/pexels-photo-6311388.jpeg?auto=compress&cs=tinysrgb&w=700",
    price: 61.05,
    oldPrice: 111,
    rating: 5,
    badge: "NEW",
    sale: "SALE",
  },
  {
    id: "f2",
    title: "Adidas Men's Stan Smith Shoes",
    image:
      "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=700",
    price: 59,
    rating: 5,
    badge: "NEW",
  },
  {
    id: "f3",
    title: "Daniel Wellington Classic Bristol",
    image:
      "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=700",
    price: 53,
    rating: 5,
    badge: "NEW",
  },
  {
    id: "f4",
    title: "Basic Yellow Backpack Yekaty Men",
    image:
      "https://images.pexels.com/photos/1546003/pexels-photo-1546003.jpeg?auto=compress&cs=tinysrgb&w=700",
    price: 74,
    rating: 5,
    badge: "NEW",
  },
];

export const brands: BrandItem[] = [
  { id: "b1", name: "HIKOKI", image: hikokiBrandImage },
  { id: "b2", name: "LG", image: lgBrandImage },
  { id: "b3", name: "SAMSUNG", image: samsungBrandImage },
  { id: "b4", name: "ThinkPad", image: thinkpadBrandImage },
  { id: "b5", name: "vivo", image: vivoBrandImage },
  { id: "b6", name: "HUAWEI", image: huaweiBrandImage },
  { id: "b7", name: "SONY", image: sonyBrandImage },
];

export const blogs: BlogItem[] = [
  {
    id: "bl1",
    title: "Study suggests sleep",
    author: "John doe",
    image:
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: "bl2",
    title: "Sunt in culpa qui officia",
    author: "John doe",
    image:
      "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: "bl3",
    title: "Three key beauty trends",
    author: "John doe",
    image:
      "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: "bl4",
    title: "Lorem ipsum dolor sit amet",
    author: "John doe",
    image:
      "https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

export const searchSuggestions = [
  "Cellphones",
  "Table",
  "Sneakers",
  "Fashion",
  "Appliances",
  "Watch",
  "Sofa & Chair",
  "Living Room",
  "Laptop",
];

