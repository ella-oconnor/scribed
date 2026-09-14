import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Scribed",
  description:
    "Custom document design packages with fixed pricing and fast turnaround. Pitch decks, strategy documents, career packs.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
