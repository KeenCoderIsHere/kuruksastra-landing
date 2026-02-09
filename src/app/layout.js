import { Geist, Geist_Mono, Alfa_Slab_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const alfaSlabOne = Alfa_Slab_One({
  variable: "--font-alfa-slab",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kuruksastra 2025 - Artists Showcase",
  description: "Kuruksastra 2025 - SASTRA University's legendary cultural extravaganza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${alfaSlabOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

