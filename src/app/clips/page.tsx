import type { Metadata } from "next";
import { XtocExperience } from "@/components/xtoc-experience";

export const metadata: Metadata = {
  title: "Saved Clips Demo",
  description: "Try the X-TOC Saved Clips workflow with local sample content.",
};

export default function ClipsPage() {
  return <XtocExperience initialView="clips" />;
}
