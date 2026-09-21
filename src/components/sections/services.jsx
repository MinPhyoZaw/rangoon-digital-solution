"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Globe2,
  MonitorCog,
  ShoppingCart,
  Smartphone,
  PanelsTopLeft,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

import { AnimatePresence, motion } from "motion/react";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Company Websites",
    description:
      "Fast, SEO-ready websites that communicate your company clearly and turn visitors into real inquiries.",
    visual: "website",
    image: "/images/services/company-websites.jpg",
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Modern storefront experiences designed to make browsing, purchasing, and managing products simple.",
    visual: "ecommerce",
    image: "/images/services/ecommerce.jpg",
  },
  {
    number: "03",
    icon: MonitorCog,
    title: "Business Systems",
    description:
      "Custom admin dashboards, workflows, internal tools, and management systems built around how your business operates.",
    visual: "dashboard",
    image: "/images/services/business-systems.jpg",
  },
  {
    number: "04",
    icon: PanelsTopLeft,
    title: "POS Systems",
    description:
      "Practical point-of-sale software for retail shops, game centers, restaurants, and service businesses.",
    visual: "pos",
    image: "/images/services/pos-systems.jpg",
  },
  {
    number: "05",
    icon: Smartphone,
    title: "Web & Mobile UI",
    description:
      "Responsive digital experiences focused on speed, clarity, accessibility, and intuitive navigation.",
    visual: "mobile",
    image: "/images/services/web-mobile-ui.jpg",
  },
  {
    number: "06",
    icon: Wrench,
    title: "Maintenance",
    description:
      "Bug fixes, redesigns, improvements, deployment support, and ongoing technical assistance.",
    visual: "maintenance",
    image: "/images/services/maintenance.jpg",
  },
];

export function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-16 text-neutral-950 sm:py-28"
    >
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-52 top-24 h-96 w-96 rounded-full bg-blue-50 blur-[130px]" />

        <div className="absolute -right-52 bottom-20 h-[30rem] w-[30rem] rounded-full bg-violet-50 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* heading */}
        <div className="mb-12 grid gap-6 sm:mb-20 sm:gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              What we build
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-black tracking-[-0.04em] sm:mt-5 sm:text-5xl lg:text-6xl">
              Digital solutions built around
              <span className="text-neutral-400"> real business needs.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="max-w-xl self-end text-base leading-7 text-neutral-500 sm:text-lg sm:leading-8"
          >
            From your public-facing website to the systems your team uses behind
            the scenes, Alita designs and develops products that help businesses
            operate more effectively.
          </motion.p>
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          {/* service list */}
          <div className="min-w-0">
            {services.map((service, index) => {
              const Icon = service.icon;
              const active = activeService === index;

              return (
                <motion.button
                  key={service.title}
                  type="button"
                  onMouseEnter={() => setActiveService(index)}
                  onFocus={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group relative w-full border-t border-neutral-200 py-5 text-left last:border-b sm:py-7"
                >
                  <div className="grid grid-cols-[28px_minmax(0,1fr)_auto] items-start gap-3 sm:grid-cols-[40px_1fr_auto] sm:gap-5">
                    <span
                      className={`pt-1 text-xs font-semibold transition-colors ${
                        active ? "text-blue-600" : "text-neutral-400"
                      }`}
                    >
                      {service.number}
                    </span>

                    <div>
                      <div className="flex items-center gap-3">
                        <Icon
                          size={20}
                          className={
                            active ? "text-blue-600" : "text-neutral-400"
                          }
                        />

                        <h3
                          className={`text-xl font-semibold tracking-tight transition-all duration-300 sm:text-3xl ${
                            active
                              ? "translate-x-2 text-neutral-950"
                              : "text-neutral-500"
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      <AnimatePresence>
                        {active && (
                          <motion.p
                            initial={{
                              opacity: 0,
                              height: 0,
                              y: 8,
                            }}
                            animate={{
                              opacity: 1,
                              height: "auto",
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                            }}
                            transition={{
                              duration: 0.35,
                            }}
                            className="max-w-lg overflow-hidden pt-3 leading-6 text-neutral-500 sm:pl-8 sm:pt-4 sm:leading-7"
                          >
                            {service.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <ArrowUpRight
                      size={21}
                      className={`mt-1 transition-all duration-300 ${
                        active
                          ? "translate-x-1 -translate-y-1 text-blue-600"
                          : "text-neutral-300"
                      }`}
                    />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* sticky visual */}
          <div className="relative hidden lg:block">
            <div className="sticky top-28">
              <ServiceVisual service={services[activeService]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceVisual({ service }) {
  return (
    <div className="relative min-h-[560px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={service.visual}
          initial={{
            opacity: 0,
            scale: 0.96,
            y: 20,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            scale: 0.97,
            y: -10,
            filter: "blur(6px)",
          }}
          transition={{
            duration: 0.55,
            ease: "easeInOut",
          }}
          className="group relative h-[560px] overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-white shadow-[0_30px_100px_rgba(15,23,42,0.10)]"
        >
          <Image
            src={service.image}
            alt={`${service.title} design`}
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-95"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
