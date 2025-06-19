
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Added Input import
import { Play, CheckCircle, MessageSquare, Bot, RefreshCw } from "lucide-react";
import { useState } from "react"; // Added useState import

export const Hero = () => {
  const [isChatting, setIsChatting] = useState(false);
  const [chatMessage, setChatMessage] = useState("");

  const handleChatClick = (message?: string) => {
    setIsChatting(true);
    if (message) {
      setChatMessage(message);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChatMessage(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && chatMessage.trim() !== "") {
      event.preventDefault();
      const whatsappNumber = "60175168607";
      const encodedMessage = encodeURIComponent(chatMessage);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");
      setChatMessage("");
      setIsChatting(false);
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* New UI Section from Image - Start */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-purple-600">Agentic AI</span>
            <br />
            <span className="text-gray-900">with Human-Like Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Pioneering Agentic AI for transformative service automation and human-like customer experiences.
          </p>
          <div className="max-w-2xl mx-auto mb-8">
            <div 
              className="flex items-center bg-white border-2 border-purple-500 rounded-full p-2 shadow-lg cursor-pointer min-h-[60px]" // Adjusted padding and added min-height for consistency
              onClick={!isChatting ? () => handleChatClick() : undefined} // Only allow click if not already chatting, and call without arguments
            >
              <Bot size={28} className="text-purple-600 mx-3 flex-shrink-0" />
              {isChatting ? (
                <Input
                  type="text"
                  value={chatMessage}
                  onChange={handleInputChange}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Type your message and press Enter..."
                  className="text-lg border-none focus:ring-0 focus-visible:ring-offset-0 focus-visible:ring-0 flex-grow bg-transparent shadow-none p-0 h-auto"
                  autoFocus
                />
              ) : (
                <span className="text-gray-600 text-lg">
                  Curious about AA - autonomous automation? Let's chat!
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button 
              className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold rounded-full px-6 py-3 text-base"
              onClick={() => handleChatClick("Book Demo Today")}
            >
              Book Demo Today
            </Button>
            <Button 
              className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold rounded-full px-6 py-3 text-base"
              onClick={() => handleChatClick("Explore Case Studies")}
            >
              Explore Case Studies
            </Button>
            <Button 
              className="bg-purple-100 hover:bg-purple-200 text-purple-700 font-semibold rounded-full px-6 py-3 text-base"
              onClick={() => handleChatClick("Agentic AI Advantage")}
            >
              Agentic AI Advantage
            </Button>
          </div>
        </div>
        {/* New UI Section from Image - End */}
        
        {/* Combined Hero Content - Start */}
        {/* The right side (image/chat mockup) will be part of this grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-12 border-t border-gray-200">
          {/* Left side content - primarily from the original second section, but integrated */}
          <div className="animate-fade-in text-left"> 
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <MessageSquare size={16} className="mr-2" />
              #1 WhatsApp Business Solution for Agentic AI
            </div>
            
            {/* The main H1 and paragraph are now from the new UI section above */}
            {/* We can add a more specific CTA here or benefits */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Leverage our leading Agentic AI to automate customer interactions seamlessly, 
              boost efficiency, and provide an unparalleled human-like experience, 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* This button can be styled to match the new UI's buttons or kept distinct */}
              <a href="https://wa.me/601157774301" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg shadow-lg">
                  Start Your Free Trial Now
                </Button>
              </a>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-700">
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
