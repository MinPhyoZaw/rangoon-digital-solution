"use client";
import { GenericSystem } from "@/components/builder/generic-system";
import { config, basicFeatures, addons } from "./business-data";
export function BusinessSystem(props){return <GenericSystem {...props} config={config} basicFeatures={basicFeatures} addons={addons}/>;}
BusinessSystem.config=config; BusinessSystem.addons=addons;
