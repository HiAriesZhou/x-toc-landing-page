import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Twitter TOC</h1>
          <nav className="flex gap-6">
            <Link href="/" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100">
              Home
            </Link>
            <Link href="/docs" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100">
              Documentation
            </Link>
            <a
              href="https://github.com/Aries-0331/twitter-toc-extension"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
              Navigate Twitter Articles with Ease
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10">
              Twitter TOC adds an interactive table of contents to long-form Twitter articles.
              Never lose your place again when reading in-depth content.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://chromewebstore.google.com/detail/twitter-toc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
              >
                Add to Chrome
              </a>
              <a
                href="/docs"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
              >
                Read Docs
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-zinc-900 dark:text-zinc-50 mb-12">
              Features
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-zinc-950 p-6 rounded-xl">
                <h4 className="font-semibold text-lg mb-3">Automatic Detection</h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Automatically detects long-form articles and displays the table of contents.
                </p>
              </div>
              <div className="bg-white dark:bg-zinc-950 p-6 rounded-xl">
                <h4 className="font-semibold text-lg mb-3">Click to Navigate</h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Click any section in the TOC to smoothly scroll to that part of the article.
                </p>
              </div>
              <div className="bg-white dark:bg-zinc-950 p-6 rounded-xl">
                <h4 className="font-semibold text-lg mb-3">Right-Click Menu</h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Right-click anywhere on the page to quickly access the table of contents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-zinc-900 dark:text-zinc-50 mb-12">
              How It Works
            </h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Visit a Twitter Article</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Open any long-form Twitter article (X/Twitter Articles feature).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Click the Extension Icon</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Click the Twitter TOC icon in your browser toolbar to see the table of contents.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Navigate with Ease</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Click any section to smoothly scroll to that part of the article.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            &copy; 2026 Twitter TOC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Aries-0331/twitter-toc-extension"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
