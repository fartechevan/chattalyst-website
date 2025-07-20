import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FnbPage from "./pages/FnbPage"; // Import the new F&B page
import InsurancePage from "./pages/InsurancePage"; // Import the new Insurance page
import { CtaPopup } from "./components/CtaPopup";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const solutionsSection = document.getElementById("solutions-section");
      if (solutionsSection) {
        const rect = solutionsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setShowPopup(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/fnb" element={<FnbPage />} /> {/* Add route for F&B page */}
            <Route path="/insurance" element={<InsurancePage />} /> {/* Add route for Insurance page */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <CtaPopup show={showPopup} onClose={() => setShowPopup(false)} />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
