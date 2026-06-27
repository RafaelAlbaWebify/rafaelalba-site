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
  title: "Rafael Alba — Microsoft 365 & IT Operations Support",
  description:
    "Microsoft 365, Entra ID and endpoint support with structured diagnostics, clear documentation and practical PowerShell automation. Available for remote roles and B2B support contracts.",
  keywords: [
    "Rafael Alba",
    "IT Operations Engineer",
    "Microsoft 365 support",
    "Entra ID support",
    "Endpoint support",
    "IT Support Engineer",
    "Application Support Engineer",
    "PowerShell automation",
    "Microsoft 365 troubleshooting",
    "Identity and access troubleshooting",
    "Support Automation",
    "Remote IT Operations",
    "M365 Support Engineer",
  ],
  authors: [{ name: "Rafael Alba" }],
  openGraph: {
    title: "Rafael Alba — Microsoft 365 & IT Operations Support",
    description:
      "Microsoft 365, Entra ID and endpoint support with structured diagnostics, clear documentation and practical automation.",
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