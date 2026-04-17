import { categories } from "../data/mockData";

export function CategoriesSection() {
  return (
    <section className="bg-lightBg py-12">
      <div className="mx-auto max-w-page px-5 md:px-6">
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-8 lg:grid-cols-5 xl:grid-cols-7">
          {categories.map((category) => (
            <article key={category.name} className="text-center">
              <div className="mx-auto mb-4 flex h-[146px] w-[146px] items-center justify-center rounded-full bg-white p-3 sm:mb-5 sm:h-[170px] sm:w-[170px] sm:p-4 md:h-[184px] md:w-[184px]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-[112px] w-[112px] object-contain sm:h-[122px] sm:w-[122px] md:h-[132px] md:w-[132px]"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[15px] font-medium text-[#242424] sm:text-[16px]">{category.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

