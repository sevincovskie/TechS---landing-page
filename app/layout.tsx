import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";




const font = Rethink_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech landing page",
  description: "Start landing page using Next.js15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNavbar />
        {children}</body>
        <Footer/>
        <ScrollToTop/>
        
    </html>
  );
}
