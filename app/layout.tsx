import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scribed.eu"),
  title: {
    default: "Scribed — Premium Document Design",
    template: "%s — Scribed",
  },
  description:
    "Strategy-grade document templates for founders, graduates, and teams. Ready in seconds, not weeks.",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://scribed.eu",
    siteName: "Scribed",
    title: "Scribed — Premium Document Design",
    description:
      "Strategy-grade document templates for founders, graduates, and teams. Ready in seconds, not weeks.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Scribed — Premium Document Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scribed — Premium Document Design",
    description:
      "Strategy-grade document templates for founders, graduates, and teams.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-s.png", type: "image/png", sizes: "1024x1024" },
    ],
    apple: "/icon-s.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${dmSans.variable}`}
    >
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
