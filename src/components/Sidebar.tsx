import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const navItems = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Orders", to: "/dashboard/orders" },
  { label: "Equipment", to: "/dashboard/equipment" },
  { label: "Analytics", to: "/dashboard/analytics" },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const linkStyle = (path: string) =>
    `block py-2 px-4 rounded-md transition ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-700"
    }`;

  return (
    <motion.aside
      animate={{ width: collapsed ? 60 : 200 }}
      className="h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col transition-all duration-300"
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mb-6 text-xl self-end text-gray-500 hover:text-blue-600 dark:hover:text-white cursor-pointer"
        title={collapsed ? "Open" : "Close"}
      >
        {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
      </button>

      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <Link key={item.to} to={item.to} className={linkStyle(item.to)}>
            {collapsed ? item.label.charAt(0) : item.label}
          </Link>
        ))}
      </nav>
    </motion.aside>
  );
}
