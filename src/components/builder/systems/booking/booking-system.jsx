"use client";
import { GenericSystem } from "@/components/builder/generic-system";
import { config, basicFeatures, addons } from "./booking-data";
export function BookingSystem(props){return <GenericSystem {...props} config={config} basicFeatures={basicFeatures} addons={addons}/>;}
BookingSystem.config=config; BookingSystem.addons=addons;
