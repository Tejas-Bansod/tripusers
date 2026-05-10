import { HeroSection } from "@/app/components/hero-section";
import { QuickDestinations } from "@/app/components/quick-destinations";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <QuickDestinations />
      {/* Other sections will go here */}
    </main>
  );
}
