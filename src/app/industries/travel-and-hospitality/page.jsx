import Image from "next/image";

import { Navbar } from "@/components/layout/navbar";

export const metadata = {
  title: "Travel and Hospitality | Alita Software House",
  description:
    "Guest experience and operations software for hotels, travel companies, and hospitality brands.",
};

const highlights = [
  "A smoother booking and guest experience across channels",
  "Operations visibility for reservations, service requests, and teams",
  "Improved personalization for loyalty, upsell, and repeat bookings",
  "Faster service delivery from inquiry to checkout",
];

const travelSolutions = [
  {
    number: "01",
    title: "Travel Web and App Development",
    description:
      "Stay competitive in the ever-evolving travel industry with innovative web and app solutions. From marketing features to secure payment gateways, we tailor digital products to improve user experience and support business growth.",
  },
  {
    number: "02",
    title: "Flight & Hotel Booking Software",
    description:
      "Simplify and improve the reservation process with tailored airline and hotel booking software. Support features such as fare logic, seating management, availability, booking workflows, and customer communication.",
  },
  {
    number: "03",
    title: "Travel CRM Software",
    description:
      "Build stronger guest relationships with travel CRM solutions that centralize customer information, preferences, communication history, and booking behavior for more personalized experiences.",
  },
  {
    number: "04",
    title: "Online Booking Engine Software",
    description:
      "Turn your travel portal into a more efficient booking channel with a streamlined booking engine designed to reduce search friction, simplify reservations, and improve conversion opportunities.",
  },
  {
    number: "05",
    title: "Travel Agency Management System",
    description:
      "Manage sales, quotations, follow-ups, bookings, operations, and finance through one centralized system that helps travel agencies reduce manual work and operate more efficiently.",
  },
  {
    number: "06",
    title: "B2B & B2C Travel Portal Development",
    description:
      "Create seamless booking experiences for both travelers and travel agents with custom B2B and B2C portals designed around your services, pricing, workflows, and customer journey.",
  },
];

function TravelSolutionsSection() {
  return (
    <section className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
            What We Build
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-5xl lg:text-6xl">
            Our Travel and Hospitality Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Custom digital solutions designed for travel companies, hotels,
            agencies, booking platforms, and hospitality businesses.
          </p>
        </div>

        {/* Solutions */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {travelSolutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative overflow-hidden rounded-3xl bg-white/[0.05] p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.18em] text-blue-400">
                  {solution.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-blue-400 opacity-60 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100" />
              </div>

              <h3 className="mt-10 text-2xl font-bold tracking-[-0.04em] text-white">
                {solution.title}
              </h3>

              <p className="mt-5 leading-7 text-neutral-400">
                {solution.description}
              </p>

              <span className="pointer-events-none absolute -bottom-8 -right-2 text-[120px] font-black leading-none text-white/[0.025] transition-all duration-500 group-hover:text-white/[0.045]">
                {solution.number}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TravelAndHospitalityPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative isolate min-h-screen overflow-hidden bg-neutral-950">
        {/* Background image */}
        <Image
          src="/images/handt.jpg"
          alt="Luxury hotel and travel experience"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-black/40" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />

        {/* Subtle bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-neutral-950/70 to-transparent" />

        {/* Hero content */}
        <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-[88px] lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Travel and Hospitality
            </p>

            <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">
              Technology that keeps guests coming back.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              We help hospitality and travel businesses create memorable
              experiences with easier bookings, better service workflows, and
              streamlined operations behind the scenes.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative min-h-[400px] overflow-hidden rounded-3xl sm:min-h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
              alt="Hotel and hospitality"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
              Connected Guest Experience
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 md:text-5xl">
              Manage every guest journey from one connected system.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Bring bookings, guest information, payments, service requests, and
              operational workflows together in one centralized platform.
            </p>

            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Whether you manage a hotel, resort, travel agency, or
              transportation service, connected software helps your team work
              faster while delivering a smoother guest experience.
            </p>
          </div>
        </div>
      </section>

      {/* Travel solutions */}
      <TravelSolutionsSection />

      {/* Highlights */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
                Why It Matters
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 md:text-5xl">
                Better operations create better guest experiences.
              </h2>
            </div>

            <div className="space-y-5">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 border-b border-neutral-200 pb-5"
                >
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />

                  <p className="text-lg leading-8 text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
