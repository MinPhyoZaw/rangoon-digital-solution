import { Mail, MessageSquareQuote } from "lucide-react";
import { ContactForm } from "./contact-form";
export function Contact() {
  return (
    <section
      id="contact"
      className="bg-primary py-16 text-primary-foreground sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:gap-12 sm:px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div>
          <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-white/15">
            <MessageSquareQuote />
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 opacity-80 sm:mt-6 sm:text-lg sm:leading-8">
            Tell us what you need. This starter sends quotation requests through
            a lightweight Next.js API route using Resend—no database required.
          </p>
          <div className="mt-7 flex items-start gap-3 text-sm sm:items-center sm:text-base">
            <Mail size={18} />
            <span>Configure your business email in .env.local</span>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
