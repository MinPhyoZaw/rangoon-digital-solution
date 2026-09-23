import Link from "next/link";

import {
  ArrowRight,
  Bell,
  Boxes,
  Bug,
  Camera,
  CheckCircle2,
  Cloud,
  Code2,
  CreditCard,
  Database,
  FileUp,
  Gauge,
  Globe2,
  LayoutDashboard,
  MapPin,
  MessageSquare,
  MonitorSmartphone,
  PackageCheck,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  TestTube2,
  Users,
  Wrench,
} from "lucide-react";

import {
  SiDart,
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";

import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Mobile App Development | Alita Software House",
  description:
    "Custom mobile app development for businesses, startups, ecommerce, booking, delivery, marketplaces, and internal operations.",
};

const appTypes = [
  {
    number: "01",
    icon: Users,
    title: "Customer Mobile Apps",
    description:
      "Create mobile experiences that help customers access services, manage accounts, place requests, and stay connected with your business.",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Ecommerce Apps",
    description:
      "Build mobile shopping experiences with product discovery, cart, checkout, payments, promotions, and order tracking.",
  },
  {
    number: "03",
    icon: Globe2,
    title: "Booking & Reservation Apps",
    description:
      "Let customers search availability, make reservations, receive confirmations, and manage bookings directly from their phones.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Delivery & Logistics Apps",
    description:
      "Connect customers, operators, and delivery teams with order assignment, delivery status, maps, and real-time workflow updates.",
  },
  {
    number: "05",
    icon: LayoutDashboard,
    title: "Internal Business Apps",
    description:
      "Replace manual processes with internal mobile tools for staff operations, approvals, field work, reporting, and task management.",
  },
  {
    number: "06",
    icon: Store,
    title: "Marketplace Apps",
    description:
      "Build platforms that connect customers with vendors, service providers, or sellers through one mobile ecosystem.",
  },
];

const developmentProcess = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your users, business goals, workflows, and the problem the app needs to solve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the features, user roles, system architecture, integrations, and development priorities.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "We design clear user journeys, screens, interactions, and layouts around how people will actually use the product.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We build the mobile app, backend services, APIs, database, and supporting business systems.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "We test functionality, user flows, performance, device behavior, integrations, and important edge cases.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "We prepare the product for production and support deployment to the appropriate distribution channels.",
  },
  {
    number: "07",
    title: "Support",
    description:
      "After launch, we continue improving stability, compatibility, performance, and product capabilities.",
  },
];

const technologies = [
  { name: "Flutter", icon: SiFlutter },
  { name: "Dart", icon: SiDart },
  { name: "React Native", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Firebase", icon: SiFirebase },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
];

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Authentication",
    description:
      "Secure login, registration, role-based access, account recovery, and protected application flows.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description:
      "Keep users informed with order updates, reminders, alerts, promotions, and important activity.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description:
      "Connect payment gateways, checkout workflows, receipts, transaction records, and payment status.",
  },
  {
    icon: MapPin,
    title: "Maps & Location",
    description:
      "Support addresses, navigation, delivery workflows, nearby services, and location-based experiences.",
  },
  {
    icon: Camera,
    title: "Camera & Media",
    description:
      "Enable photos, image upload, document upload, profile pictures, receipts, and other media workflows.",
  },
  {
    icon: Cloud,
    title: "Offline & Sync",
    description:
      "Design selected workflows to continue working in low-connectivity environments and synchronize when connection returns.",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Updates",
    description:
      "Keep application state current with live order changes, status updates, messaging, and operational activity.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description:
      "Give your operations team a web-based control center for users, content, orders, reporting, and system management.",
  },
  {
    icon: Gauge,
    title: "Analytics",
    description:
      "Track product activity, users, operational trends, transactions, and key business indicators.",
  },
  {
    icon: Code2,
    title: "API Integration",
    description:
      "Connect the app with payment services, maps, logistics systems, CRMs, existing software, and other platforms.",
  },
];

