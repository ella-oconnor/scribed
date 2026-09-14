export interface ServicePackage {
  name: string;
  price: string;
  description: string;
  includes: string[];
  turnaround: string;
  popular?: boolean;
}

export const packages: ServicePackage[] = [
  {
    name: "Career Pack",
    price: "€199",
    description: "Everything you need for your next career move.",
    includes: [
      "CV rewrite and redesign",
      "LinkedIn headline and About section",
      "Cover letter framework",
      "One round of revisions",
    ],
    turnaround: "48 hours",
  },
  {
    name: "Startup Pack",
    price: "€499",
    description: "The documents your startup should have shipped with.",
    includes: [
      "Pitch deck (15 slides, strategy + design)",
      "One-pager for investors",
      "Investor update template",
      "Two rounds of revisions",
    ],
    turnaround: "72 hours",
    popular: true,
  },
  {
    name: "Strategy Document",
    price: "From €999",
    description: "A bespoke document built around your specific needs.",
    includes: [
      "Custom strategy document or research report",
      "Monetisation analysis or market research",
      "Full design and strategic copy",
      "Three rounds of revisions",
    ],
    turnaround: "1 week",
  },
];
