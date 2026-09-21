"use client";
import { GenericSystem } from "@/components/builder/generic-system";
import { config, basicFeatures, addons } from "./website-data";
export function WebsiteSystem(props){return <GenericSystem {...props} config={config} basicFeatures={basicFeatures} addons={addons}/>;}
WebsiteSystem.config=config; WebsiteSystem.addons=addons;
