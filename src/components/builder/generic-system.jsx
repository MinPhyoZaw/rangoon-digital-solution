"use client";
import { Check, Plus } from "lucide-react";
import { formatMMK } from "@/lib/format-money";
export function GenericSystem({
  config,
  basicFeatures,
  addons,
  selectedFeatures,
  onToggleFeature,
}) {
  const Icon = config.icon;
  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-neutral-200 bg-white p-4 sm:p-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row">
          <div className="flex gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <Icon size={25} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase text-blue-600">
                Base System
              </p>
              <h2 className="mt-2 text-2xl font-bold">{config.title}</h2>
              <p className="mt-1 text-sm text-neutral-500">{config.subtitle}</p>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-xs text-neutral-400">Starting Price</p>
            <p className="mt-1 text-2xl font-black">
              {formatMMK(config.basePrice)}
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <h3 className="text-xl font-bold">Included Features</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {basicFeatures.map((f) => (
              <div
                key={f}
                className="flex items-center gap-3 rounded-xl bg-neutral-50 px-4 py-3"
              >
                <Check size={15} className="text-green-600" />
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold">Optional Features</h3>
        <div className="mt-6 grid gap-3">
          {addons.map((a) => {
            const A = a.icon;
            const selected = selectedFeatures.includes(a.id);
            return (
              <button
                key={a.id}
                onClick={() => onToggleFeature(a.id)}
                className={`flex items-start gap-3 rounded-2xl border p-4 text-left sm:items-center sm:gap-4 ${selected ? "border-blue-500 bg-blue-50" : "border-neutral-200 bg-white"}`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <A size={19} />
                </span>
                <span className="min-w-0 flex-1">
                  <b className="block">{a.title}</b>
                  <span className="mt-1 block text-sm text-neutral-500">
                    {a.description}
                  </span>
                </span>
                <span className="shrink-0 text-right text-sm font-bold">
                  +{formatMMK(a.price)}{" "}
                  <span className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full border">
                    {selected ? <Check size={14} /> : <Plus size={14} />}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
