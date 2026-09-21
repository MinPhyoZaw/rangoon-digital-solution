"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [state, setState] = useState({
    loading: false,
    message: "",
  });

  async function submit(e) {
    e.preventDefault();

    const formElement = e.currentTarget;

    setState({
      loading: true,
      message: "",
    });

    const data = Object.fromEntries(new FormData(formElement));

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        addons: [],
        total: null,
      }),
    });

    const body = await res.json();

    setState({
      loading: false,
      message: body.message || "Done",
    });

    if (res.ok) {
      formElement.reset();
    }
  }

  return (
    <form
      onSubmit={submit}
      className="grid gap-4 rounded-3xl bg-white p-4 text-foreground shadow-2xl shadow-black/20 sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Your name"
          className="h-12 rounded-xl border px-4 outline-none focus:ring-2 focus:ring-primary/30"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email address"
          className="h-12 rounded-xl border px-4 outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="company"
          placeholder="Company / business"
          className="h-12 rounded-xl border px-4 outline-none focus:ring-2 focus:ring-primary/30"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          className="h-12 rounded-xl border px-4 outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <select
        name="service"
        defaultValue="Website"
        className="h-12 rounded-xl border bg-white px-4 outline-none focus:ring-2 focus:ring-primary/30"
      >
        <option>Website</option>
        <option>E-commerce</option>
        <option>Business System</option>
        <option>POS System</option>
        <option>UI/UX Design</option>
        <option>Other</option>
      </select>

      <textarea
        name="message"
        required
        rows="5"
        placeholder="Tell us about your project"
        className="rounded-xl border p-4 outline-none focus:ring-2 focus:ring-primary/30"
      />

      <Button type="submit" disabled={state.loading} size="lg">
        {state.loading ? "Sending..." : "Send request"}

        <Send size={17} />
      </Button>

      {state.message && (
        <p className="text-sm text-muted-foreground">{state.message}</p>
      )}
    </form>
  );
}
