import { Search } from "lucide-react";
import { searchSuggestions } from "../data/mockData";

export function SearchSection() {
  return (
    <section className="bg-lightBg pb-16 pt-5">
      <div className="mx-auto max-w-[920px] px-5 md:px-6 text-center">
        <h2 className="mb-8 text-[28px] font-semibold text-black sm:text-[32px] md:text-[48px]">
          What Are You Looking For?
        </h2>

        <div className="flex h-[52px] items-center overflow-hidden rounded-full border border-black/45 pl-4 pr-1 sm:h-[56px] sm:pl-6 sm:pr-2 md:h-[64px]">
          <input
            type="text"
            placeholder="Search"
            className="h-full flex-1 bg-transparent text-[15px] outline-none placeholder:text-[#8d8d8d]"
          />
          <button className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-black text-white sm:h-[48px] sm:w-[48px]">
            <Search size={20} />
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-8">
          {searchSuggestions.map((item) => (
            <button key={item} className="text-[15px] text-[#202020] transition hover:text-accent">
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

