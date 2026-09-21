import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata = { title: { default: "Alita Software House", template: "%s | Alita Software House" }, description: "Modern websites, POS systems, business software, dashboards, and digital solutions." };
export default function RootLayout({children}){return <html lang="en"><body className={inter.variable}>{children}<Analytics/><GoogleAnalytics/></body></html>}
