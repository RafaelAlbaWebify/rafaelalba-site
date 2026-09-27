import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafael Alba — Application Support & IT Operations Engineer",
  description:
    "Application Support and IT Operations Engineer with L2 experience across Microsoft 365, Windows, identity, enterprise applications and infrastructure, complemented by automation, cloud and cybersecurity.",
  keywords: [
    "Rafael Alba",
    "Application Support Engineer",
    "Production Support Engineer",
    "Technical Support Engineer",
    "IT Operations Engineer",
    "Software Support Engineer",
    "Microsoft 365 support",
    "Entra ID support",
    "Windows support",
    "Incident Management",
    "PowerShell automation",
    "Python automation",
    "Remote IT Operations",
  ],
  authors: [{ name: "Rafael Alba" }],
  openGraph: {
    title: "Rafael Alba — Application Support & IT Operations Engineer",
    description:
      "L2 Application Support and IT Operations across Microsoft 365, Windows, identity, enterprise applications, infrastructure and practical automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${geistMono.variable} antialiased bg-white text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}