import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Furniro - Premium Furniture Store",
  description: "Shop the best quality furniture for your home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased max-w-site bg-white m-auto font-poppins">
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
