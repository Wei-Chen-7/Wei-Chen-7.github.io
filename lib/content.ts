/**
 * Canonical site content for weichen.studio.
 *
 * Real facts + Top-5 strengths come from Wei's Strengths Folio; voice,
 * slogan and layout come from Brand Guide v2 — reconciled in
 * design/CONTENT.md (the Folio wins on facts).
 *
 * Sections marked PLACEHOLDER hold labeled stand-in copy: the guide's
 * sample projects/roles (Marginalia, Resonance, JGU Mainz, the quantum
 * lab) are illustrative only and are deliberately NOT presented as real.
 */

export const identity = {
  name: "Wei Chen",
  domain: "weichen.studio",
  email: "wchen@wabash.edu",
  github: { label: "github.com/Chin-Way", href: "https://github.com/Chin-Way" },
  linkedin: {
    label: "linkedin.com/in/wei-chen",
    href: "https://www.linkedin.com/in/wei-chen/",
  },
  location: "Crawfordsville, IN",
  status: "Available for opportunities",
};

export const nav = [
  { num: 1, label: "About", id: "about" },
  { num: 2, label: "Strengths", id: "strengths" },
  { num: 3, label: "Projects", id: "projects" },
  { num: 4, label: "Experience", id: "experience" },
  { num: 5, label: "Education", id: "education" },
  { num: 6, label: "Writing", id: "writing" },
  { num: 7, label: "Contact", id: "contact" },
];

export const hero = {
  // Brand Guide hero line, broken across three lines.
  lines: ["Wei Chen,", "building things", "that think"],
  currently: [
    { key: "Studying", val: "Math & CS" },
    { key: "Based in", val: "Crawfordsville, IN" },
    { key: "Focus", val: "AI & quantum" },
    { key: "Class of", val: "2027" },
  ],
};

export const about = {
  paragraphs: [
    "I study <em>mathematics and computer science</em> at Wabash College. What pulls me in isn't the code so much as the math underneath it — the structure that decides whether a thing actually works.",
    "Most of my attention goes to <em>AI and quantum computing</em>; I like the proofs and the patterns more than the syntax. I completed <em>Code in Place</em>, I carry full course loads, and I've held a <em>perfect average</em> so far — not because the grade is the point, but because I'd rather understand a thing all the way down.",
    "Outside the syllabus I sing with the <em>Wabash Glee Club</em> — we sang our way through New York City over spring break, the best trip I've taken in school. I'm easygoing, and I can hold a real conversation with almost anyone. That's usually the thing that opens the door.",
  ],
  meta: [
    { k: "Based in", v: "Crawfordsville, IN" },
    { k: "Studying", v: "Math & Computer Science" },
    { k: "Focus", v: "AI · Quantum computing" },
    { k: "Completed", v: "Code in Place" },
    { k: "Class of", v: "2027 (expected)" },
  ],
};

export const strengths = {
  lede: "CliftonStrengths Top 5 — what I lead with, and where each one still has an edge to grow.",
  items: [
    {
      num: 1,
      name: "Command",
      metaphor: "The Spine",
      atBest:
        "I say the hard thing and move stuck rooms — cutting through the hedging to the real question.",
      edge: "I can roll over softer voices. Learning to pause and leave room for the teammate who needs three breaths.",
    },
    {
      num: 2,
      name: "Woo",
      metaphor: "The Front Door",
      atBest:
        "I turn a cold room warm — and leave with three contacts and a warm intro to a fourth.",
      edge: "I can stay wide and surface-level. Learning to let a few relationships go deep.",
    },
    {
      num: 3,
      name: "Strategic",
      metaphor: "The Compass",
      atBest:
        "I see the paths through a mess — second-order effects early, the quiet flaw before it ships.",
      edge: "I skip ahead and lose people who need the steps. Learning to walk the team through the map.",
    },
    {
      num: 4,
      name: "Self-Assurance",
      metaphor: "The Anchor",
      atBest:
        "I trust my read. I commit under pressure and give others something steady to push against.",
      edge: "Confidence can read as arrogance. Learning to sit still for input.",
    },
    {
      num: 5,
      name: "Developer",
      metaphor: "The Multiplier",
      atBest:
        "I notice potential before the person does. Teaching, coaching, pairing — that's where I refuel, and people grow around it.",
      edge: "I can over-invest in people who aren't reciprocating. Learning when to step back.",
    },
  ],
};

