import { IndustryPage } from "@/components/industries/industry-page";
import { Workflow, ShieldCheck, Database, TrendingUp } from "lucide-react";
import {
  SiFlutter,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

const technologies = [
  {
    name: "Flutter",
    category: "Frontend",
    icon: SiFlutter,
    color: "#02569B",
  },
  {
    name: "React",
    category: "Frontend",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "React Native",
    category: "Mobile",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: SiExpress,
    color: "#111111",
  },

  {
    name: "PostgreSQL",
    category: "Database",
    icon: SiPostgresql,
    color: "#4169E1",
  },
];

export const metadata = {
  title: "Financial Services | Alita Software House",
  description:
    "Digital systems and software built for banks, lenders, and modern financial businesses.",
};

const highlights = [
  "Modern client portals and secure document workflows",
  "Automated lead qualification and onboarding journeys",
  "Data visibility for advisors, operations, and management teams",
  "Faster approvals with less manual administrative work",
];

const focusAreas = [
  {
    number: "01",
    title: "Loan Processing",
    description:
      "Streamline application review, eligibility checks, and approval tracking with custom workflows.",
  },
  {
    number: "02",
    title: "CRM & Sales",
    description:
      "Improve client acquisition and relationship management with centralized sales visibility.",
  },
  {
    number: "03",
    title: "Client Portals",
    description:
      "Give customers secure access to files, status updates, and communication channels.",
  },
];

const challengeItems = [
  {
    icon: Workflow,
    label: "Complex manual workflows",
  },
  {
    icon: Database,
    label: "Disconnected financial data",
  },
  {
    icon: ShieldCheck,
    label: "Security & compliance requirements",
  },
  {
    icon: TrendingUp,
    label: "Scaling operations efficiently",
  },
];

function FinancialServicesSections() {
  return (
    <>
      {/* Finance Solutions */}
      <section className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
              Our Finance Software Solutions
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-neutral-950 md:text-5xl">
              Technology built for modern financial businesses.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              From digital banking platforms to loan management and payment
              systems, we build secure and scalable software tailored to how
              your financial business operates.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Mobile Banking Software",
                "Enable secure, convenient banking experiences with mobile solutions that allow customers to access essential financial services anytime and anywhere.",
              ],
              [
                "Loan Management Software",
                "Manage the complete loan lifecycle from application and approval to repayment and collections with streamlined, automated workflows.",
              ],
              [
                "Custom Banking Software",
                "Build custom platforms around your operations, products, and customer needs with flexible architecture and seamless system integrations.",
              ],
              [
                "Compliance & Risk Management",
                "Improve operational control with systems designed for secure access, data management, risk monitoring, and compliance workflows.",
              ],
              [
                "Payments & Billing Solutions",
                "Create reliable payment and billing experiences that help customers manage transactions, invoices, and financial services with ease.",
              ],
              [
                "P2P Lending & Crowdfunding",
                "Develop secure digital platforms that connect borrowers, lenders, and investors through streamlined lending and fundraising experiences.",
              ],
            ].map(([title, text], index) => (
              <div
                key={title}
                className="group rounded-2xl border border-neutral-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
              >
                <span className="text-sm font-semibold text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h4 className="mt-8 text-2xl font-bold tracking-[-0.04em] text-neutral-950">
                  {title}
                </h4>

                <p className="mt-4 text-base leading-7 text-neutral-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Concept */}
      <section className="bg-neutral-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
              Featured Concept
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] md:text-5xl">
              Turning complex lending operations into one simple system.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-400">
              A concept solution demonstrating how Alita can help modern lending
              businesses replace fragmented manual processes with a centralized
              digital platform.
            </p>
          </div>

          <div className="mt-16 grid overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 lg:grid-cols-2">
            {/* Dashboard Preview */}
            <div className="min-h-[420px] bg-neutral-800 p-6 lg:min-h-[560px]">
              <div className="flex h-full items-center justify-center rounded-2xl border border-white/10 bg-neutral-950 p-6">
                <div className="w-full max-w-md rounded-xl border border-white/10 bg-neutral-900 p-5 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-neutral-500">
                        Loan Management
                      </p>

                      <p className="mt-1 text-lg font-semibold">Overview</p>
                    </div>

                    <div className="rounded-lg bg-white/10 px-3 py-2 text-xs text-neutral-300">
                      This Month
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {[
                      ["Applications", "1,248"],
                      ["Approved", "842"],
                      ["Active Loans", "3,486"],
                      ["Repayments", "92.4%"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-lg bg-white/5 p-4">
                        <p className="text-xs text-neutral-500">{label}</p>

                        <p className="mt-2 text-2xl font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-lg bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-neutral-500">
                        Application Activity
                      </p>

                      <span className="text-xs text-neutral-500">30 days</span>
                    </div>

                    <div className="mt-5 flex h-24 items-end gap-2">
                      {[35, 48, 42, 60, 52, 72, 64, 80, 68, 90, 76, 94].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t bg-white/30"
                            style={{ height: `${height}%` }}
                          />
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Concept Description */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="inline-flex w-fit rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-300">
                Concept Solution
              </span>

              <h3 className="mt-6 text-3xl font-semibold tracking-tight">
                Digital Loan Management Platform
              </h3>

              <p className="mt-5 leading-7 text-neutral-400">
                A centralized platform designed to manage the complete lending
                lifecycle from customer applications and eligibility checks to
                approvals, repayments, and reporting.
              </p>

              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  The Challenge
                </p>

                <p className="mt-3 leading-7 text-neutral-400">
                  Manual applications, disconnected customer records,
                  spreadsheet-based tracking, and limited visibility can make
                  lending operations slow and difficult to manage as the
                  business grows.
                </p>
              </div>

              <div className="mt-7">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  The Solution
                </p>

                <p className="mt-3 leading-7 text-neutral-400">
                  We designed a unified digital workflow that brings customers,
                  loan applications, approvals, repayments, and management
                  reporting into one system.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                {[
                  "Customer Management",
                  "Loan Applications",
                  "Approval Workflows",
                  "Repayment Tracking",
                  "Document Management",
                  "Reports & Analytics",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-neutral-300"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="max-w-2xl text-sm leading-6 text-neutral-500">
              This is a featured concept created to demonstrate how Alita
              approaches financial software design. It is not presented as a
              completed client project.
            </p>
          </div>
        </div>
      </section>

      {/* Technology We Use */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
                Technology We Use
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-black tracking-[-0.05em] text-neutral-950 md:text-5xl">
                Modern technology behind secure financial platforms.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
                We use modern frontend, backend, and database technologies to
                build secure, scalable, and maintainable financial software
                designed for real business operations.
              </p>
            </div>

            <div className="lg:text-right">
              <p className="text-sm leading-6 text-neutral-500">
                The technology stack can be adapted based on system
                requirements, integrations, scalability, security, and the
                existing infrastructure of each business.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {technologies.map(({ name, category, icon: Icon, color }) => (
              <div
                key={name}
                className="group flex min-h-[150px] flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center transition-colors duration-300"
                  style={{ color }}
                >
                  <Icon size={38} />
                </div>

                <h3 className="mt-4 text-sm font-bold text-neutral-950">
                  {name}
                </h3>

                <p className="mt-1 text-xs text-neutral-500">{category}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 border-t border-neutral-200 pt-10 md:grid-cols-3">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                Frontend
              </span>

              <h3 className="mt-3 text-xl font-bold text-neutral-950">
                Fast & responsive interfaces
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Modern web applications designed for customers, employees, and
                management teams across desktop and mobile devices.
              </p>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                Backend
              </span>

              <h3 className="mt-3 text-xl font-bold text-neutral-950">
                Reliable business logic
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Secure APIs and backend services that manage authentication,
                transactions, workflows, integrations, and system operations.
              </p>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                Data
              </span>

              <h3 className="mt-3 text-xl font-bold text-neutral-950">
                Structured & scalable data
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Database architecture designed to support customer records,
                transactions, loan information, reporting, and future growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}

      {/* Challenges */}
    </>
  );
}

export default function FinancialServicesPage() {
  return (
    <IndustryPage
      eyebrow="Financial Services"
      title="Smarter digital systems for modern finance teams."
      description="We build software that helps financial businesses simplify operations, improve customer trust, and deliver faster service without sacrificing compliance and security."
      image="/images/fanicial.jpg"
      highlights={highlights}
      focusAreas={focusAreas}
      challengeItems={challengeItems}
    >
      <FinancialServicesSections />
    </IndustryPage>
  );
}
