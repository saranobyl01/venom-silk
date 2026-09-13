import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowDown, ArrowRight, ChevronDown, Instagram, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/python-hero.jpg";
import scorpionImage from "@/assets/scorpion.jpg";
import tarantulaImage from "@/assets/tarantula.jpg";
import pythonImage from "@/assets/reticulated-python.jpg";
import forestScorpionImage from "@/assets/forest-scorpion.jpg";
import gbbTarantulaImage from "@/assets/gBB-tarantula.jpg";

type Specimen = {
  common: string;
  scientific: string;
  family: string;
  origin: string;
  image: string;
  description: string;
};

const specimens: Specimen[] = [
  { common: "Emperor Scorpion", scientific: "Pandinus imperator", family: "Scorpions", origin: "West Africa", image: scorpionImage, description: "A monumental forest species whose obsidian armor conceals a remarkably measured temperament." },
  { common: "Asian Forest Scorpion", scientific: "Heterometrus spinifer", family: "Scorpions", origin: "Southeast Asia", image: forestScorpionImage, description: "A formidable burrower, sculpted for the humid darkness beneath the forest floor." },
  { common: "Cobalt Blue", scientific: "Cyriopagopus lividus", family: "Tarantulas", origin: "Myanmar & Thailand", image: tarantulaImage, description: "Electric color appears only when light meets the velvet surface of this secretive fossorial spider." },
  { common: "Greenbottle Blue", scientific: "Chromatopelma cyaneopubescens", family: "Tarantulas", origin: "Venezuela", image: gbbTarantulaImage, description: "A vivid architect of silk, celebrated for its intricate webbing and impossible mineral palette." },
  { common: "Reticulated Python", scientific: "Malayopython reticulatus", family: "Pythons", origin: "Southeast Asia", image: pythonImage, description: "The longest living snake species, wearing a geometric pattern that dissolves into rainforest shadow." },
  { common: "Emerald Tree Python", scientific: "Morelia viridis", family: "Pythons", origin: "New Guinea", image: heroImage, description: "An arboreal jewel that rests in perfect symmetry among the humid canopy branches." },
];

