import { BrowserBar } from "@/components/service-mockups/browser-bar";

export function WebsiteMockup() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-white">
      <BrowserBar />

      <div className="p-7">
        <div className="grid grid-cols-[1.1fr_.9fr] items-center gap-8">
          <div>
            <div className="h-3 w-24 rounded-full bg-blue-100" />

            <div className="mt-5 space-y-3">
              <div className="h-7 w-full rounded-lg bg-neutral-900" />
              <div className="h-7 w-4/5 rounded-lg bg-neutral-900/80" />
            </div>

            <div className="mt-6 space-y-2">
              <div className="h-3 w-full rounded-full bg-neutral-200" />
              <div className="h-3 w-5/6 rounded-full bg-neutral-200" />
              <div className="h-3 w-3/5 rounded-full bg-neutral-200" />
            </div>

            <div className="mt-6 h-11 w-32 rounded-xl bg-blue-600" />
          </div>

          <div className="h-60 rounded-[2rem] bg-gradient-to-br from-blue-100 via-indigo-100 to-violet-100" />
        </div>
      </div>
    </div>
  );
}