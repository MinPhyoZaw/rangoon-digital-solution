import {
  Activity,
  CalendarDays,
  ClipboardPlus,
  FileHeart,
  HeartPulse,
  LockKeyhole,
  MessageSquareMore,
  Pill,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from "lucide-react";

import { IndustryPage } from "@/components/industries/industry-page";

export const metadata = {
  title: "Healthcare | Alita Software House",
  description:
    "Healthcare software for clinics, providers, and patient-first service operations.",
};

const highlights = [
  "Faster patient coordination and service workflows",
  "Better scheduling, records, and appointment visibility",
  "Improved patient communication and follow-up systems",
  "Operational efficiency without sacrificing care quality",
];

const focusAreas = [
  {
    number: "01",
    title: "Patient Journey",
    description:
      "Reduce friction across booking, check-in, follow-ups, and ongoing care communication.",
  },
  {
    number: "02",
    title: "Clinic Operations",
    description:
      "Streamline attendance, scheduling, documentation, and team coordination in one system.",
  },
  {
    number: "03",
    title: "Care Insights",
    description:
      "Organize patient information and service activity into dashboards that support better decisions.",
  },
];

const patientJourney = [
  {
    icon: CalendarDays,
    step: "01",
    title: "Book",
    description:
      "Patients schedule appointments through an online portal, mobile app, or clinic staff.",
  },
  {
    icon: UsersRound,
    step: "02",
    title: "Check In",
    description:
      "Patient information, appointment details, and queue status stay connected from arrival.",
  },
  {
    icon: Stethoscope,
    step: "03",
    title: "Consult",
    description:
      "Doctors and care teams access the information they need to support the consultation workflow.",
  },
  {
    icon: ClipboardPlus,
    step: "04",
    title: "Care Plan",
    description:
      "Clinical notes, instructions, referrals, and treatment information can be organized in one workflow.",
  },
  {
    icon: Pill,
    step: "05",
    title: "Medication",
    description:
      "Prescription and medication information can be coordinated with patient records and follow-up activity.",
  },
  {
    icon: MessageSquareMore,
    step: "06",
    title: "Follow Up",
    description:
      "Automated reminders and communication help patients stay informed after their visit.",
  },
];

const healthcareSolutions = [
  {
    number: "01",
    title: "Clinic Management System",
    description:
      "Centralize appointments, patients, staff, service activity, and clinic administration in one operational system.",
    features: [
      "Patient Registration",
      "Appointments",
      "Staff Management",
      "Service Records",
    ],
  },
  {
    number: "02",
    title: "Patient Portal & Mobile App",
    description:
      "Give patients a digital experience for managing appointments, accessing updates, and communicating with the clinic.",
    features: [
      "Appointment Booking",
      "Patient Profile",
      "Notifications",
      "Visit History",
    ],
  },
  {
    number: "03",
    title: "Electronic Patient Records",
    description:
      "Organize patient information, consultation history, documents, and care activity in a structured digital record.",
    features: [
      "Patient History",
      "Clinical Notes",
      "Documents",
      "Care Records",
    ],
  },
  {
    number: "04",
    title: "Appointment & Queue Management",
    description:
      "Reduce waiting-time confusion with connected scheduling, check-in, queue visibility, and appointment status.",
    features: ["Scheduling", "Queue Status", "Check-in", "Reminders"],
  },
  {
    number: "05",
    title: "Pharmacy & Medication Workflow",
    description:
      "Connect prescription, medication, inventory, and dispensing workflows where pharmacy operations are part of the service.",
    features: [
      "Prescription Records",
      "Medication Tracking",
      "Inventory",
      "Dispensing Status",
    ],
  },
  {
    number: "06",
    title: "Healthcare Analytics Dashboard",
    description:
      "Turn operational activity into useful visibility across appointments, service demand, staff activity, and clinic performance.",
    features: [
      "Appointment Analytics",
      "Service Reports",
      "Operational Metrics",
      "Management Dashboard",
    ],
  },
];

const healthcareProblems = [
  {
    icon: CalendarDays,
    problem: "Appointments are handled manually",
    solution:
      "We connect online booking, staff scheduling, reminders, and appointment status so clinics can reduce repetitive coordination work.",
    software: "Appointment & Scheduling System",
  },
  {
    icon: FileHeart,
    problem: "Patient records are scattered across files and systems",
    solution:
      "We organize patient information into structured digital records that authorized teams can access from one system.",
    software: "Patient Record Management",
  },
  {
    icon: UsersRound,
    problem: "Waiting rooms and queues are difficult to manage",
    solution:
      "Digital check-in and queue workflows help staff understand who is waiting, who is being served, and what comes next.",
    software: "Digital Queue Management",
  },
  {
    icon: MessageSquareMore,
    problem: "Patients miss appointments and follow-ups",
    solution:
      "Automated reminders and communication workflows help clinics keep patients informed before and after visits.",
    software: "Patient Communication System",
  },
];

const connectedCare = [
  {
    icon: UsersRound,
    title: "Patient",
    items: [
      "Book appointments",
      "Receive reminders",
      "View visit information",
      "Manage personal details",
    ],
  },
  {
    icon: Stethoscope,
    title: "Doctor",
    items: [
      "Review patient information",
      "Record consultation notes",
      "Manage care activity",
      "Access visit history",
    ],
  },
  {
    icon: ClipboardPlus,
    title: "Clinic Staff",
    items: [
      "Manage appointments",
      "Handle check-in",
      "Coordinate queues",
      "Update patient records",
    ],
  },
  {
    icon: Activity,
    title: "Management",
    items: [
      "Monitor operations",
      "Review service activity",
      "Track appointment trends",
      "Access reporting",
    ],
  },
];

function PatientJourneySection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-600">
            Patient Journey
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 md:text-5xl lg:text-6xl">
            Connect the patient experience from booking to follow-up.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Healthcare software should make the care journey easier for both
            patients and teams, without adding unnecessary complexity.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-neutral-200 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
            {patientJourney.map(({ icon: Icon, step, title, description }) => (
              <div key={title} className="group relative">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-950 text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-teal-600">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <span className="mt-6 block text-xs font-bold tracking-[0.18em] text-teal-600">
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

function HealthcareSolutionsSection() {
  return (
    <section className="bg-[#eef8f7] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
            Healthcare Solutions
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 md:text-5xl">
            Software designed around real care operations.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            We can build a complete healthcare platform or individual modules
            around the workflows your clinic actually needs.
          </p>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {healthcareSolutions.map((solution) => (
            <div key={solution.title}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-[0.18em] text-teal-700">
                  {solution.number}
                </span>

                <span className="h-px w-10 bg-teal-300" />
              </div>

              <h3 className="mt-7 text-2xl font-bold tracking-[-0.04em] text-neutral-950">
                {solution.title}
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                {solution.description}
              </p>

              <div className="mt-6 space-y-2">
                {solution.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm font-medium text-neutral-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                    {feature}
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

function HealthcareProblemsSection() {
  return (
    <section className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-400">
              Challenges We Solve
            </p>

            <h2 className="mt-5 max-w-lg text-4xl font-black tracking-[-0.05em] md:text-5xl">
              Less administration. More focus on care.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-400">
              We identify operational friction around patients, staff, records,
              and scheduling, then build systems that make those workflows
              easier to manage.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {healthcareProblems.map(
              ({ icon: Icon, problem, solution, software }) => (
                <div
                  key={problem}
                  className="grid gap-5 py-8 md:grid-cols-[55px_1fr]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-400/10 text-teal-400">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{problem}</h3>

                    <p className="mt-3 leading-7 text-neutral-400">
                      {solution}
                    </p>

                    <p className="mt-4 text-sm font-semibold text-teal-400">
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

function ConnectedCareSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-600">
            Connected Care
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 md:text-5xl">
            One system for everyone involved in the care journey.
          </h2>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {connectedCare.map(({ icon: Icon, title, items }) => (
            <div key={title}>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-700">
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
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
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

function HealthcareSecuritySection() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-[32px] bg-neutral-950 px-7 py-12 text-white md:px-12 lg:flex lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-teal-400">
              <ShieldCheck size={23} />

              <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                Security & Access
              </p>
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] md:text-4xl">
              Sensitive information should only be available to the right
              people.
            </h2>

            <p className="mt-5 leading-7 text-neutral-400">
              We design healthcare systems with controlled access, secure
              authentication, role-based permissions, and structured data
              handling as core system requirements.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-0 lg:min-w-[360px]">
            {[
              [LockKeyhole, "Role-based access"],
              [ShieldCheck, "Secure authentication"],
              [FileHeart, "Controlled records"],
              [Activity, "Audit-ready activity"],
            ].map(([Icon, label]) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl bg-white/[0.06] px-4 py-4"
              >
                <Icon size={19} className="text-teal-400" />
                <span className="text-sm font-medium text-neutral-200">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HealthcarePage() {
  return (
    <IndustryPage
      eyebrow="Healthcare"
      title="Patient-first technology for better care operations."
      description="We build healthcare software that helps clinics and service teams improve coordination, simplify administration, and create a more personalized patient experience."
      image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"
      highlights={highlights}
      focusAreas={focusAreas}
    >
      <PatientJourneySection />

      <HealthcareSolutionsSection />

      <HealthcareProblemsSection />

      <ConnectedCareSection />

      <HealthcareSecuritySection />
    </IndustryPage>
  );
}
