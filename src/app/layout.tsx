import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlexxyDrive - The Future of Mobility",
  description:
    "FlexxyDrive offers seamless ride-sharing and vehicle rental services with top-tier convenience and safety.",
  keywords:
    "ride-sharing, vehicle rental, car hire, mobility, FlexxyDrive, safe transport, driver service",
  authors: [{ name: "FlexxyDrive Team", url: "https://flexxydrive.com" }],
  openGraph: {
    title: "FlexxyDrive - Your Trusted Ride Partner",
    description:
      "Seamless ride-sharing and vehicle rental services at your fingertips.",
    url: "https://flexxydrive.com",
    siteName: "FlexxyDrive",
    images: [
      {
        url: "https://flexxydrive.com/home-bg.png",
        width: 1200,
        height: 630,
        alt: "FlexxyDrive - Your Trusted Ride Partner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlexxyDrive - Your Trusted Ride Partner",
    description:
      "Seamless ride-sharing and vehicle rental services at your fingertips.",
    images: ["https://flexxydrive.com/home-bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4A148C" />
        <link rel="icon" href="https://flexxydrive.com/logo2.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
