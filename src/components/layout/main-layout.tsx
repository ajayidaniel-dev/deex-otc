"use client";

import { useState } from "react";
import { Header } from "./header";
import { NavigationDrawer, navigationItems } from "./navigation-drawer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export function MainLayout({ children, title }: MainLayoutProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white lgsm:flex">
      {/* Persistent sidebar for lgsm+ */}
      <aside className="hidden lgsm:fixed lgsm:inset-y-0 lgsm:left-0 lgsm:block lgsm:w-80 lgsm:bg-[#2c2c2c] lgsm:border-r lgsm:border-gray-700">
        <div className="h-full flex flex-col">
          <div className="px-6 py-6 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Navigation</h2>
          </div>
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main content area shifted on lgsm+ */}
      <div className="flex-1 w-full lgsm:ml-80">
        <Header onMenuClick={() => setIsDrawerOpen(true)} title={title} />

        {/* Mobile drawer for < lgsm */}
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
    </div>
  );
}
