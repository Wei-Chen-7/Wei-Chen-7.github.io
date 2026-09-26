/**
 * Canonical site content for Wei Chen's personal site.
 *
 * Every fact here comes from Wei's own CVs, applications, and public
 * GitHub repos. Edit this file to update the site; the components only
 * read from it. Section numbers come from `nav`, so reordering or adding
 * a section only means editing that list.
 */

export type Link = { label: string; href: string };

export const identity = {
  name: "Wei Chen",
  // Where the site actually lives. Swap both lines if a custom domain is added.
  domain: "wei-chen-7.github.io",
  siteUrl: "https://wei-chen-7.github.io",
  email: "wchen@wabash.edu",
  github: {
    label: "github.com/Wei-Chen-7",
    href: "https://github.com/Wei-Chen-7",
  },
  linkedin: {
    label: "linkedin.com/in/wei-chen",
    href: "https://www.linkedin.com/in/wei-chen/",
  },
  location: "Crawfordsville, IN",
  status: "Available for opportunities",
};

export const nav = [
  { num: 1, label: "About", id: "about" },
  { num: 2, label: "Research", id: "research" },
  { num: 3, label: "Strengths", id: "strengths" },
  { num: 4, label: "Projects", id: "projects" },
  { num: 5, label: "Experience", id: "experience" },
  { num: 6, label: "Education", id: "education" },
  { num: 7, label: "Writing", id: "writing" },
  { num: 8, label: "Contact", id: "contact" },
];

/** Section number for a section id, so headers always match the nav. */
export function sectionNum(id: string): number {
  return nav.find((n) => n.id === id)?.num ?? 0;
}

export const hero = {
  lines: ["Wei Chen,", "building things", "that think"],
  lede: "Physics and math double major at Wabash College, then Columbia for computer science. I do research in <em>machine learning</em>, <em>NMR physics</em>, and <em>number theory</em>, and I'm aiming at <em>quantum computing</em>.",
  primary: { label: "See my research", href: "#research" },
  secondary: { label: "Get in touch", href: "#contact" },
  currently: [
    { key: "Studying", val: "Physics & math" },
    { key: "Based in", val: "Crawfordsville, IN" },
    { key: "Focus", val: "AI & quantum" },
    { key: "Class of", val: "2027" },
  ],
};

export const about = {
  title: "Some background, a few obsessions, the parts that matter.",
  paragraphs: [
    "I'm a double major in <em>physics and mathematics</em> at Wabash College, and through the 3-2 Combined Plan I'll go on to <em>Columbia</em> for computer science. What pulls me in isn't the code so much as the math underneath it: the structure that decides whether a thing actually works.",
    "Most of my time goes to research. This summer I was a visiting researcher in Dmitry Budker's group at the Helmholtz-Institut Mainz, working on <em>zero-field NMR</em>. At the same time I worked on <em>single-pass generative models</em> in the Polymath Jr. program with Ricardo Baptista, and I have two <em>number theory</em> papers under review. Quantum computing is where I'm headed next. I finished IBM's Qiskit Global Summer School in August with the Quantum Excellence badge.",
    "I've studied and worked in China, Ireland, South Korea, Germany, and the US, and I speak Chinese, Cantonese, and English. I took Stanford's <em>Code in Place</em> as a student, then came back the next year to teach a section. I've kept a <em>4.0</em> so far, not because the grade is the point, but because I'd rather understand a thing all the way down.",
    "Outside the syllabus I sing second bass in the <em>Wabash Glee Club</em>. We sang our way through New York City over spring break, the best trip I've taken in school. I'm easygoing, and I can hold a real conversation with almost anyone. That's usually the thing that opens the door.",
  ],
  meta: [
    { k: "Based in", v: "Crawfordsville, IN" },
    { k: "Studying", v: "Physics & mathematics" },
    { k: "Then", v: "Columbia · Computer science" },
    { k: "Research", v: "ML · NMR · Number theory" },
    { k: "Record", v: "4.0 GPA · Rank 1 of 246" },
    { k: "Languages", v: "Chinese · Cantonese · English" },
    { k: "Class of", v: "2027 (expected)" },
  ],
};

