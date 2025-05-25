import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from 'react-hot-toast'
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/components/AuthProvider";
import Footer from "@/components/Footer";

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
      <head> 
        <link rel="preload" href="../public/fonts/Poppins-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="../public/fonts/Poppins-Light.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
      </head>
      <body className={`font-prime`} cz-shortcut-listen="true">
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
