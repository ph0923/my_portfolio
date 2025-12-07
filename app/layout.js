import { DM_Sans } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "./metadata";
import SEOHead from "./components/SEOHead";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  variable: "--font-dm-sans"
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: '%s | Hemanth Pothineni - Data Engineer',
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.author,
  publisher: siteMetadata.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: siteMetadata.locale,
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: 'Hemanth Pothineni Portfolio',
    images: [
      {
        url: siteMetadata.image,
        width: 1200,
        height: 630,
        alt: 'Hemanth Pothineni - Experienced Data Engineer',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'M8wHJTNU-5kXb1zL5uWdClrvtM6NqnWskKl3qVUyvLY',
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <SEOHead />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="google-site-verification" content="H__hIf4PwTUdsKT0Xzf8CKe3YS-54NT32jmQ5W5Rqf4" />
        <link rel="canonical" href={siteMetadata.siteUrl} />
      </head>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
