import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
export function BuilderHeader() {
  return (
    <>
      <header className="border-b border-neutral-200 bg-white/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-5 sm:py-5 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500"
          >
            <ArrowLeft size={17} />
            Back to{" "}
            <span className="text-blue-600">Rangoon Digital Solution</span>
          </Link>
          <div className="flex items-center gap-2 text-right">
            <Sparkles size={17} className="shrink-0 text-blue-600" />
            <span className="text-sm font-semibold sm:text-base">
              Build Your System
            </span>
          </div>
        </div>
      </header>
      <section className="bg-white py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-5 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
            Flexible Software Pricing
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-3xl font-black sm:mt-5 sm:text-5xl lg:text-6xl">
            Build software around{" "}
            <span className="text-neutral-400">your business.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-500 sm:mt-6 sm:text-lg">
            Start with the essential system, then add only the functions your
            business needs.
          </p>
        </div>
      </section>
    </>
  );
}
