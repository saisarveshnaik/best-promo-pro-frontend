import { ChevronRight } from "lucide-react";
import { FashionProductCard } from "../components/common/FashionProductCard";
import { fashionProducts } from "../data/mockData";
import winterClothingBanner from "../assets/images/Banner_3.jpeg";

export function FashionSection() {
  return (
    <section className="bg-lightBg py-10">
      <div className="mx-auto max-w-page px-5 md:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-[30px] font-semibold text-black md:text-[42px]">Fashion</h2>
          <button className="text-[15px] font-medium text-black/75 underline">
            See All Products
          </button>
        </div>

        <div className="grid gap-3 xl:grid-cols-12">
          <article className="relative min-h-[320px] overflow-hidden rounded-[8px] bg-[#bce2f1] p-5 sm:min-h-[350px] sm:p-7 xl:col-span-4">
            <img
              src={winterClothingBanner}
              alt="Women's Winter Clothing"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-white/15" />
            <div className="relative z-10">
              <p className="text-[13px] font-semibold uppercase text-[#1f607a]">SALE 30% OFF</p>
              <h3 className="mt-2 max-w-[240px] text-[30px] font-bold leading-[1.1] text-[#1f607a] sm:max-w-[260px] sm:text-[40px] md:text-[58px]">
                Women's Winter Clothing
              </h3>
              <button className="mt-6 h-[52px] rounded-[8px] bg-white px-8 text-[14px] font-semibold text-[#222]">
                SHOP NOW
              </button>
            </div>
            <button className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-soft sm:right-6 sm:h-11 sm:w-11">
              <ChevronRight size={18} />
            </button>
          </article>

          <div className="grid gap-3 xl:col-span-8 xl:grid-cols-2">
            {fashionProducts.map((item) => (
              <FashionProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

