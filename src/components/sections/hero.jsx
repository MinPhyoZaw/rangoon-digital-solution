"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 3,
    type: "video",
    src: "/video/ygn-road.mp4",
    title: "Software should",
    accent: "work for you.",
    description:
      "Choose what your business needs, customize the features, and build a system without unnecessary complexity.",
  },
  {
    id: 1,
    type: "image",
    src: "/images/ygn-ancient.jpg",
    eyebrow: "Alita Software House",
    description:
      "Websites, POS systems, e-commerce, business software, and custom digital solutions designed around real business needs.",
  },
  {
    id: 2,
    type: "image",
    src: "/images/ygn-girls.jpg",
    accent: "Forward Thinking.",
    description:
      "From a simple idea to a complete digital product, we design and build practical software for modern businesses.",
  },
];

const SLIDE_DURATION = 9000;

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-neutral-950 md:min-h-screen">
      {/* =========================
          BACKGROUNDS
      ========================== */}
      {slides.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 h-full w-full transition-opacity duration-[1400ms] ${
            activeSlide === index
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          {item.type === "image" ? (
            <Image
              src={item.src}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          ) : (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/ygn-ancient.jpg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            >
              <source src={item.src} type="video/mp4" />
            </video>
          )}
        </div>
      ))}

      {/* =========================
          MAIN DARK OVERLAY
      ========================== */}
      <div className="absolute inset-0 z-10 bg-black/45" />

      {/* =========================
          CINEMATIC GRADIENT
      ========================== */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/65" />

      {/* =========================
          SLIGHT SIDE DARKNESS
      ========================== */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.3)_100%)]" />

      {/* =========================
          HERO CONTENT
      ========================== */}
      <div
        className={`relative z-20 mx-auto flex min-h-[100svh] w-full max-w-6xl items-center px-5 pb-16 pt-28 text-white md:min-h-screen lg:px-8 ${
          activeSlide === 1 ? "justify-center lg:justify-end" : "justify-center"
        }`}
      >
        <div
          key={activeSlide}
          className={`${
            activeSlide === 0 ? "hero-opening-text" : "hero-slide-text"
          } w-full text-center ${
            activeSlide === 1 ? "lg:ml-auto lg:max-w-2xl lg:text-right" : ""
          }`}
        >
          {/* =========================
              EYEBROW
          ========================== */}
          {slide.eyebrow && (
            <p className="eyebrow-glow mb-5 text-sm font-semibold uppercase tracking-[0.32em] sm:text-base">
              {slide.eyebrow}
            </p>
          )}

          {/* =========================
              MAIN HEADING
          ========================== */}
          <h1
            className={`mx-auto max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl ${
              activeSlide === 0
                ? "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.8)]"
                : "text-white"
            }`}
          >
            {slide.title}

            {slide.accent && (
              <span
                className={`block ${
                  activeSlide === 0
                    ? "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.55)]"
                    : "text-white/80"
                }`}
              >
                {slide.accent}
              </span>
            )}
          </h1>

          {/* =========================
              DESCRIPTION
          ========================== */}
          <p className="slide-description-glow mx-auto mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
            {slide.description}
          </p>

          {/* =========================
              CTA BUTTONS
          ========================== */}
          <div
            className={`hero-buttons mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row ${
              activeSlide === 1 ? "lg:justify-end" : ""
            }`}
          >
            <Button
              asChild
              size="lg"
              className="w-full bg-white px-7 text-neutral-950 shadow-lg shadow-black/20 hover:bg-white/90 sm:w-auto"
            >
              <Link href="#contact">
                Start a Project
                <ArrowRight size={18} />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-white/40 bg-black/20 px-7 text-white backdrop-blur-md hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* =========================
          SLIDE INDICATORS
      ========================== */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              activeSlide === index
                ? "w-10 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                : "w-5 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* =========================
          BOTTOM FADE
      ========================== */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black/50 to-transparent" />

      {/* =========================
          ANIMATIONS + TEXT GLOW
      ========================== */}
      <style jsx>{`
        /*
         * First visit:
         * movie-ending style movement
         * bottom -> center -> stop
         */
        .hero-opening-text {
          animation: openingCredits 1.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        /*
         * Other slides:
         * gentle fade + movement
         */
        .hero-slide-text {
          animation: slideFade 1s ease both;
        }

        /*
         * =========================
         * EYEBROW GLOW
         * =========================
         *
         * Strong white glow with
         * subtle blue cinematic glow.
         */
        .eyebrow-glow {
          color: rgba(255, 255, 255, 0.96);

          text-shadow:
            0 0 4px rgba(255, 255, 255, 0.95),
            0 0 10px rgba(255, 255, 255, 0.75),
            0 0 18px rgba(255, 255, 255, 0.55),
            0 0 30px rgba(96, 165, 250, 0.45),
            0 0 45px rgba(59, 130, 246, 0.25);
        }

        /*
         * =========================
         * DESCRIPTION GLOW
         * =========================
         *
         * Softer than eyebrow so
         * paragraph remains readable.
         */
        .slide-description-glow {
          color: rgba(255, 255, 255, 0.94);

          text-shadow:
            0 0 3px rgba(255, 255, 255, 0.8),
            0 0 8px rgba(255, 255, 255, 0.55),
            0 0 16px rgba(255, 255, 255, 0.35),
            0 0 28px rgba(59, 130, 246, 0.3);
        }

        /*
         * =========================
         * BUTTON ANIMATION
         * =========================
         */
        .hero-buttons {
          animation: buttonReveal 1s ease 1s both;
        }

        /*
         * =========================
         * OPENING ANIMATION
         * =========================
         */
        @keyframes openingCredits {
          0% {
            opacity: 0;
            transform: translateY(170px);
          }

          35% {
            opacity: 0.45;
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /*
         * =========================
         * SLIDE FADE
         * =========================
         */
        @keyframes slideFade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /*
         * =========================
         * BUTTON REVEAL
         * =========================
         */
        @keyframes buttonReveal {
          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /*
         * =========================
         * REDUCED MOTION
         * =========================
         */
        @media (prefers-reduced-motion: reduce) {
          .hero-opening-text,
          .hero-slide-text,
          .hero-buttons {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
