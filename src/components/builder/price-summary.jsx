"use client";
import Link from "next/link";
import { CircleDollarSign, Trash2 } from "lucide-react";
import { formatMMK } from "@/lib/format-money";
import { QuotationModal } from "@/components/builder/quotation-modal";
export function PriceSummary({ title, basePrice, selectedAddons, onRemove }) {
  const total = basePrice + selectedAddons.reduce((s, a) => s + a.price, 0);
  return (
    <div className="self-start rounded-[2rem] border border-neutral-200 bg-white p-4 shadow-sm sm:p-6 lg:sticky lg:top-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Your Software
          </p>
          <h3 className="mt-2 text-2xl font-bold">{title}</h3>
        </div>
        <CircleDollarSign className="text-blue-600" />
      </div>
      <div className="mt-7 flex justify-between border-b pb-4">
        <span>Base {title}</span>
        <b>{formatMMK(basePrice)}</b>
      </div>
      {selectedAddons.map((a) => (
        <div
          key={a.id}
          className="flex items-center justify-between border-b py-4"
        >
          <div>
            <p className="text-sm font-medium">{a.title}</p>
            <button
              onClick={() => onRemove(a.id)}
              className="mt-1 inline-flex items-center gap-1 text-xs text-red-500"
            >
              <Trash2 size={12} />
              Remove
            </button>
          </div>
          <b className="text-sm">+{formatMMK(a.price)}</b>
        </div>
      ))}
      <div className="mt-5 rounded-2xl bg-neutral-950 p-6 text-white">
        <p className="text-xs uppercase text-white/45">
          Estimated Project Price
        </p>
        <p className="mt-3 text-3xl font-black">{formatMMK(total)}</p>
        <p className="mt-3 text-xs text-white/40">
          Final pricing is confirmed after a short requirement discussion.
        </p>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <QuotationModal
          softwareType={title}
          basePrice={basePrice}
          selectedAddons={selectedAddons}
          total={total}
        />
        <Link
          href="/?scroll=contact-form"
          className="inline-flex items-center justify-center rounded-xl border px-5 py-3.5 text-sm font-semibold"
        >
          Discuss First
        </Link>
      </div>
    </div>
  );
}
