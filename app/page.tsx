import Link from "next/link";
import { getFeaturedTemplates } from "@/lib/templates";
import TemplateCard from "./components/template-card";

export default function Home() {
  const featured = getFeaturedTemplates();

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-28 md:py-40">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-text mb-6">
              Documents that
              <br />
              <span className="text-accent">perform</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-lg">
              Strategy-grade templates for founders, graduates, and teams.
              Ready in seconds, not weeks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/templates"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-text text-white text-sm font-medium rounded-lg hover:bg-accent transition-colors duration-200"
              >
                Browse templates
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-border text-text text-sm font-medium rounded-lg hover:border-text transition-colors duration-200"
              >
                Work with me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Value props ── */}
      <section className="bg-bg-warm border-y border-border-light">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <div>
              <h3 className="font-serif text-xl mb-3 text-text">
                Strategic, not decorative
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Every template includes real frameworks and strategic
                prompts — not placeholder text. Built from documents that
                have secured funding, landed jobs, and closed deals.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-3 text-text">
                Ready in seconds
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Download, fill in your details, and ship. No waiting for a
                designer. No back-and-forth. Documents that look like they
                cost thousands, ready when you are.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-3 text-text">
                Built by someone who ships
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Every template is based on a real document that was used
                to secure funding, land a job, or close a deal. These are
                the documents behind real companies, not design exercises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured templates ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-text mb-2">
                Featured templates
              </h2>
              <p className="text-text-secondary">
                The most popular documents, ready to download.
              </p>
            </div>
            <Link
              href="/templates"
              className="hidden md:inline-flex text-sm text-text-secondary hover:text-accent transition-colors"
            >
              View all &rarr;
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((template) => (
              <TemplateCard key={template.slug} template={template} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/templates"
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              View all templates &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Custom work CTA ── */}
      <section className="bg-bg-warm border-y border-border-light">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-24 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-text mb-4">
            Need something bespoke?
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto mb-8">
            I design custom documents for founders and teams. Pitch decks,
            strategy documents, career packs — with fixed pricing and fast
            turnaround.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200"
          >
            See packages
          </Link>
        </div>
      </section>
    </main>
  );
}
