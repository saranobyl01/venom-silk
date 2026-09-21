import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowDown, ArrowLeft, ArrowRight, ChevronDown, Instagram, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ContactBooking } from "@/components/contact-booking";
import { chapters, images, specimens, type Specimen } from "@/data/specimens";

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <div className={`reveal ${className}`} style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  );
}

export function VenomSilk() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSpecimen, setSelectedSpecimen] = useState("");
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;
    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > viewport + 200) return;
        const progress = (rect.top + rect.height / 2 - viewport / 2) / viewport;
        const strength = Number(node.dataset["parallax"]) || 24;
        node.style.setProperty("--parallax-y", `${(-progress * strength).toFixed(2)}px`);
      });
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const requestSpecimen = useCallback((common: string) => {
    setSelectedSpecimen(common);
    document.getElementById("enquire")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const scrollFeature = (direction: 1 | -1) => {
    const node = featureRef.current;
    if (!node) return;
    node.scrollBy({ left: direction * Math.min(node.clientWidth * 0.8, 520), behavior: "smooth" });
  };

  return (
    <div className="overflow-clip bg-background text-foreground">
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-700 ${scrolled || menuOpen ? "border-border bg-background/90 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
        <nav aria-label="Primary navigation" className={`mx-auto grid max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 transition-all duration-700 sm:px-8 lg:px-12 ${scrolled ? "h-16 lg:h-20" : "h-20 lg:h-24"}`}>
          <a href="#top" className="min-w-0 font-display text-xl text-foreground sm:text-2xl" onClick={closeMenu}>Venom <span className="text-primary">&</span> Silk</a>
          <div className="hidden items-center gap-9 text-[0.68rem] font-semibold uppercase tracking-[0.18em] lg:flex">
            <a className="nav-link" href="#collection">Collection</a>
            <a className="nav-link" href="#featured">Featured</a>
            <a className="nav-link" href="#philosophy">Philosophy</a>
            <a className="nav-link" href="#ethics">Care & Ethics</a>
            <Button asChild size="sm" className="text-[0.62rem]"><a href="#enquire">Book a viewing</a></Button>
          </div>
          <Button variant="icon" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={18} /> : <Menu size={18} />}</Button>
        </nav>
        {menuOpen && (
          <div className="h-[calc(100svh-5rem)] overflow-y-auto border-t border-border bg-background px-5 py-5 sm:px-8 sm:py-8 lg:hidden">
            <div className="grid font-display text-3xl">
              <a className="border-b border-border py-4" href="#collection" onClick={closeMenu}>Collection</a>
              <a className="border-b border-border py-4" href="#featured" onClick={closeMenu}>Featured</a>
              <a className="border-b border-border py-4" href="#philosophy" onClick={closeMenu}>Philosophy</a>
              <a className="border-b border-border py-4" href="#ethics" onClick={closeMenu}>Care & Ethics</a>
              <a className="py-4 text-primary" href="#enquire" onClick={closeMenu}>Book a viewing</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
          <img src={images.hero} width={1920} height={1280} alt="Emerald tree python coiled on a dark branch" className="hero-drift absolute inset-0 size-full object-cover object-[64%_center] sm:object-[58%_center]" fetchPriority="high" />
          <div className="hero-overlay absolute inset-0" />
          <div className="grain pointer-events-none absolute inset-0" />
          <div className="relative z-10 mx-auto grid w-full max-w-[1500px] gap-5 px-5 pb-8 pt-28 sm:gap-8 sm:px-8 sm:pb-16 md:grid-cols-[1fr_0.55fr] md:items-end lg:px-12 lg:pb-20">
            <div className="max-w-4xl">
              <p className="eyebrow mb-4 hero-in sm:mb-7" style={{ "--hero-delay": "120ms" } as CSSProperties}>A private study of extraordinary life</p>
              <h1 className="font-display text-[3.85rem] leading-[0.8] text-foreground min-[390px]:text-[4.3rem] sm:text-[clamp(4.2rem,10vw,9.8rem)]">
                <span className="hero-in block" style={{ "--hero-delay": "260ms" } as CSSProperties}>Venom</span>
                <span className="hero-in ml-[0.28em] block italic text-primary" style={{ "--hero-delay": "420ms" } as CSSProperties}>& Silk</span>
              </h1>
            </div>
            <div className="hero-in max-w-md border-l border-primary/60 pl-4 sm:pl-5 md:mb-2 md:justify-self-end" style={{ "--hero-delay": "620ms" } as CSSProperties}>
              <p className="text-sm leading-6 text-foreground/75 sm:text-base sm:leading-7">An intimate portrait of nature’s most misunderstood forms—observed with patience, presented with reverence.</p>
              <a href="#collection" className="group mt-4 inline-flex min-h-11 items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary sm:mt-7 sm:gap-4 sm:text-xs">
                Explore the collection
                <span className="grid size-10 place-items-center rounded-full border border-primary/60 transition-transform duration-500 group-hover:translate-y-1"><ArrowDown size={15} /></span>
              </a>
            </div>
          </div>
          <span aria-hidden="true" className={`absolute right-5 top-1/2 hidden -translate-y-1/2 text-[0.62rem] uppercase tracking-[0.45em] text-foreground/45 transition-opacity duration-700 [writing-mode:vertical-rl] md:block ${scrolled ? "opacity-0" : "opacity-100"}`}>Field notes · Volume 01</span>
          <span aria-hidden="true" className={`scroll-cue absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block ${scrolled ? "opacity-0" : "opacity-100"}`} />
        </section>

        <section id="collection" className="section-space mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <Reveal className="grid gap-10 md:grid-cols-[0.62fr_1.38fr] md:items-start">
            <div><p className="eyebrow">The living collection</p><p className="mt-4 text-sm text-muted-foreground">Three orders. Six portraits.<br />One enduring fascination.</p></div>
            <p className="font-display text-4xl leading-tight sm:text-5xl lg:text-7xl">Beauty rarely asks to be understood. <span className="italic text-primary">Only witnessed.</span></p>
          </Reveal>
          <div className="mt-14 border-t border-border sm:mt-24">
            {chapters.map((chapter, index) => (
              <Reveal key={chapter.title} className="grid gap-6 border-b border-border py-10 sm:gap-8 sm:py-14 lg:grid-cols-12 lg:items-center">
                <div className={`lg:col-span-5 ${index % 2 ? "lg:order-2" : ""}`}>
                  <div className="image-reveal aspect-[4/3] overflow-hidden">
                    <img data-parallax="34" src={chapter.image} alt={`${chapter.title} collection`} loading="lazy" width={1408} height={1056} className="parallax size-full scale-[1.08] object-cover transition-transform duration-[1200ms] hover:scale-[1.12]" />
                  </div>
                </div>
                <div className={`lg:col-span-6 ${index % 2 ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-7"}`}>
                  <div className="flex items-baseline gap-4"><span className="font-display text-sm text-primary">{chapter.number}</span><span className="eyebrow">{chapter.subtitle}</span></div>
                  <h2 className="mt-4 font-display text-4xl sm:mt-5 sm:text-6xl lg:text-8xl">{chapter.title}</h2>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:mt-7 sm:text-base sm:leading-8">{chapter.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 sm:mt-28">
            <Reveal className="flex items-end justify-between border-b border-border pb-5"><div><p className="eyebrow">Selected studies</p><h2 className="mt-3 font-display text-4xl sm:text-6xl">Specimen index</h2></div><span className="hidden text-xs text-muted-foreground sm:block">06 / 2026</span></Reveal>
            <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
              {specimens.map((specimen, index) => (
                <Reveal key={specimen.scientific} delay={(index % 3) * 110}>
                  <SpecimenCard specimen={specimen} onRequest={requestSpecimen} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="featured" className="section-space bg-surface">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <Reveal className="mb-8 grid gap-5 sm:mb-12 md:grid-cols-2 md:items-end">
              <div><p className="eyebrow">Featured specimens</p><h2 className="mt-4 font-display text-4xl sm:text-7xl">Closer observation</h2></div>
              <div className="md:justify-self-end">
                <p className="max-w-md text-sm leading-7 text-muted-foreground">Each portrait rewards a slower gaze. Form, function, and behavior become inseparable.</p>
                <div className="mt-6 hidden gap-3 md:flex md:justify-end">
                  <Button variant="icon" size="icon" aria-label="Previous specimens" onClick={() => scrollFeature(-1)}><ArrowLeft size={16} /></Button>
                  <Button variant="icon" size="icon" aria-label="Next specimens" onClick={() => scrollFeature(1)}><ArrowRight size={16} /></Button>
                </div>
              </div>
            </Reveal>
            <div ref={featureRef} className="feature-scroll edge-fade -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-5 sm:-mx-8 sm:gap-4 sm:px-8 sm:pb-6 lg:-mx-12 lg:px-12">
              {specimens.slice(0, 5).map((item, index) => (
                <article key={item.scientific} className="group relative aspect-[4/5] w-[78vw] max-w-[440px] shrink-0 snap-start overflow-hidden bg-card sm:w-[62vw] md:snap-center">
                  <img src={item.image} alt={item.common} width={1200} height={1504} loading="lazy" className="size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
                  <div className="card-overlay absolute inset-0 transition-opacity duration-700 group-hover:opacity-90" />
                  <span className="absolute left-5 top-5 font-display text-sm text-primary">0{index + 1}</span>
                  <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-700 group-hover:-translate-y-1 sm:p-6">
                    <p className="eyebrow mb-2">{item.origin}</p>
                    <h3 className="font-display text-3xl sm:text-4xl">{item.common}</h3>
                    <p className="mt-2 text-sm italic text-foreground/65">{item.scientific}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="philosophy" className="relative min-h-[72svh] overflow-hidden sm:min-h-[80vh]">
          <img data-parallax="46" src={images.forestScorpion} alt="Asian forest scorpion in its habitat" width={1200} height={1504} loading="lazy" className="parallax absolute inset-0 size-full scale-110 object-cover object-center opacity-50" />
          <div className="philosophy-overlay absolute inset-0" />
          <div className="relative z-10 mx-auto flex min-h-[72svh] max-w-[1500px] items-center px-5 py-20 sm:min-h-[80vh] sm:px-8 sm:py-24 lg:px-12">
            <div className="max-w-3xl">
              <Reveal><p className="eyebrow">Our philosophy</p></Reveal>
              <blockquote className="mt-7 font-display text-3xl leading-tight sm:mt-8 sm:text-6xl lg:text-7xl">
                <Reveal delay={120}><span className="block">To keep is not to possess.</span></Reveal>
                <Reveal delay={280}><span className="block italic text-primary">It is to observe, protect, and understand.</span></Reveal>
              </blockquote>
              <Reveal delay={420}><p className="mt-8 max-w-xl text-sm leading-7 text-foreground/70">Responsible stewardship begins with humility: replicating natural rhythms, respecting boundaries, and knowing when admiration should remain at a distance.</p></Reveal>
            </div>
          </div>
        </section>

        <section id="ethics" className="section-space mx-auto grid max-w-[1500px] gap-10 px-5 sm:gap-16 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
          <Reveal><p className="eyebrow">Care & ethics</p><h2 className="mt-5 font-display text-4xl sm:text-7xl">Knowledge before ownership.</h2><p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground sm:mt-7">Exotic keeping carries a serious duty of care. Requirements vary by species and jurisdiction; consult qualified specialists and local authorities before making any commitment.</p></Reveal>
          <Reveal delay={140}><EthicsAccordion /></Reveal>
        </section>

        <ContactBooking specimen={selectedSpecimen} onSpecimenChange={setSelectedSpecimen} />
      </main>

      <footer className="border-t border-border bg-surface px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div><div className="font-display text-4xl">Venom <span className="text-primary">&</span> Silk</div><p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">Observe closely. Keep responsibly.</p></div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-xs uppercase tracking-[0.14em]">
            <a className="nav-link" href="#collection">Collection</a>
            <a className="nav-link" href="#ethics">Ethics</a>
            <a className="nav-link" href="#enquire">Contact</a>
            <a className="nav-link" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-[1500px] flex-col gap-2 border-t border-border pt-5 text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground sm:mt-14 sm:flex-row sm:justify-between"><span>© 2026 Venom & Silk</span><span>Curated with reverence</span></div>
      </footer>
    </div>
  );
}

function SpecimenCard({ specimen, onRequest }: { specimen: Specimen; onRequest: (common: string) => void }) {
  return (
    <Dialog.Root>
      <article className="group relative bg-background p-3 sm:p-4">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img src={specimen.image} alt={specimen.common} width={1200} height={1504} loading="lazy" className="size-full object-cover transition duration-[1100ms] ease-out group-hover:scale-[1.04] group-hover:brightness-110" />
          <div className="card-overlay absolute inset-0" />
           <div className="absolute inset-x-0 bottom-0 p-4 transition-transform duration-700 group-hover:-translate-y-1 sm:p-5">
            <p className="eyebrow mb-2">{specimen.family}</p>
            <h3 className="font-display text-3xl">{specimen.common}</h3>
            <p className="mt-1 text-xs italic text-foreground/60">{specimen.scientific}</p>
            <Dialog.Trigger asChild>
              <Button variant="ghost" size="sm" className="mt-5 text-[0.62rem]">View study <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" /></Button>
            </Dialog.Trigger>
          </div>
        </div>
      </article>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-background/85 backdrop-blur-md data-[state=open]:animate-fade-in" />
         <Dialog.Content className="fixed left-1/2 top-1/2 z-[80] grid max-h-[calc(100svh-1rem)] w-[calc(100vw-1rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain border border-border bg-card shadow-2xl data-[state=open]:animate-scale-in sm:max-h-[88vh] sm:w-[min(92vw,900px)] md:grid-cols-2">
           <div className="h-48 sm:min-h-72 sm:h-auto"><img src={specimen.image} alt={specimen.common} width={1200} height={1504} className="size-full object-cover" /></div>
           <div className="relative flex flex-col justify-center p-5 pt-7 sm:p-10">
            <Dialog.Close asChild><Button variant="icon" size="icon" className="absolute right-4 top-4" aria-label="Close details"><X size={17} /></Button></Dialog.Close>
            <p className="eyebrow">{specimen.family} · {specimen.origin}</p>
             <Dialog.Title className="mt-4 pr-10 font-display text-4xl sm:mt-5 sm:text-5xl">{specimen.common}</Dialog.Title>
            <Dialog.Description className="mt-2 italic text-primary">{specimen.scientific}</Dialog.Description>
             <p className="mt-5 text-sm leading-6 text-muted-foreground sm:mt-7 sm:leading-7">{specimen.description}</p>
            <Dialog.Close asChild>
              <Button className="mt-8 self-start" onClick={() => onRequest(specimen.common)}>Request a viewing <ArrowRight size={14} /></Button>
            </Dialog.Close>
             <p className="mt-6 border-t border-border pt-4 text-xs leading-5 text-muted-foreground sm:mt-8 sm:pt-5 sm:leading-6">This collection is presented for education and appreciation. Specialist guidance is essential for welfare, handling, and legal compliance.</p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function EthicsAccordion() {
  const items = [
    ["Responsible ownership", "Choose only captive-bred animals from transparent, reputable sources. Lifespan, adult size, specialist veterinary access, and long-term costs must be understood before acquisition."],
    ["Legal considerations", "Rules differ significantly by country, state, and municipality. Verify permits, restricted-species lists, transport rules, and enclosure requirements with current local authorities."],
    ["Habitat & welfare", "Each species requires precise temperature, humidity, substrate, refuge, and feeding conditions. Enclosures should prioritize the animal’s security—not display value."],
    ["Conservation awareness", "Never remove animals from the wild. Support responsible breeding, documented provenance, habitat protection, and organizations grounded in evidence-based conservation."],
  ];
  return (
    <Accordion.Root type="single" collapsible className="border-t border-border">
      {items.map(([title, body], index) => (
        <Accordion.Item key={title} value={`item-${index}`} className="border-b border-border">
          <Accordion.Header>
             <Accordion.Trigger className="group grid min-h-16 w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 py-4 text-left transition-colors duration-300 hover:text-primary sm:gap-4 sm:py-6">
              <span className="font-display text-sm text-primary">0{index + 1}</span>
               <span className="font-display text-lg sm:text-2xl">{title}</span>
              <ChevronDown size={18} className="shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
             <p className="max-w-2xl pb-6 pl-8 text-sm leading-6 text-muted-foreground sm:pb-7 sm:pl-9 sm:leading-7">{body}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
