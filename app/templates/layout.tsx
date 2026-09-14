import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Templates — Scribed",
  description:
    "Premium document templates for founders, graduates, and teams. Strategy-grade frameworks, not placeholder text.",
};

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
