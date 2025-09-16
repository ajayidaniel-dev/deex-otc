"use client";

import { useState } from "react";
import { Header } from "./header";
import { NavigationDrawer } from "./navigation-drawer";
import { Toaster } from "sonner";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function MainLayout({ children, title }: MainLayoutProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Header onMenuClick={() => setIsDrawerOpen(true)} title={title} />

      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      <main className="flex-1">{children}</main>

      <Toaster
        position="top-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "#2c2c2c",
            color: "#ffffff",
            border: "1px solid #3a3a3a",
          },
        }}
      />
    </div>
  );
}
