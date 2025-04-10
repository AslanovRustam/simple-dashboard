import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="md:w-3xl lg:w-5xl">
      <Navbar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
