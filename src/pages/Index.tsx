import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Channels } from "@/components/Channels";
import { Solutions } from "@/components/Solutions";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PortalOutlook } from "@/components/PortalOutlook";
import { Contact } from "@/components/Contact";
const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <PortalOutlook />
      <Stats />
      <Features />
      <Channels />
      <Solutions />
      <Testimonials />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
