import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Download,
  FileDown,
  Github,
  Highlighter,
  Library,
  LockKeyhole,
  MousePointer2,
  PanelRightOpen,
} from "lucide-react";

const chromeStoreUrl =
  "https://chromewebstore.google.com/detail/nbdgpckkcfkomnmdefinikjijgljgjfp?utm_source=item-share-cb";
const extensionRepoUrl = "https://github.com/HiAriesZhou/x-toc";
const websiteRepoUrl = "https://github.com/HiAriesZhou/x-toc-landing-page";

const workflow = [
  {
    icon: PanelRightOpen,
    label: "Navigate",
    title: "A table of contents for long X articles.",
    body: "X-TOC detects headings in X/Twitter long-form articles and shows the current article outline in the popup.",
  },
  {
    icon: MousePointer2,
    label: "Pin",
    title: "Keep the reading panel where you need it.",
    body: "Pin the floating TOC panel, drag it to a comfortable spot, and keep your place while reading.",
  },
  {
    icon: Highlighter,
    label: "Clip",
    title: "Save selected passages locally.",
    body: "Select article text, click save to xtoc, and keep the passage with source context in browser extension storage.",
  },
  {
    icon: FileDown,
    label: "Export",
    title: "Export clips to open formats.",
    body: "Review saved clips in Options, then export all or selected clips as Markdown or JSON.",
  },
];

const facts = [
  "Works on X.com and Twitter.com long-form article pages.",
  "Stores saved clips locally with chrome.storage.local.",
  "Does not send saved clips to an external server.",
  "Available from the Chrome Web Store and source repository.",
];

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
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
            <Link className="nav-link" href="/docs">
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
        <section className="hero-grid relative px-5 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="min-w-0">
              <p className="eyebrow mb-5">X / Twitter reading navigation</p>
              <h1 className="max-w-4xl font-serif text-4xl leading-[1.03] tracking-normal text-[var(--foreground)] sm:text-6xl sm:leading-[0.98] lg:text-7xl">
                Read long X articles with structure. Save useful passages.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                X-TOC adds a table of contents, a movable reading panel, and
                lightweight local clipping to X/Twitter long-form articles.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  className="primary-button"
                  href={chromeStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Add to Chrome
                  <Download className="h-4 w-4" />
                </a>
                <Link className="secondary-button" href="/docs">
                  Read docs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="reader-panel min-w-0" aria-label="X-TOC reading preview">
              <div className="reader-topbar">
                <span />
                <span />
                <span />
              </div>
              <div className="reader-content">
                <div className="article-lines">
                  <span className="line strong" />
                  <span className="line" />
                  <span className="line short" />
                  <span className="clip-highlight">save to xtoc</span>
                  <span className="line" />
                  <span className="line medium" />
                </div>
                <aside className="toc-panel">
                  <p>Article TOC</p>
                  <ol>
                    <li className="active">Opening idea</li>
                    <li>Context</li>
                    <li>Key passage</li>
                    <li>Takeaway</li>
                  </ol>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[var(--surface)] px-5 py-5 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-4 text-sm text-[var(--muted)] sm:grid-cols-3">
            <div className="metric">
              <BookOpenText className="h-4 w-4 text-[var(--accent)]" />
              <span>TOC popup and pinned floating panel</span>
            </div>
            <div className="metric">
              <Library className="h-4 w-4 text-[var(--accent)]" />
              <span>Local clips stored in browser extension storage</span>
            </div>
            <div className="metric">
              <FileDown className="h-4 w-4 text-[var(--accent)]" />
              <span>Markdown and JSON export from Options</span>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="section-heading">
              <p className="eyebrow">Core workflow</p>
              <h2>Built for reading first, clipping second.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {workflow.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="feature-card" key={item.title}>
                    <div className="feature-icon">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="feature-label">{item.label}</p>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[var(--ink)] px-5 py-20 text-[var(--paper)] sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow dark mb-5">Privacy by default</p>
              <h2 className="font-serif text-4xl leading-tight tracking-normal sm:text-5xl">
                Saved clips stay in your browser unless you export them.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--paper-muted)]">
                X-TOC is a browser extension for current-page reading and local
                clipping. It does not send saved clips to an external server.
              </p>
            </div>
            <div className="boundary-grid">
              <div>
                <PanelRightOpen className="h-5 w-5" />
                <h3>Popup</h3>
                <p>Shows the table of contents for the current long-form article.</p>
              </div>
              <div>
                <Highlighter className="h-5 w-5" />
                <h3>Article page</h3>
                <p>Provides the floating TOC and save button for selected text.</p>
              </div>
              <div>
                <Library className="h-5 w-5" />
                <h3>Options</h3>
                <p>Lists saved clips and supports selected or full export.</p>
              </div>
              <div>
                <LockKeyhole className="h-5 w-5" />
                <h3>Storage</h3>
                <p>Uses browser extension storage for saved clip data.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="section-heading">
              <p className="eyebrow">Public facts</p>
              <h2>Small extension, clear boundaries.</h2>
              <p>
                X-TOC focuses on long-form X/Twitter articles. It is not a
                general web clipper, note-taking app, or external storage
                service.
              </p>
            </div>
            <ul className="principle-list">
              {facts.map((fact) => (
                <li key={fact}>
                  <span />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] px-5 py-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 X-TOC. Reading navigation and lightweight clipping.</p>
          <div className="flex flex-wrap gap-4">
            <Link className="footer-link" href="/docs">
              Docs
            </Link>
            <a
              className="footer-link"
              href={extensionRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Extension source
            </a>
            <a
              className="footer-link"
              href={websiteRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website source
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
