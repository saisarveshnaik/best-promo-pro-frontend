type ProductBadgeProps = {
  label: string;
  tone?: "sale" | "new";
};

export function ProductBadge({ label, tone = "sale" }: ProductBadgeProps) {
  return (
    <span
      className={`inline-flex h-[28px] items-center rounded-full px-[10px] text-[13px] font-medium uppercase leading-none text-white ${
        tone === "sale" ? "bg-accent" : "bg-[#2c7fe5]"
      }`}
    >
      {label}
    </span>
  );
}
