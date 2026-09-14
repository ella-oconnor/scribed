"use client";

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
  student: "Student",
  society: "Society",
};

export default function TemplateCard({ template }: { template: Template }) {
  return (
    <Link
      href={`/templates/${template.slug}`}
      className="group block rounded-xl border border-border-light bg-white transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Preview image area */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl bg-bg-warm">
        <Image
          src={template.previewImage}
          alt={template.title}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <PlaceholderImage title={template.title} />
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

        {/* Colour swatches */}
        {template.colorVariants.length > 0 && (
          <div className="flex items-center gap-1.5 mt-3">
            {template.colorVariants.map((v) => (
              <span
                key={v.name}
                title={v.name}
                className="w-3.5 h-3.5 rounded-full border border-border"
                style={{ backgroundColor: v.accent }}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
