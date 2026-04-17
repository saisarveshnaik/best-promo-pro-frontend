type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
  className?: string;
};

export function SectionHeader({ title, actionLabel, className }: SectionHeaderProps) {
  return (
    <div className={`mb-8 flex items-end justify-between ${className ?? ""}`}>
      <h2 className="text-[30px] font-semibold leading-none text-black md:text-[42px]">{title}</h2>
      {actionLabel ? (
        <button
          type="button"
          className="text-[15px] font-medium text-black/75 underline underline-offset-2"
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}
