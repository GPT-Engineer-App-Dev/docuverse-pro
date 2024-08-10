import { Home, Book, Code, FileText, Settings } from "lucide-react";
import Index from "./pages/Index.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Guides",
    to: "/guides",
    icon: <Book className="h-4 w-4" />,
    page: <Index />, // Replace with Guides component when created
  },
  {
    title: "API Reference",
    to: "/api",
    icon: <Code className="h-4 w-4" />,
    page: <Index />, // Replace with API component when created
  },
  {
    title: "Examples",
    to: "/examples",
    icon: <FileText className="h-4 w-4" />,
    page: <Index />, // Replace with Examples component when created
  },
  {
    title: "Configuration",
    to: "/configuration",
    icon: <Settings className="h-4 w-4" />,
    page: <Index />, // Replace with Configuration component when created
  },
];