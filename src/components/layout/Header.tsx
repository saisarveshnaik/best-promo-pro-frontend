import {
  BadgePercent,
  ChevronDown,
  Grid2x2,
  Headset,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { topNavItems } from "../../data/mockData";
import { Logo } from "../common/Logo";

export function Header() {
  return (
    <header className="border-b border-[#ebebeb] bg-white">
      <div className="mx-auto max-w-page px-5 md:px-6">
        <div className="flex min-h-[72px] items-center justify-between gap-3 py-3 md:min-h-[92px] md:gap-5 md:py-4">
          <Logo className="origin-left scale-95 md:scale-100" />

          <div className="hidden flex-1 lg:block">
            <div className="flex h-[50px] items-center overflow-hidden rounded-full border border-[#1d1d1d]/40">
              <button className="flex h-full min-w-[190px] items-center justify-center gap-2 border-r border-[#dfdfdf] text-[14px] font-medium text-[#222]">
                All Category
                <ChevronDown size={16} />
              </button>
              <input
                placeholder="Search"
                className="h-full flex-1 px-5 text-[14px] outline-none placeholder:text-[#8f8f8f]"
              />
              <button className="mr-1 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-black text-white">
                <Search size={19} />
              </button>
            </div>
          </div>

          <div className="hidden items-center gap-6 xl:flex">
            <div className="flex items-center gap-3">
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#dedede]">
                <Headset size={24} strokeWidth={1.8} />
              </div>
              <div className="leading-tight">
                <p className="text-[15px] leading-tight text-[#3f3f3f]">entry@example.com</p>
                <p className="text-[16px] font-semibold">(84) 943 446 000</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {[UserRound, Heart, ShoppingCart].map((Icon, index) => (
                <button
                  key={index}
                  type="button"
                  className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#f6f6f6] text-[#111]"
                >
                  <Icon size={21} />
                  {index === 2 ? (
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-white">
                      0
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button className="relative flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#f6f6f6] text-[#111]">
              <ShoppingCart size={19} />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-white">
                0
              </span>
            </button>
            <button className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#dedede]">
              <Menu size={19} />
            </button>
          </div>
        </div>

        <div className="pb-3 lg:hidden">
          <div className="flex h-[44px] items-center overflow-hidden rounded-full border border-[#1d1d1d]/35 pl-4 pr-1">
            <input
              placeholder="Search products"
              className="h-full flex-1 bg-transparent text-[14px] outline-none placeholder:text-[#8f8f8f]"
            />
            <button className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-black text-white">
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-[#ececec] bg-white">
        <div className="mx-auto hidden max-w-page items-center justify-between px-5 md:px-6 xl:flex">
          <div className="flex min-h-[74px] items-center">
            <button className="mr-8 flex h-[74px] items-center gap-3 border-r border-[#ececec] pr-8 text-[16px] font-medium">
              <Grid2x2 size={26} />
              Shop By Categories
              <ChevronDown size={18} />
            </button>

            <nav className="flex items-center gap-10">
              {topNavItems.map((item) => (
                <button
                  key={item.label}
                  className={`flex items-center gap-1 text-[16px] font-medium ${
                    item.active ? "text-accent" : "text-[#181818]"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown ? <ChevronDown size={17} /> : null}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-8 text-[15px] font-medium text-[#151515]">
            <button className="flex items-center gap-2 border-r border-[#ececec] pr-8">
              <BadgePercent size={18} className="text-accent" /> Special Offers
            </button>
            <button className="flex items-center gap-2">
              EN English <ChevronDown size={17} />
            </button>
            <button className="flex items-center gap-2">
              $ USD <ChevronDown size={17} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

