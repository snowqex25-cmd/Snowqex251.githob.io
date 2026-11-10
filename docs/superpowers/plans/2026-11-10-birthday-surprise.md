# Birthday Surprise Website Implementation Plan

**Goal:** Create a birthday version of the supplied TikTok surprise site, following its welcome, gift choice, memory, and particle-galaxy finale sequence.

**Architecture:** A static HTML page with screen-by-screen interactions, local CSS, a personalization object in JavaScript, and a Canvas finale. GitHub Actions deploys the repository root to GitHub Pages.

**Tech stack:** HTML, CSS, browser JavaScript, GitHub Pages Actions.

**Spec:** `docs/superpowers/specs/2026-11-10-birthday-surprise-design.md`

## Tasks

### 1. Build the story sequence

- [x] Create a glowing birthday welcome card.
- [x] Start the animated cosmic Canvas behind the story from the first page load.
- [x] Add five selectable wish cards and a photo-memory reveal with the four supplied photos.
- [x] Finish with a particle heart, drifting glowing hearts, luminous galaxy rings, birthday floor text, an optional letter, and replay control.

### 2. Personalize and support access needs

- [x] Keep names, date, wishes, letter, and local photo paths together in `birthdaySettings`.
- [x] Use native buttons, visible focus states, screen-reader labels, and a live region for wish selection.
- [x] Honor `prefers-reduced-motion` and adapt layouts for narrow screens.
- [x] Keep the atmosphere moving gently when reduced-motion is requested and pause its frame loop while the tab is hidden.
- [x] Add a lightweight cake interaction that blows out CSS candles and reveals an editable birthday wish.
- [x] Reveal an editable secret note after all four memory photos have been opened.
- [x] Add an opt-in music toggle with a bundled CC0 piano track and source credit.

### 3. Prepare publishing

- [x] Document local preview, photo personalization, and GitHub Pages setup.
- [x] Keep the static Pages workflow and root-level asset paths ready for upload.
