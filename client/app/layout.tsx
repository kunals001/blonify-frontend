import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from "@/components/AuthProvider";
import LayoutShell from "@/components/Layoutshell";

export const metadata: Metadata = {
  title: "Blonify",
  description: "Best Gadget Reviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-prime`} cz-shortcut-listen="true">
        <AuthProvider>
        <LayoutShell>
        {children}
        </LayoutShell>
        <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
