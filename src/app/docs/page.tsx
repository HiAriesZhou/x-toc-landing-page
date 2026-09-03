import Image from "next/image";
import Link from "next/link";
import {
  BookOpenText,
  Download,
  FileJson,
  Github,
  Highlighter,
  Library,
  LockKeyhole,
  PanelRightOpen,
  Pointer,
} from "lucide-react";

const chromeStoreUrl =
  "https://chromewebstore.google.com/detail/nbdgpckkcfkomnmdefinikjijgljgjfp?utm_source=item-share-cb";
const extensionRepoUrl = "https://github.com/HiAriesZhou/x-toc";
const websiteRepoUrl = "https://github.com/HiAriesZhou/x-toc-landing-page";

const capabilities = [
  "Detect headings in X/Twitter long-form articles.",
  "Show the current article table of contents in the popup.",
  "Pin a floating TOC panel while reading.",
  "Drag the floating panel and persist its position.",
  "Save selected article text with save to xtoc.",
  "Review saved clips in the Options page.",
  "Export all or selected clips as Markdown or JSON.",
  "Store clip data locally with chrome.storage.local.",
];

const usageSteps = [
  {
    icon: BookOpenText,
    title: "Open a long-form article",
    body: "Visit an article page on X.com or Twitter.com. X-TOC runs on those domains and detects article headings when they are available.",
  },
  {
    icon: PanelRightOpen,
    title: "Use the TOC",
    body: "Open the extension popup to see the article outline. Pin the floating panel if you want the TOC visible while reading.",
  },
  {
    icon: Highlighter,
    title: "Save a clip",
    body: "Select useful text in the article and click save to xtoc. The selected passage is saved with local source context.",
  },
  {
    icon: Library,
    title: "Review and export",
    body: "Open Options to review saved clips, delete clips, or export selected or all clips as Markdown or JSON.",
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--background)]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/logo.png"
              alt="X-TOC"
              width={36}
              height={36}
              className="h-9 w-9"
              priority
            />
            <span className="truncate text-lg font-semibold tracking-[0.01em]">
              X-TOC
            </span>
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2" aria-label="Primary">
            <Link className="nav-link active" href="/docs">
              Docs
            </Link>
            <a
              className="icon-link"
              href={extensionRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open X-TOC source repository"
              title="Source"
            >
              <Github className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="px-5 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow mb-5">Public docs</p>
            <h1 className="font-serif text-4xl leading-tight tracking-normal sm:text-6xl">
              Reading navigation and lightweight clipping for X/Twitter articles.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
              X-TOC helps you navigate long-form articles, save selected
              passages locally, and export clips when you want to move them into
              your own files.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="primary-button"
                href={chromeStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Add to Chrome
                <Download className="h-4 w-4" />
              </a>
              <a
                className="secondary-button"
                href={extensionRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                View source
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[var(--surface)] px-5 py-12 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            <article className="doc-card">
              <PanelRightOpen className="h-5 w-5 text-[var(--accent)]" />
              <h2>Reading</h2>
              <p>
                Use the popup or floating panel to move through long-form
                articles without losing the current section.
              </p>
            </article>
            <article className="doc-card">
              <Pointer className="h-5 w-5 text-[var(--accent)]" />
              <h2>Clipping</h2>
              <p>
                Save text only when you select it. X-TOC is designed for
                deliberate clips, not automatic full-page capture.
              </p>
            </article>
            <article className="doc-card">
              <LockKeyhole className="h-5 w-5 text-[var(--accent)]" />
              <h2>Local storage</h2>
              <p>
                Saved clips stay in browser extension storage unless you export
                them yourself.
              </p>
            </article>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="section-heading">
              <p className="eyebrow">Features</p>
              <h2>Current public capability set.</h2>
            </div>
            <ul className="check-list">
              {capabilities.map((item) => (
                <li key={item}>
                  <BookOpenText className="h-4 w-4" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[var(--ink)] px-5 py-16 text-[var(--paper)] sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow dark mb-5">How to use it</p>
              <h2 className="font-serif text-4xl leading-tight tracking-normal sm:text-5xl">
                The workflow stays close to the article.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--paper-muted)]">
                The popup and floating panel are for the current page. Options is
                where saved clips are reviewed and exported.
              </p>
            </div>
            <div className="export-panel">
              {usageSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title}>
                    <Icon className="h-5 w-5" />
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="section-heading">
              <p className="eyebrow">Export and privacy</p>
              <h2>Open files, no external clip upload.</h2>
              <p>
                Markdown export is convenient for notes and local documents.
                JSON export is useful for scripts or structured archives.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <article className="doc-card">
                <FileJson className="h-5 w-5 text-[var(--accent)]" />
                <h2>Markdown / JSON</h2>
                <p>
                  Export all saved clips or only the selected clips from the
                  Options page.
                </p>
              </article>
              <article className="doc-card">
                <LockKeyhole className="h-5 w-5 text-[var(--accent)]" />
                <h2>Privacy</h2>
                <p>
                  X-TOC stores saved clips locally and does not send saved clips
                  to an external server.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] px-5 py-12 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
            <article className="doc-card">
              <Github className="h-5 w-5 text-[var(--accent)]" />
              <h2>Extension source</h2>
              <p>The browser extension code and release README live in the X-TOC repository.</p>
              <a
                className="footer-link mt-4 inline-flex"
                href={extensionRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/HiAriesZhou/x-toc
              </a>
            </article>
            <article className="doc-card">
              <Github className="h-5 w-5 text-[var(--accent)]" />
              <h2>Website source</h2>
              <p>This landing page is maintained in a separate public website repository.</p>
              <a
                className="footer-link mt-4 inline-flex"
                href={websiteRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/HiAriesZhou/x-toc-landing-page
              </a>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
