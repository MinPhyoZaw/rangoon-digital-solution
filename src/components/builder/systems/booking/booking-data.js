import { Bell, Building2, CalendarDays, CreditCard, Users } from "lucide-react";
export const config={title:"Booking System",subtitle:"Hotels, spas, appointments and services",basePrice:600000,icon:CalendarDays};
export const basicFeatures=["Service listing", "Availability calendar", "Booking flow", "Customer details", "Booking history", "Admin booking management", "Basic notifications", "Mobile responsive UI"];
export const addons=[
{id:"payments",icon:CreditCard,title:"Deposit / Online Payments",description:"Accept booking deposits or payments.",price:80000},
{id:"staff",icon:Users,title:"Staff Scheduling",description:"Assign bookings to staff.",price:70000},
{id:"reminders",icon:Bell,title:"Booking Reminders",description:"Automated customer reminders.",price:60000},
{id:"multi-location",icon:Building2,title:"Multi-Location",description:"Manage multiple service locations.",price:120000}
];
