import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="font-serif text-5xl text-text mb-4">404</h1>
      <p className="text-text-secondary mb-8">
        This page does not exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-7 py-3.5 bg-text text-white text-sm font-medium rounded-lg hover:bg-accent transition-colors duration-200"
      >
        Back to home
      </Link>
    </main>
  );
}
