import { SEO } from "../components/global";
import {
  HeroSection,
  FeatureHighlightsSection,
  MetricsSection,
  TestimonialsSection,
  ContactSection,
} from "../components/sections/home";
import Faqs from "../components/ui/faqs";
import { SEOdata } from "../constants/seo";

export default function Home() {
  return (
    <>
      <SEO {...SEOdata.homePage} />
      <main className="space-y-8 bg-white pb-20">
        <HeroSection />
        <FeatureHighlightsSection />
        <MetricsSection />
        <TestimonialsSection />
        <Faqs />
        <ContactSection />
      </main>
    </>
  );
}
