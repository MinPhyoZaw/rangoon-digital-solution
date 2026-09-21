"use client";
import { GenericSystem } from "@/components/builder/generic-system";
import { config, basicFeatures, addons } from "./ecommerce-data";
export function EcommerceSystem(props){return <GenericSystem {...props} config={config} basicFeatures={basicFeatures} addons={addons}/>;}
EcommerceSystem.config=config; EcommerceSystem.addons=addons;