const chapters = [
  { number: "I", title: "Scorpions", subtitle: "Ancient architecture", text: "Survivors from a deeper time. Their plated forms reveal an economy of movement refined across more than 400 million years.", image: scorpionImage },
  { number: "II", title: "Tarantulas", subtitle: "Masters of stillness", text: "Silk, shadow, and patience. These extraordinary arachnids transform the smallest vibration into precise knowledge.", image: tarantulaImage },
  { number: "III", title: "Pythons", subtitle: "Living geometry", text: "Muscular grace rendered in scale and pattern. Their movement is deliberate, silent, and endlessly adaptive.", image: pythonImage },
];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export function VenomSilk() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    }), { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="overflow-clip bg-background text-foreground">
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${scrolled || menuOpen ? "border-border bg-background/95 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
        <nav aria-label="Primary navigation" className="mx-auto grid h-20 max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:h-24 lg:px-12">
          <a href="#top" className="min-w-0 font-display text-xl text-foreground sm:text-2xl" onClick={closeMenu}>Venom <span className="text-primary">&</span> Silk</a>
          <div className="hidden items-center gap-10 text-[0.68rem] font-semibold uppercase tracking-[0.18em] lg:flex">
            <a className="nav-link" href="#collection">Collection</a><a className="nav-link" href="#featured">Featured</a><a className="nav-link" href="#philosophy">Philosophy</a><a className="nav-link" href="#ethics">Care & Ethics</a>
          </div>
          <Button variant="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={18} /> : <Menu size={18} />}</Button>
        </nav>
        {menuOpen && <div className="border-t border-border bg-background px-5 py-8 lg:hidden"><div className="grid gap-6 font-display text-3xl"><a href="#collection" onClick={closeMenu}>Collection</a><a href="#featured" onClick={closeMenu}>Featured</a><a href="#philosophy" onClick={closeMenu}>Philosophy</a><a href="#ethics" onClick={closeMenu}>Care & Ethics</a></div></div>}
      </header>

      <main>
        <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
          <img src={heroImage} width={1920} height={1280} alt="Emerald tree python coiled on a dark branch" className="hero-drift absolute inset-0 size-full object-cover object-[58%_center]" fetchPriority="high" />
          <div className="hero-overlay absolute inset-0" />
          <div className="grain pointer-events-none absolute inset-0" />
          <div className="relative z-10 mx-auto grid w-full max-w-[1500px] gap-8 px-5 pb-16 pt-32 sm:px-8 md:grid-cols-[1fr_0.55fr] md:items-end lg:px-12 lg:pb-20">
            <div className="max-w-4xl animate-fade-in">
              <p className="eyebrow mb-7">A private study of extraordinary life</p>
              <h1 className="font-display text-[clamp(4.2rem,10vw,9.8rem)] leading-[0.78] text-foreground">Venom<br /><span className="ml-[0.28em] italic text-primary">& Silk</span></h1>
            </div>
            <div className="max-w-md border-l border-primary/60 pl-5 md:mb-2 md:justify-self-end">
              <p className="text-sm leading-7 text-foreground/75 sm:text-base">An intimate portrait of nature’s most misunderstood forms—observed with patience, presented with reverence.</p>
              <a href="#collection" className="mt-7 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Explore the collection <span className="grid size-10 place-items-center rounded-full border border-primary/60"><ArrowDown size={15} /></span></a>
            </div>
          </div>
          <span aria-hidden="true" className="absolute right-5 top-1/2 hidden -translate-y-1/2 text-[0.62rem] uppercase tracking-[0.45em] text-foreground/45 [writing-mode:vertical-rl] md:block">Field notes · Volume 01</span>
        </section>

        <section id="collection" className="section-space mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
          <Reveal className="grid gap-10 md:grid-cols-[0.62fr_1.38fr] md:items-start">
            <div><p className="eyebrow">The living collection</p><p className="mt-4 text-sm text-muted-foreground">Three orders. Six portraits.<br />One enduring fascination.</p></div>
            <p className="font-display text-4xl leading-tight sm:text-5xl lg:text-7xl">Beauty rarely asks to be understood. <span className="italic text-primary">Only witnessed.</span></p>
          </Reveal>
          <div className="mt-24 border-t border-border">
            {chapters.map((chapter, index) => (
              <Reveal key={chapter.title} className={`grid gap-8 border-b border-border py-14 lg:grid-cols-12 lg:items-center ${index % 2 ? "" : ""}`}>
                <div className={`lg:col-span-5 ${index % 2 ? "lg:order-2" : ""}`}><div className="image-reveal aspect-[4/3] overflow-hidden"><img src={chapter.image} alt={`${chapter.title} collection`} loading="lazy" width={1408} height={1056} className="size-full object-cover transition-transform duration-1000 hover:scale-[1.035]" /></div></div>
                <div className={`lg:col-span-6 ${index % 2 ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-7"}`}>
                  <div className="flex items-baseline gap-4"><span className="font-display text-sm text-primary">{chapter.number}</span><span className="eyebrow">{chapter.subtitle}</span></div>
                  <h2 className="mt-5 font-display text-5xl sm:text-6xl lg:text-8xl">{chapter.title}</h2>
                  <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">{chapter.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-28">
            <Reveal className="flex items-end justify-between border-b border-border pb-5"><div><p className="eyebrow">Selected studies</p><h2 className="mt-3 font-display text-4xl sm:text-6xl">Specimen index</h2></div><span className="hidden text-xs text-muted-foreground sm:block">06 / 2026</span></Reveal>
            <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
              {specimens.map((specimen) => <SpecimenCard key={specimen.scientific} specimen={specimen} />)}
            </div>
          </div>
        </section>

        <section id="featured" className="section-space bg-surface">
          <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
            <Reveal className="mb-12 grid gap-6 md:grid-cols-2 md:items-end"><div><p className="eyebrow">Featured specimens</p><h2 className="mt-4 font-display text-5xl sm:text-7xl">Closer observation</h2></div><p className="max-w-md text-sm leading-7 text-muted-foreground md:justify-self-end">Each portrait rewards a slower gaze. Form, function, and behavior become inseparable.</p></Reveal>
            <div className="feature-scroll -mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
              {specimens.slice(0, 5).map((item, index) => <article key={item.scientific} className="group relative aspect-[4/5] w-[82vw] max-w-[440px] shrink-0 snap-center overflow-hidden bg-card"><img src={item.image} alt={item.common} width={1200} height={1504} loading="lazy" className="size-full object-cover transition-transform duration-1000 group-hover:scale-105" /><div className="card-overlay absolute inset-0" /><span className="absolute left-5 top-5 font-display text-sm text-primary">0{index + 1}</span><div className="absolute inset-x-0 bottom-0 p-6"><p className="eyebrow mb-2">{item.origin}</p><h3 className="font-display text-4xl">{item.common}</h3><p className="mt-2 text-sm italic text-foreground/65">{item.scientific}</p></div></article>)}
            </div>
          </div>
        </section>

        <section id="philosophy" className="relative min-h-[80vh] overflow-hidden">
          <img src={forestScorpionImage} alt="Asian forest scorpion in its habitat" width={1200} height={1504} loading="lazy" className="absolute inset-0 size-full object-cover object-center opacity-50" /><div className="philosophy-overlay absolute inset-0" />
          <Reveal className="relative z-10 mx-auto flex min-h-[80vh] max-w-[1500px] items-center px-5 py-24 sm:px-8 lg:px-12"><div className="max-w-3xl"><p className="eyebrow">Our philosophy</p><blockquote className="mt-8 font-display text-4xl leading-tight sm:text-6xl lg:text-7xl">To keep is not to possess. It is to <span className="italic text-primary">observe, protect, and understand.</span></blockquote><p className="mt-8 max-w-xl text-sm leading-7 text-foreground/70">Responsible stewardship begins with humility: replicating natural rhythms, respecting boundaries, and knowing when admiration should remain at a distance.</p></div></Reveal>
        </section>

        <section id="ethics" className="section-space mx-auto grid max-w-[1500px] gap-16 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
          <Reveal><p className="eyebrow">Care & ethics</p><h2 className="mt-5 font-display text-5xl sm:text-7xl">Knowledge before ownership.</h2><p className="mt-7 max-w-md text-sm leading-7 text-muted-foreground">Exotic keeping carries a serious duty of care. Requirements vary by species and jurisdiction; consult qualified specialists and local authorities before making any commitment.</p></Reveal>
          <Reveal><EthicsAccordion /></Reveal>
        </section>
      </main>

      <footer className="border-t border-border bg-surface px-5 py-12 sm:px-8 lg:px-12"><div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-[1fr_auto] md:items-end"><div><div className="font-display text-4xl">Venom <span className="text-primary">&</span> Silk</div><p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">Observe closely. Keep responsibly.</p></div><div className="flex items-center gap-7 text-xs uppercase tracking-[0.14em]"><a className="nav-link" href="#collection">Collection</a><a className="nav-link" href="#ethics">Ethics</a><a className="nav-link" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a></div></div><div className="mx-auto mt-14 flex max-w-[1500px] justify-between border-t border-border pt-5 text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground"><span>© 2026 Venom & Silk</span><span>Curated with reverence</span></div></footer>
    </div>
  );
}

function SpecimenCard({ specimen }: { specimen: Specimen }) {
  return <Dialog.Root><article className="group relative bg-background p-4"><div className="relative aspect-[4/5] overflow-hidden"><img src={specimen.image} alt={specimen.common} width={1200} height={1504} loading="lazy" className="size-full object-cover transition duration-700 group-hover:scale-[1.025] group-hover:brightness-110" /><div className="card-overlay absolute inset-0" /><div className="absolute inset-x-0 bottom-0 p-5"><p className="eyebrow mb-2">{specimen.family}</p><h3 className="font-display text-3xl">{specimen.common}</h3><p className="mt-1 text-xs italic text-foreground/60">{specimen.scientific}</p><Dialog.Trigger asChild><Button variant="ghost" className="mt-5 min-h-9 px-4 py-2 text-[0.62rem]">View study <ArrowRight size={13} /></Button></Dialog.Trigger></div></div></article><Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-[70] bg-background/85 backdrop-blur-md data-[state=open]:animate-fade-in" /><Dialog.Content className="fixed left-1/2 top-1/2 z-[80] grid max-h-[88vh] w-[min(92vw,900px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-border bg-card shadow-2xl md:grid-cols-2"><div className="min-h-72"><img src={specimen.image} alt={specimen.common} width={1200} height={1504} className="size-full object-cover" /></div><div className="relative flex flex-col justify-center p-7 sm:p-10"><Dialog.Close asChild><Button variant="icon" className="absolute right-4 top-4" aria-label="Close details"><X size={17} /></Button></Dialog.Close><p className="eyebrow">{specimen.family} · {specimen.origin}</p><Dialog.Title className="mt-5 font-display text-5xl">{specimen.common}</Dialog.Title><Dialog.Description className="mt-2 italic text-primary">{specimen.scientific}</Dialog.Description><p className="mt-7 text-sm leading-7 text-muted-foreground">{specimen.description}</p><p className="mt-8 border-t border-border pt-5 text-xs leading-6 text-muted-foreground">This collection is presented for education and appreciation. Specialist guidance is essential for welfare, handling, and legal compliance.</p></div></Dialog.Content></Dialog.Portal></Dialog.Root>;
}

function EthicsAccordion() {
  const items = [
    ["Responsible ownership", "Choose only captive-bred animals from transparent, reputable sources. Lifespan, adult size, specialist veterinary access, and long-term costs must be understood before acquisition."],
    ["Legal considerations", "Rules differ significantly by country, state, and municipality. Verify permits, restricted-species lists, transport rules, and enclosure requirements with current local authorities."],
    ["Habitat & welfare", "Each species requires precise temperature, humidity, substrate, refuge, and feeding conditions. Enclosures should prioritize the animal’s security—not display value."],
    ["Conservation awareness", "Never remove animals from the wild. Support responsible breeding, documented provenance, habitat protection, and organizations grounded in evidence-based conservation."],
  ];
  return <Accordion.Root type="single" collapsible className="border-t border-border">{items.map(([title, body], index) => <Accordion.Item key={title} value={`item-${index}`} className="border-b border-border"><Accordion.Header><Accordion.Trigger className="group grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-6 text-left"><span className="font-display text-sm text-primary">0{index + 1}</span><span className="font-display text-xl sm:text-2xl">{title}</span><ChevronDown size={18} className="shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" /></Accordion.Trigger></Accordion.Header><Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"><p className="max-w-2xl pb-7 pl-9 text-sm leading-7 text-muted-foreground">{body}</p></Accordion.Content></Accordion.Item>)}</Accordion.Root>;
}