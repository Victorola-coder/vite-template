import { featureHighlights } from "../../../data/home";
import { H2, P } from "../../typography";

export default function FeatureHighlightsSection() {
  return (
    <section id="solutions" className="bg-main-100">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="space-y-4 text-center lg:text-left">
          <H2 className="text-3xl text-dark">Everything dialed in.</H2>
          <P className="mx-auto max-w-3xl text-dark-300 lg:mx-0">
            Flexible sections that lean on Tailwind utilities, strong typing, and layout primitives
            that keep designers, content editors, and engineers aligned.
          </P>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureHighlights.map((feature) => (
            <article
              key={feature.id}
              className="flex flex-col rounded-3xl border border-dark/10 bg-white p-6 shadow-sm"
            >
              {feature.badge && (
                <span className="mb-4 inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[3px] text-primary">
                  {feature.badge}
                </span>
              )}
              <h3 className="text-2xl font-semibold text-dark">{feature.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-dark-300">
                {feature.description}
              </p>
              <div className="mt-auto pt-6 text-sm font-semibold text-dark">
                <span role="img" aria-hidden className="mr-2">
                  →
                </span>
                Ready to plug & play
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

