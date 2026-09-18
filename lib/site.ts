// Central place to edit artist details, navigation, and gallery entries.
// Swap the `src` values below with real image paths (e.g. "/works/piece-01.jpg")
// once artwork is ready — the layout will pick them up automatically.

export const site = {
  artist: "Vadim Gregor",
  role: "Artist, Painter, Illustrator & Graphic Designer.",
  location: "Based in NYC",
  email: "vadim.gregor@mail.com",
  instagram: "@vadimgregor",
  tagline: "Paintings, drawings, and graphic work shaped by classical training and a storyteller's eye.",
} as const

export const nav = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const

export type Category = "Paintings" | "Drawings" | "Graphics"

export const categories: Category[] = ["Paintings", "Drawings", "Graphics"]

export type Artwork = {
  id: string
  title: string
  year: string
  medium: string
  category: Category
  // Larger spans create an editorial, asymmetric grid.
  span: "tall" | "wide" | "regular"
  src?: string // add a real image path later
}

export const artworks: Artwork[] = [
  // Paintings
  { id: "01", title: "Morning Interval", year: "2024", medium: "Oil on linen", category: "Paintings", span: "tall" },
  { id: "02", title: "Untitled (Field)", year: "2024", medium: "Oil on linen", category: "Paintings", span: "regular" },
  { id: "03", title: "Threshold", year: "2023", medium: "Oil on panel", category: "Paintings", span: "wide" },
  { id: "04", title: "Late Room", year: "2022", medium: "Oil on linen", category: "Paintings", span: "regular" },
  { id: "05", title: "Interior, Noon", year: "2021", medium: "Oil on panel", category: "Paintings", span: "regular" },
  { id: "06", title: "Slow Tide", year: "2021", medium: "Oil on linen", category: "Paintings", span: "tall" },

  // Drawings
  { id: "07", title: "Two Figures", year: "2022", medium: "Charcoal on paper", category: "Drawings", span: "wide" },
  { id: "08", title: "Study in Ochre", year: "2023", medium: "Conté on paper", category: "Drawings", span: "regular" },
  { id: "09", title: "Seated Figure", year: "2022", medium: "Graphite on paper", category: "Drawings", span: "tall" },
  { id: "10", title: "Quiet Hands", year: "2021", medium: "Ink on paper", category: "Drawings", span: "regular" },

  // Graphics
  { id: "11", title: "Weight of Water", year: "2023", medium: "Monotype", category: "Graphics", span: "wide" },
  { id: "12", title: "Passage", year: "2022", medium: "Etching", category: "Graphics", span: "regular" },
  { id: "13", title: "Fold", year: "2021", medium: "Lithograph", category: "Graphics", span: "tall" },
  { id: "14", title: "Remnant", year: "2020", medium: "Woodcut", category: "Graphics", span: "regular" },
]
