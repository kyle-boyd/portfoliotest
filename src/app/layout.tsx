import type { Metadata } from "next";
import { Crimson_Text, Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const crimsonText = Crimson_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-crimson",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Kyle Boyd — Product Designer",
  description:
    "Product designer based in Denver, Colorado. Building in product & systems for enterprise solutions.",
  icons: {
    icon:
      process.env.NODE_ENV === "production"
        ? "/portfoliotest/images/kbLogo.svg"
        : "/images/kbLogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${crimsonText.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
