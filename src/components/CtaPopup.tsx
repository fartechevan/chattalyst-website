import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

interface CtaPopupProps {
  show: boolean;
  onClose: () => void;
}

export const CtaPopup = ({ show, onClose }: CtaPopupProps) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200"
        >
          <X size={24} />
        </button>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your WhatsApp Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of businesses already using Chattalyst to automate their customer communication 
            and boost their sales. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Free Consultation
              <ArrowRight size={20} className="ml-2" />
            </WhatsAppButton>
          </div>
          <p className="text-blue-100 text-sm mt-6">
            No setup fees • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};
