
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import PortfolioSection from "@/components/landing/PortfolioSection";
import AboutSection from "@/components/landing/AboutSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ContactSection from "@/components/landing/ContactSection";
import FooterSection from "@/components/landing/FooterSection";
import AppLink from "@/components/landing/AppLink";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Portfolio Section */}
      <PortfolioSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Contact */}
      <ContactSection />
      
      {/* Footer */}
      <FooterSection />

      {/* App Navigation Link */}
      <AppLink />
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;
