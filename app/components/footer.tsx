import Link from "next/link";

const links = [
  { href: "/templates", label: "Templates" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "mailto:hello@scribed.eu", label: "hello@scribed.eu" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto max-w-[1200px] px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-text-tertiary">© 2026 Scribed</p>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-text-tertiary hover:text-text-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
