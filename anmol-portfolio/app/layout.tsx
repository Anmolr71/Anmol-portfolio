import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import CursorSpotlight from "@/components/CursorSpotlight";
import BackToTop from "@/components/BackToTop";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anmol Rathore — Data Analyst",
  description:
    "Anmol Rathore is a Data Analyst who turns raw data into actionable business insights using SQL, Python, Excel and Power BI. Explore dashboards, analytics projects, and case studies.",
  keywords: [
    "Anmol Rathore",
    "Data Analyst",
    "SQL",
    "Python",
    "Power BI",
    "Data Visualization",
    "Portfolio",
  ],
  authors: [{ name: "Anmol Rathore" }],
  openGraph: {
    title: "Anmol Rathore — Data Analyst",
    description: "Turning Data into Business Insights.",
    type: "website",
  },
  metadataBase: new URL("https://anmolrathore.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="bg-navy text-slate antialiased selection:bg-accent selection:text-navy">
        <ScrollProgress />
        <CursorSpotlight />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
