import Link from "next/link";
import Image from "next/image";
import { Home, FileText, Github } from "lucide-react";

export default function DocsPage() {
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
              className="p-2 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)]"
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

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Documentation</h1>

        {/* Installation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <p className="opacity-80 mb-4">
            X & Twitter Article TOC is available for Chrome and Chromium-based browsers.
          </p>
          <ol className="list-decimal list-inside space-y-2 opacity-80">
            <li>Download the extension from the Chrome Web Store (coming soon)</li>
            <li>Click "Add to Chrome" in the store page</li>
            <li>Grant the required permissions</li>
            <li>The extension icon will appear in your browser toolbar</li>
          </ol>
        </section>

        {/* Usage */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Usage</h2>
          <h3 className="text-lg font-medium mb-2">Automatic Detection</h3>
          <p className="opacity-80 mb-4">
            When you visit a long-form Twitter article, the extension automatically detects
            the article structure and extracts heading elements (h1, h2, h3, etc.).
          </p>

          <h3 className="text-lg font-medium mb-2">Using the Popup</h3>
          <p className="opacity-80 mb-4">
            Click the Twitter TOC icon in your browser toolbar to open the popup.
            You will see a list of all headings in the article. Click any heading
            to smoothly scroll to that section.
          </p>

          <h3 className="text-lg font-medium mb-2">Right-Click Menu</h3>
          <p className="opacity-80 mb-4">
            Right-click anywhere on the page and select "Show Table of Contents"
            to quickly open the TOC popup.
          </p>

          <h3 className="text-lg font-medium mb-2">Pinnable Panel</h3>
          <p className="opacity-80 mb-4">
            Click the pin icon in the popup to pin the TOC panel to the screen.
            The panel will stay visible while you read. Drag the panel to reposition it.
            Click the pin icon again to unpin and close the panel.
          </p>
        </section>

        {/* Settings */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Settings</h2>
          <p className="opacity-80 mb-4">
            To access settings, right-click the extension icon and select "Options"
            or click the gear icon in the popup.
          </p>
          <ul className="list-disc list-inside space-y-2 opacity-80">
            <li><strong>Auto-detect:</strong> Automatically show TOC when visiting articles</li>
            <li><strong>Highlight current:</strong> Highlight the current section while scrolling</li>
            <li><strong>Smooth scrolling:</strong> Use smooth scrolling when navigating</li>
          </ul>
        </section>

        {/* Privacy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Privacy</h2>
          <p className="opacity-80 mb-4">
            X & Twitter Article TOC is a privacy-focused extension. It:
          </p>
          <ul className="list-disc list-inside space-y-2 opacity-80">
            <li>Only runs on Twitter/X domains</li>
            <li>Does not collect or store any personal data</li>
            <li>Does not send any data to external servers</li>
            <li>Does not require any account or login</li>
          </ul>
        </section>

        {/* Support */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Support</h2>
          <p className="opacity-80 mb-4">
            If you encounter any issues or have feature requests, please open an issue on GitHub.
          </p>
          <a
            href="https://github.com/Aries-0331/twitter-toc-extension/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[var(--color-accent)] hover:opacity-80"
          >
            Open an Issue →
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-secondary)]/20 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-60">
            &copy; 2026 X & Twitter Article TOC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
