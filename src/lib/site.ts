// Central site metadata — imported by SEO, layouts, and copy blocks.

export const SITE = {
  name: "Roberto Andrés Roach",
  shortName: "Roberto Roach",
  title: "Roberto Andrés Roach — Founder · Engineer · Robotics Educator",
  description:
    "Roberto Andrés Roach — founder of RAR Technologies, electrical engineering student at Penn State Behrend, robotics educator at iCode Memorial, and embedded-systems developer. Houston, Texas.",
  url: "https://robertoroach.github.io",
  locale: "en-US",
  email: "robertoaroachm@gmail.com",
  phone: "+1 (346) 543-1863",
  phoneHref: "tel:+13465431863",
  location: "Houston, TX",
  coords: "29.76°N 95.36°W",
  university: "Penn State Behrend — Electrical Engineering, Class of 2030",
  universityShort: "Penn State Behrend · EE '30",
  ogImage: "/og-default.svg",
} as const;

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
] as const;

// The six disciplines / categories.
export const CATEGORIES = [
  {
    slug: "rar-technologies",
    label: "RAR Technologies",
    short: "RAR",
    blurb:
      "The studio I founded in 2023 — website design, technology-product development, electronics repair, and embedded work for local clients.",
  },
  {
    slug: "web-and-product-development",
    label: "Web & Product Development",
    short: "Web",
    blurb:
      "Static and interactive websites, small technology products, and the software side of RAR Technologies.",
  },
  {
    slug: "robotics-and-embedded-systems",
    label: "Robotics & Embedded Systems",
    short: "Robotics",
    blurb:
      "VEX V5 competition robots, Arduino embedded systems, sensor integration, and autonomous programming.",
  },
  {
    slug: "electrical-engineering",
    label: "Electrical Engineering",
    short: "EE",
    blurb:
      "Circuit design, breadboards, motors, sensors, and hardware diagnostics — the discipline I'm formally studying at Penn State Behrend.",
  },
  {
    slug: "teaching-and-leadership",
    label: "Teaching & Leadership",
    short: "Teach",
    blurb:
      "Instructor and VEX IQ coach at iCode Memorial, and primary robotics coach for a Texas State Champion Odyssey of the Mind team.",
  },
  {
    slug: "aerospace-and-rocketry",
    label: "Aerospace & Rocketry",
    short: "Aero",
    blurb:
      "Model rocket design, construction, and launch analysis from high-school aerospace coursework.",
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

// The three overlapping ways I frame my work — used on the homepage identity block.
export const DISCIPLINE_PATHWAYS = [
  {
    label: "Systems that move.",
    body: "Robotics, embedded controllers, autonomous programming, and sensor integration — the physical stack.",
    href: "/work/#robotics-and-embedded-systems",
  },
  {
    label: "Systems that think.",
    body: "Software, embedded firmware, and the code that runs on the boards I build and repair.",
    href: "/work/#web-and-product-development",
  },
  {
    label: "Systems that connect.",
    body: "RAR Technologies — websites, product work, and repair services for clients across Houston, in English and Spanish.",
    href: "/work/#rar-technologies",
  },
] as const;
