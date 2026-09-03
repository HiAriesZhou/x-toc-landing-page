<p align="center">
  <img src="public/logo.png" width="96" height="96" alt="X-TOC logo">
</p>

<h1 align="center">X-TOC Landing Page</h1>

<p align="center">
  Public website for X-TOC, a browser extension for reading navigation and lightweight clipping on X/Twitter long-form articles.
</p>

<p align="center">
  English · <a href="README.zh-CN.md">中文</a>
</p>

## Repository Role

This repository contains the public landing page and public docs for X-TOC.

- Extension source: <https://github.com/HiAriesZhou/x-toc>
- Website source: <https://github.com/HiAriesZhou/x-toc-landing-page>
- Chrome Web Store: <https://chromewebstore.google.com/detail/nbdgpckkcfkomnmdefinikjijgljgjfp?utm_source=item-share-cb>

## Public Product Copy

X-TOC adds a table of contents, a movable reading panel, and lightweight local clipping to X/Twitter long-form articles.

Public-facing claims should stay aligned with the released extension:

- Detect headings in X/Twitter long-form articles.
- Show the current article table of contents in the popup.
- Pin and drag a floating TOC panel while reading.
- Save selected article text with `save to xtoc`.
- Review saved clips in the Options page.
- Export all or selected clips as Markdown or JSON.
- Store saved clips locally with `chrome.storage.local`.
- Do not send saved clips to an external server.

## Development

```bash
npm run dev
npm run lint
npm run build
```

## Content Guidelines

- Keep this README as an entry point.
- Keep public website copy aligned with the released X-TOC extension.
- Keep unreleased planning in private docs.
- Do not describe unreleased integrations as shipped product features.
