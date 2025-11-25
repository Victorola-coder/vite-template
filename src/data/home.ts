export type PartnerLogo = {
  id: number;
  label: string;
  caption: string;
};

export type FeatureHighlight = {
  id: number;
  title: string;
  description: string;
  badge?: string;
};

export type MetricHighlight = {
  id: number;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
};

export type Testimonial = {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const partnerLogos: PartnerLogo[] = [
  { id: 1, label: "AuraPay", caption: "Fintech" },
  { id: 2, label: "Northwind", caption: "Cloud" },
  { id: 3, label: "Formly", caption: "Productivity" },
  { id: 4, label: "Helix", caption: "AI Lab" },
  { id: 5, label: "Sprout", caption: "Commerce" },
];

export const featureHighlights: FeatureHighlight[] = [
  {
    id: 1,
    badge: "Realtime",
    title: "Live collaboration",
    description:
      "Built in presence signals, cursor following, and conflict-free syncing so teams stay aligned out of the box.",
  },
  {
    id: 2,
    badge: "Automation",
    title: "Composable workflows",
    description:
      "Trigger complex automations with point-and-click rules that stay readable and version controlled.",
  },
  {
    id: 3,
    badge: "Trust",
    title: "Enterprise guardrails",
    description:
      "Granular audit logs, policy enforcement, and SOC2-ready security primitives that scale with you.",
  },
];

export const metricHighlights: MetricHighlight[] = [
  { id: 1, label: "Faster launches", value: 42, suffix: "%" },
  { id: 2, label: "Weekly automations", value: 1200, suffix: "+" },
  { id: 3, label: "Minutes to onboard", value: 15 },
  { id: 4, label: "NPS", value: 71 },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "We replaced six internal dashboards with a single template. Shipping a new experiment is literally an afternoon task now.",
    author: "Mara Sun",
    role: "Head of Ops",
    company: "Northwind",
  },
  {
    id: 2,
    quote:
      "The DX is unreal. Strong typing, predictable layouts, and Tailwind v4 tokens keep our designers and engineers in lockstep.",
    author: "Loïc Dumas",
    role: "Principal Engineer",
    company: "Helix AI",
  },
  {
    id: 3,
    quote:
      "Having SEO, accessibility, and analytics ready from day one means stakeholders stop asking if we're production ready—we are.",
    author: "Rosa Tan",
    role: "Product Lead",
    company: "Sprout Labs",
  },
];

