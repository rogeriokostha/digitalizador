import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutService from "@/components/landing/AboutService";
import ServicesGrid from "@/components/landing/ServicesGrid";
import Portfolio from "@/components/landing/Portfolio";
import AboutMe from "@/components/landing/AboutMe";
import ContactTabs from "@/components/landing/ContactTabs";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutService />
        <ServicesGrid />
        <Portfolio />
        <AboutMe />
        <ContactTabs />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
