import LayoutProvider from "@/components/LayoutProvider";
import "./globals.css";
import type { Metadata } from "next";
import "@/stylesheet/common.css";
import "@/stylesheet/layout.css";
import "@/stylesheet/override.css";
import "@/stylesheet/loader.css";
import ReduxProvider from "@/components/ReduxProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <LayoutProvider>{children}</LayoutProvider>
    </ReduxProvider>
  );
}
