import { Bell, Building2, CalendarDays, CreditCard, Users } from "lucide-react";

export const config = {
  title: "Booking System",
  subtitle: "Booking solutions for spas, appointments and service businesses",
  basePrice: 1500000,
  icon: CalendarDays,
};

export const basicFeatures = [
  "Service listing",
  "Availability and time-slot calendar",
  "Customer booking flow",
  "Customer information collection",
  "Customer booking history",
  "Admin booking management",
  "Booking status management",
  "Basic email notifications",
  "Mobile and desktop responsive design",
];

export const addons = [
  {
    id: "payments",
    icon: CreditCard,
    title: "Deposit / Online Payment",
    description:
      "Accept booking deposits through QR receipt upload or a supported payment gateway.",
    price: 600000,
  },
  {
    id: "staff",
    icon: Users,
    title: "Staff Scheduling",
    description:
      "Create staff schedules and assign customer bookings to available staff.",
    price: 400000,
  },
  {
    id: "reminders",
    icon: Bell,
    title: "Automated Booking Reminders",
    description:
      "Send scheduled booking reminders through email, Telegram or supported services.",
    price: 300000,
  },
  {
    id: "multi-location",
    icon: Building2,
    title: "Multi-Location Management",
    description:
      "Manage services, availability and bookings across multiple business locations.",
    price: 700000,
  },
];
