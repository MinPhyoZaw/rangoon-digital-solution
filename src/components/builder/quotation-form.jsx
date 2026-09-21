"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { formatMMK } from "@/lib/format-money";
import { Button } from "@/components/ui/button";

export function QuotationForm({
  softwareType,
  basePrice,
  selectedAddons,
  total,
  onSuccess,
}) {
  const [state, setState] = useState({ loading: false, message: "" });

  async function submit(event) {
    event.preventDefault();

    const formElement = event.currentTarget;

    setState({
      loading: true,
      message: "",
    });

    const form = new FormData(formElement);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.get("email"),
        phone: form.get("phone"),
        service: softwareType,

        addons: selectedAddons.map((addon) => ({
          title: addon.title,
          price: addon.price,
        })),

        total,
      }),
    });

    const result = await response.json();

    setState({
      loading: false,
      message: result.message || "Done",
    });

    if (response.ok) {
      formElement.reset();

      if (onSuccess) {
        onSuccess();
      }
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-5">
      <div className="rounded-2xl bg-neutral-50 p-4 text-sm">
        <div className="flex justify-between gap-4">
          <span className="text-neutral-500">Software</span>
          <strong className="text-right">{softwareType}</strong>
        </div>
        <div className="mt-3 flex justify-between gap-4">
          <span className="text-neutral-500">Base price</span>
          <strong>{formatMMK(basePrice)}</strong>
        </div>
        {selectedAddons.length > 0 && (
          <div className="mt-3 border-t pt-3">
            <p className="text-neutral-500">Add-ons</p>
            <ul className="mt-2 grid gap-1">
              {selectedAddons.map((addon) => (
                <li key={addon.id} className="flex justify-between gap-4">
                  <span>{addon.title}</span>
                  <strong>+{formatMMK(addon.price)}</strong>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="mt-3 flex justify-between border-t pt-3 text-base">
          <span>Estimated total</span>
          <strong>{formatMMK(total)}</strong>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="email"
          name="email"
          required
          placeholder="Email address"
          aria-label="Email address"
          className="h-12 rounded-xl border px-4 outline-none focus:ring-2 focus:ring-primary/30"
        />
        <input
          type="tel"
          name="phone"
          required
          placeholder="Phone number"
          aria-label="Phone number"
          className="h-12 rounded-xl border px-4 outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <Button type="submit" disabled={state.loading} size="lg">
        {state.loading ? "Sending..." : "Send quotation request"}
        <Send size={17} />
      </Button>
      {state.message && (
        <p className="text-sm text-muted-foreground">{state.message}</p>
      )}
    </form>
  );
}
