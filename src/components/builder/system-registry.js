import { Store, ShoppingCart, CalendarDays, MonitorCog, Globe2 } from "lucide-react";

import { PosSystem } from "./systems/pos/pos-system";
import {
  config as posConfig,
  addons as posAddons,
} from "./systems/pos/pos-data";
import { EcommerceSystem } from "./systems/ecommerce/ecommerce-system";
import {
  config as ecommerceConfig,
  addons as ecommerceAddons,
} from "./systems/ecommerce/ecommerce-data";

import { BookingSystem } from "./systems/booking/booking-system";
import {
  config as bookingConfig,
  addons as bookingAddons,
} from "./systems/booking/booking-data";

import { BusinessSystem } from "./systems/business/business-system";
import {
  config as businessConfig,
  addons as businessAddons,
} from "./systems/business/business-data";

import { WebsiteSystem } from "./systems/website/website-system";
import {
  config as websiteConfig,
  addons as websiteAddons,
} from "./systems/website/website-data";

export const systems = [
  {
    id: "pos",
    title: "POS System",
    subtitle: "Retail & service businesses",
    icon: Store,

    component: PosSystem,
    config: posConfig,
    addons: posAddons,
  },

  {
    id: "ecommerce",
    title: "E-commerce",
    subtitle: "Sell products online",
    icon: ShoppingCart,

    component: EcommerceSystem,
    config: ecommerceConfig,
    addons: ecommerceAddons,
  },

  {
    id: "booking",
    title: "Booking System",
    subtitle: "Hotels, spa & appointments",
    icon: CalendarDays,

    component: BookingSystem,
    config: bookingConfig,
    addons: bookingAddons,
  },

  {
    id: "business",
    title: "Business System",
    subtitle: "Internal operations",
    icon: MonitorCog,

    component: BusinessSystem,
    config: businessConfig,
    addons: businessAddons,
  },

  {
    id: "website",
    title: "Company Website",
    subtitle: "Modern digital presence",
    icon: Globe2,

    component: WebsiteSystem,
    config: websiteConfig,
    addons: websiteAddons,
  },
];

export function getSystem(id) {
  return systems.find((system) => system.id === id) ?? systems[0];
}