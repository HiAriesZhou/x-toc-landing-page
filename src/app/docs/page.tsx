import Link from "next/link";

export default function Docs() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">Twitter TOC</Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100">
              Home
            </Link>
            <Link href="/docs" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
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

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Documentation</h1>

        {/* Installation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Twitter TOC is available for Chrome and Chromium-based browsers.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Download the extension from the Chrome Web Store (coming soon)</li>
              <li>Click "Add to Chrome" in the store page</li>
              <li>Grant the required permissions</li>
              <li>The extension icon will appear in your browser toolbar</li>
            </ol>
          </div>
        </section>

        {/* Usage */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-lg font-medium mb-2">Automatic Detection</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              When you visit a long-form Twitter article, the extension automatically detects
              the article structure and extracts heading elements (h1, h2, h3, etc.).
            </p>

            <h3 className="text-lg font-medium mb-2">Using the Popup</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Click the Twitter TOC icon in your browser toolbar to open the popup.
              You will see a list of all headings in the article. Click any heading
              to smoothly scroll to that section.
            </p>

            <h3 className="text-lg font-medium mb-2">Right-Click Menu</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Right-click anywhere on the page and select "Show Table of Contents"
              to quickly open the TOC popup.
            </p>
          </div>
        </section>

        {/* Settings */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Settings</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              To access settings, right-click the extension icon and select "Options"
              or click the gear icon in the popup.
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
              <li><strong>Auto-detect:</strong> Automatically show TOC when visiting articles</li>
              <li><strong>Highlight current:</strong> Highlight the current section while scrolling</li>
              <li><strong>Smooth scrolling:</strong> Use smooth scrolling when navigating</li>
            </ul>
          </div>
        </section>

        {/* Privacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Privacy</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Twitter TOC is a privacy-focused extension. It:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Only runs on Twitter/X domains</li>
              <li>Does not collect or store any personal data</li>
              <li>Does not send any data to external servers</li>
              <li>Does not require any account or login</li>
            </ul>
          </div>
        </section>

        {/* Support */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Support</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              If you encounter any issues or have feature requests, please open an issue on GitHub.
            </p>
            <a
              href="https://github.com/Aries-0331/twitter-toc-extension/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-zinc-900 dark:text-zinc-100 hover:underline"
            >
              Open an Issue →
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            &copy; 2026 Twitter TOC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
