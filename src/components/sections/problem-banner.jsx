import Image from "next/image";

export function ProblemBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[260px] sm:h-[300px] lg:h-[340px]">
        <Image
          src="/images/yangon-1980.jpg"
          alt="1980s Yangon street scene"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-[center_58%]"
        />

        {/* stronger gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

        {/* subtle contrast overlay */}
        <div className="absolute inset-0 bg-black/5" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Software should solve problems,
              <span className="block text-white/75">
                not create new ones.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
              We focus on understanding your business first, then design the
              right digital solution around your goals, workflow, customers,
              and budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}