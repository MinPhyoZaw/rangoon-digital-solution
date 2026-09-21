import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  CreditCard,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";

const defaultChallengeItems = [
  { icon: Building2, label: "Legacy complexity" },
  { icon: ShieldCheck, label: "Compliance risk" },
  { icon: BarChart3, label: "Slow reporting" },
  { icon: Users, label: "Customer friction" },
  { icon: CreditCard, label: "Payment delays" },
  { icon: FileCheck2, label: "Manual paperwork" },
  { icon: CheckCircle2, label: "Process gaps" },
  { icon: Sparkles, label: "UX inconsistency" },
];

export function IndustryPage({
  eyebrow = "Alita Software House",
  title,
  description,
  image,
  highlights = [],
  focusAreas = [],
  challengeItems = defaultChallengeItems,
  ctaHref = "#contact",
  children,
}) {
  return (
    <main className="relative bg-neutral-50 text-neutral-900">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(0,0,0,0.72) 0%,
                rgba(0,0,0,0.45) 42%,
                rgba(0,0,0,0.28) 100%
              ),
              url("${image}")
            `,
          }}
        />

        {/* Radial overlay */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_55%,rgba(0,0,0,0.45)_100%)]" />

        {/* Hero Content */}
        <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 pb-16 pt-[110px] lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-white/75">
              {eyebrow}
            </p>

            <h1 className="text-4xl font-black leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              {title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              {description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white px-7 text-neutral-950 hover:bg-white/90"
              >
                <Link href={ctaHref}>
                  Book a strategy call
                  <ArrowRight size={18} />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/35 bg-white/5 px-7 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
              >
                <Link href="/#services">Explore services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom page sections */}
      {children}
    </main>
  );
}
