import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from 'react-hot-toast'
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import {Poppins ,Poppins2} from './fonts';

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
      <body className={`${Poppins.variable} ${Poppins2.variable}`} cz-shortcut-listen="true">
        <AuthProvider>
        <Navbar />
        {children}
        <Footer/>
        <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
