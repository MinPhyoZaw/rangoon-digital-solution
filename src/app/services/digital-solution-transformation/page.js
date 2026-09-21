import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  CheckCircle2,
  Cloud,
  Database,
  FileSpreadsheet,
  GitBranch,
  Layers3,
  MonitorCog,
  Network,
  RefreshCcw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Digital Solution Transformation | Alita Software House",
  description:
    "Digital transformation services that help businesses replace manual workflows, disconnected tools, and outdated processes with modern software systems.",
};

const transformationAreas = [
  {
    number: "01",
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Replace repetitive manual steps with structured digital workflows that reduce delays, improve consistency, and make daily operations easier to manage.",
    features: [
      "Approval workflows",
      "Task automation",
      "Status tracking",
      "Internal processes",
    ],
  },
  {
    number: "02",
    icon: Database,
    title: "Centralized Data Systems",
    description:
      "Bring important business information into one organized system instead of relying on scattered spreadsheets, files, and disconnected tools.",
    features: [
      "Central database",
      "Structured records",
      "Searchable information",
      "Shared access",
    ],
  },
  {
    number: "03",
    icon: MonitorCog,
    title: "Business Management Platforms",
    description:
      "Build custom dashboards and internal systems around the way your teams actually work, from operations and finance to customers and reporting.",
    features: [
      "Admin dashboards",
      "Role-based access",
      "Operations control",
      "Management reporting",
    ],
  },
  {
    number: "04",
    icon: Network,
    title: "System Integration",
    description:
      "Connect existing software, APIs, payment systems, databases, and third-party services so information can move more efficiently across your business.",
    features: [
      "API integration",
      "Third-party services",
      "Payment systems",
      "Data synchronization",
    ],
  },
  {
    number: "05",
    icon: Smartphone,
    title: "Customer Digital Experience",
    description:
      "Create digital channels that make it easier for customers to interact with your business through websites, mobile apps, portals, and self-service tools.",
    features: [
      "Web portals",
      "Mobile apps",
      "Customer accounts",
      "Self-service workflows",
    ],
  },
  {
    number: "06",
    icon: BarChart3,
    title: "Data & Reporting",
    description:
      "Turn operational activity into clear dashboards and reports so decision-makers can understand performance, trends, and areas that need attention.",
    features: [
      "Business dashboards",
      "Operational reports",
      "Performance metrics",
      "Management insights",
    ],
  },
];

const transformationProblems = [
  {
    problem: "Your teams depend heavily on spreadsheets",
    description:
      "Important information becomes difficult to track, update, share, and verify when multiple teams maintain separate files.",
    solution: "Centralized Business System",
  },
  {
    problem: "Processes rely on calls, messages, and manual follow-ups",
    description:
      "Approvals and tasks can be delayed because staff must repeatedly contact each other to understand what needs to happen next.",
    solution: "Workflow Automation",
  },
  {
    problem: "Different departments use disconnected tools",
    description:
      "Customer, sales, operations, and financial information can become fragmented across different systems.",
    solution: "Integrated Digital Platform",
  },
  {
    problem: "Management cannot see what is happening in real time",
    description:
      "Without structured operational data, decisions may depend on delayed reports and manual information gathering.",
    solution: "Management Dashboard & Analytics",
  },
];

const transformationProcess = [
  {
    number: "01",
    title: "Understand",
    description:
      "We study how your business currently operates, including people, tools, workflows, bottlenecks, and business goals.",
  },
  {
    number: "02",
    title: "Identify",
    description:
      "We identify which processes create the most friction and where digital systems can create meaningful improvements.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We map the new workflow, system architecture, user roles, integrations, and information structure.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "We develop the software, APIs, dashboards, mobile or web interfaces, and integrations required for the solution.",
  },
  {
    number: "05",
    title: "Transition",
    description:
      "We help move the workflow from the old process into the new system while keeping the change practical for your team.",
  },
  {
    number: "06",
    title: "Improve",
    description:
      "Once the system is in use, we refine workflows, add capabilities, and support future business growth.",
  },
];

const technologyFoundation = [
  {
    icon: Layers3,
    title: "Web Platforms",
    description:
      "Responsive business systems, dashboards, portals, and operational applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Customer and employee applications designed around real operational workflows.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Scalable deployment, storage, databases, services, and modern application infrastructure.",
  },
  {
    icon: Database,
    title: "Data Systems",
    description:
      "Structured databases and data models that centralize important business information.",
  },
  {
    icon: GitBranch,
    title: "API & Integration",
    description:
      "Connections between your internal systems and external business services.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Access",
    description:
      "Authentication, permissions, protected workflows, and controlled system access.",
  },
];

