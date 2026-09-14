export type TemplateCategory = "startup" | "career" | "student" | "society";

export interface ColorVariant {
  name: string;
  accent: string;
  bg: string;
}

export interface Template {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  currency: string;
  category: TemplateCategory;
  featured: boolean;
  lemonSqueezyUrl: string;
  previewImage: string;
  downloadFile: string;
  colorVariants: ColorVariant[];
  includes: string[];
  audience: string;
}

const standardColors: ColorVariant[] = [
  { name: "Navy", accent: "#2B4C7E", bg: "#F7F8FA" },
  { name: "Sage", accent: "#4A6741", bg: "#F8FAF7" },
  { name: "Charcoal", accent: "#3D3D3D", bg: "#F9F9F9" },
];

export const templates: Template[] = [
  {
    slug: "startup-mvp-doc",
    title: "Startup MVP Document",
    description:
      "A structured product document that makes investors and teams take your idea seriously.",
    longDescription:
      "A complete product document framework covering problem, customer, product, competition, pricing, success metrics, go-to-market, and risk analysis. Based on real documents used to pitch investors and align teams at funded startups. Every section includes strategic prompts so you know exactly what to write.",
    price: 29,
    currency: "EUR",
    category: "startup",
    featured: true,
    lemonSqueezyUrl: "#",
    previewImage: "/images/templates/startup-mvp-doc-preview.png",
    downloadFile: "/templates/startup-mvp-doc.html",
    colorVariants: standardColors,
    includes: [
      "Strategy guide with worked examples",
      "Blank template with prompts",
      "Filled example (Glassbox)",
      "3 colour themes",
    ],
    audience: "Founders building an MVP or preparing for fundraising",
  },
  {
    slug: "monetisation-analysis",
    title: "Monetisation Analysis",
    description:
      "Compare revenue models with real numbers and a clear recommendation.",
    longDescription:
      "A structured framework for comparing monetisation paths: subscription vs licensing vs marketplace vs enterprise. Includes revenue projection templates, competitive pricing benchmarks, exit multiple comparisons, and a clear recommendation format. Based on research methodology used for real startup strategy decisions.",
    price: 29,
    currency: "EUR",
    category: "startup",
    featured: true,
    lemonSqueezyUrl: "#",
    previewImage: "/images/templates/monetisation-analysis-preview.png",
    downloadFile: "/templates/monetisation-analysis.html",
    colorVariants: standardColors,
    includes: [
      "Strategy guide with frameworks",
      "Blank analysis template",
      "Filled example (Beacon)",
      "3 colour themes",
    ],
    audience: "Founders and product managers deciding how to charge",
  },
  {
    slug: "career-decision-brief",
    title: "Career Decision Brief",
    description:
      "A structured framework for making your next career move with clarity.",
    longDescription:
      "Score and compare career paths on your own terms. Covers constraints mapping, weighted criteria scoring, timeline planning, decision questions, and a preliminary lean framework. Designed for graduates and early-career professionals choosing between multiple offers or career directions.",
    price: 19,
    currency: "EUR",
    category: "career",
    featured: true,
    lemonSqueezyUrl: "#",
    previewImage: "/images/templates/career-decision-brief-preview.png",
    downloadFile: "/templates/career-decision-brief.html",
    colorVariants: standardColors,
    includes: [
      "Strategy guide",
      "Weighted scoring template",
      "Filled example (Alex)",
      "3 colour themes",
    ],
    audience:
      "Graduates and early-career professionals weighing career options",
  },
  {
    slug: "sponsorship-pitch-deck",
    title: "Sponsorship Pitch Deck",
    description:
      "A tiered sponsorship deck that makes companies say yes.",
    longDescription:
      "A complete sponsorship proposal framework with Gold/Silver/Bronze tier structure, audience demographics section, deliverables matrix, and a clear call to action. Designed for student societies, nonprofits, and event organisers. Based on a deck that secured five-figure sponsorship commitments.",
    price: 19,
    currency: "EUR",
    category: "society",
    featured: false,
    lemonSqueezyUrl: "#",
    previewImage: "/images/templates/sponsorship-pitch-deck-preview.png",
    downloadFile: "/templates/sponsorship-pitch-deck.html",
    colorVariants: standardColors,
    includes: [
      "Strategy guide",
      "Full pitch deck with tier cards",
      "Filled example",
      "3 colour themes",
    ],
    audience:
      "Student societies, nonprofits, and event organisers seeking sponsors",
  },
  {
    slug: "linkedin-profile-kit",
    title: "LinkedIn Profile Kit",
    description:
      "Headline, About section, and experience descriptions that get noticed.",
    longDescription:
      "Three headline formulas, a structured About section framework with strategic prompts, and experience bullet-point templates that focus on outcomes. Includes before/after examples across finance, tech, and consulting. Written for graduates and early-career professionals.",
    price: 15,
    currency: "EUR",
    category: "career",
    featured: true,
    lemonSqueezyUrl: "#",
    previewImage: "/images/templates/linkedin-profile-kit-preview.png",
    downloadFile: "/templates/linkedin-profile-kit.html",
    colorVariants: standardColors,
    includes: [
      "Strategy guide",
      "3 headline formulas",
      "About section framework",
      "Weak vs strong examples",
      "3 colour themes",
    ],
    audience:
      "Job seekers, career pivoters, and graduates entering the market",
  },
  {
    slug: "cv-finance",
    title: "Finance CV",
    description:
      "WSO-style single-column CV built for banking, consulting, and finance roles.",
    longDescription:
      "A clean, single-column CV following the Wall Street Oasis format trusted across investment banking, consulting, and asset management. Strict section ordering, conservative typography, and ATS-optimised structure. Includes a strategy guide on bullet point formulas, what to cut, and what recruiters actually scan first.",
    price: 15,
    currency: "EUR",
    category: "student",
    featured: false,
    lemonSqueezyUrl: "#",
    previewImage: "/images/templates/cv-finance-preview.png",
    downloadFile: "/templates/cv-finance.html",
    colorVariants: standardColors,
    includes: [
      "Strategy guide",
      "Blank CV template",
      "Filled example (Morgan Reid)",
      "3 colour themes",
    ],
    audience:
      "Students and graduates applying to finance, banking, or consulting",
  },
  {
    slug: "cv-tech",
    title: "Tech CV",
    description:
      "Jake's Resume-style CV optimised for software, data, and product roles.",
    longDescription:
      "A projects-first, single-column CV following the format preferred across software engineering, data science, and product management. Prioritises technical skills, project impact, and quantified outcomes. ATS-friendly with clean formatting that parses correctly across all major applicant tracking systems.",
    price: 15,
    currency: "EUR",
    category: "student",
    featured: false,
    lemonSqueezyUrl: "#",
    previewImage: "/images/templates/cv-tech-preview.png",
    downloadFile: "/templates/cv-tech.html",
    colorVariants: standardColors,
    includes: [
      "Strategy guide",
      "Blank CV template",
      "Filled example (Casey Lin)",
      "3 colour themes",
    ],
    audience:
      "Students and graduates applying to tech, engineering, or data roles",
  },
  {
    slug: "cv-creative",
    title: "Creative CV",
    description:
      "A portfolio-ready CV for design, marketing, media, and creative roles.",
    longDescription:
      "A CV format with slightly more visual personality while remaining ATS-friendly. Includes a profile summary section, portfolio link integration, and guidance on balancing creativity with clarity. Designed for roles where presentation matters as much as content.",
    price: 15,
    currency: "EUR",
    category: "student",
    featured: false,
    lemonSqueezyUrl: "#",
    previewImage: "/images/templates/cv-creative-preview.png",
    downloadFile: "/templates/cv-creative.html",
    colorVariants: standardColors,
    includes: [
      "Strategy guide",
      "Blank CV template",
      "Filled example (Riley Park)",
      "3 colour themes",
    ],
    audience:
      "Students and graduates applying to design, marketing, or media roles",
  },
  {
    slug: "cv-general",
    title: "General CV",
    description:
      "A clean all-rounder CV that works across industries and career stages.",
    longDescription:
      "A versatile CV format that adapts to any industry. Includes guidance on highlighting extracurriculars, tailoring for different sectors, and structuring experience for maximum impact. The go-to template when you need one CV that covers everything.",
    price: 15,
    currency: "EUR",
    category: "student",
    featured: false,
    lemonSqueezyUrl: "#",
    previewImage: "/images/templates/cv-general-preview.png",
    downloadFile: "/templates/cv-general.html",
    colorVariants: standardColors,
    includes: [
      "Strategy guide",
      "Blank CV template",
      "Filled example (Alex Torres)",
      "3 colour themes",
    ],
    audience:
      "Students and graduates applying across multiple industries",
  },
  {
    slug: "cover-letter",
    title: "Cover Letter",
    description:
      "A four-paragraph structure that connects your experience to their needs.",
    longDescription:
      "A cover letter framework with a clear four-paragraph structure: hook, evidence of fit, specific contribution, and close. Includes research guidance, tone calibration tips, and a complete worked example. Every paragraph has strategic prompts so you know exactly what goes where.",
    price: 12,
    currency: "EUR",
    category: "student",
    featured: false,
    lemonSqueezyUrl: "#",
    previewImage: "/images/templates/cover-letter-preview.png",
    downloadFile: "/templates/cover-letter.html",
    colorVariants: standardColors,
    includes: [
      "Strategy guide",
      "Blank letter template",
      "Filled example (Priya Sharma)",
      "3 colour themes",
    ],
    audience:
      "Job seekers writing tailored cover letters for specific roles",
  },
  {
    slug: "personal-statement",
    title: "Personal Statement",
    description:
      "A paragraph-by-paragraph framework for postgrad and masters applications.",
    longDescription:
      "A structured personal statement framework covering motivation, academic foundation, relevant experience, programme fit, and career vision. Includes paragraph-by-paragraph guidance, research tips for referencing specific modules and faculty, and a complete worked example for a masters application.",
    price: 15,
    currency: "EUR",
    category: "student",
    featured: false,
    lemonSqueezyUrl: "#",
    previewImage: "/images/templates/personal-statement-preview.png",
    downloadFile: "/templates/personal-statement.html",
    colorVariants: standardColors,
    includes: [
      "Strategy guide",
      "Paragraph-by-paragraph framework",
      "Filled example (Kai Nakamura)",
      "3 colour themes",
    ],
    audience:
      "Graduates applying to masters, MBA, or postgraduate programmes",
  },
];

export const categories: { value: TemplateCategory | "all"; label: string }[] =
  [
    { value: "all", label: "All" },
    { value: "startup", label: "Startup" },
    { value: "career", label: "Career" },
    { value: "student", label: "Student" },
    { value: "society", label: "Society" },
  ];

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}

export function getFeaturedTemplates(): Template[] {
  return templates.filter((t) => t.featured);
}

export function getTemplatesByCategory(
  category: TemplateCategory | "all",
): Template[] {
  if (category === "all") return templates;
  return templates.filter((t) => t.category === category);
}
