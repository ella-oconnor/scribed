"use client";

import { useState } from "react";
import { templates, categories, getTemplatesByCategory } from "@/lib/templates";
import type { TemplateCategory } from "@/lib/templates";
import TemplateCard from "../components/template-card";

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState<TemplateCategory | "all">("all");
  const filtered = getTemplatesByCategory(activeCategory);

  return (
    <main>
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-text mb-3">
            Templates
          </h1>
          <p className="text-text-secondary text-lg max-w-lg">
            Premium document templates with real strategic frameworks.
            Download, customise, and ship.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 text-sm rounded-full border transition-colors duration-200 ${
                activeCategory === cat.value
                  ? "bg-text text-white border-text"
                  : "bg-white text-text-secondary border-border hover:border-text hover:text-text"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bundle banner */}
        <div className="mb-10 p-6 rounded-xl bg-bg-warm border border-border-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-serif text-lg text-text mb-1">
              Get the full collection
            </p>
            <p className="text-sm text-text-secondary">
              All {templates.length} templates in one bundle. Save over 40%.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
            €79
            <span className="text-text-tertiary line-through text-xs">
              €{templates.reduce((sum, t) => sum + t.price, 0)}
            </span>
          </span>
        </div>

        {/* Template grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((template) => (
            <TemplateCard key={template.slug} template={template} />
          ))}
        </div>
      </div>
    </main>
  );
}