export type Row = {
  when: string;
  where?: string;
  title: string;
  at?: string;
  body: string[];
  tags: string[];
  links?: Link[];
};

export const research: { lede: string; items: Row[] } = {
  lede: "Open questions, and the people who let me work on them.",
  items: [
    {
      when: "Jun – Aug 2026",
      where: "Mainz, Germany",
      title: "Zero-field NMR",
      at: "Helmholtz-Institut Mainz",
      body: [
        "Visiting researcher in Prof. Dmitry Budker's group, on zero- to ultralow-field (ZULF) NMR experiments, including photo-CIDNP of biomolecules.",
        "Follow-up proposal: a network trained by simulation-based inference that reads J-couplings straight off a zero-field spectrum. The forward model is written and passes its first checks: one line at J for two spins, and lines at J and 2J for an XA₃ system.",
      ],
      tags: ["NMR", "Bayesian inference", "Python"],
    },
    {
      when: "Apr – Aug 2026",
      where: "Remote",
      title: "Single-pass generative models",
      at: "Polymath Jr. REU",
      body: [
        "Mentored by Dr. Ricardo Baptista (University of Toronto). Diffusion models need hundreds of network passes per sample. Drifting models try to do it in one, by learning a field that pulls generated points toward the data while pushing them apart so they cover the whole distribution.",
        "Implemented the drifting-flow algorithm on image data such as LSUN and checked it against cases where the right map is known. Studied what the model learns for a Gaussian target, and how the method connects to measure transport and Bayesian inference.",
        "Built an interactive marimo notebook of the method for the alphaXiv × marimo competition.",
      ],
      tags: ["Generative models", "Measure transport", "marimo"],
    },
    {
      when: "2026",
      where: "Wabash College",
      title: "Power maps mod n",
      at: "Number theory",
      body: [
        "What does the map x ↦ kxⁿ mod m look like when you draw every arrow? I study the functional digraphs it makes: their cycles, trees, and fixed points, and how they change with k, n, and m.",
        "Two manuscripts are under review, at INTEGERS and the Electronic Journal of Combinatorics. Details under Writing.",
      ],
      tags: ["Number theory", "Combinatorics", "Python"],
    },
    {
      when: "Oct 2025 – now",
      where: "Remote",
      title: "Multimodal interaction data",
      at: "Shanghai Jiao Tong University",
      body: [
        "Research assistant to Dr. Ren. Designed and ran Wizard-of-Oz studies to collect multimodal data on how people interact with AI systems.",
        "Built automated, real-time pipelines with FFT-based noise reduction and event detection that turn scattered sensor and interaction streams into clean, reusable datasets.",
      ],
      tags: ["Data pipelines", "Signal processing"],
    },
    {
      when: "Summer 2026",
      where: "IBM Quantum · Online",
      title: "Quantum circuits on real hardware",
      at: "Qiskit Global Summer School",
      body: [
        "Finished QGSS 2026 with IBM's Quantum Excellence badge.",
        "Labs on dynamic circuits (GHZ states with mid-circuit measurement and feed-forward on IBM Fez), error mitigation (ZNE, PEC, and others), noise learning with Pauli twirling, LUCJ ansatz circuits, and QAOA.",
      ],
      tags: ["Qiskit", "Error mitigation"],
      links: [
        {
          label: "Badge",
          href: "https://www.credly.com/earner/earned/badge/73629a4d-f971-49b5-ae18-b7520b2b8bb9",
        },
      ],
    },
  ],
};

