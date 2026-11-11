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
  metadataBase: new URL("https://rafaelalba.com"),
  alternates: { canonical: "/" },
  title: "Rafael Alba | IT Operations & Application Support Engineer",
  description:
    "IT Operations and Application Support Engineer with 20+ years in enterprise IT, VMware infrastructure, Microsoft 365, critical manufacturing systems, PowerShell and Python.",
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
    "VMware vSphere",
    "Infrastructure Support Engineer",
    "Remote IT Operations",
  ],
  authors: [{ name: "Rafael Alba" }],
  openGraph: {
    title: "Rafael Alba | IT Operations & Application Support Engineer",
    description:
      "20+ years in IT operations, application support, VMware infrastructure, Microsoft 365 and PowerShell/Python automation.",
    url: "https://rafaelalba.com",
    siteName: "Rafael Alba",
    images: [{ url: "/images/hero-desktop-wide.png", alt: "Rafael Alba professional IT portfolio" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Rafael Alba | IT Operations & Application Support Engineer", images: ["/images/hero-desktop-wide.png"] },
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