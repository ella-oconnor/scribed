import type { ServicePackage } from "@/lib/packages";

export default function PackageCard({ pkg }: { pkg: ServicePackage }) {
  return (
    <div
      className={`relative flex flex-col rounded-xl border bg-white p-7 transition-shadow duration-300 hover:shadow-lg ${
        pkg.popular
          ? "border-accent/40 shadow-sm"
          : "border-border"
      }`}
    >
      {/* "Most popular" pill */}
      {pkg.popular && (
        <span className="absolute -top-3 left-6 inline-block rounded-full bg-accent px-3 py-0.5 text-[11px] font-medium uppercase tracking-widest text-white">
          Most popular
        </span>
      )}

      {/* Package name */}
      <h3 className="font-serif text-xl text-text mb-1">{pkg.name}</h3>

      {/* Price */}
      <p className="text-2xl font-semibold text-text mb-3">{pkg.price}</p>

      {/* Description */}
      <p className="text-sm leading-relaxed text-text-secondary mb-5">
        {pkg.description}
      </p>

      {/* Includes list */}
      <ul className="mb-6 space-y-2.5 flex-1">
        {pkg.includes.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-text-secondary"
          >
            <svg
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3.5 8.5L6.5 11.5L12.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Turnaround */}
      <p className="text-xs text-text-tertiary mb-5">
        Turnaround: {pkg.turnaround}
      </p>

      {/* CTA */}
      <a
        href="mailto:hello@scribed.eu"
        className={`block w-full rounded-lg py-2.5 text-center text-sm font-medium transition-colors duration-200 ${
          pkg.popular
            ? "bg-accent text-white hover:bg-accent-hover"
            : "border border-border text-text hover:border-text"
        }`}
      >
        Get started
      </a>
    </div>
  );
}
