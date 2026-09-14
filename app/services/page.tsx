import { packages } from "@/lib/packages";
import PackageCard from "../components/package-card";

export default function ServicesPage() {
  return (
    <main>
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-text mb-4">
            Custom work
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Fixed-price packages with clear deliverables and fast turnaround.
            No scoping calls, no surprises. You see the price, you see
            what you get.
          </p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>

        {/* FAQ / extra info */}
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl text-text mb-8">
            How it works
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-medium text-text mb-1">
                1. Choose a package
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Pick the package that fits your needs. Each one has a clear
                list of deliverables and a fixed price.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-text mb-1">
                2. Send me a brief
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Fill in the inquiry form with a short description of what
                you need. I will reply within 24 hours with any
                clarifying questions.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-text mb-1">
                3. Receive your documents
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                I deliver within the stated turnaround time. You get
                revisions included in the package to make sure it is
                exactly right.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
