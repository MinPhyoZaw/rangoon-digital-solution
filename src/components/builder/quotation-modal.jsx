"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { QuotationForm } from "@/components/builder/quotation-form";
import { QuotationSuccess } from "@/components/builder/quotation-success";

export function QuotationModal({
  softwareType,
  basePrice,
  selectedAddons,
  total,
}) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function openModal() {
    setSubmitted(false);
    setOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Request Quotation
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={submitted ? "Request sent" : "Request a quotation"}
      >
        {submitted ? (
          <QuotationSuccess onClose={() => setOpen(false)} />
        ) : (
          <>
            <p className="mb-5 text-sm text-neutral-500">
              Share your contact details and we will follow up about your
              selected system.
            </p>
            <QuotationForm
              softwareType={softwareType}
              basePrice={basePrice}
              selectedAddons={selectedAddons}
              total={total}
              onSuccess={() => setSubmitted(true)}
            />
          </>
        )}
      </Modal>
    </>
  );
}
