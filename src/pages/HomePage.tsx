import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { BlogSection } from "../sections/BlogSection";
import { BrandsSection } from "../sections/BrandsSection";
import { CategoriesSection } from "../sections/CategoriesSection";
import { DealsSection } from "../sections/DealsSection";
import { FashionSection } from "../sections/FashionSection";
import { FeaturesStrip } from "../sections/FeaturesStrip";
import { HeroSection } from "../sections/HeroSection";
import { ProductTabsSection } from "../sections/ProductTabsSection";
import { PromotionalBannersSection } from "../sections/PromotionalBannersSection";
import { SearchSection } from "../sections/SearchSection";

export function HomePage() {
  return (
    <div className="min-h-screen bg-lightBg">
      <Header />
      <main>
        <HeroSection />
        <FeaturesStrip />
        <CategoriesSection />
        <DealsSection />
        <PromotionalBannersSection />
        <ProductTabsSection />
        <FashionSection />
        <BrandsSection />
        <BlogSection />
        <SearchSection />
      </main>
      <Footer />
    </div>
  );
}
