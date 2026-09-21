"use client";

import {
  Palette,
  Smartphone,
  Search,
  BadgeDollarSign,
  Clock3,
  MessagesSquare,
  Puzzle,
  ShieldCheck,
} from "lucide-react";

import { motion } from "motion/react";

const points = [
  {
    icon: Palette,
    title: "Customized UI Design",
    fact: "Designed for your brand",
    detail: "No generic template look.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first Responsive",
    fact: "Works across every screen",
    detail: "Mobile, tablet, and desktop ready.",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    fact: "Built for speed and visibility",
    detail: "Clean structure and fast loading.",
  },
  {
    icon: BadgeDollarSign,
    title: "Flexible Pricing",
    fact: "Pay only for what you need",
    detail: "Add features based on your budget.",
  },
  {
    icon: Clock3,
    title: "On-time Delivery",
    fact: "Clear scope. Clear timeline.",
    detail: "No unnecessary development delays.",
  },
  {
    icon: MessagesSquare,
    title: "Free Problem Discussion",
    fact: "Start with your real problem",
    detail: "We explore how software can solve it.",
  },
  {
    icon: Puzzle,
    title: "Built Around Your Workflow",
    fact: "Software that fits your business",
    detail: "Not the other way around.",
  },
  {
    icon: ShieldCheck,
    title: "Maintainable Solutions",
    fact: "Built for long-term use",
    detail: "Clean, practical, and easier to improve.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#050816] py-16 text-white sm:py-28"
    >
      {/* Galaxy background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* star field */}
        <div className="why-galaxy absolute inset-0" />

        {/* soft nebula glows */}
        <div className="absolute -left-40 top-0 h-[440px] w-[440px] rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="absolute right-[-180px] top-[18%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[160px]" />

        <div className="absolute bottom-[-180px] left-[35%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.07] blur-[150px]" />

        {/* animated stars */}
        <motion.div
          animate={{
            opacity: [0.25, 1, 0.25],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[12%] top-[22%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,.85)]"
        />

        <motion.div
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-[16%] top-[28%] h-1 w-1 rounded-full bg-blue-300 shadow-[0_0_14px_rgba(147,197,253,.9)]"
        />

        <motion.div
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[24%] left-[28%] h-1 w-1 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,.85)]"
        />

        <motion.div
          animate={{
            opacity: [0.15, 0.8, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute bottom-[12%] right-[32%] h-1 w-1 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(165,243,252,.8)]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
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
          <p className="text-md font-semibold uppercase tracking-[0.22em] text-blue-400">
            Why Choose Alita
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:mt-5 sm:text-5xl lg:text-6xl">
            Built around your business,
            <span className="block text-white/35">
              not around unnecessary complexity.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Clear design, practical development, flexible pricing, and software
            focused on solving the problems that matter to your business.
          </p>
        </motion.div>

        {/* Benefits */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-20 sm:rounded-[2rem] md:grid-cols-2">
          {points.map((point, index) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={point.title}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group relative bg-[#090c18]/90 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-[#0f1526]/95 sm:p-8"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/[0.06] blur-3xl" />
                </div>

                {/* Top row */}
                <div className="relative flex items-start justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: -3,
                      }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-500/10"
                    >
                      <Icon size={21} className="text-blue-400" />
                    </motion.div>

                    <div>
                      <span className="text-xs font-semibold tracking-[0.16em] text-white/25">
                        0{index + 1}
                      </span>

                      <h3 className="mt-1 text-lg font-semibold tracking-tight text-white sm:text-xl">
                        {point.title}
                      </h3>
                    </div>
                  </div>

                  <motion.div
                    className="mt-1 h-2 w-2 rounded-full bg-white/15"
                    whileHover={{
                      scale: 1.8,
                      backgroundColor: "#60a5fa",
                    }}
                  />
                </div>

                {/* Fact */}
                <div className="relative mt-8">
                  <p className="text-xl font-semibold tracking-[-0.025em] text-white/90 sm:text-2xl">
                    {point.fact}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/40">
                    {point.detail}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="relative mt-8 h-px w-full overflow-hidden bg-white/10">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "35%",
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.05,
                    }}
                    className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
