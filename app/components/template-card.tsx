import Link from "next/link";
import Image from "next/image";
import type { Template } from "@/lib/templates";

function PlaceholderImage({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-bg-warm p-6">
      <span className="font-serif text-lg text-text-tertiary text-center leading-snug select-none">
        {title}
      </span>
    </div>
  );
}

const categoryLabels: Record<string, string> = {
  startup: "Startup",
  career: "Career",
  finance: "Finance",
  society: "Society",
};

export default function TemplateCard({ template }: { template: Template }) {
  const hasImage =
    template.previewImages.length > 0 &&
    !template.previewImages[0].includes("preview.png");

  return (
    <Link
      href={`/templates/${template.slug}`}
      className="group block rounded-xl border border-border-light bg-white transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Preview image area — 4:3 aspect ratio */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl bg-bg-warm">
        {hasImage ? (
          <Image
            src={template.previewImages[0]}
            alt={template.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <PlaceholderImage title={template.title} />
        )}
      </div>

      {/* Card body */}
      <div className="p-5">
        {/* Category pill + price row */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block text-[11px] font-medium uppercase tracking-widest text-text-tertiary bg-bg-warm rounded-full px-2.5 py-0.5">
            {categoryLabels[template.category] ?? template.category}
          </span>
          <span className="text-sm font-semibold text-text">
            €{template.price}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg leading-snug text-text mb-1.5 group-hover:text-accent transition-colors duration-200">
          {template.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-text-secondary line-clamp-2">
          {template.description}
        </p>
      </div>
    </Link>
  );
}
