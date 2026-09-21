import {
  BarChart3,
  ChefHat,
  ClipboardCheck,
  CreditCard,
  MapPin,
  PackageCheck,
  Route,
  ShoppingBag,
  Truck,
  Users,
} from "lucide-react";

import { IndustryPage } from "@/components/industries/industry-page";

export const metadata = {
  title: "Food and Delivery | Alita Software House",
  description:
    "Operations and customer-facing software for restaurants, delivery brands, and food businesses.",
};

const highlights = [
  "Faster order management from kitchen to customer delivery",
  "Clear visibility across inventory, fulfillment, and service quality",
  "Automated customer communications and delivery updates",
  "Better retention through loyalty and repeat-order flows",
];

const focusAreas = [
  {
    number: "01",
    title: "Order Management",
    description:
      "Coordinate orders, delivery routes, and fulfillment status from a single dashboard.",
  },
  {
    number: "02",
    title: "Restaurant Operations",
    description:
      "Manage menu changes, staff scheduling, inventory, and performance insights in one place.",
  },
  {
    number: "03",
    title: "Customer Retention",
    description:
      "Create loyalty programs, subscriptions, and personalized offers that boost repeat orders.",
  },
];

const orderFlow = [
  {
    icon: ShoppingBag,
    step: "01",
    title: "Order Placed",
    description:
      "Customers place an order through your website, mobile app, QR menu, or ordering portal.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Order Accepted",
    description:
      "The restaurant receives the order instantly and confirms availability before preparation begins.",
  },
  {
    icon: ChefHat,
    step: "03",
    title: "Preparing",
    description:
      "Kitchen teams receive clear order details and update preparation status in real time.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Rider Assigned",
    description:
      "Available delivery staff can be assigned manually or automatically based on the delivery workflow.",
  },
  {
    icon: MapPin,
    step: "05",
    title: "Out for Delivery",
    description:
      "Customers and operations teams can follow delivery progress and receive status updates.",
  },
  {
    icon: PackageCheck,
    step: "06",
    title: "Delivered",
    description:
      "The completed order is recorded for reporting, customer feedback, and future retention campaigns.",
  },
];

const problems = [
  {
    number: "01",
    problem: "Orders are scattered across multiple channels",
    explanation:
      "Phone orders, social media messages, website orders, and counter sales can quickly become difficult to coordinate.",
    approach: "Bring every order into one connected workflow.",
    software: "Centralized Order Management System",
    features: [
      "Online Orders",
      "POS Integration",
      "Order Status",
      "Kitchen Queue",
    ],
  },
  {
    number: "02",
    problem: "Kitchen teams struggle during busy hours",
    explanation:
      "Paper tickets, verbal communication, and unclear order priorities can increase preparation delays and mistakes.",
    approach: "Digitize the kitchen preparation process.",
    software: "Kitchen Management System",
    features: [
      "Kitchen Display",
      "Preparation Queue",
      "Order Priority",
      "Ready Status",
    ],
  },
  {
    number: "03",
    problem: "Delivery operations are difficult to control",
    explanation:
      "Manually calling riders and tracking deliveries through messages makes dispatch slow and gives customers little visibility.",
    approach: "Connect restaurant staff, riders, and customers.",
    software: "Delivery Management Platform",
    features: [
      "Rider Assignment",
      "Dispatch",
      "Live Status",
      "Delivery Tracking",
    ],
  },
  {
    number: "04",
    problem: "Management lacks operational visibility",
    explanation:
      "Without centralized reporting, owners may struggle to understand sales, order volume, delivery performance, and daily operations.",
    approach: "Turn restaurant activity into useful business data.",
    software: "Restaurant Analytics Dashboard",
    features: [
      "Sales Reports",
      "Order Analytics",
      "Delivery Performance",
      "Business Insights",
    ],
  },
];

