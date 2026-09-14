import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl md:text-5xl text-text mb-8">
            About Scribed
          </h1>

          <div className="space-y-6 text-text-secondary leading-relaxed">
            <p>
              Scribed exists because most templates are either generic or
              expensive. The free ones look like free ones. The agency ones
              cost thousands and take weeks. There is nothing in between:
              premium quality, strategic thinking, fast turnaround,
              accessible price.
            </p>

            <p>
              From my experience in industry and as a student, I kept
              making documents for other people: pitch decks for founders,
              CVs for friends, sponsorship decks for societies, strategy
              documents for my own projects. People kept asking for more.
              Eventually I realised I was sitting on a library of strategic
              templates that other people would pay for.
            </p>

            <p>
              Every template in the Scribed library is based on a real
              document that was used to secure funding, land a job, win a
              pitch competition, or close a sponsorship deal. They include
              real strategic frameworks and prompts — not &ldquo;insert
              text here&rdquo; placeholders. The design is intentional:
              clean, editorial, premium. The kind of documents that make
              people take you seriously.
            </p>

            <p className="text-text font-medium">
              That is what Scribed is: the documents behind the companies
              that get funded, the graduates who get hired, and the teams
              that ship with confidence.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16">
            <p className="text-text-secondary mb-4">
              Want to work together or have a question?
            </p>
            <Link
              href="mailto:hello@scribed.eu"
              className="text-accent hover:underline"
            >
              hello@scribed.eu
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
