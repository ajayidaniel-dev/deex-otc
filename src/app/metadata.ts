import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DeeX Desk - OTC Crypto Trading",
  description: "Professional OTC cryptocurrency trading platform",
  manifest: "/manifest.json",
  themeColor: "#3b82f6",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "DeeX Desk",
  },
  icons: {
    icon: "/icon-192x192.png",
    apple: "/icon-192x192.png",
  },
};
