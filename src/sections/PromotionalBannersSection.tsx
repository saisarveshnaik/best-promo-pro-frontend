import { promoBanners } from "../data/mockData";

export function PromotionalBannersSection() {
  return (
    <section className="bg-lightBg py-8">
      <div className="mx-auto max-w-page px-5 md:px-6">
        <div className="grid gap-3 xl:grid-cols-12">
          {promoBanners.slice(0, 2).map((banner) => {
            const isFullBackgroundBanner = ["Sofas & Armchairs", "Galaxy S24 Ultra"].includes(banner.title);

            return (
              <article
                key={banner.title}
                className={`relative min-h-[300px] overflow-hidden rounded-[8px] p-5 sm:min-h-[340px] sm:p-7 md:min-h-[420px] xl:col-span-4 ${banner.bg}`}
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className={
                    isFullBackgroundBanner
                      ? "absolute inset-0 h-full w-full object-cover object-center"
                      : "absolute bottom-0 right-0 h-[58%] w-full object-contain object-bottom"
                  }
                  loading="lazy"
                />
                {isFullBackgroundBanner ? <div className="absolute inset-0 bg-white/20" /> : null}
                <div className="relative z-10">
                  <p className="mb-2 text-[13px] font-bold tracking-[0.02em] text-[#222]">{banner.kicker}</p>
                  <h3 className="mb-2 text-[26px] font-semibold leading-[1.2] text-black sm:text-[32px] md:text-[48px]">
                    {banner.title}
                  </h3>
                  <p className="mb-5 text-[15px] text-[#333]">{banner.subtitle}</p>
                  <button className="h-[50px] rounded-[6px] bg-white px-8 text-[14px] font-semibold text-[#222]">
                    Shop Now
                  </button>
                </div>
              </article>
            );
          })}

          <div className="grid gap-3 xl:col-span-4">
            {promoBanners.slice(2).map((banner) => {
              const isFullBackgroundSmallBanner = ["Suede Heel Shoes", "Women's Shoulder Bag"].includes(
                banner.title
              );

              return (
                <article
                  key={banner.title}
                  className={`relative min-h-[200px] overflow-hidden rounded-[8px] p-5 sm:p-7 md:min-h-[205px] ${banner.bg}`}
                >
                  <img
                    src={banner.image}
                    alt={banner.title}
                    className={
                      isFullBackgroundSmallBanner
                        ? "absolute inset-0 h-full w-full object-cover object-center"
                        : "absolute right-0 top-0 h-full w-[45%] object-cover"
                    }
                    loading="lazy"
                  />
                  {isFullBackgroundSmallBanner ? <div className="absolute inset-0 bg-white/20" /> : null}
                  <div className="relative z-10">
                    <h3 className="mb-2 max-w-[65%] text-[24px] font-medium leading-[1.2] text-black sm:max-w-[58%] sm:text-[30px] md:text-[40px]">
                      {banner.title}
                    </h3>
                    <p className="mb-4 max-w-[65%] text-[14px] text-[#333] sm:max-w-[58%] sm:text-[15px]">{banner.subtitle}</p>
                    <button className="text-[14px] font-medium underline">Shop Now</button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


