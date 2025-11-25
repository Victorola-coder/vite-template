import { testimonials } from "../../../data/home";
import { H2, P } from "../../typography";

export default function TestimonialsSection() {
  return (
    <section id="stories" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="space-y-4 text-center lg:text-left">
          <H2 className="text-3xl text-dark">Real teams, real momentum.</H2>
          <P className="max-w-3xl text-dark-300">
            Feedback from product orgs who replaced bespoke landing builds with this template and
            never looked back.
          </P>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.id}
              className="flex h-full flex-col rounded-3xl border border-dark/10 bg-main-100 p-6 text-left shadow-sm"
            >
              <p className="text-lg leading-relaxed text-dark">“{testimonial.quote}”</p>
              <footer className="mt-6">
                <p className="text-base font-semibold text-dark">{testimonial.author}</p>
                <p className="text-sm text-dark-300">
                  {testimonial.role} · {testimonial.company}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

