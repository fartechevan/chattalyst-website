
import { Button } from "@/components/ui/button";
import { Play, CheckCircle, MessageSquare } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <MessageSquare size={16} className="mr-2" />
              #1 WhatsApp Business Solution
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Automate Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> WhatsApp </span>
              Business
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your customer communication with AI-powered WhatsApp automation. 
              Increase sales, reduce response time, and scale your business effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 px-8 py-4 text-lg">
                <Play size={20} className="mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                No setup fees
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>

          <div className="lg:pl-8 animate-fade-in">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-100 rounded-lg p-3 ml-8">
                      <p className="text-sm text-blue-800">Hi! How can I help you today?</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 mr-8">
                      <p className="text-sm text-gray-800">I need information about your products</p>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-3 ml-8">
                      <p className="text-sm text-blue-800">I'd be happy to help! Here are our latest offerings...</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                <MessageSquare size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
