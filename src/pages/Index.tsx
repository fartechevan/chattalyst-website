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
import { PortalOutlook } from "@/components/PortalOutlook"; // Import the PortalOutlook component

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <PortalOutlook /> {/* Render the PortalOutlook component here */}
      <Stats />
      <Features />
      <Channels />
      <Solutions />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
