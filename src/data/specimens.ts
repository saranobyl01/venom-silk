import heroImage from "@/assets/python-hero.jpg";
import scorpionImage from "@/assets/scorpion.jpg";
import tarantulaImage from "@/assets/tarantula.jpg";
import pythonImage from "@/assets/reticulated-python.jpg";
import forestScorpionImage from "@/assets/forest-scorpion.jpg";
import gbbTarantulaImage from "@/assets/gBB-tarantula.jpg";

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
};

export const specimens: Specimen[] = [
  { common: "Emperor Scorpion", scientific: "Pandinus imperator", family: "Scorpions", origin: "West Africa", image: scorpionImage, description: "A monumental forest species whose obsidian armor conceals a remarkably measured temperament.", care: "Beginner", temperament: "Docile", venom: "Mild", habitat: "Terrestrial", temperature: "26–30°C", humidity: "70–80%", size: "15–20 cm", lifespan: "6–8 yrs", note: "Thrives with deep, moist substrate and a secure hide. Listed under CITES Appendix II — documented captive-bred origin is essential." },
  { common: "Asian Forest Scorpion", scientific: "Heterometrus spinifer", family: "Scorpions", origin: "Southeast Asia", image: forestScorpionImage, description: "A formidable burrower, sculpted for the humid darkness beneath the forest floor.", care: "Intermediate", temperament: "Defensive", venom: "Mild", habitat: "Fossorial", temperature: "25–29°C", humidity: "75–85%", size: "10–12 cm", lifespan: "5–8 yrs", note: "Requires deep burrowing substrate and minimal disturbance. Quick to defend itself; observation rather than handling." },
  { common: "Cobalt Blue", scientific: "Cyriopagopus lividus", family: "Tarantulas", origin: "Myanmar & Thailand", image: tarantulaImage, description: "Electric color appears only when light meets the velvet surface of this secretive fossorial spider.", care: "Specialist", temperament: "Defensive", venom: "Moderate", habitat: "Fossorial", temperature: "24–28°C", humidity: "75–85%", size: "12–14 cm span", lifespan: "12–15 yrs (female)", note: "Fast, reclusive, and potent for an Old World species. Suited only to experienced keepers with escape-proof enclosures." },
  { common: "Greenbottle Blue", scientific: "Chromatopelma cyaneopubescens", family: "Tarantulas", origin: "Venezuela", image: gbbTarantulaImage, description: "A vivid architect of silk, celebrated for its intricate webbing and impossible mineral palette.", care: "Intermediate", temperament: "Reclusive", venom: "Mild", habitat: "Terrestrial", temperature: "24–28°C", humidity: "50–60%", size: "12–15 cm span", lifespan: "12–14 yrs (female)", note: "Prefers dry conditions with a water dish and anchor points for its dense webbing. Skittish rather than aggressive." },
  { common: "Reticulated Python", scientific: "Malayopython reticulatus", family: "Pythons", origin: "Southeast Asia", image: pythonImage, description: "The longest living snake species, wearing a geometric pattern that dissolves into rainforest shadow.", care: "Specialist", temperament: "Defensive", venom: "None", habitat: "Terrestrial", temperature: "27–32°C", humidity: "60–70%", size: "Up to 6 m+", lifespan: "20+ yrs", note: "Demands room-scale housing, multi-person handling protocols, and is licensed or restricted in many jurisdictions." },
  { common: "Emerald Tree Python", scientific: "Morelia viridis", family: "Pythons", origin: "New Guinea", image: heroImage, description: "An arboreal jewel that rests in perfect symmetry among the humid canopy branches.", care: "Specialist", temperament: "Reclusive", venom: "None", habitat: "Arboreal", temperature: "26–31°C", humidity: "60–80%", size: "1.5–2 m", lifespan: "15–20 yrs", note: "Needs vertical space, horizontal perches, and carefully managed humidity cycles. Best appreciated without frequent handling." },
];

export const chapters = [
  { number: "I", title: "Scorpions", subtitle: "Ancient architecture", text: "Survivors from a deeper time. Their plated forms reveal an economy of movement refined across more than 400 million years.", image: scorpionImage },
  { number: "II", title: "Tarantulas", subtitle: "Masters of stillness", text: "Silk, shadow, and patience. These extraordinary arachnids transform the smallest vibration into precise knowledge.", image: tarantulaImage },
  { number: "III", title: "Pythons", subtitle: "Living geometry", text: "Muscular grace rendered in scale and pattern. Their movement is deliberate, silent, and endlessly adaptive.", image: pythonImage },
];
