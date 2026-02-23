import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { MarqueeSection } from "@/components/marquee-section";
import { ServicesSection } from "@/components/services-section";
import { CompanySection } from "@/components/company-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import LogoMarquee from "@/components/logomarquee";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <div data-theme="light" className="w-full">
        <MarqueeSection />
        <ServicesSection />
      </div>
      <CompanySection />
      <LogoMarquee />
      <div data-theme="light" className="w-full">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
