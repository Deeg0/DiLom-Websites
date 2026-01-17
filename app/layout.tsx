import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DiLom Websites | Professional Web Design Services",
  description: "Professional website design and development services for $700. Custom, mobile-responsive websites tailored to your brand. Get a modern website with SEO, contact forms, and testimonials section.",
  keywords: "web design, website development, professional websites, custom websites, responsive design, SEO, business websites",
  authors: [{ name: "DiLom Websites" }],
  creator: "DiLom Websites",
  publisher: "DiLom Websites",
  openGraph: {
    title: "DiLom Websites | Professional Web Design",
    description: "Professional website design and development services. Get a custom website for $700.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DiLom Websites | Professional Web Design",
    description: "Professional website design and development services.",
  },
  icons: {
    icon: "/DiLomlogo.png",
    apple: "/DiLomlogo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
