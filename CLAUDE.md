# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, single-page personal resume website for 陈文明 (Chen Wenming), a DevOps/SRE + AI Engineer. All page content is written in Chinese (`lang="zh-CN"`). There is no backend, no framework, no build tooling, and no `package.json`.

## Running / viewing

There is **no build step, linter, or test suite**. The site is plain HTML/CSS/JS served directly.

- Open `index.html` in a browser, or serve statically for a closer-to-production check:
  - `python3 -m http.server 8000` → http://localhost:8000
- `styles.css` and `script.js` are linked with relative paths, so any static file server (or the file opened directly) works.

## Architecture

Source files, each with a single responsibility:

- **`index.html`** — all content and semantic structure. Single page with five numbered `<section>` blocks in order: `#about` (hero) → `#skills` → `#projects` → `#experience` → `#contact`. Personal info (email, phone, GitHub) is hardcoded here — updating the resume means editing this file.
- **`styles.css`** (~1283 lines) — all visual styling. The design is a dark "tech futuristic" theme. **Every color, font, shadow, and transition is defined as a CSS custom property in `:root`** at the top of the file; the rest of the stylesheet only references these variables. To change the theme/palette, edit `:root`, not individual rules.
- **`script.js`** — vanilla JS interactions, organized into commented `// ========` sections: navbar scroll/state, mobile menu toggle, IntersectionObserver scroll-reveal + skill-bar fill animation, active-section nav highlighting, smooth scrolling, terminal typewriter effect, mousemove hover glow (`--mouse-x`/`--mouse-y`), number-roll animation, and a canvas particle background.
- **`resume-print.html`** — the *print* resume source, separate from the website. It generates `陈文明的简历.pdf` (a light-theme, A4, ~3-page document). This and `index.html` hold overlapping but **not identical** content — the print version is richer (优势亮点 six-point summary, reorganized detailed experience bullets, a ZebraOps architecture diagram + sub-project table). A content change to one does **not** propagate to the other.

## Things that aren't obvious from a single file

- **Theming is centralized in `:root`** (`styles.css:7`). Accent colors are an indigo→violet→cyan gradient (`--accent-gradient`). Reuse these variables for any new component rather than hardcoding hex values.
- **The site is dark-only.** `findings.md` lists a light/dark toggle as a "trend", but no toggle or `prefers-color-scheme` logic is actually implemented. Don't assume theme switching exists.
- **Responsive breakpoints** are at `1024px`, `768px`, and `480px` in `styles.css` (starting at line 1121). New layout rules should extend these blocks.
- **External font dependency**: the page loads Google Fonts (JetBrains Mono + Plus Jakarta Sans) over the network. Offline, it falls back to system fonts.
- **The particle background is canvas-based** (`#bgCanvas`, `initBackground()` in `script.js`); it's purely decorative and separate from content.
- **`陈文明的简历.pdf` is generated from `resume-print.html`** (not `index.html`). Regenerate after editing the print source with:
  `google-chrome --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="陈文明的简历.pdf" "file://$PWD/resume-print.html"`
  A `.pdfwork/` directory holds a backup of the prior PDF (`陈文明的简历.backup.pdf`) if the regenerated layout needs reverting.
- **The three `.md` files** (`task_plan.md`, `progress.md`, `findings.md`) are development planning notes written in Chinese from the original build session, not source code.
