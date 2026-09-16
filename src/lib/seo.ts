import type { Metadata } from "next";

export const siteUrl = "https://x-toc.vercel.app";
export const viewPaths = { home: "/", article: "/article", clips: "/clips", docs: "/docs" } as const;
export const viewMeta = {
  home: { title: "X-TOC (xtoc) | Table of Contents & Clips for X Articles", description: "X-TOC (xtoc) adds a table of contents to X Articles. Save passages locally with tags and notes, then export your clips as Markdown or JSON." },
  article: { title: "Interactive Article Demo | X-TOC", description: "Try X-TOC article navigation and local clipping with a sample article." },
  clips: { title: "Saved Clips Demo | X-TOC", description: "Try the X-TOC Saved Clips workflow with sample content, separate from your extension data." },
  docs: { title: "How to Use X-TOC (xtoc) | X Article TOC & Clips", description: "Learn how to open the X-TOC outline, navigate X Articles, save passages locally, add tags and notes, and export Markdown or JSON." },
} as const;
export type SiteView = keyof typeof viewPaths;
export function pageMetadata(view: SiteView): Metadata {
  const { title, description } = viewMeta[view];
  return {
    title: { absolute: title }, description,
    alternates: { canonical: viewPaths[view] },
    robots: { index: view === "home" || view === "docs", follow: true },
    openGraph: { title, description, url: viewPaths[view], type: "website", siteName: "X-TOC", images: [{ url: "/images/x-toc-social-1280x640.png", width: 1280, height: 640, alt: "X-TOC table of contents and local clips for X Articles" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/images/x-toc-social-1280x640.png"] },
  };
}
