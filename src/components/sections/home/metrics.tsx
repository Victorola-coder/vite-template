import { metricHighlights } from "../../../data/home";
import { H2, P } from "../../typography";
import { formatNumber } from "../../../utils/formatNumber";

export default function MetricsSection() {
  return (
    <section id="metrics" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="space-y-4 text-center">
        <H2 className="text-3xl text-dark">Proven with real teams.</H2>
        <P className="max-w-2xl text-dark-300 md:mx-auto">
          Templates stay valuable only when they drive compounding impact. These are the numbers
          customers report after swapping their internal stacks for this setup.
        </P>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metricHighlights.map((metric) => (
          <article
            key={metric.id}
            className="rounded-3xl border border-dark/10 bg-white px-6 py-8 text-center shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[4px] text-dark-300">
              {metric.label}
            </p>
            <p className="mt-3 text-4xl font-semibold text-dark">
              {metric.prefix ?? ""}
              {formatNumber(metric.value)}
              {metric.suffix ?? ""}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

