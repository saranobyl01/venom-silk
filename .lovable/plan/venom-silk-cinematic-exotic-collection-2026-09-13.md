# Venom & Silk — Cinematic Exotic Collection

## Experience
Build a polished, single-page editorial showcase at `/` for rare scorpions, tarantulas, and pythons. Keep **Venom & Silk** as the brand: it captures both danger and tactile luxury without sounding sensationalist.

## Visual direction
- Near-black charcoal foundation with deep emerald surfaces, restrained oxblood accents, and warm antique-gold highlights.
- Editorial serif display type paired with a quiet modern sans-serif body face.
- Asymmetric layouts, oversized type, fine rules, controlled whitespace, and sharp or subtly rounded geometry.
- Generate a cohesive set of dark, realistic animal portraits and habitat imagery; frame subjects clearly rather than relying on generic atmospheric stock.
- Add subtle grain, vignette, and light effects without compromising readability.

## Page structure
1. **Immersive opening** — full-viewport cinematic python image with slow movement, minimal navigation, brand lockup, concise introduction, and “Explore the Collection” scroll action.
2. **Collection introduction** — editorial statement and compact collection index.
3. **Species chapters** — distinct Scorpions, Tarantulas, and Pythons sections, each with a large visual, atmospheric copy, and a curated species grid.
4. **Specimen details** — interactive cards with scientific names, concise facts, refined hover states, and keyboard-accessible detail dialogs.
5. **Featured specimens** — a sticky horizontal storytelling sequence containing 4–6 large specimen panels.
6. **Philosophy** — restrained editorial storytelling focused on stewardship, observation, and respect.
7. **Care & ethics** — accessible accordion covering responsible ownership, legal research, habitat needs, and conservation awareness.
8. **Minimal footer** — compact navigation, social placeholders, and a subtle animated brand mark.

## Motion and interaction
- Sticky navigation gains contrast as the page scrolls.
- Use lightweight native scrolling and Intersection Observer-driven reveals rather than adding a heavy animation dependency.
- Include image parallax, clip reveals, staggered specimen entrances, and a desktop horizontal feature sequence with a natural stacked mobile fallback.
- Honor `prefers-reduced-motion`, maintain visible focus states, preserve keyboard navigation, and prevent motion from blocking content.

## Content and implementation
- Create focused React components and typed specimen data rather than one oversized page file.
- Use generated modern-format imagery stored with the project asset flow and responsive image sizing/lazy loading below the opening.
- Use semantic design tokens for all color, type, shadow, and surface roles.
- Add route-specific title, description, Open Graph metadata, one clear H1, semantic landmarks, and meaningful image descriptions.
- Keep all ownership and legal guidance high-level and explicitly jurisdiction-dependent.

## Verification
- Check desktop and mobile layouts, navigation, smooth scrolling, dialogs, accordion behavior, horizontal storytelling, keyboard focus, reduced motion, text overflow, and image loading in the running preview.
- Confirm there are no browser errors and the finished page remains usable at narrow widths.
