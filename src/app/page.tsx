import Link from "next/link";
import Image from "next/image";
import { Home, FileText, Github } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-primary)] text-[var(--color-secondary)]">
      {/* Header */}
      <header className="border-b border-[var(--color-secondary)]/20">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="X & Twitter TOC"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-lg font-bold">X & Twitter TOC</span>
          </Link>
          <nav className="flex items-center gap-2">
            <Link
              href="/"
              className="p-2 rounded-full hover:bg-[var(--color-secondary)]/10"
              title="Home"
            >
              <Home className="w-5 h-5" />
            </Link>
            <Link
              href="/docs"
              className="p-2 rounded-full hover:bg-[var(--color-secondary)]/10"
              title="Documentation"
            >
              <FileText className="w-5 h-5" />
            </Link>
            <a
              href="https://github.com/Aries-0331/twitter-toc-extension"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-[var(--color-secondary)]/10"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Navigate X/Twitter Articles with Ease
            </h2>
            <p className="text-xl opacity-80 mb-10">
              X & Twitter Article TOC adds an interactive table of contents to long-form X/Twitter articles.
              Never lose your place again when reading in-depth content.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://chromewebstore.google.com/detail/twitter-toc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[var(--color-primary)] bg-[var(--color-accent)] hover:opacity-80 rounded-full transition-opacity"
              >
                Add to Chrome
              </a>
              <a
                href="/docs"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 rounded-full transition-colors"
              >
                Read Docs
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6 bg-[var(--color-tertiary)]/10">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-12">
              Features
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[var(--color-primary)] p-6 rounded-xl border border-[var(--color-secondary)]/20">
                <h4 className="font-semibold text-lg mb-3">Automatic Detection</h4>
                <p className="opacity-80">
                  Automatically detects long-form articles and displays the table of contents.
                </p>
              </div>
              <div className="bg-[var(--color-primary)] p-6 rounded-xl border border-[var(--color-secondary)]/20">
                <h4 className="font-semibold text-lg mb-3">Click to Navigate</h4>
                <p className="opacity-80">
                  Click any section in the TOC to smoothly scroll to that part of the article.
                </p>
              </div>
              <div className="bg-[var(--color-primary)] p-6 rounded-xl border border-[var(--color-secondary)]/20">
                <h4 className="font-semibold text-lg mb-3">Pinnable Panel</h4>
                <p className="opacity-80">
                  Pin the TOC panel to keep it visible while reading. Drag to reposition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-12">
              How It Works
            </h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Visit an X/Twitter Article</h4>
                  <p className="opacity-80">
                    Open any long-form X/Twitter article (X/Twitter Articles feature).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Click the Extension Icon</h4>
                  <p className="opacity-80">
                    Click the X & Twitter TOC icon in your browser toolbar to see the table of contents.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Navigate with Ease</h4>
                  <p className="opacity-80">
                    Click any section to smoothly scroll to that part of the article.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support / Star Us */}
        <section className="py-20 px-6 bg-[var(--color-tertiary)]/10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Enjoying X & Twitter Article TOC?
            </h3>
            <p className="opacity-80 mb-8">
              If you find this extension helpful, please consider starring our GitHub repository.
              Your support helps open-source projects grow and motivates continued development.
            </p>
            <a
              href="https://github.com/Aries-0331/twitter-toc-extension"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-[var(--color-primary)] bg-[var(--color-accent)] hover:opacity-80 rounded-full transition-opacity"
            >
              <Github className="w-5 h-5" />
              Star on GitHub
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-secondary)]/20 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-60">
            &copy; 2026 X & Twitter Article TOC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Aries-0331/twitter-toc-extension"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-60 hover:opacity-100"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
