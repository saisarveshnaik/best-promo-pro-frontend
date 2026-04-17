type LogoProps = {
  dark?: boolean;
  className?: string;
};

export function Logo({ dark = false, className }: LogoProps) {
  return (
    <div
      className={`inline-flex items-end gap-1 font-extrabold uppercase tracking-[0.08em] ${
        dark ? "text-white" : "text-black"
      } ${className ?? ""}`}
    >
      <span className="text-[13px] leading-[0.9] md:text-[18px]">Best Promo Pro</span>
      <span className="mb-1 h-0 w-0 border-b-[4px] border-l-[6px] border-t-[4px] border-b-transparent border-l-[#e63054] border-t-transparent md:mb-[2px] md:border-b-[5px] md:border-l-[7px] md:border-t-[5px]" />
    </div>
  );
}
