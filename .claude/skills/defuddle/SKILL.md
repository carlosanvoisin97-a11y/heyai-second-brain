---
name: defuddle
description: Extract clean markdown content from web pages using Defuddle CLI, removing clutter and navigation to save tokens. Use instead of WebFetch when the user provides a URL to read or analyze, for online documentation, articles, blog posts, or any standard web page. Do NOT use for URLs ending in .md — those are already markdown, use WebFetch directly.
---

# Defuddle

Use Defuddle CLI to extract clean readable content from web pages. Prefer over WebFetch for standard web pages — it removes navigation, ads, and clutter, reducing token usage.

Global install is blocked on this machine (`/usr/local/lib/node_modules` is root-owned; sudo needs a password). **Always invoke via `npx --yes defuddle`** — npx downloads it once and caches it. (To get a bare `defuddle` on PATH instead, run once: `sudo npm install -g defuddle`.)

## Usage

Always use `--md` for markdown output:

```bash
npx --yes defuddle parse <url> --md
```

Save to file:

```bash
npx --yes defuddle parse <url> --md -o content.md
```

Extract specific metadata:

```bash
npx --yes defuddle parse <url> -p title
npx --yes defuddle parse <url> -p description
npx --yes defuddle parse <url> -p domain
```

## Output formats

| Flag | Format |
|------|--------|
| `--md` | Markdown (default choice) |
| `--json` | JSON with both HTML and markdown |
| (none) | HTML |
| `-p <name>` | Specific metadata property |
