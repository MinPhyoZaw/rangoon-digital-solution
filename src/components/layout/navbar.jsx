import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

const services = [
  {
    number: "01",
    label: "Digital Solution Transformation",
    href: "/services/digital-solution-transformation",
  },
  {
    number: "02",
    label: "Mobile App Development",
    href: "/services/mobile-app-development",
  },
  {
    number: "03",
    label: "POS Integration",
    href: "/services/pos-integration",
  },
  {
    number: "04",
    label: "Progressive Web App Development",
    href: "/services/progressive-web-app-development",
  },
];

const industries = [
  {
    number: "01",
    label: "Financial Services",
    href: "/industries/financial-services",
  },
  {
    number: "02",
    label: "HR and Staffing",
    href: "/industries/hr-and-staffing",
  },
  {
    number: "03",
    label: "Travel and Hospitality",
    href: "/industries/travel-and-hospitality",
  },
  {
    number: "04",
    label: "Food and Delivery",
    href: "/industries/food-and-delivery",
  },
  {
    number: "05",
    label: "Ecommerce",
    href: "/industries/ecommerce",
  },
  {
    number: "06",
    label: "Healthcare",
    href: "/industries/healthcare",
  },
  {
    number: "07",
    label: "Retail",
    href: "/industries/retail",
  },
];

const directLinks = [
  {
    label: "Process",
    href: "/#process",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function splitIntoColumns(items, columnSize = 5) {
  return Array.from(
    {
      length: Math.ceil(items.length / columnSize),
    },
    (_, index) =>
      items.slice(index * columnSize, index * columnSize + columnSize),
  );
}

function DropdownMenu({ label, items }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1.5 py-2 text-base font-medium text-white/80 transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        aria-haspopup="true"
      >
        {label}

        <ChevronDown
          size={15}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
        />
      </button>

      <div className="invisible absolute left-1/2 top-full z-20 w-max -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/20 via-white/10 to-white/5 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="grid grid-flow-col auto-cols-[minmax(220px,250px)] gap-1">
            {splitIntoColumns(items).map((column, columnIndex) => (
              <div key={`${label}-${columnIndex}`} className="flex flex-col">
                {column.map(({ number, label: itemLabel, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group/item flex items-start gap-3 rounded-xl px-3 py-3 text-left transition-colors duration-200 hover:bg-white/15 focus-visible:bg-white/15 focus-visible:outline-none"
                  >
                    <span className="pt-0.5 text-xs font-semibold tracking-wider text-white/45 transition-colors group-hover/item:text-white/80">
                      {number}
                    </span>

                    <span className="max-w-[190px] text-sm font-medium leading-5 text-white/85 group-hover/item:text-white">
                      {itemLabel}
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="ml-auto mt-0.5 shrink-0 text-white/40 transition-transform group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-white"
                    />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-[100]">
      <div className="mx-auto flex h-[110px] max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Rangoon Digital Solution home"
          className="group shrink-0"
        >
          <Image
            src="/images/logo/rds-new.png"
            alt="Rangoon Digital Solution"
            width={180}
            height={180}
            priority
            sizes="(max-width: 640px) 80px, 96px"
            className="h-20 w-20 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-7 lg:flex xl:gap-9"
          aria-label="Main navigation"
        >
          <DropdownMenu label="Services" items={services} />

          <DropdownMenu label="Industries" items={industries} />

          {directLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="group relative py-2 text-base font-medium text-white/80 transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {label}

              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Quote button */}
          <Button
            asChild
            size="sm"
            className="group hidden h-10 border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-neutral-950 hover:shadow-lg hover:shadow-black/10 sm:inline-flex"
          >
            <Link href="/?scroll=contact-form">
              Get a quote
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </Button>

          {/* Mobile navigation */}
          <details className="relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-white/30 bg-white/10 text-white backdrop-blur-sm [&::-webkit-details-marker]:hidden">
              <Menu size={20} />

              <span className="sr-only">Open navigation menu</span>
            </summary>

            <div className="absolute right-0 top-12 max-h-[75vh] w-[min(90vw,340px)] overflow-y-auto rounded-2xl border border-white/20 bg-neutral-950/85 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="flex flex-col gap-1">
                {/* Mobile services */}
                <details className="group/mobile rounded-xl">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
                    Services
                    <ChevronDown
                      size={16}
                      className="transition-transform group-open/mobile:rotate-180"
                    />
                  </summary>

                  <div className="pb-2">
                    {services.map(({ number, label, href }) => (
                      <Link
                        key={href}
                        href={href}
                        className="flex gap-3 rounded-lg px-3 py-2 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        <span className="text-xs text-white/45">{number}</span>

                        {label}
                      </Link>
                    ))}
                  </div>
                </details>

                {/* Mobile industries */}
                <details className="group/mobile rounded-xl">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
                    Industries
                    <ChevronDown
                      size={16}
                      className="transition-transform group-open/mobile:rotate-180"
                    />
                  </summary>

                  <div className="pb-2">
                    {industries.map(({ number, label, href }) => (
                      <Link
                        key={href}
                        href={href}
                        className="flex gap-3 rounded-lg px-3 py-2 text-sm text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        <span className="text-xs text-white/45">{number}</span>

                        {label}
                      </Link>
                    ))}
                  </div>
                </details>

                {/* Mobile direct links */}
                {directLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="rounded-xl px-3 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    {label}
                  </Link>
                ))}

                <Link
                  href="/?scroll=contact-form"
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-neutral-950"
                >
                  Get a quote
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
