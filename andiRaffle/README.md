# Ubay-Ubay: Art Supply Trade-In Raffle

A one-page promo site for the Ubay-Ubay art supply trade-in raffle. It recreates the original Canva carousel as a responsive website that works on desktop and mobile.

Students bring old art materials to the FabLab (Nov 2 to 20, 1:00 to 4:30 PM, weekdays only) and earn raffle entries for a chance to win 1 of 8 plushies. Winners are drawn at random on November 20 and announced on the Ubay-Ubay Facebook page.

## Folder structure

```
ubay-ubay/
├── index.html      page content
├── style.css       all styling and layout
├── script.js       small bits of behavior
├── README.md       this file
└── assets/         plushie images (transparent PNGs)
    ├── big-elephant.png
    ├── blue-bunny.png
    ├── honey-bear.png
    ├── penguin.png
    ├── pink-alpaca.png
    ├── pink-elephant.png
    ├── tiedye-bear.png
    ├── tiedye-whale.png
    ├── white-bear.png
    └── yellow-tiger.png
```

Keep `assets/` in the same folder as `index.html`. File names are case-sensitive on most web hosts, so keep them lowercase with hyphens.

## Running it

No build step and no dependencies. Open `index.html` in a browser.

An internet connection is needed for the Google Fonts (Amatic SC and Gabarito). Without one, the page falls back to your system fonts and the headings will look wider than intended.

## Sections

| # | Section | Anchor |
|---|---------|--------|
| 1 | Hero: title, plushie lineup, dates | `#top` |
| 2 | How to join raffle | `#s-join` |
| 3 | Entry values | `#s-values` |
| 4 | What we accept | `#s-accept` |
| 5 | Follow us | `#s-follow` |

The arrows at the bottom of sections 1 to 4 are links that scroll smoothly to the next section.

## How the layout works

Every size in `style.css` is based on one unit, `--u`, which equals 1% of the slide width. Because of this, the page scales like the square PDF slides on any screen, up to a maximum width of 900px (`--max`). `script.js` keeps `--u` accurate when the window is resized.

On screens 640px wide or narrower, the text-heavy sections stop pinning text in place and flow top to bottom with larger text, so nothing overlaps on a phone.

## Common edits

**Change dates, hours, or wording:** edit the text in `index.html`. The dates appear in two places: the hero and the "How to join" step 2.

**Change colors:** edit the variables at the top of `style.css`.

```css
--cream:#fffbf2; --orange:#eb6648; --pink:#f055b1;
--purple:#8c5eff; --green:#749e25; --navy:#2b2c49;
```

**Change the accepted items:** edit the `<li>` chips in the "What we accept" section of `index.html`. Each chip has its position and width set inline (`--x`, `--y`, `--w`, in %). On phones they wrap automatically.

**Change entry values:** edit the three colored bars in the "Entry values" section.

**Swap or add a plushie:** put a transparent PNG in `assets/` and edit its `<li>` in the hero. The inline variables set its left position (`--l`), height (`--h`), distance from the bottom (`--b`) and stacking order (`--z`).

**Change the Facebook link:** edit the `href` in the "Follow us" section.

**Use the original fonts:** the PDF uses Sunday (headings) and Agrandir (body), which are paid Canva fonts. If you have licenses, put the font files in a `fonts/` folder and uncomment the `@font-face` block at the top of `style.css`.

## What the JavaScript does

- Keeps the sizing unit `--u` in sync with the slide width.
- Makes each plushie in the hero hop when hovered or tapped.

## Accessibility

- Images have alt text, and the arrow links have labels (for example "Next: entry values").
- Keyboard focus is visible on links.
- Smooth scrolling and animations are turned off for visitors with reduced motion enabled.

## Putting it online

Upload the whole folder (including `assets/`) to any static host, such as GitHub Pages, Netlify, or Cloudflare Pages. The host needs `index.html` at the top level of the folder.

## Credits

Design, copy, palette, and plushie photos come from the Ubay-Ubay "Promotional Raffle" Canva design.
