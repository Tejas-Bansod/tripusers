import { HeroSection } from "@/app/components/hero-section";
import { QuickDestinations } from "@/app/components/quick-destinations";
import { FeaturedTours } from "@/app/components/featured-tours";
import { RecommendedPackages } from "@/app/components/recommended-packages";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <QuickDestinations />
      <RecommendedPackages />
      <FeaturedTours />
      
      {/* Other sections will go here */}
    </main>
  );
}
