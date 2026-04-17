import { ArrowUpRight, Facebook, Instagram, Play, Twitter } from "lucide-react";
import { Logo } from "../common/Logo";

const footerColumns = [
  {
    title: "Information",
    links: ["Specials", "SiteMap", "Delivery Return", "Privacy Policy", "Terms & Conditions"],
  },
  {
    title: "Customer Services",
    links: ["Brands", "Affiliates", "Returns", "Shopping Cart", "Gift Certificates"],
  },
  {
    title: "Contact Us",
    links: ["About Us", "Contact Us", "FAQs", "Wishlist", "Shopping Cart"],
  },
];

export function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="mx-auto max-w-page px-5 pb-10 pt-12 md:px-6 md:pb-14 md:pt-16">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <Logo dark className="origin-left scale-90 md:scale-95" />
            <p className="mt-4 text-[13px] text-white/45">5611 Wellington Road, Suite 115, Gainesville</p>
            <p className="mt-3 text-[14px] font-medium leading-none md:text-[22px]">(84) 943 446 000</p>
            <a href="#" className="mt-3 inline-block text-[14px] text-white/65 underline">
              entry@support.com
            </a>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-5 text-[16px] font-semibold">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[14px] text-white/65 transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="max-w-[360px] text-[16px] font-semibold leading-[1.35] md:text-[22px]">
              Join Our Newsletter And Get $50 Discount For Your First Order
            </h4>
            <div className="mt-6 flex h-[60px] items-center rounded-full border border-white/20 pl-6 pr-2">
              <input
                className="h-full flex-1 bg-transparent text-[14px] text-white outline-none placeholder:text-white/35"
                placeholder="Your email address..."
              />
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-black/20">
                <ArrowUpRight size={19} />
              </button>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {[Facebook, Instagram, Twitter, Play, Play].map((Icon, index) => (
                <button
                  key={index}
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/20 text-white/85 transition hover:bg-white/10"
                >
                  <Icon size={22} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-page flex-col items-center gap-4 px-5 py-8 text-center md:px-6">
          <p className="text-[13px] text-white/55">
            So Entry (c) 2026. All Rights Reserved. Designed by Smartaddons.Com
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Amazon", "CIRRUS", "VISA", "PayPal", "MasterCard", "eBay"].map((card) => (
              <span
                key={card}
                className="rounded-[3px] border border-white/15 bg-white/5 px-2 py-1 text-[11px] text-white/80"
              >
                {card}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

