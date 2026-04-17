import { Eye, Heart, Layers, ShoppingCart } from "lucide-react";
import type { ProductItem } from "../../types/ui";
import { ProductBadge } from "./ProductBadge";

type ProductCardProps = {
  product: ProductItem;
  className?: string;
  showActions?: boolean;
  imageClassName?: string;
};

export function ProductCard({
  product,
  className,
  showActions = false,
  imageClassName,
}: ProductCardProps) {
  return (
    <article
      className={`group relative rounded-[8px] border bg-white p-4 sm:p-6 ${
        product.featured ? "border-black/60" : "border-[#e6e6e6]"
      } ${className ?? ""}`}
    >
      {(product.badge || product.secondaryBadge) && (
        <div className="absolute left-4 top-4 z-10 flex flex-col gap-2 sm:left-6 sm:top-5">
          {product.badge && (
            <ProductBadge label={product.badge} tone={product.badge === "NEW" ? "new" : "sale"} />
          )}
          {product.secondaryBadge && (
            <ProductBadge
              label={product.secondaryBadge}
              tone={product.secondaryBadge === "NEW" ? "new" : "sale"}
            />
          )}
        </div>
      )}

      {showActions && (
        <div className="absolute right-4 top-4 z-10 flex flex-col gap-2 sm:right-5 sm:top-5 sm:gap-3">
          {[Heart, Layers, Eye].map((Icon, index) => (
            <button
              key={index}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black/80 shadow-soft transition hover:text-accent sm:h-12 sm:w-12"
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
      )}

      <div className="mb-5 overflow-hidden rounded-[6px] bg-[#f6f6f6]">
        <img
          src={product.image}
          alt={product.title}
          className={`h-[200px] w-full object-contain p-4 sm:h-[238px] ${imageClassName ?? ""}`}
          loading="lazy"
        />
      </div>

      <p className="mb-2 text-[14px] text-muted">{product.category}</p>
      <h3 className="mb-4 line-clamp-2 min-h-[50px] text-[16px] font-medium leading-[1.35] text-[#252525] sm:min-h-[58px]">
        {product.title}
      </h3>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="text-[20px] font-semibold leading-none text-accent">
          ${product.price.toFixed(2)}
        </span>
        {product.oldPrice ? (
          <span className="text-[20px] leading-none text-black/45 line-through">
            ${product.oldPrice.toFixed(2)}
          </span>
        ) : null}
      </div>

      <button
        type="button"
        className="mt-5 flex h-[48px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#f2f2f2] text-[14px] font-medium text-[#1f1f1f] transition hover:bg-[#ebebeb] md:pointer-events-none md:absolute md:bottom-6 md:left-6 md:right-6 md:mt-0 md:h-[56px] md:w-auto md:translate-y-2 md:text-[15px] md:opacity-0 md:duration-200 md:group-hover:pointer-events-auto md:group-hover:translate-y-0 md:group-hover:opacity-100"
      >
        <ShoppingCart size={20} />
        Add To Cart
      </button>
    </article>
  );
}

