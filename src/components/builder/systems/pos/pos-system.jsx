"use client";

import { GenericSystem } from "@/components/builder/generic-system";

import {
  config,
  basicFeatures,
  addons,
} from "./pos-data";

export function PosSystem(props) {
  return (
    <GenericSystem
      {...props}
      config={config}
      basicFeatures={basicFeatures}
      addons={addons}
    />
  );
}