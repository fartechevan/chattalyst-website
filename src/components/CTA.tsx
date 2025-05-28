
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your WhatsApp Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Join thousands of businesses already using Chattalyst to automate their customer communication 
          and boost their sales. Start your free trial today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
            Start Free Trial
            <ArrowRight size={20} className="ml-2" />
          </Button>
          <Button size="lg" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
            Schedule Demo
          </Button>
        </div>
        <p className="text-blue-100 text-sm mt-6">
          No setup fees • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};
