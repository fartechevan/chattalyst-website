import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { FnbSolution } from "@/components/FnbSolution"; // This component will be created next

const FnbPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FnbSolution />
      <Footer />
    </div>
  );
};

export default FnbPage;
