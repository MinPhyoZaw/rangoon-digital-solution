import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  Check,
  CheckCircle2,
  Cloud,
  CreditCard,
  Database,
  PackageSearch,
  ReceiptText,
  RefreshCcw,
  ShieldCheck,
  ShoppingBag,
  Store,
  Tags,
  Users,
  WifiOff,
  Zap,
} from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "POS Integration | Alita Software House",
  description:
    "Custom POS systems for retail stores, restaurants, service businesses, and growing multi-branch operations.",
};

const posSolutions = [
  {
    number: "01",
    icon: CreditCard,
    title: "Point of Sale",
    description:
      "Fast and simple checkout workflows for sales, discounts, payments, receipts, and cashier operations.",
    features: [
      "Fast checkout",
      "Multiple payment methods",
      "Discounts",
      "Receipts",
    ],
  },
  {
    number: "02",
    icon: Boxes,
    title: "Inventory Management",
    description:
      "Keep your products and stock connected with every sale, purchase, return, and adjustment.",
    features: [
      "Stock tracking",
      "Low-stock alerts",
      "Product variants",
      "Stock adjustments",
    ],
  },
  {
    number: "03",
    icon: PackageSearch,
    title: "Product Management",
    description:
      "Manage products, categories, pricing, barcodes, variants, and inventory from one organized system.",
    features: ["Product catalog", "Barcode support", "Categories", "Pricing"],
  },
  {
    number: "04",
    icon: Users,
    title: "Customer Management",
    description:
      "Keep customer profiles, purchase history, loyalty activity, and important customer information together.",
    features: [
      "Customer profiles",
      "Purchase history",
      "Loyalty",
      "Customer insights",
    ],
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "Understand sales, products, inventory, cash flow, and daily business performance through clear reporting.",
    features: [
      "Daily sales",
      "Best sellers",
      "Inventory reports",
      "Revenue overview",
    ],
  },
  {
    number: "06",
    icon: Building2,
    title: "Multi-Branch POS",
    description:
      "Connect multiple stores with centralized products, pricing, inventory, staff access, and management reporting.",
    features: [
      "Branch management",
      "Stock transfers",
      "Central pricing",
      "Branch reports",
    ],
  },
];

const problems = [
  {
    problem: "Sales are still recorded manually",
    description:
      "Manual calculations and handwritten records slow down checkout and make daily reporting difficult.",
    solution: "Digital POS & Checkout",
  },
  {
    problem: "Actual stock is difficult to know",
    description:
      "When sales and inventory are not connected, stock numbers quickly become inaccurate.",
    solution: "Real-Time Inventory Tracking",
  },
  {
    problem: "Owners cannot easily see daily performance",
    description:
      "Without centralized data, understanding revenue, best-selling products, and cash movement requires manual work.",
    solution: "Sales & Management Dashboard",
  },
  {
    problem: "Multiple branches operate separately",
    description:
      "Different products, pricing, and stock records across stores make growing a retail network harder to manage.",
    solution: "Multi-Branch POS Platform",
  },
];

const posFlow = [
  {
    number: "01",
    icon: Tags,
    title: "Product",
    text: "Create products, pricing, variants, and barcodes.",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Sale",
    text: "Process sales quickly through the checkout screen.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Payment",
    text: "Record cash, digital, or other supported payment methods.",
  },
  {
    number: "04",
    icon: ReceiptText,
    title: "Receipt",
    text: "Generate a clear transaction record for every sale.",
  },
  {
    number: "05",
    icon: RefreshCcw,
    title: "Inventory",
    text: "Update stock automatically after the transaction.",
  },
  {
    number: "06",
    icon: BarChart3,
    title: "Report",
    text: "Turn every transaction into useful business information.",
  },
];

const pricingPlans = [
  {
    name: "Starter POS",
    description:
      "For small shops that need a simple and reliable sales and stock system.",
    monthly: "40,000",
    yearly: "400,000",
    yearlyNote: "Save 80,000 MMK",
    popular: false,
    features: [
      "POS checkout",
      "Product management",
      "Basic inventory",
      "Sales history",
      "Daily reports",
      "Cashier account",
      "Basic support",
    ],
  },
  {
    name: "Business POS",
    description:
      "For growing stores that need deeper inventory, customer, and reporting tools.",
    monthly: "70,000",
    yearly: "700,000",
    yearlyNote: "Save 140,000 MMK",
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced inventory",
      "Customer management",
      "Supplier management",
      "Purchase records",
      "Advanced reports",
      "Role-based staff access",
      "Priority support",
    ],
  },
  {
    name: "Multi-Branch",
    description:
      "For businesses operating several stores or requiring a customized POS workflow.",
    monthly: "Custom",
    yearly: "Custom",
    yearlyNote: "Based on requirements",
    popular: false,
    features: [
      "Everything in Business",
      "Multiple branches",
      "Central inventory",
      "Stock transfers",
      "Central management",
      "Branch-level reporting",
      "Custom integrations",
      "Custom features",
    ],
  },
];

