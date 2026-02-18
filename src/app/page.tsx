import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoSlider from "@/components/LogoSlider";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LogoSlider />
      <ServicesSection />
      <StatsSection />
    </main>
  );
}
