"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";

function TypewriterText({
  text,
  speed = 50,
  startDelay = 0,
  showCursor = true,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let typingTimer;
    let delayTimer;
    let currentIndex = 0;

    setDisplayedText("");
    setFinished(false);

    delayTimer = setTimeout(() => {
      typingTimer = setInterval(() => {
        currentIndex += 1;
        setDisplayedText(text.slice(0, currentIndex));

        if (currentIndex >= text.length) {
          clearInterval(typingTimer);
          setFinished(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(delayTimer);
      clearInterval(typingTimer);
    };
  }, [text, speed, startDelay]);

  return (
    <>
      {displayedText}

      {showCursor && (
        <span
          className={`ml-1 inline-block h-[1em] w-[2px] translate-y-[2px] bg-current ${
            finished ? "animate-pulse" : ""
          }`}
        />
      )}
    </>
  );
}

function FacebookIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.972h-1.513c-1.49 0-1.956.931-1.956 1.887v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073Z" />
    </svg>
  );
}

function TelegramIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.944 2.506a1.5 1.5 0 0 0-1.539-.244L2.847 9.04c-1.247.481-1.23 1.247-.228 1.554l4.504 1.405 1.744 5.398c.212.587.108.821.723.821.475 0 .684-.216.949-.475l2.162-2.102 4.497 3.321c.829.457 1.426.221 1.633-.769l2.956-13.927c.303-1.214-.464-1.765-1.843-1.76ZM8.099 11.676l10.431-6.583c.521-.316 1-.146.607.203l-8.605 7.765-.335 3.574-2.098-4.959Z" />
    </svg>
  );
}

function XIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.26-8.3L2.98 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.72L8.44 4.05H6.6L17.8 19.84Z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />

      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com/rangoondigitalsolution",
    icon: FacebookIcon,
    color: "bg-[#1877F2] hover:bg-[#166FE5]",
  },
  {
    label: "Telegram",
    href: "https://t.me/rangoondigitalsolution",
    icon: TelegramIcon,
    color: "bg-[#229ED9] hover:bg-[#1C8DBF]",
  },
  {
    label: "X",
    href: "https://x.com/rangoondigital",
    icon: XIcon,
    color: "bg-black hover:bg-neutral-800",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/rangoondigitalsolution",
    icon: InstagramIcon,
    color:
      "bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] hover:opacity-90",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#073b3e] text-white">
      {/* Header */}
      <header className="relative z-20">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 text-white sm:px-8">
          <Link href="/" className="text-lg font-bold">
            Rangoon Digital Solution
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back home
          </Link>
        </div>
      </header>

      {/* Contact section */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-[#063f42] lg:relative lg:min-h-[calc(100vh-120px)] lg:rounded-3xl">
          {/* Mobile image */}
          <div className="relative aspect-[16/9] w-full lg:hidden">
            <Image
              src="/images/contact-background.png"
              alt="People communicating"
              fill
              priority
              sizes="100vw"
              className="object-contain object-center"
            />
          </div>

          {/* Desktop background */}
          <div className="absolute inset-0 hidden lg:block">
            <Image
              src="/images/contact-background.png"
              alt="People communicating"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/25" />
          </div>

          {/* Contact card */}
          <div className="relative z-10 flex justify-center px-4 py-8 sm:px-6 lg:min-h-[calc(100vh-120px)] lg:items-center lg:px-10 lg:py-16">
            <div className="w-full max-w-md rounded-2xl border border-white/25 bg-[#063f42]/95 p-6 text-white sm:p-8 lg:bg-black/20 lg:p-10 lg:backdrop-blur-sm">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                Contact us
              </p>

              {/* Typing heading */}
              <h1 className="mt-3 min-h-[48px] text-3xl font-bold sm:text-4xl lg:min-h-[60px] lg:text-5xl">
                <TypewriterText
                  text="Let's talk."
                  speed={100}
                  startDelay={300}
                />
              </h1>

              {/* Typing description */}
              <p className="mt-4 min-h-[112px] text-sm leading-7 text-white/75 sm:min-h-[84px] sm:text-base">
                <TypewriterText
                  text="Have a website, mobile application or business software idea? Contact Rangoon Digital Solution and tell us what you need."
                  speed={25}
                  startDelay={1600}
                  showCursor={false}
                />
              </p>

              {/* Contact details */}
              <div className="mt-7 space-y-5">
                <Link
                  href="tel:+959969471202"
                  className="flex items-center gap-4 text-white/85 transition hover:text-white"
                >
                  <Phone size={20} className="shrink-0" />

                  <div>
                    <p className="text-xs text-white/50">Phone</p>
                    <p className="mt-1 text-sm">09 969 471 202</p>
                    <p className="text-sm">09 798 245 930</p>
                  </div>
                </Link>

                <Link
                  href="mailto:rangoondigitalsolution27@gmail.com"
                  className="flex items-start gap-4 text-white/85 transition hover:text-white"
                >
                  <Mail size={20} className="mt-1 shrink-0" />

                  <div className="min-w-0">
                    <p className="text-xs text-white/50">Email</p>

                    <p className="mt-1 break-all text-sm">
                      rangoondigitalsolution27@gmail.com
                    </p>
                  </div>
                </Link>

                <div className="flex items-center gap-4 text-white/85">
                  <MapPin size={20} className="shrink-0" />

                  <div>
                    <p className="text-xs text-white/50">Location</p>
                    <p className="mt-1 text-sm">Yangon, Myanmar</p>
                  </div>
                </div>
              </div>

              {/* Social icons */}
              <div className="mt-7 border-t border-white/20 pt-6">
                <p className="mb-4 text-sm text-white/60">Follow us</p>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map(({ label, href, icon: Icon, color }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg ${color}`}
                    >
                      <Icon size={18} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
