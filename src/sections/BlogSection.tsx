import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogs } from "../data/mockData";

export function BlogSection() {
  return (
    <section className="bg-lightBg py-10">
      <div className="mx-auto max-w-page px-5 md:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-[30px] font-semibold md:text-[42px]">Latest News</h2>
          <button className="text-[15px] font-medium text-black/75 underline">See All Posts</button>
        </div>

        <div className="relative">
          <button className="blog-prev absolute left-2 top-1/2 z-20 hidden h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full border border-[#d8d8d8] bg-white text-black md:flex xl:-left-6">
            <ChevronLeft size={22} />
          </button>
          <button className="blog-next absolute right-2 top-1/2 z-20 hidden h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full border border-[#d8d8d8] bg-white text-black md:flex xl:-right-6">
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl: ".blog-prev", nextEl: ".blog-next" }}
            slidesPerView={1}
            spaceBetween={14}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {blogs.map((post, index) => (
              <SwiperSlide key={post.id}>
                <article className="group">
                  <div className="relative mb-4 overflow-hidden rounded-[8px]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    {index === blogs.length - 1 ? (
                      <button className="absolute left-1/2 top-1/2 flex h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white">
                        <ArrowUpRight size={23} />
                      </button>
                    ) : null}
                  </div>
                  <div className="mb-2 flex items-center gap-4">
                    <span className="inline-flex h-[30px] items-center rounded-[2px] bg-[#efefef] px-3 text-[13px]">
                      BLOG
                    </span>
                    <span className="text-[13px] text-[#555]">by {post.author}</span>
                  </div>
                  <h3 className="text-[16px] font-medium leading-[1.3] text-[#1d1d1d]">{post.title}</h3>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

