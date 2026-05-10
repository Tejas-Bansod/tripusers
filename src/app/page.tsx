import { HeroSection } from "@/app/components/hero-section";
import { QuickDestinations } from "@/app/components/quick-destinations";
import { FeaturedTours } from "@/app/components/featured-tours";
import { RecommendedPackages } from "@/app/components/recommended-packages";
import { CorporateAndMostLoved } from "@/app/components/corporate-most-loved";
import { Testimonials } from "@/app/components/testimonials";
import { PartnerBanner } from "@/app/components/partner-banner";
import { CityPackages } from "@/app/components/city-packages";
import { InclusionsAndAbout } from "@/app/components/inclusions-about";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <QuickDestinations />
      <RecommendedPackages />
      <FeaturedTours />
      <CorporateAndMostLoved />
      <Testimonials />
      <CityPackages />
      <PartnerBanner />
      <InclusionsAndAbout />
      <Footer />
    </main>
  );
}
