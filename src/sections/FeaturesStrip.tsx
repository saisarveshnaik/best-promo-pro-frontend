import { features } from "../data/mockData";

export function FeaturesStrip() {
  return (
    <section className="border-y border-[#ececec] bg-white">
      <div className="mx-auto max-w-page px-5 md:px-6">
        <div className="grid gap-6 py-8 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article key={feature.title} className="flex items-center gap-4">
                <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full text-black">
                  <Icon size={31} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-[16px] font-medium leading-[1.2] text-[#171717]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-muted">{feature.subtitle}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

