"use client";
import { useState } from "react";
import { BuilderHeader } from "@/components/builder/builder-header";
import { SoftwareSelector } from "@/components/builder/software-selector";
import { PriceSummary } from "@/components/builder/price-summary";
import { systems, getSystem } from "@/components/builder/system-registry";
export default function BuildYourSystemPage() {
  const [softwareId, setSoftwareId] = useState("pos");
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const activeSystem = getSystem(softwareId);

  const ActiveComponent = activeSystem.component;

  const config = activeSystem.config;
  const addons = activeSystem.addons ?? [];
  const selectedAddons = addons.filter((a) => selectedFeatures.includes(a.id));
  function changeSoftware(id) {
    setSoftwareId(id);
    setSelectedFeatures([]);
  }
  function toggleFeature(id) {
    setSelectedFeatures((c) =>
      c.includes(id) ? c.filter((x) => x !== id) : [...c, id],
    );
  }
  function removeFeature(id) {
    setSelectedFeatures((c) => c.filter((x) => x !== id));
  }
  return (
    <main className="min-h-screen bg-[#f7f8fb] text-neutral-950">
      <BuilderHeader />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-5 sm:py-16 lg:px-8">
        <SoftwareSelector
          systems={systems}
          activeId={softwareId}
          onChange={changeSoftware}
        />
        <div className="mt-8 grid gap-8 lg:mt-14 lg:grid-cols-[1fr_.78fr] lg:gap-10">
          <ActiveComponent
            selectedFeatures={selectedFeatures}
            onToggleFeature={toggleFeature}
          />
          <PriceSummary
            title={config.title}
            basePrice={config.basePrice}
            selectedAddons={selectedAddons}
            onRemove={removeFeature}
          />
        </div>
      </section>
    </main>
  );
}