const problems = [
  {
    problem: "Customers rely on phone calls or messaging",
    solution:
      "We create self-service mobile experiences that let customers access services, make bookings, place orders, or submit requests without unnecessary back-and-forth.",
    software: "Customer Self-Service App",
  },
  {
    problem: "Orders and requests are difficult to manage",
    solution:
      "We connect the mobile app to an operational dashboard so staff can manage requests, statuses, customers, and business activity in one place.",
    software: "Mobile App + Admin Dashboard",
  },
  {
    problem: "Customers cannot see progress",
    solution:
      "We add clear status tracking and notifications so users can understand what is happening without repeatedly contacting your team.",
    software: "Real-Time Status System",
  },
  {
    problem: "Staff depend on spreadsheets and manual workflows",
    solution:
      "We turn repetitive internal processes into structured mobile workflows for field staff, operations teams, approvals, and reporting.",
    software: "Internal Business App",
  },
];

const maintenanceItems = [
  {
    icon: Bug,
    title: "Bug Fixes",
    description:
      "Resolve issues discovered after launch and improve application stability.",
  },
  {
    icon: Smartphone,
    title: "Device Compatibility",
    description:
      "Keep the application working smoothly as mobile operating systems and devices evolve.",
  },
  {
    icon: Gauge,
    title: "Performance Improvements",
    description:
      "Optimize loading, responsiveness, network usage, and important user flows.",
  },
  {
    icon: ShieldCheck,
    title: "Security Updates",
    description:
      "Maintain dependencies, authentication flows, access controls, and critical security-related components.",
  },
  {
    icon: Sparkles,
    title: "New Features",
    description:
      "Expand the application as your product, customers, and operational needs grow.",
  },
  {
    icon: Rocket,
    title: "Release Support",
    description:
      "Support production releases, deployment updates, and version management.",
  },
];

