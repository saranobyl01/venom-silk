import heroImage from "@/assets/python-hero.jpg";
import scorpionImage from "@/assets/scorpion.jpg";
import tarantulaImage from "@/assets/tarantula.jpg";
import pythonImage from "@/assets/reticulated-python.jpg";
import forestScorpionImage from "@/assets/forest-scorpion.jpg";
import gbbTarantulaImage from "@/assets/gBB-tarantula.jpg";
import desertHairyImage from "@/assets/desert-hairy-scorpion.jpg";
import redClawImage from "@/assets/red-claw-scorpion.jpg";
import redKneeImage from "@/assets/red-knee-tarantula.jpg";
import birdeaterImage from "@/assets/goliath-birdeater.jpg";
import ballPythonImage from "@/assets/ball-python.jpg";
import carpetPythonImage from "@/assets/carpet-python.jpg";
import emeraldImage from "@/assets/emerald-tree-python.jpg";

export type Specimen = {
  common: string;
  scientific: string;
  family: string;
  origin: string;
  image: string;
  description: string;
  care: "Beginner" | "Intermediate" | "Specialist";
  temperament: "Docile" | "Reclusive" | "Defensive";
  venom: "None" | "Mild" | "Moderate";
  habitat: "Terrestrial" | "Fossorial" | "Arboreal";
  temperature: string;
  humidity: string;
  size: string;
  lifespan: string;
  note: string;
};

export const images = {
  hero: heroImage,
  scorpion: scorpionImage,
  tarantula: tarantulaImage,
  python: pythonImage,
  forestScorpion: forestScorpionImage,
  gbbTarantula: gbbTarantulaImage,
  emerald: emeraldImage,
};

