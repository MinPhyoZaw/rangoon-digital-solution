import {
  ShoppingCart,
  CreditCard,
  Star,
  TicketPercent,
  Truck,
  MapPin,
  PackageOpen,
  SlidersHorizontal,
  ScanBarcode,
  Users,
  BadgePercent,
  Bell,
  Mail,
  Smartphone,
  Store,
  Warehouse,
  ClipboardList,
  RotateCcw,
  ChartNoAxesCombined,
  LayoutDashboard,
  Search,
  Sparkles,
  FileSpreadsheet,
  ReceiptText,
  Languages,
  CircleDollarSign,
  LogIn,
  MessageCircle,
  PackageCheck,
  CalendarClock,
  UserCog,
  Megaphone,
  Tags,
  Upload,
  ShoppingBag,
} from "lucide-react";

export const config = {
  title: "E-commerce",
  subtitle: "For businesses that want to sell products online",
  basePrice: 650000,
  icon: ShoppingCart,
};

export const basicFeatures = [
  "Storefront / Home Page",
  "Product Management",
  "Product Categories",
  "Product Detail Page",
  "Product Images",
  "Product Price + Sale Price",
  "Basic Inventory",
  "Shopping Cart",
  "Checkout",
  "Customer Registration / Login",
  "Guest Checkout",
  "Customer Profile",
  "Order Placement",
  "Order History",
  "Basic Order Management",
  "Cash on Delivery",
  "Basic Shipping Fee Setup",
  "Product Search",
  "Basic Product Filters",
  "Contact / About Pages",
  "Mobile Responsive Design",
  "Basic SEO",
  "Basic Sales Report",
  "Basic Admin Dashboard",
  "Basic Store Settings",
];

