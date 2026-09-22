import {
  ClipboardList,
  FileText,
  Globe2,
  Languages,
  PanelsTopLeft,
} from "lucide-react";

export const config = {
  title: "Company Website",
  subtitle: "Modern digital presence for your business",
  basePrice: 750000,
  icon: Globe2,
};

export const basicFeatures = [
  "Responsive mobile and desktop design",
  "Home page",
  "About page",
  "Up to 3 service pages",
  "Contact section",
  "Basic contact form",
  "Basic SEO setup",
  "Performance optimization",
  "Social media links",
  "Google Analytics setup",
];

export const addons = [
  {
    id: "cms",
    icon: PanelsTopLeft,
    title: "Content Management",
    description:
      "Admin dashboard to update selected website content without coding.",
    price: 300000,
  },
  {
    id: "blog",
    icon: FileText,
    title: "Blog / News",
    description: "Create, edit, publish and manage company articles and news.",
    price: 200000,
  },
  {
    id: "multilingual",
    icon: Languages,
    title: "Additional Language",
    description:
      "Add one additional website language. Translation service is not included.",
    price: 250000,
  },
  {
    id: "quotation",
    icon: ClipboardList,
    title: "Advanced Quotation Form",
    description:
      "Collect detailed quotation requests and send submissions to email.",
    price: 200000,
  },
];
