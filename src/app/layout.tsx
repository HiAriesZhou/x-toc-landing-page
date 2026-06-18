import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "X-TOC | X/Twitter Reading and Clipping",
  description:
    "X-TOC adds a table of contents, a movable reading panel, and lightweight local clipping to X/Twitter long-form articles.",
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
