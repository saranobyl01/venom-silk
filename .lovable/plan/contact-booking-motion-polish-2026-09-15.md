# Contact, Booking & Motion Polish

## Contact & booking (one section on the home page)

A new "Enquire" section added to the bottom of the single scrolling page, before the footer, with a matching anchor link in the header and footer navigation.

Left side — contact details, set as clear placeholders you can replace later:
- Email, phone, location, "viewings by appointment only"
- A short editorial line in the same voice as the rest of the page

Right side — a single request form:
- Purpose selector: private viewing or specimen enquiry
- Name, email, phone (optional)
- Specimen of interest, pre-filled from the collection list
- Preferred date (only shown for viewings)
- Message
- Submit shows a polished confirmation state in place of the form

Specimen detail dialogs get a "Request a viewing" action that scrolls to the form with that specimen pre-selected.

Note: submissions are not stored or emailed yet — the visitor sees a confirmation and nothing is kept. When you want real requests delivered, that needs the built-in backend switched on; say the word and I'll add it.

## Motion polish

- Hero: staggered entrance for the eyebrow, title, and intro; slower, gentler image drift; a subtle scroll cue that fades as you scroll.
- Scroll reveals: direction-aware and staggered per child instead of one uniform fade, with softer easing and a longer travel curve.
- Section images: light parallax drift as they pass through the viewport.
- Header: refined contrast transition and an animated underline on navigation links.
- Specimen cards: smoother image scale, overlay lift, and a refined focus ring for keyboard use.
- Featured row: momentum-friendly snap, edge fade masks, and arrow controls on desktop.
- Philosophy quote: line-by-line reveal.
- Full `prefers-reduced-motion` coverage for every new effect.

## Technical notes

- New `src/components/contact-booking.tsx` plus small motion helpers; specimen data moved to a shared module so both the collection and the form use it.
- Form built with existing shadcn input/textarea/select/label components, validated client-side with local state; no network call.
- Motion implemented with CSS custom properties, Intersection Observer stagger indices, and a `requestAnimationFrame` parallax hook — no new animation dependency.
- Head metadata on the home route updated to mention viewings and enquiries.
- Verify in the preview at desktop and narrow widths: form validation, confirmation state, dialog-to-form prefill, keyboard focus, reduced motion, and no console errors.