export const strengths = {
  title: "Five talents, in use.",
  lede: "CliftonStrengths Top 5: what I lead with, and where each one still has an edge to grow.",
  closing: {
    lead: "Five talents, pointed at the same thing:",
    soft: "the hard calls, the new rooms, the better paths.",
  },
  items: [
    {
      num: 1,
      name: "Command",
      metaphor: "The Spine",
      atBest:
        "I say the hard thing and move stuck rooms, cutting through the hedging to the real question.",
      edge: "I can roll over softer voices. Learning to pause and leave room for the teammate who needs three breaths.",
    },
    {
      num: 2,
      name: "Woo",
      metaphor: "The Front Door",
      atBest:
        "I turn a cold room warm, and leave with three contacts and a warm intro to a fourth.",
      edge: "I can stay wide and surface-level. Learning to let a few relationships go deep.",
    },
    {
      num: 3,
      name: "Strategic",
      metaphor: "The Compass",
      atBest:
        "I see the paths through a mess: second-order effects early, the quiet flaw before it ships.",
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
        "I notice potential before the person does. Teaching, coaching, pairing: that's where I refuel, and people grow around it.",
      edge: "I can over-invest in people who aren't reciprocating. Learning when to step back.",
    },
  ],
};

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  links?: Link[];
};

const gh = (repo: string) => `https://github.com/Wei-Chen-7/${repo}`;

export const projects: { lede: string; items: Project[] } = {
  lede: "Things I built, mostly because I wanted them to exist.",
  items: [
    {
      title: "Schrödinger solver",
      desc: "Finite-difference and split-step Fourier solvers for the 1-D Schrödinger equation. Bound states for any potential and wavepacket tunneling, with spectra that match the analytic answers to about 10⁻⁶.",
      tags: ["Python", "SciPy", "Quantum mechanics"],
      links: [{ label: "Code", href: gh("schrodinger-solver") }],
    },
    {
      title: "Quantum circuits from scratch",
      desc: "A statevector simulator in plain NumPy, with Grover search, teleportation, and Deutsch–Jozsa built on top. Gates apply by tensor contraction, so Grover runs to about 12 qubits on a laptop.",
      tags: ["Python", "NumPy", "Quantum computing"],
      links: [{ label: "Code", href: gh("quantum-algorithms") }],
    },
    {
      title: "A net that finds a phase transition",
      desc: "Reproduces Carrasquilla and Melko (2017). A neural network trained only on configurations deep inside each phase of the 2-D Ising model locates the critical temperature within 2.8% of Onsager's exact value.",
      tags: ["Python", "Monte Carlo", "Machine learning"],
      links: [{ label: "Code", href: gh("ml-ising-phases") }],
    },
    {
      title: "Quantum mechanics study tool",
      desc: "The browser app I study QM with: notes in Markdown and LaTeX, problems with hidden solutions, and new topics added by dropping a folder into the content directory.",
      tags: ["React", "TypeScript", "MathJax"],
      links: [
        { label: "Open it", href: "https://wei-chen-7.github.io/quantum-study-tool/" },
        { label: "Code", href: gh("quantum-study-tool") },
      ],
    },
    {
      title: "Trippit",
      desc: "An AI trip planner for families with young kids. Built with three teammates in the CIBE Business Immersion Program, and pitched to Notre Dame's ESTEEM program in 2026.",
      tags: ["Product", "Pitch", "Web app"],
      links: [{ label: "Demo", href: "https://tripit-6c7s.onrender.com/" }],
    },
    {
      title: "Drug-expiry early warning",
      desc: "An intelligent early-warning system for drug expiry dates, meant to help people keep track of their medicine and take it safely. Patented in 2025.",
      tags: ["Patent", "Health"],
    },
  ],
};

