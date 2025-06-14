import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { InsuranceSolution } from "@/components/InsuranceSolution";

const InsurancePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <InsuranceSolution />
      <Footer />
    </div>
  );
};

export default InsurancePage;
