import {
  BarChart3,
  Boxes,
  Building2,
  CreditCard,
  Gift,
  PackageSearch,
  ReceiptText,
  RefreshCw,
  ShoppingBag,
  Store,
  Tags,
  Truck,
  Users,
} from "lucide-react";

import { IndustryPage } from "@/components/industries/industry-page";

export const metadata = {
  title: "Retail | Alita Software House",
  description:
    "Retail software and digital operations systems for store networks and customer-driven businesses.",
};

const highlights = [
  "Better inventory accuracy across stores and channels",
  "Faster customer service and order handling",
  "Clearer visibility into sales, stock, and performance",
  "A more consistent experience across online and in-store touchpoints",
];

const focusAreas = [
  {
    number: "01",
    title: "POS & Sales",
    description:
      "Support checkout, loyalty, and customer flows with faster and more reliable transactions.",
  },
  {
    number: "02",
    title: "Inventory Control",
    description:
      "Track stock, usage, and reorder cycles across your operational network in real time.",
  },
  {
    number: "03",
    title: "Customer Insights",
    description:
      "Turn store activity and customer patterns into actionable plans for growth and retention.",
  },
];

const retailSolutions = [
  {
    number: "01",
    icon: CreditCard,
    title: "Retail POS System",
    description:
      "Build fast and reliable point-of-sale software for checkout, discounts, receipts, payment handling, and daily sales operations.",
    features: [
      "Checkout",
      "Discounts",
      "Receipts",
      "Payment Methods",
      "Cashier Access",
    ],
  },
  {
    number: "02",
    icon: Boxes,
    title: "Inventory Management System",
    description:
      "Track stock levels, product movement, variants, low-stock items, transfers, and reorder needs across your stores.",
    features: [
      "Stock Tracking",
      "Variants",
      "Low Stock Alerts",
      "Stock Transfer",
      "Reorder Levels",
    ],
  },
  {
    number: "03",
    icon: Building2,
    title: "Multi-Store Management",
    description:
      "Manage multiple branches from one system with centralized product, pricing, inventory, sales, and staff visibility.",
    features: [
      "Branch Management",
      "Store-Level Stock",
      "Central Pricing",
      "Staff Access",
      "Store Reports",
    ],
  },
  {
    number: "04",
    icon: Truck,
    title: "Purchasing & Supplier Management",
    description:
      "Organize suppliers, purchase orders, incoming stock, costs, and procurement workflows in one place.",
    features: [
      "Suppliers",
      "Purchase Orders",
      "Receiving",
      "Cost Tracking",
      "Procurement History",
    ],
  },
  {
    number: "05",
    icon: Gift,
    title: "Loyalty & Customer Management",
    description:
      "Create customer profiles, loyalty points, promotions, and personalized offers that support stronger repeat business.",
    features: [
      "Customer Profiles",
      "Loyalty Points",
      "Rewards",
      "Promotions",
      "Purchase History",
    ],
  },
  {
    number: "06",
    icon: BarChart3,
    title: "Retail Analytics Dashboard",
    description:
      "Turn sales and stock activity into clear reports that help owners understand store performance and make better decisions.",
    features: [
      "Sales Reports",
      "Best Sellers",
      "Stock Reports",
      "Store Performance",
      "Profit Insights",
    ],
  },
];

const retailProblems = [
  {
    icon: PackageSearch,
    problem: "Stock numbers are inaccurate or difficult to track",
    solution:
      "We connect sales, purchases, transfers, and adjustments so stock updates stay consistent across daily retail operations.",
    software: "Inventory Management System",
  },
  {
    icon: ReceiptText,
    problem: "Checkout and sales records are handled manually",
    solution:
      "We digitize checkout, receipts, payment recording, discounts, and cashier activity with a structured POS workflow.",
    software: "Retail POS Platform",
  },
  {
    icon: Building2,
    problem: "Multiple branches are hard to manage",
    solution:
      "We centralize store-level sales, stock, staff, and pricing so management can see what is happening across every location.",
    software: "Multi-Store Management Platform",
  },
  {
    icon: Truck,
    problem: "Purchasing and supplier orders are scattered",
    solution:
      "We organize supplier records, purchase orders, receiving, and procurement history into one workflow.",
    software: "Purchasing & Supplier System",
  },
];

const retailOperations = [
  {
    icon: Store,
    title: "Front of Store",
    items: [
      "POS checkout",
      "Discounts",
      "Receipts",
      "Customer lookup",
      "Payment handling",
    ],
  },
  {
    icon: Boxes,
    title: "Back Office",
    items: [
      "Inventory",
      "Purchasing",
      "Suppliers",
      "Stock adjustments",
      "Product management",
    ],
  },
  {
    icon: Users,
    title: "Customers",
    items: [
      "Profiles",
      "Loyalty",
      "Purchase history",
      "Rewards",
      "Personalized offers",
    ],
  },
  {
    icon: BarChart3,
    title: "Management",
    items: [
      "Sales analytics",
      "Branch reports",
      "Stock insights",
      "Staff performance",
      "Business overview",
    ],
  },
];

