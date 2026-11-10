# Birthday Surprise Website Design

## Intent

Create a birthday surprise for the user's partner using the supplied TikTok as a visual and interaction reference. The reference moves through a dark glowing opening card, five selectable gifts, a memory-photo reveal, and a particle heart above a spiral galaxy. Recreate the progression with birthday copy and editable personal details.

## Experience

1. Start a softly moving space backdrop on page load behind an outlined, illuminated “Happy Birthday” welcome card with a heart, a small CSS cake, and an open button. Tapping the cake blows out its candles and reveals a wish.
2. Offer five small glowing gift cards. Choosing one reveals a personal wish.
3. Show a photo collage with four local images. Tapping each photo reveals its short personalized caption; after all four have been opened, reveal a secret note.
4. End on a rotating, luminous galaxy ring with a particle heart suspended above it, drifting glowing hearts, birthday floor lettering, and an optional letter.
5. Offer an opt-in local piano track from a persistent music button. Start playback only after the visitor presses it.

## Constraints

- Use plain HTML, CSS, Canvas, and browser JavaScript so the user can publish by uploading the folder to GitHub Pages.
- Keep names, date, wishes, letter, and photo paths in one clearly marked JavaScript settings object.
- Include the selected CC0 music file locally and credit its source in the README.
- Use no external runtime services or dependencies; include only the four photos supplied for the memory collage.
- Support mobile layouts and keyboard operation; slow the decorative movement for `prefers-reduced-motion` instead of freezing the scene.

## Decisions

- Follow the interaction rhythm of the clip instead of presenting all birthday content as a conventional long page.
- Use empty photo slots as graceful defaults; do not invent shared memories or request private photos before providing a usable result.
- Use a Canvas particle scene for the closing heart and spiral galaxy.
- Keep the same animated Canvas behind every story screen, and pause its frame loop when the browser tab is hidden.
- Include a README and a GitHub Pages Actions workflow for publishing from `main`.
