
import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";

import { AppProvider } from "@/components/app-provider";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { PlanProvider } from "./context/PlanContext";
// import { Navbar } from "@/components/navbar";
// import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} bg-black text-white antialiased`}
      >
        <PlanProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </PlanProvider>
      </body>
    </html>
  );
}