function AppsWeBuildSection() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
            What We Build
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-6xl">
            Mobile apps built around your business model.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            We do not force every business into the same type of application.
            The product structure depends on your users, operations, revenue
            model, and the tasks the app needs to support.
          </p>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {appTypes.map(({ number, icon: Icon, title, description }) => (
            <div key={title}>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon size={22} />
                </div>

                <span className="text-sm font-semibold tracking-[0.18em] text-neutral-300">
                  {number}
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-bold tracking-[-0.04em] text-neutral-950">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DevelopmentProcessSection() {
  return (
    <section className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
              Development Process
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              From idea to launch, one clear process.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-400">
              Good mobile development is more than writing code. We move from
              business understanding to design, development, testing, launch,
              and continuous improvement.
            </p>
          </div>

          <div className="border-t border-white/10">
            {developmentProcess.map((step) => (
              <div
                key={step.number}
                className="grid gap-5 border-b border-white/10 py-7 sm:grid-cols-[70px_0.7fr_1.3fr]"
              >
                <span className="text-sm font-bold tracking-[0.18em] text-blue-400">
                  {step.number}
                </span>

                <h3 className="text-xl font-bold text-white">{step.title}</h3>

                <p className="leading-7 text-neutral-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AppAndDashboardSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
            Complete Business System
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl">
            More than an app — a complete business system.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Many mobile products need two connected sides: a simple experience
            for the user and a powerful system for the team running the
            business.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="rounded-[32px] bg-neutral-950 p-8 text-white">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <Smartphone size={27} />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
              Mobile App
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em]">
              Built for your users.
            </h3>

            <div className="mt-8 space-y-4">
              {[
                "Customer accounts",
                "Orders & bookings",
                "Payments",
                "Status tracking",
                "Notifications",
                "Personalized experiences",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-neutral-300"
                >
                  <CheckCircle2 size={17} className="text-blue-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <ArrowRight size={24} />
            </div>
          </div>

          <div className="rounded-[32px] bg-blue-50 p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600">
              <LayoutDashboard size={27} />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Admin Dashboard
            </p>

            <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-neutral-950">
              Built for your operations.
            </h3>

            <div className="mt-8 space-y-4">
              {[
                "User management",
                "Orders & requests",
                "Content management",
                "Status controls",
                "Reporting",
                "Operational oversight",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <CheckCircle2 size={17} className="text-blue-600" />
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

function AppArchitectureSection() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
              Architecture
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl">
              Mobile in front. Powerful infrastructure behind it.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
              A reliable mobile product usually depends on more than the app
              itself. We connect the interface with APIs, databases, cloud
              services, authentication, and business logic behind the scenes.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Smartphone,
                title: "Mobile Interface",
                text: "The experience customers or staff use on their phones.",
              },
              {
                icon: Code2,
                title: "API Layer",
                text: "Connects the mobile application with business services and external systems.",
              },
              {
                icon: Database,
                title: "Data Layer",
                text: "Stores users, transactions, content, operational data, and application state.",
              },
              {
                icon: Cloud,
                title: "Cloud Services",
                text: "Supports storage, notifications, deployment, synchronization, and integrations.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl bg-white p-7">
                <Icon size={24} className="text-blue-600" />

                <h3 className="mt-6 text-xl font-bold text-neutral-950">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-neutral-600">{text}</p>
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
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
            Technology We Use
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl">
            Modern technology behind every mobile experience.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            We select technology based on product requirements, integrations,
            scalability, maintenance, and the business environment the app needs
            to support.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-9">
          {technologies.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group flex min-h-[130px] flex-col items-center justify-center rounded-2xl bg-neutral-50 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              <Icon
                size={36}
                className="text-neutral-800 transition-colors group-hover:text-blue-600"
              />

              <p className="mt-4 text-sm font-semibold text-neutral-900">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
            App Capabilities
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
            The features your mobile product needs to work in the real world.
          </h2>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <div key={title}>
              <Icon size={24} className="text-blue-400" />

              <h3 className="mt-5 text-xl font-bold">{title}</h3>

              <p className="mt-3 text-sm leading-6 text-neutral-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
              Problems We Solve
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl">
              Turn manual processes into mobile experiences.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
              We start with the operational problem, then design the mobile
              product around the workflow that needs to improve.
            </p>
          </div>

          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {problems.map((item) => (
              <div key={item.problem} className="py-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  The Problem
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-neutral-950">
                  {item.problem}
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  {item.solution}
                </p>

                <div className="mt-5 flex items-center gap-2">
                  <Sparkles size={16} className="text-blue-600" />

                  <span className="text-sm font-semibold text-blue-600">
                    {item.software}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MaintenanceSection() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
            After Launch
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl">
            We stay with your product after launch.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Mobile products change over time. Operating systems evolve, customer
            expectations change, and businesses need new features.
          </p>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {maintenanceItems.map(({ icon: Icon, title, description }) => (
            <div key={title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600">
                <Icon size={22} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-neutral-950">
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

function CTASection() {
  return (
    <section className="bg-blue-600 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
            Start Your Product
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Have an app idea? Let&apos;s turn it into a product.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Tell us how your business works, what your users need, and where the
            current process creates friction. We&apos;ll help define the right
            mobile solution, features, and technology.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white px-7 text-neutral-950 hover:bg-white/90"
            >
              <Link href="/#contact">
                Start a project
                <ArrowRight size={18} />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/#services">Explore services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MobileAppDevelopmentPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-neutral-950 text-white md:min-h-screen">
        <Navbar />

        <div className="absolute inset-0 h-full w-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/ygn-ancient.jpg"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          >
            <source src="/video/app-video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 z-10 bg-black/20" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="relative z-20 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-5 pb-16 pt-28 md:min-h-screen lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-white/65">
              Alita Software House
            </p>

            <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Mobile App Development
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              From idea to launch, we build mobile apps around real users, real
              workflows, and the way your business actually operates.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
              Mobile Experiences
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-6xl">
              Boost Your User Experience
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-neutral-600">
              A great mobile app should feel simple, fast, and natural to use.
              At Alita, we design and develop mobile experiences that help your
              customers connect with your business more easily, complete tasks
              faster, and enjoy every interaction with your brand.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
              Whether you need a customer app, booking platform, ecommerce
              application, delivery app, marketplace, or internal business tool,
              we build around your users, your workflow, and the way your
              business actually operates.
            </p>
          </div>
        </div>
      </section>

      <AppsWeBuildSection />

      <DevelopmentProcessSection />

      <AppAndDashboardSection />

      <AppArchitectureSection />

      <TechnologySection />

      <CapabilitiesSection />

      <ProblemsSection />

      <MaintenanceSection />

      <CTASection />
    </main>
  );
}
