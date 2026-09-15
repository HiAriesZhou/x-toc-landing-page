import type { Metadata } from "next";
import { XtocExperience } from "@/components/xtoc-experience";

export const metadata: Metadata = {
  title: "Docs",
  description: "How to navigate X articles, save passages, organize clips, and export Markdown or JSON with X-TOC.",
};

export default function DocsPage() {
  return <XtocExperience initialView="docs" />;
}
