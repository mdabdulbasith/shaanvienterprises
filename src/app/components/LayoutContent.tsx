"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

export default function LayoutContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  
  // Hide navbar and footer for admin routes
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <main>
        {children}
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
}
