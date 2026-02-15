import { Geist, Geist_Mono, Alfa_Slab_One, Albert_Sans, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const alfa = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alfa-slab",
});

export const albert = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

// export const metadata = {
//   title: "Kuruksastra",
//   description: "Event Website",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${alfa.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
