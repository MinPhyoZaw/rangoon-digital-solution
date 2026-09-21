import { Bell, ChartNoAxesCombined, CheckCircle2, FileSpreadsheet, MonitorCog } from "lucide-react";
export const config={title:"Business System",subtitle:"Custom internal operations and management",basePrice:750000,icon:MonitorCog};
export const basicFeatures=["Admin dashboard", "User management", "Role-based access", "Core workflow", "Basic records", "Search & filters", "Summary reports", "Activity history"];
export const addons=[
{id:"approval",icon:CheckCircle2,title:"Approval Workflow",description:"Multi-step approval processes.",price:90000},
{id:"reports",icon:ChartNoAxesCombined,title:"Advanced Reports",description:"Detailed analytics and KPIs.",price:90000},
{id:"notifications",icon:Bell,title:"Notifications",description:"System and workflow alerts.",price:60000},
{id:"export",icon:FileSpreadsheet,title:"Excel Export",description:"Export business records and reports.",price:40000}
];
