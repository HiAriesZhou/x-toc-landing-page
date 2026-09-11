import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, Check, Download, FileDown, Github, Highlighter, Library, LockKeyhole, Search, Star } from "lucide-react";

const chromeStoreUrl = "https://chromewebstore.google.com/detail/nbdgpckkcfkomnmdefinikjijgljgjfp?utm_source=item-share-cb";
const extensionRepoUrl = "https://github.com/HiAriesZhou/x-toc";
const websiteRepoUrl = "https://github.com/HiAriesZhou/x-toc-landing-page";
const projectStoryUrl = "https://www.arieszhou.com/projects/x-toc";

const workflow = [
  { number: "01", icon: BookOpenText, title: "See the shape of the article.", body: "Open the popup or pin the movable contents panel beside the article. Jump to any detected heading without losing the reading thread." },
  { number: "02", icon: Highlighter, title: "Keep a passage with context.", body: "Select text and choose Save to X-TOC. The clip keeps its article, author when available, timestamp, and surrounding text." },
  { number: "03", icon: Library, title: "Find it and take it with you.", body: "Open Saved clips to search by text, title, author, tag, or note. Export selected clips or the full library as Markdown or JSON." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="site-header">
        <div className="site-shell flex items-center justify-between py-4">
          <Link href="/" className="brand-link"><Image src="/logo.png" alt="" width={36} height={36} priority /><span>X-TOC</span></Link>
          <nav className="flex items-center gap-1 sm:gap-2" aria-label="Primary navigation">
            <Link className="nav-link" href="/docs">Docs</Link>
            <a className="icon-link" href={extensionRepoUrl} target="_blank" rel="noopener noreferrer" aria-label="Open X-TOC source repository" title="Source on GitHub"><Github className="h-5 w-5" aria-hidden="true" /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="site-shell">
            <div className="hero-top">
              <div className="hero-title">
                <p className="eyebrow">A reading companion for X Articles</p>
                <h1>Jump to a section.<br />Keep the lines that matter.</h1>
              </div>
              <div className="hero-support">
              <p className="hero-lede">X-TOC keeps the structure of a long X article within reach, then lets you save, organize, and export useful passages without sending your clips to a server.</p>
              <div className="button-row">
                <a className="primary-button" href={chromeStoreUrl} target="_blank" rel="noopener noreferrer">Add to Chrome <Download className="h-4 w-4" aria-hidden="true" /></a>
                <a className="github-button" href={extensionRepoUrl} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" aria-hidden="true" /> Star on GitHub <Star className="star-mark" aria-hidden="true" /></a>
              </div>
              <p className="github-ask">Leave a star — it lets me know X-TOC is useful to more than just me, thanks.</p>
              <ul className="hero-facts" aria-label="Product facts">
                <li><Check aria-hidden="true" />Open source</li><li><Check aria-hidden="true" />No X-TOC account</li><li><Check aria-hidden="true" />Local clip storage</li>
              </ul>
            </div>
            </div>

            <div className="store-showcase">
              <div className="browser-bar" aria-hidden="true">
                <div className="browser-dots"><span /><span /><span /></div>
                <span className="browser-address">X Article + X-TOC</span>
                <span className="browser-note">Chrome Web Store preview</span>
              </div>
              <Image src="/screenshots/chrome-store-screenshot-1280x800.png" alt="X-TOC keeping an article outline beside a long X article and offering a local Save to X-TOC action" width={1280} height={800} className="store-screenshot" priority />
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Supported workflow">
          <div className="site-shell proof-grid"><span>X.com and Twitter.com articles</span><span>Popup and floating contents</span><span>Markdown and JSON export</span></div>
        </section>

        <section className="workflow-section">
          <div className="site-shell">
            <div className="section-intro"><p className="eyebrow">From reading to reuse</p><h2>A small workflow that stays close to the article.</h2><p>Read first. Clip deliberately. Organize only what proved useful.</p></div>
            <div className="workflow-grid">
              {workflow.map((item) => { const Icon = item.icon; return <article className="workflow-card" key={item.number}><div className="card-top"><span>{item.number}</span><Icon aria-hidden="true" /></div><h3>{item.title}</h3><p>{item.body}</p></article>; })}
            </div>
          </div>
        </section>

        <section className="library-section">
          <div className="site-shell library-layout">
            <div className="library-copy"><p className="eyebrow dark">Saved clips</p><h2>Your useful passages, still understandable later.</h2><p>Clips stay grouped by article. Search the library, add tags and notes, select what you need, and export it into files you control.</p><Link className="light-link" href="/docs">See the full workflow <ArrowRight aria-hidden="true" /></Link></div>
            <div className="capability-list">
              <div><Search aria-hidden="true" /><span><strong>Search</strong> text, title, author, tags, and notes</span></div>
              <div><Highlighter aria-hidden="true" /><span><strong>Annotate</strong> clips with tags and a note</span></div>
              <div><FileDown aria-hidden="true" /><span><strong>Export</strong> selected clips or the full library</span></div>
            </div>
          </div>
        </section>

        <section className="privacy-section">
          <div className="site-shell privacy-layout"><div className="privacy-mark"><LockKeyhole aria-hidden="true" /></div><div><p className="eyebrow">Local by design</p><h2>Saved clips stay in this browser until you export them.</h2></div><p>X-TOC stores clip data in browser extension storage. It does not upload saved clips or require a separate account.</p></div>
        </section>

        <section className="final-cta">
          <div className="site-shell final-cta-inner"><div><p className="eyebrow">Ready for the next long read?</p><h2>Keep the structure visible.</h2></div><a className="primary-button" href={chromeStoreUrl} target="_blank" rel="noopener noreferrer">Add to Chrome <Download className="h-4 w-4" aria-hidden="true" /></a></div>
        </section>
      </main>

      <footer className="site-footer"><div className="site-shell footer-layout"><p>© 2026 X-TOC. Building for ❤️ · Thanks for 🌟</p><div><a href={projectStoryUrl} target="_blank" rel="noopener noreferrer">Project story</a><Link href="/docs">Docs</Link><a href={extensionRepoUrl} target="_blank" rel="noopener noreferrer">Extension source</a><a href={websiteRepoUrl} target="_blank" rel="noopener noreferrer">Website source</a></div></div></footer>
    </div>
  );
}