function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-neutral-950 text-white">
      <Navbar />

      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-[18%] h-[380px] w-[380px] rounded-full bg-emerald-500/15 blur-[120px]" />
        <div className="absolute bottom-[5%] right-[5%] h-[480px] w-[480px] rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 pb-16 pt-28 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Alita Software House
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            POS Integration
            <span className="block text-white/40">
              Built for real business.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            From checkout and inventory to reports and multi-branch operations,
            we build POS systems around the way your business actually sells,
            manages stock, and serves customers.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white px-7 text-neutral-950 hover:bg-white/90"
            >
              <Link href="/?scroll=contact-form">
                Get a POS solution
                <ArrowRight size={18} />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 px-7 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="#pricing">View pricing</Link>
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
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
              Modern Retail Operations
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-6xl">
              More than a checkout system.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-neutral-600">
              A modern POS should connect what happens at the counter with
              inventory, products, customers, staff, purchasing, and business
              reporting.
            </p>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
              We build systems for small shops, retail stores, restaurants,
              service businesses, and growing multi-branch operations without
              adding unnecessary complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PosFlowSection() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
            Connected Sales Flow
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl">
            Every sale updates the rest of your business.
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-neutral-200 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
            {posFlow.map(({ number, icon: Icon, title, text }) => (
              <div key={number} className="group relative">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950 text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-emerald-600">
                  <Icon size={23} />
                </div>

                <span className="mt-6 block text-xs font-bold tracking-[0.18em] text-emerald-600">
                  {number}
                </span>

                <h3 className="mt-3 text-xl font-bold text-neutral-950">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PosSolutionsSection() {
  return (
    <section className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
            POS Solutions
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Everything your business needs behind the counter.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            Start with essential POS features and expand the system as your
            products, staff, customers, and branches grow.
          </p>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {posSolutions.map(
            ({ number, icon: Icon, title, description, features }) => (
              <div key={title}>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.07] text-emerald-400">
                    <Icon size={22} />
                  </div>

                  <span className="text-sm font-semibold text-white/25">
                    {number}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-bold tracking-tight">
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

function ProblemsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
              Problems We Solve
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl">
              Replace manual retail work with one connected system.
            </h2>

            {/* Illustration */}
            <div className="mt-10 max-w-[520px]">
              <Image
                src="/images/pos.png"
                alt="Retail cashier and customer using a POS system"
                width={900}
                height={600}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* Right */}
          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {problems.map((item) => (
              <div key={item.problem} className="py-8">
                <h3 className="text-xl font-bold text-neutral-950">
                  {item.problem}
                </h3>

                <p className="mt-3 leading-7 text-neutral-600">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-emerald-600" />

                  <span className="text-sm font-semibold text-emerald-700">
                    {item.solution}
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

function OfflineOnlineSection() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
            Flexible Deployment
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl">
            Online, offline, or connected across branches.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            The right POS architecture depends on your location, internet
            reliability, number of branches, devices, and business workflow.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[30px] bg-white p-8">
            <WifiOff size={27} className="text-emerald-600" />

            <h3 className="mt-6 text-2xl font-bold text-neutral-950">
              Offline POS
            </h3>

            <p className="mt-4 leading-7 text-neutral-600">
              Ideal for businesses that need reliable local operation even when
              internet connectivity is unavailable or unstable.
            </p>
          </div>

          <div className="rounded-[30px] bg-neutral-950 p-8 text-white">
            <Cloud size={27} className="text-emerald-400" />

            <h3 className="mt-6 text-2xl font-bold">Cloud POS</h3>

            <p className="mt-4 leading-7 text-neutral-400">
              Access business information from connected devices and manage
              operations through centralized cloud infrastructure.
            </p>
          </div>

          <div className="rounded-[30px] bg-white p-8">
            <Building2 size={27} className="text-emerald-600" />

            <h3 className="mt-6 text-2xl font-bold text-neutral-950">
              Multi-Branch POS
            </h3>

            <p className="mt-4 leading-7 text-neutral-600">
              Connect several locations with centralized products, stock,
              pricing, permissions, transfers, and management reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-24">
      <style>{`
        #billing-toggle:not(:checked) ~ .pricing-content .yearly-price {
          display: none;
        }

        #billing-toggle:checked ~ .pricing-content .monthly-price {
          display: none;
        }

        #billing-toggle:checked ~ .pricing-content .yearly-price {
          display: block;
        }

        #billing-toggle:checked + label .toggle-circle {
          transform: translateX(28px);
        }

        #billing-toggle:checked + label .toggle-bg {
          background: #059669;
        }

        #billing-toggle:not(:checked) + label .monthly-label {
          color: #171717;
        }

        #billing-toggle:checked + label .yearly-label {
          color: #171717;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
            Pricing
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-6xl">
            Choose the POS plan that fits your business.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Start with the features you need today and upgrade as your
            operations grow.
          </p>
        </div>

        {/* Important:
            checkbox and pricing-content are siblings so CSS can switch pricing.
        */}
        <div className="mt-10">
          <input id="billing-toggle" type="checkbox" className="peer sr-only" />

          <label
            htmlFor="billing-toggle"
            className="mx-auto flex w-fit cursor-pointer items-center gap-4"
          >
            <span className="monthly-label text-sm font-semibold text-neutral-400 transition-colors">
              Monthly
            </span>

            <span className="toggle-bg relative block h-8 w-[60px] rounded-full bg-neutral-900 transition-colors duration-300">
              <span className="toggle-circle absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-transform duration-300" />
            </span>

            <span className="yearly-label text-sm font-semibold text-neutral-400 transition-colors">
              Yearly
            </span>

            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Save 2 months
            </span>
          </label>

          <div className="pricing-content mt-14 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[30px] p-8 ${
                  plan.popular
                    ? "bg-neutral-950 text-white"
                    : "bg-neutral-50 text-neutral-950"
                }`}
              >
                {plan.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">
                    Most Popular
                  </span>
                )}

                <h3 className="text-2xl font-bold">{plan.name}</h3>

                <p
                  className={`mt-4 max-w-sm text-sm leading-6 ${
                    plan.popular ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Monthly */}
                <div className="monthly-price mt-8">
                  {plan.monthly === "Custom" ? (
                    <div className="text-4xl font-black">Custom</div>
                  ) : (
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-black tracking-tight">
                        {plan.monthly}
                      </span>

                      <span
                        className={
                          plan.popular
                            ? "pb-1 text-sm text-neutral-400"
                            : "pb-1 text-sm text-neutral-500"
                        }
                      >
                        MMK / month
                      </span>
                    </div>
                  )}
                </div>

                {/* Yearly */}
                <div className="yearly-price mt-8 hidden">
                  {plan.yearly === "Custom" ? (
                    <div className="text-4xl font-black">Custom</div>
                  ) : (
                    <>
                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-black tracking-tight">
                          {plan.yearly}
                        </span>

                        <span
                          className={
                            plan.popular
                              ? "pb-1 text-sm text-neutral-400"
                              : "pb-1 text-sm text-neutral-500"
                          }
                        >
                          MMK / year
                        </span>
                      </div>

                      <p className="mt-2 text-sm font-semibold text-emerald-500">
                        {plan.yearlyNote}
                      </p>
                    </>
                  )}
                </div>

                <div
                  className={`my-8 h-px ${
                    plan.popular ? "bg-white/10" : "bg-neutral-200"
                  }`}
                />

                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0 text-emerald-500"
                      />

                      <span
                        className={
                          plan.popular ? "text-neutral-300" : "text-neutral-700"
                        }
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className={`mt-9 w-full ${
                    plan.popular
                      ? "bg-white text-neutral-950 hover:bg-white/90"
                      : "bg-neutral-950 text-white hover:bg-neutral-800"
                  }`}
                >
                  <Link href="/#contact">
                    {plan.monthly === "Custom" ? "Contact us" : "Choose plan"}

                    <ArrowRight size={17} />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-neutral-500">
          Pricing may vary depending on required hardware, custom features,
          integrations, installation, data migration, and number of branches.
        </p>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-emerald-600 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
            Build Your POS
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Your POS should fit your business — not the other way around.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/80">
            Tell us how your store works, what you sell, how you manage stock,
            and which problems you want to solve. We&apos;ll help define the
            right POS solution.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-9 bg-white px-7 text-neutral-950 hover:bg-white/90"
          >
            <Link href="/#contact">
              Discuss your POS
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function PosIntegrationPage() {
  return (
    <main className="bg-white">
      <HeroSection />

      <IntroSection />

      <PosFlowSection />

      <PricingSection />

      <PosSolutionsSection />

      <ProblemsSection />

      <OfflineOnlineSection />

      <CTASection />
    </main>
  );
}

export default PosIntegrationPage;