function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-neutral-950 text-white">
      <Navbar />

      <div className="absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-violet-600/15 blur-[140px]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/60" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 pb-16 pt-28 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Alita Software House
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Digital Solution
            <span className="block text-white/45">Transformation</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            We help businesses replace manual processes, disconnected tools, and
            outdated workflows with modern digital systems built around the way
            they actually operate.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white px-7 text-neutral-950 hover:bg-white/90"
            >
              <Link href="/#contact">
                Start your transformation
                <ArrowRight size={18} />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 px-7 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
            >
              <Link href="#transformation">Explore the process</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
              Digital Transformation
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-6xl">
              Technology should simplify how your business works.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-neutral-600">
              Digital transformation is not simply replacing paper with
              software. It means understanding how your business operates and
              redesigning the parts that create unnecessary work, delays, and
              poor visibility.
            </p>

            <p className="mt-5 text-lg leading-8 text-neutral-600">
              At Alita, we combine software development, workflow design, system
              integration, and data organization to create practical digital
              systems that support real business operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
            Where Transformation Starts
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl">
            When daily work becomes the bottleneck.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Transformation usually begins when existing tools and processes can
            no longer keep up with the way the business needs to operate.
          </p>
        </div>

        <div className="mt-16 divide-y divide-neutral-200 border-y border-neutral-200">
          {transformationProblems.map((item, index) => (
            <div
              key={item.problem}
              className="grid gap-6 py-10 lg:grid-cols-[90px_1fr_1.1fr]"
            >
              <span className="text-4xl font-black text-neutral-200">
                0{index + 1}
              </span>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  The Challenge
                </p>

                <h3 className="mt-3 max-w-lg text-2xl font-bold tracking-[-0.03em] text-neutral-950">
                  {item.problem}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-neutral-600">
                  {item.description}
                </p>
              </div>

              <div className="lg:pt-7">
                <div className="inline-flex items-center gap-3 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  <Sparkles size={16} />
                  {item.solution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TransformationAreasSection() {
  return (
    <section className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
            What We Transform
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Modern systems for the parts of your business that need to change.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            Transformation can start with one difficult workflow or expand into
            a connected platform across the organization.
          </p>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {transformationAreas.map(
            ({ number, icon: Icon, title, description, features }) => (
              <div key={title}>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.07] text-blue-400">
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

function TransformationProcessSection() {
  return (
    <section id="transformation" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
              Our Approach
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl">
              Transform the workflow before transforming the technology.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
              We start with how the business works today before deciding what
              software should be built.
            </p>

            {/* Illustration */}
            <div className="mt-10 max-w-[560px]">
              <Image
                src="/images/dst.png"
                alt="Business transformation from disconnected tools to one connected digital system"
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          {/* Right */}
          <div className="border-t border-neutral-200">
            {transformationProcess.map((item) => (
              <div
                key={item.number}
                className="grid gap-5 border-b border-neutral-200 py-8 sm:grid-cols-[70px_0.65fr_1.35fr]"
              >
                <span className="text-sm font-bold tracking-[0.18em] text-blue-600">
                  {item.number}
                </span>

                <h3 className="text-xl font-bold text-neutral-950">
                  {item.title}
                </h3>

                <p className="leading-7 text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function BeforeAfterSection() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
            The Difference
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl">
            Move from disconnected work to connected operations.
          </h2>
        </div>

        <div className="mt-16 grid overflow-hidden rounded-[32px] bg-white lg:grid-cols-2">
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Before Transformation
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Information stored in separate spreadsheets",
                "Approvals handled through calls and messages",
                "Repeated manual data entry",
                "Limited visibility across departments",
                "Reports prepared manually",
                "Customers depend on staff for simple requests",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-neutral-600"
                >
                  <FileSpreadsheet
                    size={19}
                    className="mt-0.5 shrink-0 text-neutral-400"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 p-8 text-white sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
              After Transformation
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Centralized business information",
                "Digital approval and workflow management",
                "Automated data movement",
                "Real-time operational visibility",
                "Dashboards and structured reporting",
                "Digital customer self-service",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-white"
                  />
                  <span className="text-white/85">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologyFoundationSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
              Technology Foundation
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-black tracking-[-0.05em] text-neutral-950 sm:text-5xl">
              The right technology behind the right process.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
              We select architecture and technology based on the workflow,
              integrations, data requirements, users, and future growth of the
              business.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {technologyFoundation.map(({ icon: Icon, title, description }) => (
              <div key={title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-white">
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
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-400">
            Start the Change
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Your business does not need more software.
            <span className="block text-white/40">
              It needs the right system.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-neutral-400">
            Tell us where your current workflow creates friction. We&apos;ll
            help identify what should be improved, automated, connected, or
            rebuilt.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white px-7 text-neutral-950 hover:bg-white/90"
            >
              <Link href="/#contact">
                Discuss your business
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

function DigitalSolutionTransformationPage() {
  return (
    <main className="bg-white">
      <HeroSection />

      <IntroSection />

      <ProblemsSection />

      <TransformationAreasSection />

      <TransformationProcessSection />

      <BeforeAfterSection />

      <TechnologyFoundationSection />

      <CTASection />
    </main>
  );
}

export default DigitalSolutionTransformationPage;
