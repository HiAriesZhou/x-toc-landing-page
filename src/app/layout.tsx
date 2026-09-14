import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://x-toc.vercel.app"),
  title: {
    default: "X-TOC | Navigate and Clip X Articles",
    template: "%s | X-TOC",
  },
  description:
    "Jump between sections in long X articles, save useful passages locally, and export your clips as Markdown or JSON.",
  openGraph: {
    title: "X-TOC | Navigate and Clip X Articles",
    description: "Keep article structure visible. Save useful passages locally.",
    type: "website",
    siteName: "X-TOC",
    images: [{
      url: "/images/x-toc-social-1280x640.png",
      width: 1280,
      height: 640,
      type: "image/png",
      alt: "X-TOC demo: navigate an article with a collapsible pinned table of contents and save selected passages locally.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    images: [{
      url: "/images/x-toc-social-1280x640.png",
      alt: "X-TOC demo: navigate an article with a collapsible pinned table of contents and save selected passages locally.",
    }],
    title: "X-TOC | Navigate and Clip X Articles",
    description: "Keep article structure visible. Save useful passages locally.",
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
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}
