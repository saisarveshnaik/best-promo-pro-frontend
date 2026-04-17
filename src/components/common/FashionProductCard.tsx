import { Star } from "lucide-react";
import type { FashionItem } from "../../types/ui";
import { ProductBadge } from "./ProductBadge";

type FashionProductCardProps = {
  item: FashionItem;
};

export function FashionProductCard({ item }: FashionProductCardProps) {
  return (
    <article className="rounded-[8px] border border-[#e8e8e8] bg-white p-4 sm:p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[180px_1fr] sm:gap-5 lg:grid-cols-[200px_1fr] lg:gap-6">
        <div className="relative overflow-hidden rounded-[6px] bg-[#f6f6f6]">
          <div className="absolute left-4 top-4 z-10 flex flex-col gap-2">
            {item.sale ? <ProductBadge label={item.sale} tone="sale" /> : null}
            {item.badge ? <ProductBadge label={item.badge} tone="new" /> : null}
          </div>
          <img
            src={item.image}
            alt={item.title}
            className="h-[210px] w-full object-contain p-4 sm:h-[188px]"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="mb-4 flex gap-1 text-[#efab00]">
            {Array.from({ length: item.rating }).map((_, index) => (
              <Star key={index} size={18} fill="currentColor" />
            ))}
          </div>
          <h3 className="mb-4 text-[16px] font-medium leading-[1.35] text-[#242424]">{item.title}</h3>
          <div className="flex items-center gap-3">
            <span className="text-[20px] font-semibold leading-none text-accent">${item.price.toFixed(2)}</span>
            {item.oldPrice ? (
              <span className="text-[20px] leading-none text-black/45 line-through">
                ${item.oldPrice.toFixed(2)}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

