import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BookOpenText, Download, FileDown, Github, Highlighter, Library, LockKeyhole, Search } from "lucide-react";

const chromeStoreUrl = "https://chromewebstore.google.com/detail/nbdgpckkcfkomnmdefinikjijgljgjfp?utm_source=item-share-cb";
const extensionRepoUrl = "https://github.com/HiAriesZhou/x-toc";
const websiteRepoUrl = "https://github.com/HiAriesZhou/x-toc-landing-page";

export const metadata: Metadata = {
  title: "Docs",
  description: "How to navigate X articles, save passages, organize clips, and export Markdown or JSON with X-TOC.",
};

const steps = [
  { icon: BookOpenText, title: "1. Open a supported article", body: "Visit a long-form article on X.com or Twitter.com. X-TOC detects headings when the article provides them." },
  { icon: BookOpenText, title: "2. Navigate its headings", body: "Open the extension popup for the current outline. Pin the collapsible contents panel when you want the structure beside the article; drag or resize it to fit your reading space." },
  { icon: Highlighter, title: "3. Save a passage", body: "Select useful article text and choose Save to X-TOC. The passage is stored with its article, timestamp, surrounding context, and author when available." },
  { icon: Library, title: "4. Open Saved clips", body: "Choose Saved clips in the extension popup or pinned contents panel. Search your library, add tags or notes, delete clips, and select the passages you want to export." },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="site-header">
        <div className="site-shell flex items-center justify-between py-4">
          <Link href="/" className="brand-link"><Image src="/logo.png" alt="" width={36} height={36} priority /><span>X-TOC</span></Link>
          <nav className="flex items-center gap-1 sm:gap-2" aria-label="Primary navigation">
            <Link className="nav-link active" href="/docs" aria-current="page">Docs</Link>
            <a className="icon-link" href={extensionRepoUrl} target="_blank" rel="noopener noreferrer" aria-label="Open X-TOC source repository" title="Source on GitHub"><Github className="h-5 w-5" aria-hidden="true" /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="docs-hero">
          <div className="docs-shell">
            <p className="eyebrow">How X-TOC works</p>
            <h1>Read with structure. Keep useful context.</h1>
            <p>X-TOC is a lightweight, open-source companion for X/Twitter long-form articles. It combines article navigation with a deliberate, local clipping workflow.</p>
            <div className="button-row"><a className="primary-button" href={chromeStoreUrl} target="_blank" rel="noopener noreferrer">Add to Chrome <Download className="h-4 w-4" aria-hidden="true" /></a></div>
          </div>
        </section>

        <section className="docs-section">
          <div className="docs-shell">
            <p className="eyebrow">Use the extension</p>
            <h2>From article to saved clip</h2>
            <div className="docs-grid">
              {steps.map((step) => { const Icon = step.icon; return <article className="doc-card" key={step.title}><Icon aria-hidden="true" /><h3>{step.title}</h3><p>{step.body}</p></article>; })}
            </div>
          </div>
        </section>

        <section className="docs-section">
          <div className="docs-shell">
            <p className="eyebrow">Organize and export</p>
            <h2>A small library, built for useful passages</h2>
            <div className="docs-grid">
              <article className="doc-card"><Search aria-hidden="true" /><h3>Search what you saved</h3><p>Search across clip text, article titles, authors, tags, and notes. Clips stay grouped with their source article.</p></article>
              <article className="doc-card"><Highlighter aria-hidden="true" /><h3>Add tags and notes</h3><p>Attach tags for retrieval and a note for the reason the passage mattered. Older clips without these optional fields remain supported.</p></article>
              <article className="doc-card"><FileDown aria-hidden="true" /><h3>Export Markdown or JSON</h3><p>Export every clip or select only the passages you need. Exports are local, user-triggered downloads.</p></article>
              <article className="doc-card"><LockKeyhole aria-hidden="true" /><h3>Keep clip data local</h3><p>Saved clips, tags, notes, and settings remain in browser extension storage. X-TOC does not upload saved clips.</p></article>
            </div>
          </div>
        </section>

        <section className="docs-section">
          <div className="docs-shell">
            <p className="eyebrow">Current boundaries</p>
            <h2>What X-TOC does today</h2>
            <p>X-TOC works on supported X.com and Twitter.com long-form articles. Heading navigation depends on headings being present in the article.</p>
            <div className="doc-note">Saved passages are available in the extension’s Saved clips page. X-TOC does not restore highlights inside the original article, sync clips to a cloud service, or capture arbitrary web pages.</div>
          </div>
        </section>

        <section className="docs-section">
          <div className="docs-shell">
            <p className="eyebrow">Project links</p>
            <h2>Source and maintenance</h2>
            <div className="docs-links"><a href={extensionRepoUrl} target="_blank" rel="noopener noreferrer">Extension source</a><a href={websiteRepoUrl} target="_blank" rel="noopener noreferrer">Website source</a><a href={chromeStoreUrl} target="_blank" rel="noopener noreferrer">Chrome Web Store</a></div>
          </div>
        </section>
      </main>
    </div>
  );
}