export const addons = [
  {
    id: "online-payment",
    icon: CreditCard,
    title: "Online Payment Integration",
    description:
      "Connect KBZPay, WavePay, bank transfer or supported payment gateways.",
    price: 90000,
  },
  {
    id: "reviews",
    icon: Star,
    title: "Product Reviews & Ratings",
    description:
      "Allow customers to rate products and leave reviews.",
    price: 60000,
  },
  {
    id: "coupon",
    icon: TicketPercent,
    title: "Coupon / Voucher System",
    description:
      "Coupon codes, percentage discounts, fixed discounts and vouchers.",
    price: 70000,
  },
  {
    id: "advanced-delivery",
    icon: Truck,
    title: "Advanced Delivery Management",
    description:
      "Delivery zones, shipping fees, delivery status and shipping rules.",
    price: 90000,
  },
  {
    id: "address-management",
    icon: MapPin,
    title: "Address Management",
    description:
      "Allow customers to save and manage multiple delivery addresses.",
    price: 50000,
  },
  {
    id: "advanced-inventory",
    icon: PackageOpen,
    title: "Advanced Inventory",
    description:
      "Stock movements, adjustments, damaged stock and inventory history.",
    price: 90000,
  },
  {
    id: "product-variants",
    icon: SlidersHorizontal,
    title: "Product Variants",
    description:
      "Support size, color, model, weight and other product options.",
    price: 70000,
  },
  {
    id: "sku-barcode",
    icon: ScanBarcode,
    title: "SKU / Barcode Management",
    description:
      "Manage SKU and barcode codes for products and variants.",
    price: 60000,
  },
  {
    id: "customer-management",
    icon: Users,
    title: "Customer Management / CRM",
    description:
      "Customer profiles, purchase history, notes and customer segments.",
    price: 70000,
  },
  {
    id: "loyalty",
    icon: BadgePercent,
    title: "Loyalty / Points",
    description:
      "Reward points, membership levels and redeemable points.",
    price: 80000,
  },
  {
    id: "notifications",
    icon: Bell,
    title: "Order Notifications",
    description:
      "Send order confirmation and status notifications through email, Telegram or app.",
    price: 60000,
  },
  {
    id: "email-marketing",
    icon: Mail,
    title: "Email Marketing",
    description:
      "Promotional emails, newsletters and customer campaigns.",
    price: 80000,
  },
  {
    id: "mobile-app",
    icon: Smartphone,
    title: "Customer Mobile App",
    description:
      "Android or iOS shopping application connected to the e-commerce system.",
    price: 350000,
  },
  {
    id: "multi-vendor",
    icon: Store,
    title: "Multi-Vendor Marketplace",
    description:
      "Allow multiple vendors to manage their products, orders and store information.",
    price: 300000,
  },
  {
    id: "multi-warehouse",
    icon: Warehouse,
    title: "Multi-Warehouse",
    description:
      "Manage inventory across multiple warehouses or stock locations.",
    price: 150000,
  },
  {
    id: "purchase-management",
    icon: ClipboardList,
    title: "Purchase Management",
    description:
      "Purchase orders, incoming stock and supplier purchase records.",
    price: 90000,
  },
  {
    id: "returns-refunds",
    icon: RotateCcw,
    title: "Returns & Refunds",
    description:
      "Customer return requests, refunds and product exchanges.",
    price: 70000,
  },
  {
    id: "advanced-reports",
    icon: ChartNoAxesCombined,
    title: "Advanced Reports",
    description:
      "Sales comparison, product profit, category performance and stock valuation.",
    price: 90000,
  },
  {
    id: "analytics-dashboard",
    icon: LayoutDashboard,
    title: "Business Analytics Dashboard",
    description:
      "Revenue charts, average order value, conversion metrics and business KPIs.",
    price: 100000,
  },
  {
    id: "advanced-search",
    icon: Search,
    title: "Advanced Search & Filters",
    description:
      "Filter by price, brand, size, color, rating, availability and other attributes.",
    price: 70000,
  },
  {
    id: "recommendations",
    icon: Sparkles,
    title: "Product Recommendations",
    description:
      "Related products, similar products and frequently bought together suggestions.",
    price: 100000,
  },
  {
    id: "excel-export",
    icon: FileSpreadsheet,
    title: "Excel Export",
    description:
      "Export products, orders, customers, inventory and reports.",
    price: 40000,
  },
  {
    id: "invoice",
    icon: ReceiptText,
    title: "Invoice Generation",
    description:
      "Generate branded invoices and downloadable PDF invoices.",
    price: 50000,
  },
  {
    id: "multi-language",
    icon: Languages,
    title: "Multi-language",
    description:
      "Support Burmese, English and additional website languages.",
    price: 90000,
  },
  {
    id: "multi-currency",
    icon: CircleDollarSign,
    title: "Multi-Currency",
    description:
      "Display and manage product prices in multiple currencies.",
    price: 80000,
  },
  {
    id: "social-login",
    icon: LogIn,
    title: "Social Login",
    description:
      "Allow customers to sign in using Google, Facebook or supported providers.",
    price: 60000,
  },
  {
    id: "live-chat",
    icon: MessageCircle,
    title: "Live Chat / Messenger",
    description:
      "Integrate customer support chat, Messenger or other chat services.",
    price: 60000,
  },
  {
    id: "order-tracking",
    icon: PackageCheck,
    title: "Order Tracking",
    description:
      "Allow customers to view their current order and delivery status.",
    price: 70000,
  },
  {
    id: "pre-order",
    icon: ShoppingBag,
    title: "Pre-order System",
    description:
      "Allow customers to order upcoming or currently unavailable products.",
    price: 70000,
  },
  {
    id: "scheduled-release",
    icon: CalendarClock,
    title: "Scheduled Product Release",
    description:
      "Automatically publish products at a selected date and time.",
    price: 50000,
  },
  {
    id: "staff-permissions",
    icon: UserCog,
    title: "Staff Roles & Permissions",
    description:
      "Separate permissions for admin, sales, inventory and customer service staff.",
    price: 80000,
  },
  {
    id: "promotion-system",
    icon: Megaphone,
    title: "Advanced Promotion System",
    description:
      "Flash sales, Buy 1 Get 1, campaign pricing and scheduled discounts.",
    price: 90000,
  },
  {
    id: "brand-management",
    icon: Tags,
    title: "Brand Management",
    description:
      "Create brands, brand pages and filter products by brand.",
    price: 50000,
  },
  {
    id: "bulk-upload",
    icon: Upload,
    title: "Bulk Product Upload",
    description:
      "Upload large product lists using Excel or CSV files.",
    price: 70000,
  },
  {
    id: "pos-integration",
    icon: Store,
    title: "POS Integration",
    description:
      "Synchronize online orders and inventory with a physical POS system.",
    price: 180000,
  },
];