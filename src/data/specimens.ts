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
  { common: "Emperor Scorpion", scientific: "Pandinus imperator", family: "Scorpions", origin: "West Africa", image: scorpionImage, description: "A monumental forest species whose obsidian armor conceals a remarkably measured temperament." },
  { common: "Asian Forest Scorpion", scientific: "Heterometrus spinifer", family: "Scorpions", origin: "Southeast Asia", image: forestScorpionImage, description: "A formidable burrower, sculpted for the humid darkness beneath the forest floor." },
  { common: "Cobalt Blue", scientific: "Cyriopagopus lividus", family: "Tarantulas", origin: "Myanmar & Thailand", image: tarantulaImage, description: "Electric color appears only when light meets the velvet surface of this secretive fossorial spider." },
  { common: "Greenbottle Blue", scientific: "Chromatopelma cyaneopubescens", family: "Tarantulas", origin: "Venezuela", image: gbbTarantulaImage, description: "A vivid architect of silk, celebrated for its intricate webbing and impossible mineral palette." },
  { common: "Reticulated Python", scientific: "Malayopython reticulatus", family: "Pythons", origin: "Southeast Asia", image: pythonImage, description: "The longest living snake species, wearing a geometric pattern that dissolves into rainforest shadow." },
  { common: "Emerald Tree Python", scientific: "Morelia viridis", family: "Pythons", origin: "New Guinea", image: heroImage, description: "An arboreal jewel that rests in perfect symmetry among the humid canopy branches." },
];

export const chapters = [
  { number: "I", title: "Scorpions", subtitle: "Ancient architecture", text: "Survivors from a deeper time. Their plated forms reveal an economy of movement refined across more than 400 million years.", image: scorpionImage },
  { number: "II", title: "Tarantulas", subtitle: "Masters of stillness", text: "Silk, shadow, and patience. These extraordinary arachnids transform the smallest vibration into precise knowledge.", image: tarantulaImage },
  { number: "III", title: "Pythons", subtitle: "Living geometry", text: "Muscular grace rendered in scale and pattern. Their movement is deliberate, silent, and endlessly adaptive.", image: pythonImage },
];
