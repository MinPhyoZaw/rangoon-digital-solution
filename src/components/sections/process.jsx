"use client";
import Link from "next/link";

import {
  Search,
  Boxes,
  SlidersHorizontal,
  Rocket,
  ArrowRight,
} from "lucide-react";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    subtitle: "Tell us what your business needs",
    description:
      "We start by understanding your current workflow, problems, users, goals, and the type of software you need.",
    label: "Understand the problem",
  },
  {
    number: "02",
    icon: Boxes,
    title: "Choose Your Base",
    subtitle: "Start with the essential system",
    description:
      "Choose a base solution such as POS, e-commerce, booking system, company website, or another business system.",
    label: "Start simple",
  },
  {
    number: "03",
    icon: SlidersHorizontal,
    title: "Customize",
    subtitle: "Add only the functions you need",
    description:
      "Select additional features based on your business. Each function has its own price, so your estimated cost updates with your requirements.",
    label: "Flexible features & pricing",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Build & Launch",
    subtitle: "We turn your configuration into software",
    description:
      "After confirming the requirements and final quotation, we design, develop, test, and launch your system.",
    label: "From plan to product",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#f7f8fb] py-16 sm:py-28"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-100/70 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-100/60 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
            How It Works
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-6xl">
            From your problem
            <span className="block text-neutral-400">
              to the right software.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-500 sm:text-lg">
            You don't need to pay for a complicated system full of functions you
            never use. Start with the essentials and customize the software
            around your actual business needs.
          </p>
        </motion.div>

        {/* desktop process */}
        <div className="relative mt-20 hidden lg:block">
          {/* connecting line */}
          <div className="absolute left-[8%] right-[8%] top-[42px] h-px bg-neutral-200" />

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "84%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
            }}
            className="absolute left-[8%] top-[42px] h-px bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"
          />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                  className="group relative"
                >
                  {/* milestone */}
                  <div className="relative z-10 flex justify-center">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="flex h-[84px] w-[84px] items-center justify-center rounded-full border border-neutral-200 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.08)] transition-all duration-300 group-hover:border-blue-200"
                    >
                      <Icon size={26} className="text-blue-600" />
                    </motion.div>
                  </div>

                  {/* number */}
                  <div className="mt-7 text-center">
                    <span className="text-xs font-bold tracking-[0.18em] text-blue-600">
                      STEP {step.number}
                    </span>
                  </div>

                  <div className="mt-3 text-center">
                    <h3 className="text-2xl font-bold tracking-tight text-neutral-950">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-neutral-700">
                      {step.subtitle}
                    </p>

                    <p className="mx-auto mt-4 max-w-[270px] text-sm leading-6 text-neutral-500">
                      {step.description}
                    </p>
                  </div>

                  {/* label */}
                  <div className="mt-6 flex justify-center">
                    <span className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-500 shadow-sm">
                      {step.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* mobile / tablet */}
        <div className="mt-12 space-y-0 sm:mt-16 lg:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="relative grid grid-cols-[44px_minmax(0,1fr)] gap-3 sm:grid-cols-[60px_1fr] sm:gap-5"
              >
                {/* mobile timeline */}
                <div className="relative flex flex-col items-center">
                  <div className="relative z-10 flex size-11 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm sm:size-14">
                    <Icon size={19} className="text-blue-600 sm:hidden" />
                    <Icon size={21} className="hidden text-blue-600 sm:block" />
                  </div>

                  {index !== steps.length - 1 && (
                    <div className="h-full min-h-[170px] w-px bg-gradient-to-b from-blue-300 to-neutral-200" />
                  )}
                </div>

                <div className="pb-10">
                  <span className="text-xs font-bold tracking-[0.16em] text-blue-600">
                    STEP {step.number}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-neutral-950 sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-1 font-medium text-neutral-700">
                    {step.subtitle}
                  </p>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
                    {step.description}
                  </p>

                  <span className="mt-4 inline-flex rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-500">
                    {step.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* final direction */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-20 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-neutral-500">
            <span>Business problem</span>

            <ArrowRight size={16} className="text-blue-500" />

            <span>Choose your base</span>

            <ArrowRight size={16} className="text-blue-500" />

            <span>Add your features</span>

            <ArrowRight size={16} className="text-blue-500" />

            <span className="font-semibold text-neutral-950">
              Your software
            </span>
          </div>

          <h3 className="mt-8 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
            Ready to build software around your business?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-neutral-500">
            Start with a base system, choose the functions you need, and see
            your estimated project price update as you customize.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/build-your-system"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Customize Your Software
              <ArrowRight size={17} />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3.5 text-sm font-semibold text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50"
            >
              Discuss Your Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
