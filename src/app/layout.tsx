import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundCanvas from "@/components/BackgroundCanvas";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEXOVYTE | Legal Workflow Automation & Cloud Business Solutions",
  description: "NEXOVYTE helps freelancers, agencies, and digital businesses scale professional operations through AWS cloud solutions, SaaS development, and LexFlow™ legal workflow automation.",
  keywords: "NEXOVYTE, LexFlow, Legal Automation, AWS Consulting, Cloud Migration, SaaS Development, Freelancer Contracts, Agency Workflows",
  metadataBase: new URL("https://nexovyte.com"),
  openGraph: {
    title: "NEXOVYTE | Legal Workflow Automation & Cloud Business Solutions",
    description: "Enterprise Legal Workflow Automation & AWS Cloud Development Platform",
    url: "https://nexovyte.com",
    siteName: "NEXOVYTE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXOVYTE | Legal Workflow Automation & Cloud Solutions",
    description: "Enterprise Legal Workflow Automation & AWS Cloud Development Platform",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full dark antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#070a1a] text-slate-100 font-sans relative selection:bg-emerald-500/30 selection:text-emerald-200">
        <BackgroundCanvas />
        <Navbar />
        <main className="flex-grow relative z-10 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