export const experience: { lede: string; items: Row[] } = {
  lede: "Places that paid me. Or trusted me.",
  items: [
    {
      when: "Aug 2026 – now",
      where: "Wabash College",
      title: "Supplemental Instruction Leader",
      at: "Calculus II",
      body: ["Plan and run weekly study sessions where students work through the hardest parts of the course together."],
      tags: ["Teaching", "Calculus"],
    },
    {
      when: "Aug 2025 – now",
      where: "Wabash College",
      title: "Innovation Consultant",
      at: "CIBE",
      body: [
        "Junior Innovation Consultant in 2025–26. In the Business Immersion Program my team built and pitched Trippit.",
        "On the marketing team for 2026–27, writing weekly LinkedIn spotlights on CIBE's 25 client engagements.",
      ],
      tags: ["Consulting", "Marketing"],
    },
    {
      when: "Jul 2026 – now",
      where: "Remote",
      title: "Marketing & Communications Contributor",
      at: "Journal of Reliability Science and Engineering (IOP Publishing)",
      body: [
        "Plan and write the journal's LinkedIn posts, and pick the articles to feature by citation impact.",
      ],
      tags: ["Science communication"],
    },
    {
      when: "Apr – Jun 2026",
      where: "Remote",
      title: "Section Leader",
      at: "Code in Place, Stanford",
      body: [
        "Taught a weekly live Python section to learners around the world, one year after taking the course myself.",
      ],
      tags: ["Teaching", "Python"],
    },
    {
      when: "May – Aug 2025",
      where: "Hong Kong",
      title: "Investment & Analytics Intern",
      at: "AIA Group",
      body: [
        "Built financial models and ran market-trend analysis for strategy briefs.",
        "Audited large client-portfolio databases for accuracy.",
      ],
      tags: ["Finance", "Data"],
    },
    {
      when: "2018 – 2024",
      where: "Pingjiang, China",
      title: "Founder & President",
      at: "Way Volunteer Association",
      body: [
        "Started a community health volunteer group that grew past 100 members and ran more than 15 wellness initiatives.",
      ],
      tags: ["Leadership", "Community"],
    },
  ],
};

export const education: { lede: string; items: Row[] } = {
  lede: "Schooling, in chronological reverse.",
  items: [
    {
      when: "Next",
      where: "New York, NY",
      title: "Columbia University",
      at: "B.S., Computer Science · Combined Plan",
      body: [
        "Wabash's 3-2 Combined Plan with Columbia Engineering: a B.A. from Wabash, then a B.S. in computer science from Columbia.",
      ],
      tags: ["Computer science"],
    },
    {
      when: "2025 – 2027 (expected)",
      where: "Crawfordsville, IN",
      title: "Wabash College",
      at: "B.A., Physics & Mathematics",
      body: [
        "Double major in physics and mathematics.",
        "4.0 GPA, ranked first of 246. Dean's List every semester so far. Presidential International Scholarship (merit, full tuition).",
        "Coursework includes linear algebra, number theory, numerical analysis, multivariable calculus, data structures, thermal physics, and computational physics.",
      ],
      tags: ["Physics", "Math"],
    },
    {
      when: "Jul 2026",
      where: "Online",
      title: "Zhejiang University",
      at: "SDG Global Summer School",
      body: ["Networked Autonomous Systems module. Finished with an A, on a full tuition waiver."],
      tags: ["Autonomous systems"],
    },
    {
      when: "Jul 2025 – Jan 2026",
      where: "Seoul, South Korea",
      title: "Hanyang University",
      at: "Summer and winter exchange",
      body: ["Two exchange terms, including principles of microeconomics."],
      tags: ["Exchange"],
    },
    {
      when: "Sep 2024 – Mar 2025",
      where: "Cork, Ireland",
      title: "Munster Technological University",
      at: "B.Eng., Mechanical & Manufacturing",
      body: [
        "First-class standing before transferring to Wabash. 100/100 in Mathematical Methods for Engineers, and a Global Citizenship Scholarship.",
        "Designed a self-powered robot that climbs 1,000 mm vertical pipes while carrying a 1 kg load.",
      ],
      tags: ["Engineering", "Mechanics"],
    },
  ],
};

export const writing = {
  lede: "Words I've put somewhere on purpose.",
  note: "Preprints get linked here as soon as they're public.",
  items: [
    {
      when: "2026",
      title: "Functional digraphs of the power-with-multiplier map f(x) = kx<sup>n</sup> mod m",
      desc: "Under review at INTEGERS.",
      tag: "Number theory",
    },
    {
      when: "2026",
      title: "Enumeration of 4 × n monotone matrices (OEIS A181198)",
      desc: "Under review at the Electronic Journal of Combinatorics.",
      tag: "Combinatorics",
    },
  ],
};

export const contact = {
  title: "Say hello, or send a strange link.",
  cta: "Pick me for the things that matter: hard calls, new rooms, better paths.",
  sub: "The fastest way to reach me is email. I read it daily, and I reply.",
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
