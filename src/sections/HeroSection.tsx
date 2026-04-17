import {
  Eye,
  Layers,
  Menu,
  Search,
  ShoppingCart,
  UserRound,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroSlides, sideBanners } from "../data/mockData";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-page px-0">
        <div className="grid gap-0 pt-1 lg:grid-cols-12">
          <div className="relative h-[280px] overflow-hidden rounded-none sm:h-[320px] lg:col-span-8 lg:h-[590px]">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              loop
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
              className="h-full"
            >
              {heroSlides.map((slide) => (
                <SwiperSlide key={slide.title} className="relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative z-10 flex h-full items-center px-5 py-6 md:px-14 md:py-14">
                    <div className={`max-w-[430px] ${slide.darkText ? "text-[#121212]" : "text-white"}`}>
                      <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.03em] md:text-[15px]">
                        {slide.kicker}
                      </p>
                      <h1 className="mb-4 text-[24px] font-bold leading-[1.1] sm:text-[30px] md:text-[62px]">
                        {slide.title}
                      </h1>
                      <p
                        className={`mb-8 text-[16px] md:text-[18px] ${
                          slide.darkText ? "text-black/80" : "text-white/90"
                        }`}
                      >
                        {slide.subtitle}
                      </p>
                      <button className="h-[44px] rounded-[6px] bg-white px-6 text-[14px] font-semibold text-[#222] transition hover:bg-white/90 md:h-[52px] md:px-10 md:text-[15px]">
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="hero-prev absolute left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-soft transition hover:bg-white md:flex">
              <ChevronLeft size={18} />
            </button>
            <button className="hero-next absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-soft transition hover:bg-white md:flex">
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="grid gap-0 lg:col-span-4 lg:grid-rows-2">
            {sideBanners.map((banner) => (
              <article
                key={banner.title}
                className={`relative min-h-[170px] overflow-hidden rounded-none p-5 sm:min-h-[190px] sm:p-8 ${banner.bg} md:min-h-[288px]`}
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-white/25" />
                <div className="relative z-10">
                  <p className="mb-2 text-[13px] font-medium uppercase text-[#2e2e2e]">{banner.subtitle}</p>
                  <h3 className="max-w-[265px] text-[20px] font-semibold leading-[1.2] text-[#121212] sm:text-[24px] md:text-[34px]">
                    {banner.title}
                  </h3>
                  <button className="mt-3 h-[40px] rounded-[6px] border border-black/35 bg-white/70 px-5 text-[13px] font-semibold text-[#222] transition hover:bg-black hover:text-white sm:mt-4 sm:h-[46px] sm:px-7 sm:text-[14px] md:h-[48px]">
                    SHOP NOW
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed right-0 top-[40%] z-30 hidden -translate-y-1/2 flex-col rounded-l-[4px] bg-accent text-white lg:flex">
        {[Menu, ShoppingCart, UserRound, Search, Eye, Layers].map((Icon, index) => (
          <button
            key={index}
            className="flex h-[54px] w-[54px] items-center justify-center border-b border-white/20 text-white transition hover:bg-black/20"
          >
            <Icon size={24} />
          </button>
        ))}
      </div>
    </section>
  );
}