export const specimens: Specimen[] = [
  { common: "Emperor Scorpion", scientific: "Pandinus imperator", family: "Scorpions", origin: "West Africa", image: scorpionImage, description: "A monumental forest species whose obsidian armor conceals a remarkably measured temperament.", care: "Beginner", temperament: "Docile", venom: "Mild", habitat: "Terrestrial", temperature: "26–30°C", humidity: "70–80%", size: "15–20 cm", lifespan: "6–8 yrs", note: "Thrives with deep, moist substrate and a secure hide. Listed under CITES Appendix II — documented captive-bred origin is essential." },
  { common: "Asian Forest Scorpion", scientific: "Heterometrus spinifer", family: "Scorpions", origin: "Southeast Asia", image: forestScorpionImage, description: "A formidable burrower, sculpted for the humid darkness beneath the forest floor.", care: "Intermediate", temperament: "Defensive", venom: "Mild", habitat: "Fossorial", temperature: "25–29°C", humidity: "75–85%", size: "10–12 cm", lifespan: "5–8 yrs", note: "Requires deep burrowing substrate and minimal disturbance. Quick to defend itself; observation rather than handling." },
  { common: "Cobalt Blue", scientific: "Cyriopagopus lividus", family: "Tarantulas", origin: "Myanmar & Thailand", image: tarantulaImage, description: "Electric color appears only when light meets the velvet surface of this secretive fossorial spider.", care: "Specialist", temperament: "Defensive", venom: "Moderate", habitat: "Fossorial", temperature: "24–28°C", humidity: "75–85%", size: "12–14 cm span", lifespan: "12–15 yrs (female)", note: "Fast, reclusive, and potent for an Old World species. Suited only to experienced keepers with escape-proof enclosures." },
  { common: "Greenbottle Blue", scientific: "Chromatopelma cyaneopubescens", family: "Tarantulas", origin: "Venezuela", image: gbbTarantulaImage, description: "A vivid architect of silk, celebrated for its intricate webbing and impossible mineral palette.", care: "Intermediate", temperament: "Reclusive", venom: "Mild", habitat: "Terrestrial", temperature: "24–28°C", humidity: "50–60%", size: "12–15 cm span", lifespan: "12–14 yrs (female)", note: "Prefers dry conditions with a water dish and anchor points for its dense webbing. Skittish rather than aggressive." },
  { common: "Reticulated Python", scientific: "Malayopython reticulatus", family: "Pythons", origin: "Southeast Asia", image: pythonImage, description: "The longest living snake species, wearing a geometric pattern that dissolves into rainforest shadow.", care: "Specialist", temperament: "Defensive", venom: "None", habitat: "Terrestrial", temperature: "27–32°C", humidity: "60–70%", size: "Up to 6 m+", lifespan: "20+ yrs", note: "Demands room-scale housing, multi-person handling protocols, and is licensed or restricted in many jurisdictions." },
  { common: "Emerald Tree Python", scientific: "Morelia viridis", family: "Pythons", origin: "New Guinea", image: emeraldImage, description: "An arboreal jewel that rests in perfect symmetry among the humid canopy branches.", care: "Specialist", temperament: "Reclusive", venom: "None", habitat: "Arboreal", temperature: "26–31°C", humidity: "60–80%", size: "1.5–2 m", lifespan: "15–20 yrs", note: "Needs vertical space, horizontal perches, and carefully managed humidity cycles. Best appreciated without frequent handling." },
  { common: "Giant Desert Hairy Scorpion", scientific: "Hadrurus arizonensis", family: "Scorpions", origin: "Southwestern USA & Mexico", image: desertHairyImage, description: "North America's largest scorpion, a pale amber hunter that moves like a shadow across cooling sand.", care: "Intermediate", temperament: "Reclusive", venom: "Mild", habitat: "Fossorial", temperature: "24–28°C", humidity: "20–40%", size: "11–14 cm", lifespan: "15–20 yrs", note: "Needs deep dry sand for burrowing and a strict low-humidity setup. Long-lived; source only documented captive-bred animals and check local rules." },
  { common: "Tanzanian Red Claw Scorpion", scientific: "Pandinus cavimanus", family: "Scorpions", origin: "East Africa", image: redClawImage, description: "Mahogany armor and lacquered red claws give this forest dweller a quietly regal presence.", care: "Beginner", temperament: "Docile", venom: "Mild", habitat: "Terrestrial", temperature: "25–29°C", humidity: "70–80%", size: "10–13 cm", lifespan: "8–10 yrs", note: "A hardy relative of the Emperor with a relaxed nature. Provide moist substrate, cork hides and minimal handling." },
  { common: "Mexican Red Knee", scientific: "Brachypelma hamorii", family: "Tarantulas", origin: "Western Mexico", image: redKneeImage, description: "Black velvet banded with ember-orange, the species that defined the tarantula in popular imagination.", care: "Beginner", temperament: "Docile", venom: "Mild", habitat: "Terrestrial", temperature: "22–27°C", humidity: "60–70%", size: "14–16 cm span", lifespan: "20–25 yrs (female)", note: "Slow-growing and calm, with urticating hairs that can irritate skin and eyes. CITES Appendix II — captive-bred only." },
  { common: "Goliath Birdeater", scientific: "Theraphosa blondi", family: "Tarantulas", origin: "Northern South America", image: birdeaterImage, description: "The heaviest spider on earth, a patient burrow-dweller of the flooded rainforest floor.", care: "Specialist", temperament: "Defensive", venom: "Moderate", habitat: "Fossorial", temperature: "24–27°C", humidity: "80–90%", size: "25–30 cm span", lifespan: "14–25 yrs (female)", note: "Large, powerful fangs and strongly irritating hairs. Needs a high-humidity, deep-substrate enclosure and experienced handling discipline." },
  { common: "Ball Python", scientific: "Python regius", family: "Pythons", origin: "West & Central Africa", image: ballPythonImage, description: "Compact and unhurried, it curls into a perfect coil when the world feels too loud.", care: "Beginner", temperament: "Docile", venom: "None", habitat: "Terrestrial", temperature: "26–32°C", humidity: "55–65%", size: "1–1.5 m", lifespan: "25–30 yrs", note: "The most approachable python, yet a multi-decade commitment. Feeding and humidity consistency matter; choose captive-bred stock only." },
  { common: "Carpet Python", scientific: "Morelia spilota", family: "Pythons", origin: "Australia & New Guinea", image: carpetPythonImage, description: "A tapestry of cream and olive, draped along branches with quiet confidence.", care: "Intermediate", temperament: "Reclusive", venom: "None", habitat: "Arboreal", temperature: "24–31°C", humidity: "50–70%", size: "2–3 m", lifespan: "15–25 yrs", note: "Active and semi-arboreal; needs tall, secure housing and climbing structure. Export and keeping rules vary by region — verify before acquiring." },
];

export const chapters = [
  { number: "I", title: "Scorpions", subtitle: "Ancient architecture", text: "Survivors from a deeper time. Their plated forms reveal an economy of movement refined across more than 400 million years.", image: scorpionImage },
  { number: "II", title: "Tarantulas", subtitle: "Masters of stillness", text: "Silk, shadow, and patience. These extraordinary arachnids transform the smallest vibration into precise knowledge.", image: tarantulaImage },
  { number: "III", title: "Pythons", subtitle: "Living geometry", text: "Muscular grace rendered in scale and pattern. Their movement is deliberate, silent, and endlessly adaptive.", image: pythonImage },
];
