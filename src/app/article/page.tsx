import type { Metadata } from "next";
import { XtocExperience } from "@/components/xtoc-experience";

export const metadata: Metadata = {
  title: "Interactive Article",
  description: "Try X-TOC article navigation and local clipping in an interactive demo.",
};

export default function ArticlePage() {
  return <XtocExperience initialView="article" />;
}
