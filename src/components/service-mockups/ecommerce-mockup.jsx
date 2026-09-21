import { BrowserBar } from "@/components/service-mockups/browser-bar";

export function EcommerceMockup() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-white">
      <BrowserBar />

      <div className="p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="h-5 w-28 rounded-full bg-neutral-900" />
          <div className="h-9 w-28 rounded-xl bg-neutral-100" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item}>
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-neutral-100 to-blue-50" />

              <div className="mt-3 h-3 w-4/5 rounded-full bg-neutral-200" />

              <div className="mt-2 h-3 w-2/5 rounded-full bg-blue-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}