const softwareSystems = [
  {
    number: "01",
    icon: BarChart3,
    title: "Restaurant Management System",
    description:
      "A centralized platform for managing daily restaurant operations, sales, menus, staff access, inventory, and reporting.",
    features: [
      "POS",
      "Menu Management",
      "Inventory",
      "Staff Access",
      "Sales Reports",
    ],
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Online Ordering & Customer Platform",
    description:
      "Give customers a simple digital experience for browsing menus, placing orders, paying, and tracking order history.",
    features: [
      "Web Ordering",
      "Mobile App",
      "Cart & Checkout",
      "Promotions",
      "Order History",
    ],
  },
  {
    number: "03",
    icon: ChefHat,
    title: "Kitchen Operations System",
    description:
      "Help kitchen teams manage incoming orders, preparation priorities, order status, and completed items more efficiently.",
    features: [
      "Kitchen Display System",
      "Order Queue",
      "Preparation Status",
      "Priority Management",
      "Completed Orders",
    ],
  },
  {
    number: "04",
    icon: Truck,
    title: "Delivery Management System",
    description:
      "Manage riders, order assignments, delivery status, routing, and proof of delivery from one connected platform.",
    features: [
      "Rider Management",
      "Order Assignment",
      "Dispatch",
      "Live Tracking",
      "Proof of Delivery",
    ],
  },
];

function OrderFlowSection() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
            Connected Order Journey
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 md:text-5xl lg:text-6xl">
            From order to doorstep, every step stays connected.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Build a smoother workflow between customers, kitchen teams,
            operations staff, and delivery riders with clear order status
            throughout the entire fulfillment journey.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-neutral-200 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
            {orderFlow.map(({ icon: Icon, step, title, description }) => (
              <div key={title} className="group relative">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950 text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-orange-600">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <span className="mt-6 block text-xs font-bold tracking-[0.18em] text-orange-600">
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

function ProblemsWeSolveSection() {
  return (
    <section className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-400">
            Problems We Solve
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-5xl lg:text-6xl">
            Solving the challenges behind every order.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            We look at the actual operational problems restaurants and delivery
            businesses face, then build software around the way those businesses
            really work.
          </p>
        </div>

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {problems.map((item) => (
            <div
              key={item.number}
              className="grid gap-8 py-12 lg:grid-cols-[90px_1fr_1fr]"
            >
              <div>
                <span className="text-4xl font-black text-white/10">
                  {item.number}
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
                  The Problem
                </p>

                <h3 className="mt-4 max-w-md text-2xl font-bold tracking-[-0.03em]">
                  {item.problem}
                </h3>

                <p className="mt-4 max-w-lg leading-7 text-neutral-400">
                  {item.explanation}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Our Approach
                </p>

                <p className="mt-4 text-lg font-medium text-neutral-200">
                  {item.approach}
                </p>

                <div className="mt-6 rounded-2xl bg-white/[0.06] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
                    Software Solution
                  </p>

                  <h4 className="mt-3 text-xl font-bold">{item.software}</h4>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-white/[0.07] px-3 py-1.5 text-xs text-neutral-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SoftwareSystemsSection() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
              What We Build
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-black tracking-[-0.05em] text-neutral-950 md:text-5xl">
              Software built around the complete food operation.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
              We can build a complete restaurant and delivery ecosystem or
              develop individual modules around the parts of your operation that
              need improvement.
            </p>
          </div>

          <div className="space-y-4">
            {softwareSystems.map(
              ({ number, icon: Icon, title, description, features }) => (
                <div
                  key={title}
                  className="group rounded-3xl bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-200/70"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                      <Icon size={23} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-2xl font-bold tracking-[-0.03em] text-neutral-950">
                          {title}
                        </h3>

                        <span className="text-xs font-semibold tracking-[0.18em] text-neutral-400">
                          {number}
                        </span>
                      </div>

                      <p className="mt-4 max-w-2xl leading-7 text-neutral-600">
                        {description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                        {features.map((feature) => (
                          <span
                            key={feature}
                            className="text-sm font-medium text-neutral-700"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default function FoodAndDeliveryPage() {
  return (
    <IndustryPage
      eyebrow="Food and Delivery"
      title="Operations that move as fast as your customers do."
      description="We design software that helps food and delivery businesses run smoother kitchens, faster service, and smarter customer experiences from first order to final delivery."
      image="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80"
      highlights={highlights}
      focusAreas={focusAreas}
    >
      <OrderFlowSection />

      <ProblemsWeSolveSection />

      <SoftwareSystemsSection />
    </IndustryPage>
  );
}
