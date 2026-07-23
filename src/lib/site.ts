// Central site metadata — used by <SEO/>, layout, and copy blocks.

export const SITE = {
  name: "Roberto Roach",
  title: "Roberto Roach — Engineer · Founder · Coach",
  description:
    "Roberto Roach — electrical-engineering student, robotics educator, web developer, and founder of RAR Technologies (repair · web · advertising). Based in Houston, TX.",
  url: "https://robertoroach.github.io",
  locale: "en-US",
  email: "robertoaroachm@gmail.com",
  phone: "+1 (346) 543-1863",
  phoneHref: "tel:+13465431863",
  location: "Houston, TX",
  coords: "29.76°N 95.36°W",
  university: "Penn State — Electrical Engineering (Class of 2030)",
  ogImage: "/og-default.svg",
  twitterHandle: null as string | null,
} as const;

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
] as const;

// The six disciplines/categories used across content collections and pages.
export const CATEGORIES = [
  {
    slug: "rar-technologies",
    label: "RAR Technologies",
    short: "RAR",
    blurb:
      "The studio I run out of Houston — electronics repair, websites, and advertising for local clients.",
  },
  {
    slug: "web-and-product-development",
    label: "Web & Product Development",
    short: "Web",
    blurb:
      "Websites, landing pages, and interactive product work — the software side of RAR Technologies.",
  },
  {
    slug: "robotics-and-embedded-systems",
    label: "Robotics & Embedded Systems",
    short: "Robotics",
    blurb:
      "Competition robots, embedded controllers, Arduino builds, and closed-loop mechanical systems.",
  },
  {
    slug: "electrical-engineering",
    label: "Electrical Engineering",
    short: "EE",
    blurb:
      "Circuit design, sensors, motors, and hands-on board-level repair — the discipline I'm formally studying.",
  },
  {
    slug: "aerospace-and-rocketry",
    label: "Aerospace & Rocketry",
    short: "Aero",
    blurb:
      "Model rockets — built, launched, recovered, and analyzed. Where I learned to think about stability.",
  },
  {
    slug: "teaching-and-leadership",
    label: "Teaching & Leadership",
    short: "Teach",
    blurb:
      "Coaching a world-championship-winning team, judging VEX IQ, and teaching robotics + code to younger builders.",
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export const DISCIPLINE_PATHWAYS = [
  {
    label: "I build",
    title: "Systems that move.",
    body: "Robotics, embedded controllers, and electrical work — the physical stack.",
    href: "/work/?discipline=robotics",
    accent: "signal",
  },
  {
    label: "I build",
    title: "Systems that think.",
    body: "Software, small tools, and the code that runs on the boards I solder.",
    href: "/work/?discipline=web",
    accent: "graphite",
  },
  {
    label: "I build",
    title: "Systems that connect.",
    body: "RAR Technologies — repair, websites, and advertising for local clients and teams I coach.",
    href: "/work/?discipline=rar",
    accent: "amber",
  },
] as const;
