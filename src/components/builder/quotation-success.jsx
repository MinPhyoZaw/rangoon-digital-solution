import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuotationSuccess({ onClose }) {
  return (
    <div className="flex flex-col items-center px-2 py-6 text-center sm:py-10">
      <div className="flex size-20 items-center justify-center rounded-full bg-blue-50">
        <Image
          src="/images/logo/logo-alita.png"
          alt="Alita logo"
          width={52}
          height={52}
          className="h-12 w-12 object-contain"
        />
      </div>

      <h3 className="mt-5 max-w-md text-2xl font-black text-neutral-950 sm:text-3xl">
        Thank you for choosing Alita for your business growth
      </h3>
      <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-500">
        Your quotation request has been received. Our team will contact you
        shortly.
      </p>
      <Button type="button" onClick={onClose} size="lg" className="mt-7">
        Close
      </Button>
    </div>
  );
}
