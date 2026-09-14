export type TemplateCategory = "startup" | "career" | "finance" | "society";

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
  previewImages: string[];
  includes: string[];
  audience: string;
}

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
    previewImages: ["/images/templates/mvp-doc-preview.png"],
    includes: [
      "Editable HTML file",
      "Google Docs version",
      "Notion version",
      "Strategic writing prompts",
      "Example content",
    ],
    audience: "Founders building an MVP or preparing for fundraising",
  },
  {
    slug: "pitch-deck-framework",
    title: "Investor Pitch Deck",
    description:
      "A 15-slide deck framework with real strategic copy, not placeholder text.",
    longDescription:
      "Covers the full investor story: problem, solution, market sizing (TAM/SAM/SOM), business model, traction, competition, team, financials, and the ask. Every slide has pre-written strategic copy from a real funded-startup perspective. Replace with your details — the structure does the heavy lifting.",
    price: 39,
    currency: "EUR",
    category: "startup",
    featured: true,
    lemonSqueezyUrl: "#",
    previewImages: ["/images/templates/pitch-deck-preview.png"],
    includes: [
      "PowerPoint file",
      "Google Slides version",
      "Keynote version",
      "Speaker notes",
      "Example financials slide",
    ],
    audience: "Founders raising pre-seed to Series A",
  },
  {
    slug: "monetisation-analysis",
    title: "Monetisation Analysis",
    description: "Compare revenue models with real numbers, not guesswork.",
    longDescription:
      "A structured framework for comparing monetisation paths: subscription vs licensing vs marketplace vs enterprise. Includes revenue projection templates, competitive pricing benchmarks, exit multiple comparisons, and a clear recommendation format. Based on research methodology used for real startup strategy decisions.",
    price: 29,
    currency: "EUR",
    category: "startup",
    featured: false,
    lemonSqueezyUrl: "#",
    previewImages: ["/images/templates/monetisation-preview.png"],
    includes: [
      "Editable HTML file",
      "Google Docs version",
      "Revenue model spreadsheet",
      "Pricing benchmark framework",
    ],
    audience: "Founders and product managers deciding how to charge",
  },
  {
    slug: "career-decision-brief",
    title: "Career Decision Brief",
    description:
      "A structured framework for making your next career move with clarity.",
    longDescription:
      "Score and compare career paths on your own terms — not generic prestige. Covers constraints mapping, weighted criteria scoring, timeline planning, decision questions, and a preliminary lean framework. Designed for graduates and early-career professionals choosing between multiple offers or career directions.",
    price: 19,
    currency: "EUR",
    category: "career",
    featured: true,
    lemonSqueezyUrl: "#",
    previewImages: ["/images/templates/career-brief-preview.png"],
    includes: [
      "Editable HTML file",
      "Google Docs version",
      "Notion version",
      "Scoring worksheet",
    ],
    audience:
      "Graduates and early-career professionals weighing career options",
  },
  {
    slug: "linkedin-rewrite-kit",
    title: "LinkedIn Profile Rewrite Kit",
    description:
      "Headline, About section, and experience descriptions that actually get noticed.",
    longDescription:
      "Three headline formulas, a structured About section framework with strategic prompts, and experience bullet-point templates that focus on outcomes, not responsibilities. Includes before/after examples from real profiles in finance, tech, and consulting. Written by someone who has hired and been hired.",
    price: 15,
    currency: "EUR",
    category: "career",
    featured: false,
    lemonSqueezyUrl: "#",
    previewImages: ["/images/templates/linkedin-kit-preview.png"],
    includes: [
      "PDF guide",
      "Google Docs template",
      "3 headline formulas",
      "Before/after examples",
    ],
    audience:
      "Job seekers, career pivoters, and graduates entering the market",
  },
  {
    slug: "sponsorship-pitch-deck",
    title: "Sponsorship Pitch Deck",
    description:
      "A tiered sponsorship deck that makes companies say yes.",
    longDescription:
      "A complete sponsorship proposal framework with Gold/Silver/Bronze tier structure, audience demographics section, deliverables matrix, and a clear CTA. Designed for student societies, nonprofits, and event organisers. Based on a deck that secured five-figure sponsorship commitments.",
    price: 19,
    currency: "EUR",
    category: "society",
    featured: false,
    lemonSqueezyUrl: "#",
    previewImages: ["/images/templates/sponsorship-preview.png"],
    includes: [
      "PowerPoint file",
      "Google Slides version",
      "Tier pricing calculator",
      "Follow-up email templates",
    ],
    audience:
      "Student societies, nonprofits, and event organisers seeking sponsors",
  },
  {
    slug: "outreach-plan",
    title: "Go-to-Market Outreach Plan",
    description:
      "A structured plan for reaching your first 20 customers.",
    longDescription:
      "A complete outreach framework: target persona definition, prospect research template, personalised message scripts, follow-up cadence, and tracking worksheet. Includes 3 message templates for cold outreach, warm introductions, and follow-ups. Based on methodology that generated real responses from Series A-C founders.",
    price: 29,
    currency: "EUR",
    category: "startup",
    featured: false,
    lemonSqueezyUrl: "#",
    previewImages: ["/images/templates/outreach-preview.png"],
    includes: [
      "Editable HTML file",
      "Google Docs version",
      "Message templates",
      "Prospect tracking spreadsheet",
    ],
    audience: "Founders and salespeople finding their first customers",
  },
  {
    slug: "equity-research-note",
    title: "Equity Research Note",
    description:
      "A sell-side style research note framework for any public company.",
    longDescription:
      "A professional equity research note template covering investment thesis, revenue analysis, valuation, competitive positioning, and risk factors. Includes chart placeholders, financial table frameworks, and recommendation format. Based on institutional-quality research methodology used in university finance programmes.",
    price: 19,
    currency: "EUR",
    category: "finance",
    featured: false,
    lemonSqueezyUrl: "#",
    previewImages: ["/images/templates/equity-note-preview.png"],
    includes: [
      "LaTeX source file",
      "PDF example",
      "Google Docs version",
      "Financial table templates",
    ],
    audience: "Finance students, analysts, and investment society members",
  },
];

export const categories: { value: TemplateCategory | "all"; label: string }[] =
  [
    { value: "all", label: "All" },
    { value: "startup", label: "Startup" },
    { value: "career", label: "Career" },
    { value: "finance", label: "Finance" },
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
