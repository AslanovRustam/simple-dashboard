import Sidebar from "../components/Sidebar";

import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
        <Outlet />
      </div>
    </div>
  );
}
