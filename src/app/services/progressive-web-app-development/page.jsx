import Link from "next/link";

import {
  ArrowRight,
  Bell,
  CheckCircle2,
  Cloud,
  Code2,
  Download,
  Gauge,
  Globe2,
  Layers3,
  MonitorSmartphone,
  PackageCheck,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WifiOff,
  Zap,
} from "lucide-react";

import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Progressive Web App Development | Alita Software House",
  description:
    "Progressive Web App development for businesses that need fast, installable, reliable, and app-like web experiences.",
};

const benefits = [
  {
    icon: Zap,
    title: "Fast Experiences",
    description:
      "PWAs are designed to load quickly and keep interactions smooth across desktop and mobile devices.",
  },
  {
    icon: Download,
    title: "Installable",
    description:
      "Users can add the app to their home screen and launch it like a native application without requiring an app store download.",
  },
  {
    icon: WifiOff,
    title: "Offline Support",
    description:
      "Selected content and workflows can remain available even when the connection is weak or temporarily unavailable.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description:
      "Keep users informed with updates, reminders, order status, offers, and other important events.",
  },
  {
    icon: Smartphone,
    title: "App-Like UX",
    description:
      "Create an experience that feels closer to a mobile app while keeping the reach and simplicity of the web.",
  },
  {
    icon: RefreshCw,
    title: "Easy Updates",
    description:
      "Deploy updates from the web without asking every user to manually install a new app version.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Installable Web App",
    description:
      "Let users save the app to their device and access it from their home screen.",
    features: [
      "Web App Manifest",
      "App Icons",
      "Standalone Mode",
      "Install Prompt",
    ],
  },
  {
    number: "02",
    title: "Offline & Low-Network Support",
    description:
      "Cache important pages and assets so selected parts of the application remain useful when connectivity drops.",
    features: ["Service Worker", "Caching", "Offline Pages", "Background Sync"],
  },
  {
    number: "03",
    title: "Push Notifications",
    description:
      "Send timely updates to users for orders, reminders, alerts, promotions, and important application events.",
    features: ["Notifications", "Reminders", "Status Updates", "Re-engagement"],
  },
  {
    number: "04",
    title: "Responsive Application UI",
    description:
      "Deliver one consistent experience across smartphones, tablets, laptops, and desktop screens.",
    features: [
      "Mobile First",
      "Responsive Layout",
      "Touch Friendly",
      "Cross Device",
    ],
  },
  {
    number: "05",
    title: "Secure Web Architecture",
    description:
      "Use secure HTTPS-based delivery, protected routes, authentication, and role-based application flows.",
    features: ["HTTPS", "Authentication", "Protected Routes", "Permissions"],
  },
  {
    number: "06",
    title: "Backend & API Integration",
    description:
      "Connect the PWA with business APIs, databases, payments, maps, notifications, and other third-party services.",
    features: ["REST APIs", "Database", "Payments", "External Integrations"],
  },
];

const pwaUseCases = [
  {
    title: "Ecommerce",
    description:
      "Fast storefronts, cart, checkout, notifications, and installable shopping experiences.",
  },
  {
    title: "Booking Platforms",
    description:
      "Appointment, hotel, travel, and reservation systems that work smoothly across devices.",
  },
  {
    title: "Delivery & Logistics",
    description:
      "Order status, driver workflows, tracking, notifications, and operational dashboards.",
  },
  {
    title: "Internal Business Tools",
    description:
      "Staff tools, approvals, field operations, inventory, and reporting that can work in low-connectivity environments.",
  },
  {
    title: "Customer Portals",
    description:
      "Account management, service requests, documents, payments, and status tracking through one web app.",
  },
  {
    title: "Retail & POS Extensions",
    description:
      "Installable retail tools for inventory, branch operations, customer access, and mobile staff workflows.",
  },
];

const developmentProcess = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand the users, business requirements, network conditions, and workflows the PWA needs to support.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the application architecture, offline strategy, caching behavior, data flows, and integrations.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create responsive interfaces and app-like user journeys optimized for mobile and desktop use.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We build the frontend, backend, APIs, service worker, manifest, authentication, and required integrations.",
  },
  {
    number: "05",
    title: "Test",
    description:
      "We test responsiveness, caching, installation, offline behavior, performance, and critical user flows.",
  },
  {
    number: "06",
    title: "Deploy",
    description:
      "We prepare the application for production and configure secure hosting, updates, and monitoring.",
  },
];

const technologies = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Vercel", icon: SiVercel },
];

