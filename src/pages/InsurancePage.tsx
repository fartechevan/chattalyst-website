import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { InsuranceSolution } from "@/components/InsuranceSolution";
import { Helmet } from "react-helmet-async";

const InsurancePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Chatbot for Insurance Agents | Automate Your Agency</title>
      </Helmet>
      <Navigation />
      <InsuranceSolution />
      <Footer />
    </div>
  );
};

export default InsurancePage;
