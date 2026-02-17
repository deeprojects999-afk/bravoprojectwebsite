import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import TrainingSection from '@/components/home/TrainingSection';
import LocationsSection from '@/components/home/LocationsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <IndustriesSection />
      <TrainingSection />
      <LocationsSection />
      <CTASection />
    </div>
  );
}