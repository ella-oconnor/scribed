import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Scribed",
  description:
    "The story behind Scribed. Premium document templates built from real documents that secured funding, landed jobs, and closed deals.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