function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-neutral-950 text-white">
      <Navbar />

      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-[20%] h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[130px]" />
        <div className="absolute bottom-[8%] right-[6%] h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[150px]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 pb-16 pt-28 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Alita Software House
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Progressive Web App
            <span className="block text-white/40">Development</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Build fast, installable, and app-like web experiences that work
            across devices without forcing users through a traditional app store
            download.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white px-7 text-neutral-950 hover:bg-white/90"
            >
              <Link href="/?scroll=contact-form">
                Build a PWA
                <ArrowRight size={18} />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 px-7 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="#pwa-capabilities">Explore capabilities</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
              Web Meets App
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-6xl">
              The reach of the web with the feel of an app.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-neutral-600">
              A Progressive Web App combines modern web technology with app-like
              capabilities such as installation, offline support, push
              notifications, and responsive mobile-first interfaces.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
              For many businesses, a PWA can provide a practical way to serve
              both desktop and mobile users through one product while keeping
              deployment and updates simpler.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
            Why PWA
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl">
            Built for speed, reach, and everyday usability.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            PWAs are useful when businesses want a mobile-friendly digital
            product without maintaining separate experiences for every device.
          </p>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                <Icon size={22} />
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-neutral-950">
                {title}
              </h3>

              <p className="mt-3 leading-7 text-neutral-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section id="pwa-capabilities" className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
            PWA Capabilities
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            More than a responsive website.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            We build Progressive Web Apps with the capabilities needed to behave
            more like a real application across supported browsers and devices.
          </p>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div key={item.number}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-[0.18em] text-cyan-400">
                  {item.number}
                </span>

                <span className="h-px w-10 bg-white/15" />
              </div>

              <h3 className="mt-7 text-2xl font-bold tracking-[-0.04em]">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-400">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-neutral-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
            PWA vs Traditional Experience
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl">
            One product that lives between web and mobile.
          </h2>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-[32px] bg-neutral-50 lg:grid-cols-3">
          <div className="p-8 lg:p-10">
            <Globe2 size={28} className="text-neutral-500" />

            <h3 className="mt-6 text-2xl font-bold text-neutral-950">
              Traditional Website
            </h3>

            <div className="mt-7 space-y-4">
              {[
                "Runs in the browser",
                "No installation",
                "Limited offline behavior",
                "Typically navigation-first",
                "Easy deployment",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-neutral-600">
                  <CheckCircle2
                    size={17}
                    className="mt-1 shrink-0 text-neutral-400"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-cyan-600 p-8 text-white lg:p-10">
            <MonitorSmartphone size={28} />

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-white/65">
              Progressive Web App
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Web reach + app-like experience
            </h3>

            <div className="mt-7 space-y-4">
              {[
                "Runs across supported browsers",
                "Can be installed",
                "Offline capabilities",
                "Push notifications",
                "Responsive app-like UI",
                "Updates through the web",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-white/85">
                  <CheckCircle2 size={17} className="mt-1 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 lg:p-10">
            <Smartphone size={28} className="text-neutral-500" />

            <h3 className="mt-6 text-2xl font-bold text-neutral-950">
              Native Mobile App
            </h3>

            <div className="mt-7 space-y-4">
              {[
                "Installed from an app store",
                "Platform-specific capabilities",
                "Deep device integration",
                "Separate release process",
                "May require separate platforms",
              ].map((item) => (
                <div key={item} className="flex gap-3 text-neutral-600">
                  <CheckCircle2
                    size={17}
                    className="mt-1 shrink-0 text-neutral-400"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
              Development Process
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl">
              Build the experience around real usage conditions.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
              A useful PWA needs more than a manifest and an install button. We
              design around connectivity, device behavior, performance, data,
              and the workflows users need to complete.
            </p>
          </div>

          <div className="border-t border-neutral-200">
            {developmentProcess.map((step) => (
              <div
                key={step.number}
                className="grid gap-5 border-b border-neutral-200 py-8 sm:grid-cols-[70px_0.65fr_1.35fr]"
              >
                <span className="text-sm font-bold tracking-[0.18em] text-cyan-600">
                  {step.number}
                </span>

                <h3 className="text-xl font-bold text-neutral-950">
                  {step.title}
                </h3>

                <p className="leading-7 text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600">
            Technology We Use
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl">
            Modern web technology behind the experience.
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {technologies.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group flex min-h-[135px] flex-col items-center justify-center rounded-2xl bg-neutral-50 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-50"
            >
              <Icon
                size={36}
                className="text-neutral-800 transition-colors group-hover:text-cyan-600"
              />

              <p className="mt-4 text-sm font-semibold text-neutral-900">
                {name}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
          {[
            "Service Workers",
            "Web App Manifest",
            "Caching",
            "Web Push",
            "REST APIs",
            "HTTPS",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-600"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
              Where PWA Fits
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              A strong option for businesses that need web reach and mobile
              convenience.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-400">
              We recommend PWA architecture when it fits the actual product and
              business requirements rather than using it simply because it is a
              technology trend.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {pwaUseCases.map((item) => (
              <div key={item.title}>
                <span className="mb-5 block h-1.5 w-8 rounded-full bg-cyan-400" />

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-cyan-600 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
            Build Your PWA
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Need an app experience without the complexity of separate apps?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/80">
            Tell us how your users access your product, what needs to work on
            mobile, and where connectivity or installation creates friction.
            We&apos;ll help determine whether a Progressive Web App is the right
            solution.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-9 bg-white px-7 text-neutral-950 hover:bg-white/90"
          >
            <Link href="/#contact">
              Discuss your PWA
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function ProgressiveWebAppDevelopmentPage() {
  return (
    <main className="bg-white">
      <HeroSection />

      <IntroSection />

      <BenefitsSection />

      <CapabilitiesSection />

      <ComparisonSection />

      <ProcessSection />

      <TechnologySection />

      <UseCasesSection />

      <CTASection />
    </main>
  );
}
