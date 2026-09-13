import { createFileRoute } from "@tanstack/react-router";
import { VenomSilk } from "@/components/venom-silk";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Venom & Silk | Exotic Animal Collection" },
      { name: "description", content: "A cinematic study of rare scorpions, tarantulas, and pythons, curated with reverence and a commitment to responsible keeping." },
      { property: "og:title", content: "Venom & Silk | Exotic Animal Collection" },
      { property: "og:description", content: "Discover nature’s most misunderstood forms through a cinematic collection of extraordinary species." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <VenomSilk />;
}
