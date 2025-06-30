import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { FnbSolution } from "@/components/FnbSolution";
import { Helmet } from "react-helmet-async";

const FnbPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Solutions for F&B | AI Chatbot for Restaurants</title>
      </Helmet>
      <Navigation />
      <FnbSolution />
      <Footer />
    </div>
  );
};

export default FnbPage;
