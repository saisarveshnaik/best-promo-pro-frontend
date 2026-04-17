import { ProductCard } from "../components/common/ProductCard";
import { dealProducts } from "../data/mockData";

const countdown = [
  { label: "Days", value: "603" },
  { label: "Hours", value: "13" },
  { label: "Mins", value: "16" },
  { label: "Secs", value: "6" },
];

export function DealsSection() {
  return (
    <section className="bg-lightBg pb-14 pt-8">
      <div className="mx-auto max-w-page px-5 md:px-6">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <ProductCard product={dealProducts[0]} className="xl:min-h-[500px]" />
          <ProductCard product={dealProducts[1]} className="xl:min-h-[500px]" />

          <article className="rounded-[8px] border border-accent bg-white px-7 py-10 text-center md:col-span-2 xl:col-span-2 xl:min-h-[500px]">
            <h3 className="mb-3 text-[26px] font-semibold text-black md:text-[42px]">Today's Best Deals</h3>
            <p className="mx-auto max-w-[390px] text-[16px] leading-[1.45] text-muted">
              Sed ut perspiciatis unde omnis iste natus error accusantium doloremque laudantium
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
              {countdown.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="mb-2 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-accent text-[20px] font-semibold text-white md:h-[80px] md:w-[80px] md:text-[34px]">
                    {item.value}
                  </div>
                  <p className="text-[14px] font-medium text-[#2a2a2a]">{item.label}</p>
                </div>
              ))}
            </div>
            <button className="mt-8 h-[48px] rounded-[6px] bg-[#f2f2f2] px-10 text-[15px] font-semibold text-[#1f1f1f] md:h-[54px] md:px-14 md:text-[16px]">
              See All
            </button>
          </article>

          <ProductCard product={dealProducts[2]} className="xl:min-h-[500px]" />
          <ProductCard product={dealProducts[3]} className="xl:min-h-[500px]" showActions />

          <ProductCard product={dealProducts[4]} className="xl:min-h-[500px]" />
          <ProductCard product={dealProducts[5]} className="xl:min-h-[500px]" />
          <ProductCard product={dealProducts[6]} className="xl:min-h-[500px]" />
          <ProductCard product={dealProducts[7]} className="xl:min-h-[500px]" />
          <ProductCard product={dealProducts[8]} className="xl:min-h-[500px]" />
          <ProductCard product={dealProducts[9]} className="xl:min-h-[500px]" showActions />
        </div>
      </div>
    </section>
  );
}

