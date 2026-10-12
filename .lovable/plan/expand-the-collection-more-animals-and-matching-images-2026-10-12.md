# Expand the collection: more animals and matching images

## Goal
Grow the collection from 6 to 12 animals (4 per category) with a unique, dark and atmospheric image for each, keeping the existing cinematic look and the filters, tags, fact sheets and booking prefill working.

## New animals
Scorpions
- Deathstalker-style desert species is excluded (dangerous venom). Instead: Giant Desert Hairy Scorpion (Hadrurus arizonensis), Tanzanian Red Claw Scorpion (Pandinus cavimanus)

Tarantulas
- Mexican Red Knee (Brachypelma hamorii), Goliath Birdeater (Theraphosa blondi)

Pythons and snakes
- Ball Python (Python regius), Green Tree Python (Morelia viridis already present, so use) Carpet Python (Morelia spilota), Burmese Python (Python bivittatus)

Result: 4 scorpions? Final split chosen for balance: Scorpions 4 (add Desert Hairy, Red Claw), Tarantulas 4 (add Mexican Red Knee, Goliath Birdeater), Pythons 4 (add Ball Python, Carpet Python). Total 12.

## Images
- Generate 6 new photographic-style images (dark, moody, shallow depth of field, matching the current palette) with the image tool, one per new animal, saved in src/assets as optimised JPG/WebP like existing ones.
- Each animal keeps a unique image; the Emerald Tree Python gets its own image instead of reusing the hero.
- Add alt text per animal.

## Changes
1. src/data/specimens.ts: add 6 new records (care level, temperament, venom, habitat, temperature, humidity, size, lifespan, curator note) and register the new images; give the Emerald Tree Python its own image.
2. venom-silk.tsx: no layout change expected; the grid, filter counts and dialogs already read from the data. Check the grid at 2 and 3 columns and on mobile with 12 cards, and add a "staggered reveal" cap so long grids do not feel slow.
3. Verify filters, dialogs, and the booking specimen dropdown list all 12 animals; check no console errors.

## Notes
- Facts and curator notes are written as general guidance and should be checked by you.
- AI-generated images may look slightly stylised; real photography can replace them later by swapping files.
- Only captive-bred, legally keepable species are included; no highly dangerous venomous species.
