import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "../components/common/ProductCard";
import { tabProducts } from "../data/mockData";

const tabs = ["Best Sellers", "New Arrivals", "Most Rating"] as const;

export function ProductTabsSection() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("New Arrivals");
  const products = useMemo(() => tabProducts[activeTab], [activeTab]);

  return (
    <section className="bg-lightBg py-10">
      <div className="mx-auto max-w-page px-5 md:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3 sm:gap-4">
          <div className="flex flex-wrap gap-4 sm:gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`text-[18px] font-medium transition sm:text-[22px] md:text-[42px] ${
                  activeTab === tab ? "text-black" : "text-black/45"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button type="button" className="text-[15px] font-medium text-black/75 underline">
            See All Products
          </button>
        </div>

        <div className="relative">
          <button className="products-prev absolute left-2 top-1/2 z-20 hidden h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full border border-[#d8d8d8] bg-white text-black md:flex xl:-left-6">
            <ChevronLeft size={22} />
          </button>
          <button className="products-next absolute right-2 top-1/2 z-20 hidden h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full border border-[#d8d8d8] bg-white text-black md:flex xl:-right-6">
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: ".products-prev", nextEl: ".products-next" }}
            spaceBetween={14}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 5 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} className="h-full" showActions={product.featured} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