/* ---------- PLACEHOLDER sections (labeled, not invented) ---------- */

export const projects = {
  lede: "Things I built, mostly because I wanted them to exist.",
  note: "Real project write-ups are on the way.",
  // Labeled placeholders — swap in real work when it's ready.
  items: [
    {
      num: 1,
      title: "[ Project ]",
      desc: "A short description of the work — what it is, why it exists, and what it taught me. Real copy lands here soon.",
      tags: ["[ stack ]"],
    },
    {
      num: 2,
      title: "[ Project ]",
      desc: "A short description of the work — what it is, why it exists, and what it taught me. Real copy lands here soon.",
      tags: ["[ stack ]"],
    },
    {
      num: 3,
      title: "[ Project ]",
      desc: "A short description of the work — what it is, why it exists, and what it taught me. Real copy lands here soon.",
      tags: ["[ stack ]"],
    },
    {
      num: 4,
      title: "[ Project ]",
      desc: "A short description of the work — what it is, why it exists, and what it taught me. Real copy lands here soon.",
      tags: ["[ stack ]"],
    },
  ],
};

export const experience = {
  lede: "Places that paid me — or trusted me.",
  note: "Roles and dates are being confirmed.",
  items: [
    {
      when: "[ Dates ]",
      where: "[ Place ]",
      title: "[ Role ]",
      at: "[ Organization ]",
      body: ["What I did, and what it added up to — real detail to follow."],
      tags: ["[ tag ]"],
    },
    {
      when: "[ Dates ]",
      where: "[ Place ]",
      title: "[ Role ]",
      at: "[ Organization ]",
      body: ["What I did, and what it added up to — real detail to follow."],
      tags: ["[ tag ]"],
    },
  ],
};

export const education = {
  lede: "Schooling, in chronological reverse.",
  note: "Coursework detail and any study-abroad term are still to be added.",
  items: [
    {
      when: "2027 (expected)",
      where: "Crawfordsville, IN",
      title: "Wabash College",
      at: "",
      placeholder: false,
      body: [
        "Mathematics & computer science — drawn to AI and quantum computing.",
        "Perfect average so far, across full course loads.",
        "Member of the Wabash Glee Club.",
      ],
      tags: ["Math", "Computer science"],
    },
    {
      when: "Completed",
      where: "Stanford",
      title: "Code in Place",
      at: "",
      placeholder: false,
      body: [
        "Stanford's introductory computer science program — Python, taught live to a global cohort.",
      ],
      tags: ["Python", "CS"],
    },
  ],
};

export const writing = {
  lede: "Words I've put somewhere on purpose.",
  note: "Essays and notes are in progress.",
  items: [
    {
      when: "[ Date ]",
      title: "[ A piece worth linking ]",
      desc: "Where it lives, and why it's here — coming soon.",
      tag: "[ tag ]",
    },
  ],
};

export const contact = {
  // Folio CTA — the closing line.
  cta: "Pick me for the things that matter — hard calls, new rooms, better paths.",
  sub: "The fastest way to reach me is email — I read it daily, and I reply.",
  rows: [
    { k: "Email", v: identity.email, href: `mailto:${identity.email}`, external: false },
    {
      k: "GitHub",
      v: identity.github.label,
      href: identity.github.href,
      external: true,
    },
    {
      k: "LinkedIn",
      v: identity.linkedin.label,
      href: identity.linkedin.href,
      external: true,
    },
    { k: "Based in", v: identity.location, href: null, external: false },
  ],
};

export const colophon = {
  copyright: "© MMXXVI",
  name: "Wei Chen",
  tagline: "Built with care.",
  fonts: ["Alfa Slab One", "Hanken Grotesk", "JetBrains Mono"],
};
