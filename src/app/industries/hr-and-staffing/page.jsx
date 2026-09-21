import { IndustryPage } from "@/components/industries/industry-page";

export const metadata = {
  title: "HR and Staffing | Alita Software House",
  description:
    "Recruitment and workforce software for staffing firms, HR teams, and people-first businesses.",
};

const highlights = [
  "Faster candidate sourcing, screening, and placement tracking",
  "Clear workforce visibility across teams, projects, and locations",
  "Automated reminders for interviews, contracts, and onboarding steps",
  "A smoother candidate experience from first contact to start date",
];
const journeyStats = [
  {
    value: "17+",
    title: "Team Members",
    description:
      "Our team members are the heart and soul of our organization, driving innovation and excellence.",
  },
  {
    value: "45+",
    title: "Projects Delivered",
    description:
      "We take pride in every project delivered, embracing accountability for our successes and challenges.",
  },
  {
    value: "20M+",
    title: "Hours Worked",
    description:
      "Accumulated hours dedicated to delivering excellence with commitment and diligence.",
  },
  {
    value: "100%",
    title: "Client Retention Rate",
    description:
      "Stellar client satisfaction reflected in impressive retention rates and enduring partnerships.",
  },
];
const hrSolutions = [
  {
    number: "01",
    title: "Applicant Tracking System",
    description:
      "Manage every stage of the hiring process in one place, from job applications and candidate screening to interviews, evaluations, and final hiring decisions.",
    points: [
      "Candidate pipeline management",
      "Application status tracking",
      "Interview scheduling",
      "Recruiter notes and evaluations",
    ],
  },
  {
    number: "02",
    title: "Recruitment CRM",
    description:
      "Build stronger relationships with candidates and clients through a centralized recruitment database that keeps communication, history, and opportunities organized.",
    points: [
      "Candidate and client profiles",
      "Communication history",
      "Talent pool management",
      "Follow-up reminders",
    ],
  },
  {
    number: "03",
    title: "Employee Management",
    description:
      "Keep employee information organized and accessible with a central system for staff records, roles, departments, contracts, and important workforce data.",
    points: [
      "Employee profiles",
      "Department and role management",
      "Contract records",
      "Workforce visibility",
    ],
  },
  {
    number: "04",
    title: "Attendance & Leave",
    description:
      "Simplify attendance tracking and leave management with digital workflows that make requests, approvals, working hours, and absence records easier to manage.",
    points: [
      "Attendance tracking",
      "Leave requests",
      "Approval workflows",
      "Working-hour records",
    ],
  },
  {
    number: "05",
    title: "Payroll Integration",
    description:
      "Connect employee records, attendance, and payroll workflows to reduce repetitive data entry and improve accuracy across salary and payment operations.",
    points: [
      "Salary data integration",
      "Attendance-to-payroll workflow",
      "Payroll reporting",
      "Reduced manual entry",
    ],
  },
  {
    number: "06",
    title: "Onboarding & Documents",
    description:
      "Create a smoother onboarding experience with organized documents, required tasks, contracts, checklists, and employee records from the first day.",
    points: [
      "Digital onboarding checklist",
      "Document collection",
      "Contract management",
      "New employee task tracking",
    ],
  },
];

function InnovativeJourneySection() {
  return (
    <section className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
            Our Journey
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] text-neutral-950 md:text-5xl lg:text-6xl">
            Sneak Peek into our Innovative Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            A glimpse into the people, projects, and long-term partnerships that
            continue to shape the work we do.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {journeyStats.map((stat) => (
            <div key={stat.title} className="text-center">
              <div className="text-5xl font-black tracking-[-0.06em] text-neutral-950 md:text-6xl">
                {stat.value}
              </div>

              <h3 className="mt-5 text-xl font-bold text-neutral-950">
                {stat.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-neutral-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function HrSolutionsSection() {
  return (
    <section className="bg-neutral-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
              HR Software Solutions
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-4xl font-black tracking-[-0.05em] md:text-5xl lg:text-6xl">
              Tools designed around the complete employee journey.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
              From the first job application to daily workforce management, we
              build connected HR systems that help teams manage people,
              processes, and information more efficiently.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 border-t border-white/10">
          {hrSolutions.map((solution, index) => (
            <div
              key={solution.title}
              className="group grid gap-8 border-b border-white/10 py-12 transition-all duration-300 md:grid-cols-[120px_1fr] lg:grid-cols-[150px_0.9fr_1.1fr] lg:items-start"
            >
              {/* Number */}
              <div>
                <span className="text-5xl font-black tracking-[-0.06em] text-white/10 transition-colors duration-300 group-hover:text-emerald-400">
                  {solution.number}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="max-w-md text-3xl font-bold tracking-[-0.04em] text-white md:text-4xl">
                  {solution.title}
                </h3>
              </div>

              {/* Description */}
              <div>
                <p className="max-w-xl text-base leading-7 text-neutral-400">
                  {solution.description}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {solution.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm text-neutral-300"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function HrConnectionSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        {/* Left image */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
            alt="HR and staffing team working together"
            className="h-[420px] w-full object-cover md:h-[520px]"
          />
        </div>

        {/* Right content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
            Connected Workforce
          </p>

          <h3 className="mt-5 max-w-xl text-4xl font-black italic tracking-[-0.05em] text-neutral-950 md:text-5xl">
            Manage your organization with one centralized software
          </h3>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
            Bring recruitment, employee management, workforce coordination, and
            communication together in one centralized platform.
          </p>

          <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-600">
            Instead of relying on disconnected spreadsheets and multiple tools,
            HR teams can manage people, processes, and daily operations from one
            organized system.
          </p>
        </div>
      </div>
    </section>
  );
}
export default function HrAndStaffingPage() {
  return (
    <IndustryPage
      eyebrow="HR and Staffing"
      title="A more connected hiring and workforce experience."
      description="From talent acquisition to staff management, we build systems that reduce delays, improve communication, and help people teams stay ahead of demand."
      image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
      highlights={highlights}
    >
      <HrConnectionSection />
      <HrSolutionsSection />
      <InnovativeJourneySection />
    </IndustryPage>
  );
}
