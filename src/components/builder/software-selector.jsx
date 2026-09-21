import { Check } from "lucide-react";

export function SoftwareSelector({ systems, activeId, onChange }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
        Step 01
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        What do you want to build?
      </h2>
      <div className="mt-5 grid gap-3 sm:mt-7 sm:grid-cols-2 lg:grid-cols-5">
        {systems.map((system) => {
          const Icon = system.icon;
          const active = activeId === system.id;
          return (
            <button
              key={system.id}
              type="button"
              onClick={() => onChange(system.id)}
              className={`relative rounded-2xl border p-4 text-left transition-all sm:p-5 ${active ? "border-blue-500 bg-blue-50" : "border-neutral-200 bg-white hover:border-neutral-300"}`}
            >
              {active && (
                <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Check size={14} />
                </span>
              )}
              <Icon
                size={24}
                className={active ? "text-blue-600" : "text-neutral-400"}
              />
              <h3 className="mt-5 font-semibold">{system.title}</h3>
              <p className="mt-1 text-xs text-neutral-500">{system.subtitle}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
