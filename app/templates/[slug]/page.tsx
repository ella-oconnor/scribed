import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { templates, getTemplateBySlug } from "@/lib/templates";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) return {};
  return {
    title: `${template.title} — Scribed`,
    description: template.description,
  };
}

const categoryLabels: Record<string, string> = {
  startup: "Startup",
  career: "Career",
  student: "Student",
  society: "Society",
};

export default async function TemplateDetailPage({ params }: Props) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) notFound();

  return (
    <main>
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-text-tertiary">
          <Link href="/templates" className="hover:text-text transition-colors">
            Templates
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">{template.title}</span>
        </nav>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Preview */}
          <div className="lg:col-span-3">
            <div className="relative aspect-[4/3] rounded-xl bg-bg-warm border border-border-light overflow-hidden">
              <Image
                src={template.previewImage}
                alt={template.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>

            {/* Colour variants */}
            {template.colorVariants.length > 0 && (
              <div className="mt-6 flex items-center gap-4">
                <span className="text-xs font-medium uppercase tracking-wider text-text-tertiary">
                  Colour themes included
                </span>
                <div className="flex items-center gap-2">
                  {template.colorVariants.map((v) => (
                    <div key={v.name} className="flex items-center gap-1.5">
                      <span
                        className="w-5 h-5 rounded-full border border-border"
                        style={{ backgroundColor: v.accent }}
                      />
                      <span className="text-xs text-text-secondary">
                        {v.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Details (sticky) */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <span className="inline-block text-[11px] font-medium uppercase tracking-widest text-text-tertiary bg-bg-warm rounded-full px-2.5 py-0.5 mb-4">
                {categoryLabels[template.category] ?? template.category}
              </span>

              <h1 className="font-serif text-3xl md:text-4xl text-text mb-3">
                {template.title}
              </h1>

              <p className="text-text-secondary leading-relaxed mb-6">
                {template.description}
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-3xl font-semibold text-text">
                  €{template.price}
                </span>
                <span className="text-sm text-text-tertiary">EUR</span>
              </div>

              {/* Buy button */}
              <a
                href={template.lemonSqueezyUrl}
                className="w-full inline-flex items-center justify-center px-7 py-4 bg-text text-white text-sm font-medium rounded-lg hover:bg-accent transition-colors duration-200 mb-3"
              >
                Buy now
              </a>

              {/* Preview button */}
              <a
                href={template.downloadFile}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-7 py-3 bg-white text-text text-sm font-medium rounded-lg border border-border hover:border-text transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Preview template
              </a>

              {/* What's included */}
              <div className="mt-8 pt-8 border-t border-border-light">
                <h3 className="text-sm font-medium text-text mb-4 uppercase tracking-wider">
                  What&apos;s included
                </h3>
                <ul className="space-y-2.5">
                  {template.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                    >
                      <svg
                        className="w-4 h-4 text-accent mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who it's for */}
              <div className="mt-8 pt-8 border-t border-border-light">
                <h3 className="text-sm font-medium text-text mb-2 uppercase tracking-wider">
                  Who this is for
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {template.audience}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Long description */}
        <div className="mt-16 pt-16 border-t border-border-light max-w-2xl">
          <h2 className="font-serif text-2xl text-text mb-4">About this template</h2>
          <p className="text-text-secondary leading-relaxed">
            {template.longDescription}
          </p>
        </div>
      </div>
    </main>
  );
}