const retailFlow = [
  {
    icon: Tags,
    step: "01",
    title: "Product Added",
    description:
      "Products, variants, barcodes, pricing, and stock information are created in the system.",
  },
  {
    icon: Truck,
    step: "02",
    title: "Stock Received",
    description:
      "Incoming inventory from suppliers is recorded and added to available stock.",
  },
  {
    icon: ShoppingBag,
    step: "03",
    title: "Sale Completed",
    description:
      "Cashiers process purchases through POS while stock updates automatically.",
  },
  {
    icon: RefreshCw,
    step: "04",
    title: "Stock Updated",
    description:
      "Inventory balances reflect sales, transfers, returns, and adjustments.",
  },
  {
    icon: Gift,
    step: "05",
    title: "Customer Retained",
    description:
      "Customer history, loyalty, and promotions support future repeat purchases.",
  },
  {
    icon: BarChart3,
    step: "06",
    title: "Performance Reviewed",
    description:
      "Owners and managers use reports to understand sales, stock, and store performance.",
  },
];

function RetailFlowSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-600">
            Retail Operations
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 md:text-5xl lg:text-6xl">
            Connect products, sales, stock, and customers in one retail flow.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Retail software should connect what happens at checkout with what
            happens in inventory, purchasing, customer management, and business
            reporting.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-neutral-200 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
            {retailFlow.map(({ icon: Icon, step, title, description }) => (
              <div key={title} className="group relative">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950 text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-amber-600">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <span className="mt-6 block text-xs font-bold tracking-[0.18em] text-amber-600">
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

function RetailSolutionsSection() {
  return (
    <section className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-400">
            Retail Software Solutions
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-5xl lg:text-6xl">
            Software designed around modern retail operations.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            We can build a complete retail platform or individual systems
            depending on the size, workflow, and operational needs of your
            business.
          </p>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {retailSolutions.map(
            ({ number, icon: Icon, title, description, features }) => (
              <div key={title}>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.07] text-amber-400">
                    <Icon size={22} />
                  </div>

                  <span className="text-sm font-semibold tracking-[0.18em] text-white/25">
                    {number}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-bold tracking-[-0.04em]">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-400">{description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-neutral-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function RetailProblemsSection() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-600">
              Challenges We Solve
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-black tracking-[-0.05em] text-neutral-950 md:text-5xl">
              Solve the operational problems that slow retail down.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
              We look at how sales, inventory, staff, suppliers, and customers
              interact, then build software that reduces manual work and gives
              teams better visibility.
            </p>
          </div>

          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {retailProblems.map(
              ({ icon: Icon, problem, solution, software }) => (
                <div
                  key={problem}
                  className="grid gap-5 py-8 md:grid-cols-[55px_1fr]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neutral-950">
                      {problem}
                    </h3>

                    <p className="mt-3 leading-7 text-neutral-600">
                      {solution}
                    </p>

                    <p className="mt-4 text-sm font-semibold text-amber-700">
                      {software}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function RetailOperationsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-600">
            Connected Retail Platform
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 md:text-5xl">
            One system connecting every part of the store.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Bring front-of-store activity, back-office operations, customer
            engagement, and management reporting into one connected retail
            environment.
          </p>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {retailOperations.map(({ icon: Icon, title, items }) => (
            <div key={title}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-white">
                <Icon size={24} />
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-neutral-950">
                {title}
              </h3>

              <div className="mt-5 space-y-3">
                {items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-neutral-600"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RetailScaleSection() {
  return (
    <section className="bg-amber-50 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
              Built to Scale
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 md:text-5xl">
              From one shop to a growing retail network.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              Start with the features your business needs today and expand the
              system as your store count, inventory, staff, and customer base
              grow.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {[
              [
                "Single Store",
                "POS, products, basic stock control, customer records, and daily sales reporting.",
              ],
              [
                "Multi-Branch",
                "Centralized products, branch stock, transfers, store-level sales, and staff permissions.",
              ],
              [
                "Omnichannel",
                "Connect physical stores with ecommerce, customer orders, fulfillment, and shared inventory.",
              ],
              [
                "Management",
                "Central dashboards for sales, stock, purchasing, customers, and store performance.",
              ],
            ].map(([title, text]) => (
              <div key={title}>
                <h3 className="text-xl font-bold text-neutral-950">{title}</h3>

                <p className="mt-3 leading-7 text-neutral-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RetailPage() {
  return (
    <IndustryPage
      eyebrow="Retail"
      title="Tools that help your retail operations stay agile."
      description="We create software that helps retail teams improve sales flow, manage stock, and build smoother customer experiences across every channel."
      image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
      highlights={highlights}
      focusAreas={focusAreas}
    >
      <RetailFlowSection />

      <RetailSolutionsSection />

      <RetailProblemsSection />

      <RetailOperationsSection />

      <RetailScaleSection />
    </IndustryPage>
  );
}
