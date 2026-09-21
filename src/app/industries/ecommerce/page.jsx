import {
  BarChart3,
  Boxes,
  CreditCard,
  HeartHandshake,
  PackageCheck,
  Search,
  ShoppingCart,
  Sparkles,
  Store,
  Truck,
  Users,
} from "lucide-react";

import { IndustryPage } from "@/components/industries/industry-page";

export const metadata = {
  title: "Ecommerce | Alita Software House",
  description:
    "Ecommerce platforms and digital commerce systems built to increase conversions and streamline operations.",
};

const highlights = [
  "Higher conversion through simpler customer journeys",
  "Better inventory, order, and fulfillment visibility",
  "More efficient marketing and customer retention flows",
  "Scalable systems that match business growth",
];

const focusAreas = [
  {
    number: "01",
    title: "Storefront Experience",
    description:
      "Create better product discovery, smoother checkout, and more engaging shopping journeys.",
  },
  {
    number: "02",
    title: "Order & Inventory",
    description:
      "Coordinate stock levels, supplier orders, and fulfillment operations with less friction.",
  },
  {
    number: "03",
    title: "Retention Systems",
    description:
      "Build email flows, loyalty actions, and personalized offers that keep customers returning.",
  },
];

const commerceJourney = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description:
      "Customers find products through search, categories, campaigns, recommendations, and promotions.",
  },
  {
    icon: ShoppingCart,
    step: "02",
    title: "Add to Cart",
    description:
      "A fast, simple cart experience helps customers move toward checkout with less friction.",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Checkout",
    description:
      "Secure checkout flows support payments, delivery details, discounts, and order confirmation.",
  },
  {
    icon: PackageCheck,
    step: "04",
    title: "Fulfillment",
    description:
      "Orders move into fulfillment with inventory checks, packing, status updates, and shipment preparation.",
  },
  {
    icon: Truck,
    step: "05",
    title: "Delivery",
    description:
      "Customers receive clear delivery status while teams track order progress across fulfillment channels.",
  },
  {
    icon: HeartHandshake,
    step: "06",
    title: "Retention",
    description:
      "Post-purchase experiences, loyalty, recommendations, and remarketing help turn first-time buyers into repeat customers.",
  },
];

const ecommerceSolutions = [
  {
    number: "01",
    title: "Custom Ecommerce Website",
    description:
      "Build a fast, responsive online storefront tailored to your brand, catalog, customer journey, and business model.",
    features: [
      "Product Catalog",
      "Search & Filtering",
      "Cart & Checkout",
      "Responsive Storefront",
    ],
  },
  {
    number: "02",
    title: "Ecommerce Mobile App",
    description:
      "Create mobile shopping experiences with personalized discovery, order tracking, promotions, and customer accounts.",
    features: [
      "iOS & Android",
      "Push Notifications",
      "Order Tracking",
      "Customer Profiles",
    ],
  },
  {
    number: "03",
    title: "Marketplace Platform",
    description:
      "Build multi-vendor marketplaces with seller onboarding, product management, commissions, orders, and platform administration.",
    features: [
      "Vendor Dashboard",
      "Seller Approval",
      "Commission Rules",
      "Multi-Vendor Orders",
    ],
  },
  {
    number: "04",
    title: "Order Management System",
    description:
      "Centralize order processing, fulfillment, cancellations, returns, and operational status across sales channels.",
    features: [
      "Order Workflow",
      "Fulfillment Status",
      "Returns",
      "Admin Controls",
    ],
  },
  {
    number: "05",
    title: "Inventory & Product Management",
    description:
      "Keep products, variants, pricing, and stock levels organized across warehouses, stores, and online channels.",
    features: [
      "Stock Tracking",
      "Product Variants",
      "Low Stock Alerts",
      "Catalog Management",
    ],
  },
  {
    number: "06",
    title: "Payment & Checkout Integration",
    description:
      "Integrate secure payment methods, promotions, coupons, delivery fees, and checkout rules around your market.",
    features: ["Payment Gateways", "Discounts", "Coupons", "Checkout Rules"],
  },
];

const problems = [
  {
    icon: ShoppingCart,
    problem: "Customers abandon complicated checkout flows",
    solution:
      "We simplify cart and checkout experiences, reduce unnecessary steps, and make purchasing easier across desktop and mobile.",
    software: "Conversion-Focused Storefront",
  },
  {
    icon: Boxes,
    problem: "Inventory becomes difficult to control",
    solution:
      "We connect product, stock, order, and fulfillment data so teams can see what is available and what needs attention.",
    software: "Inventory & Order Management",
  },
  {
    icon: Users,
    problem: "Managing vendors or sellers becomes manual",
    solution:
      "We create seller onboarding, approval, product management, commission, and reporting workflows for marketplace businesses.",
    software: "Marketplace Management System",
  },
  {
    icon: Truck,
    problem: "Order fulfillment is fragmented",
    solution:
      "We centralize packing, shipping status, delivery information, cancellations, and returns into one operational flow.",
    software: "Fulfillment Management Platform",
  },
];

