import { footerCompany, footerResources, contactEmail } from "../../data/navigation";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-dark/10 bg-main-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-4 lg:px-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-dark-300">
            Victor Template
          </p>
          <p className="text-base text-dark-300">
            Opinionated building blocks for shipping polished product marketing sites in hours.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[2px] text-dark">Company</p>
          <ul className="mt-4 space-y-2 text-dark-300">
            {footerCompany.map((link) => (
              <li key={link.label}>
                <a
                  className="transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[2px] text-dark">Resources</p>
          <ul className="mt-4 space-y-2 text-dark-300">
            {footerResources.map((link) => (
              <li key={link.label}>
                <a
                  className="transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 rounded-2xl border border-dark/10 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[2px] text-dark">Get in touch</p>
          <p className="text-sm text-dark-300">
            Need something specific? Reach out and we can tailor the template to your stack.
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="text-base font-medium text-dark underline decoration-primary/40 decoration-2 underline-offset-4"
          >
            {contactEmail}
          </a>
        </div>
      </div>
      <div className="border-t border-dark/10 bg-white px-6 py-4 text-center text-sm text-dark-300 lg:px-8">
        © {currentYear} Victor Template. Built with Vite, React Router, Tailwind v4, and TypeScript.
      </div>
    </footer>
  );
}

