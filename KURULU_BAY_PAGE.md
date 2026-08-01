# Kurulu Bay Page

This document captures the current implementation details for the `/kurulu-bay` page inside `app-tereza` so future edits have one stable reference.

## Purpose

`/kurulu-bay` is a mobile-first editorial landing page for `The Return · Sri Lanka Edition`.

It was copied into this app from the Kurulu Bay page work originally built in another React app and adapted here as a standalone Vite route.

## Route

- Path: `/kurulu-bay`
- Route logic lives in `src/main.jsx`
- The app uses simple pathname checks instead of React Router

## Primary Files

- `src/KuruluBayRetreat.jsx`: page structure, content, image assets, section order, overlays, room pricing, and menu configuration
- `src/KuruluBayRetreat.css`: full page styling, typography, image overlay behavior, contents drawer, mobile-first layout, and responsive rules
- `src/main.jsx`: route entry for `/kurulu-bay`

## Page Structure

The page currently renders in this order:

1. Cover
2. Welcome
3. The Return
4. Your Home
5. Ayurveda
6. The Practice
7. The Journey
8. A Typical Day
9. The In-Between
10. Nature & Cultural Immersions
11. What's Included
12. Optional Additions
13. Investment
14. Closing

The contents side menu is driven by the `sectionMenu` array in `src/KuruluBayRetreat.jsx`. If section order changes, update both the rendered JSX order and `sectionMenu`.

## Interaction Model

- The contents side menu opens from a left-side vertical trigger
- Menu state is handled locally with `useState`
- Clicking the overlay or a menu item closes the drawer
- Internal section navigation uses anchor links such as `#welcome` and `#investment`

## Content Model

The page is mostly data-driven from arrays declared near the top of `src/KuruluBayRetreat.jsx`:

- `imageAssets`: all page image URLs
- `journeyDays`: day-by-day theme labels
- `includedItems`: included retreat items
- `optionalItems`: optional add-ons
- `roomGroups`: pricing cards for room types
- `galleryFrames`: home section gallery images
- `immersionCards`: the three immersion cards and their overlay text
- `dayBlocks`: the four Typical Day image cards and overlay lines
- `sectionMenu`: drawer navigation labels and anchor ids

## Current Overlay Behavior

### Full-screen image sections

The reusable `FullImage` component supports:

- `overlayIndex`
- `overlayLabel`
- `overlayTitle`
- `overlayText`

`overlayText` accepts either a string or an array of strings. Arrays render as stacked lines.

### Typical Day cards

The four Typical Day cards now render their text directly on the images instead of below them.

Current overlay titles:

- `M O R N I N G R I T U A L`
- `M I D D A Y`
- `G O L D E N H O U R`
- `E V E N I N G R I T U A L`

### Nature & Cultural Immersions

The three immersion cards now have dedicated images and overlay text:

- Left: `HANDUNUGODA TEA ESTATE` / `Virgin Silver tip tea`
- Middle: `Koggala Lake boat trip` / `(temple, cinnamon island, fish spa)`
- Right: `Yatagala Temple` / `ancient rock cave temple`

The middle immersion caption uses a dedicated modifier class so it sits slightly lower and aligns visually with the left and right cards:

- `kurulu-bay-page__immersion-card-overlay--middle`

## Current Image Mapping

Important current asset intent:

- `cover`: main opening hero
- `piano`: The Return overlay image
- `lagoonPool`: Your Home overlay image
- `ayurvedaHero`: Shirodhara image
- `sonicBreath`: The Practice overlay image
- `cottages`: The Journey overlay image and some room/gallery uses
- `bathroom`: The In-Between overlay image
- `handunugodaTeaEstate`: left immersion image
- `koggalaBoatTrip`: center immersion image
- `yatalagaTemple`: right immersion image

Some image asset keys are reused in multiple places. Before swapping an image, confirm whether that key is shared elsewhere in the page.

## Styling Notes

The page is intentionally not styled like the rest of `app-tereza`.

Key style traits:

- Avenir Next style sans-serif stack
- warm editorial color palette
- full-height image sections using `100svh`
- translucent contents drawer
- consistent hero text sizing using shared CSS variables
- image overlays handled with gradient layers for text legibility

Core variables are declared at the top of `src/KuruluBayRetreat.css`, including:

- `--kb-hero-kicker-size`
- `--kb-hero-title-size`
- `--kb-hero-body-size`

## Known Implementation Details

- The page does not currently use React Router
- Metadata helpers from the original app were not copied over; this version is a pure page component
- The route is matched with `window.location.pathname.startsWith("/kurulu-bay")`
- The copied page successfully builds in this Vite app

## Editing Guidance

When making future changes:

1. If changing section order, update both JSX order and `sectionMenu`
2. If replacing an image used in only one place, prefer adding a new asset key instead of overwriting a shared one
3. If changing overlay text placement, check whether the styling is shared or card-specific
4. If updating immersion captions, verify the middle card still aligns with the other two
5. If changing the page in a large way, run `npm run build` from the app root to confirm the Vite build still passes

## Validation Status

The `/kurulu-bay` page was added to `app-tereza` and validated with a successful production build:

- `npm run build`

Build output confirmed the app compiles successfully with the copied page included.