const capabilities = [
  {
    icon: Store,
    title: "Storefront",
    items: [
      "Product discovery",
      "Categories",
      "Search",
      "Recommendations",
      "Promotions",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Commerce",
    items: ["Cart", "Checkout", "Coupons", "Payments", "Order history"],
  },
  {
    icon: Boxes,
    title: "Operations",
    items: [
      "Inventory",
      "Orders",
      "Returns",
      "Fulfillment",
      "Vendor operations",
    ],
  },
  {
    icon: BarChart3,
    title: "Growth",
    items: [
      "Customer analytics",
      "Sales reporting",
      "Retention",
      "Loyalty",
      "Campaign insights",
    ],
  },
];

function CommerceJourneySection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-600">
            Commerce Journey
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 md:text-5xl lg:text-6xl">
            Every step of the buying journey, connected.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            We design ecommerce systems around the complete customer journey,
            from product discovery and checkout to fulfillment, delivery, and
            repeat purchase.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-neutral-200 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
            {commerceJourney.map(({ icon: Icon, step, title, description }) => (
              <div key={title} className="group relative">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950 text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-violet-600">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <span className="mt-6 block text-xs font-bold tracking-[0.18em] text-violet-600">
                  {step}
                </span>

                <h3 className="mt-3 text-xl font-bold tracking-[-0.03em] text-neutral-950">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EcommerceSolutionsSection() {
  return (
    <section className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-400">
            Ecommerce Solutions
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-5xl lg:text-6xl">
            Commerce software built around how you sell.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            From a single-brand online store to a full multi-vendor marketplace,
            we build flexible commerce systems around your products, customers,
            and operations.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ecommerceSolutions.map((solution) => (
            <div
              key={solution.title}
              className="group rounded-3xl bg-white/[0.05] p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
            >
              <span className="text-sm font-semibold tracking-[0.18em] text-violet-400">
                {solution.number}
              </span>

              <h3 className="mt-8 text-2xl font-bold tracking-[-0.04em] text-white">
                {solution.title}
              </h3>

              <p className="mt-5 leading-7 text-neutral-400">
                {solution.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {solution.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-white/[0.07] px-3 py-1.5 text-xs text-neutral-300"
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

function EcommerceProblemsSection() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-600">
            Challenges We Solve
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 md:text-5xl">
            Fix the friction that slows commerce down.
          </h2>
        </div>

        <div className="mt-16 divide-y divide-neutral-200 border-y border-neutral-200">
          {problems.map(({ icon: Icon, problem, solution, software }) => (
            <div
              key={problem}
              className="grid gap-6 py-10 lg:grid-cols-[80px_1fr_1.2fr]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                <Icon size={22} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  The Problem
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-neutral-950">
                  {problem}
                </h3>
              </div>

              <div>
                <p className="leading-7 text-neutral-600">{solution}</p>

                <div className="mt-5 flex items-center gap-2">
                  <Sparkles size={16} className="text-violet-600" />

                  <span className="text-sm font-semibold text-neutral-900">
                    {software}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommercePlatformSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-600">
              Platform Capabilities
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-black tracking-[-0.05em] text-neutral-950 md:text-5xl">
              One commerce platform, every critical operation.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
              Your ecommerce system can connect the customer storefront with
              checkout, inventory, fulfillment, vendors, and analytics instead
              of relying on disconnected tools.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {capabilities.map(({ icon: Icon, title, items }) => (
              <div key={title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-neutral-950">
                  {title}
                </h3>

                <div className="mt-5 space-y-3">
                  {items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-neutral-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GrowthSection() {
  return (
    <section className="bg-violet-600 py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Built for Growth
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-5xl">
              Turn more visitors into customers — and customers into repeat
              buyers.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {[
              [
                "Conversion",
                "Simpler shopping journeys and faster checkout reduce unnecessary purchasing friction.",
              ],
              [
                "Retention",
                "Loyalty, personalized offers, and customer data support stronger repeat-order experiences.",
              ],
              [
                "Operations",
                "Connected orders, inventory, and fulfillment give teams better day-to-day visibility.",
              ],
              [
                "Scalability",
                "Flexible architecture supports larger catalogs, more customers, vendors, and sales channels.",
              ],
            ].map(([title, text]) => (
              <div key={title}>
                <h3 className="text-xl font-bold">{title}</h3>

                <p className="mt-3 leading-7 text-white/75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EcommercePage() {
  return (
    <IndustryPage
      eyebrow="Ecommerce"
      title="Commerce experiences designed to convert and scale."
      description="We build ecommerce platforms and digital storefront systems that help growing businesses sell more efficiently, retain customers, and manage operations without complexity."
      image="/images/eco.png"
      highlights={highlights}
      focusAreas={focusAreas}
    >
      <CommerceJourneySection />

      <EcommerceSolutionsSection />

      <EcommerceProblemsSection />

      <CommercePlatformSection />

      <GrowthSection />
    </IndustryPage>
  );
}
