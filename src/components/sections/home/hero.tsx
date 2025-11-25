import Button from "../../ui/button";
import { H1, P } from "../../typography";
import { partnerLogos } from "../../../data/home";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-12 lg:flex-row lg:items-center lg:pt-20 lg:px-8"
    >
      <div className="space-y-8 lg:w-3/5">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[3px] text-primary">
          Production ready
        </span>
        <div className="space-y-6">
          <H1 className="text-4xl leading-[1.1] tracking-tight text-dark lg:text-6xl">
            Launch polished marketing sites in a single sprint.
          </H1>
          <P className="max-w-2xl text-dark-300">
            Opinionated sections, accessible components, and batteries-included routing so you can
            ship fast without accruing design or technical debt.
          </P>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button className="bg-primary text-white hover:bg-primary/90">Start a brief</Button>
          <Button
            noDefault
            className="w-full rounded-[8px] border border-dark/10 px-4 py-3 text-dark hover:border-dark lg:w-auto"
          >
            Explore the components
          </Button>
        </div>
        <div className="grid gap-4 rounded-2xl border border-dark/10 bg-white/60 p-6 shadow-sm sm:grid-cols-2">
          <Stat label="Deploys / month" value="400+" />
          <Stat label="Avg. build time" value="12 days" />
        </div>
      </div>

      <div className="lg:w-2/5">
        <div className="rounded-[32px] border border-dark/5 bg-dark text-white shadow-xl">
          <div className="border-b border-white/10 px-8 py-6">
            <p className="text-sm uppercase tracking-[5px] text-white/60">Trusted by teams</p>
            <p className="mt-3 text-2xl font-semibold">Design systems, ready to compose.</p>
          </div>
          <div className="space-y-6 px-8 py-8">
            {partnerLogos.map((logo) => (
              <div
                key={logo.id}
                className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3"
              >
                <div>
                  <p className="text-lg font-semibold">{logo.label}</p>
                  <p className="text-xs uppercase tracking-[4px] text-white/50">{logo.caption}</p>
                </div>
                <span className="text-sm text-white/70">Live</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm font-medium uppercase tracking-[4px] text-dark-300">{label}</p>
      <p className="text-2xl font-semibold text-dark">{value}</p>
    </div>
  );
}

