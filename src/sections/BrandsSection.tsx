import { brands } from "../data/mockData";

export function BrandsSection() {
  return (
    <section className="bg-lightBg py-10">
      <div className="mx-auto max-w-page px-5 md:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-[30px] font-semibold md:text-[42px]">Shop By Brands</h2>
          <button className="text-[15px] font-medium text-black/75 underline">See All Brands</button>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {brands.map((brand) => (
            <article
              key={brand.id}
              className="flex h-[108px] items-center justify-center rounded-[4px] border border-[#e7e7e7] bg-white"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="max-h-[56px] w-auto max-w-[150px] object-contain sm:max-h-[62px] sm:max-w-[170px] md:max-h-[70px] md:max-w-[190px]"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

