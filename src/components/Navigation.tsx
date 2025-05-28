
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logoUrl from "../../assets/chattalyst-logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src={logoUrl} alt="Chattalyst Logo" className="h-16 w-auto" />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://app.chattalyst.com/dashboard" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-gray-700">
                Login
              </Button>
            </a>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Start Free Trial
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#features" className="block px-3 py-2 text-gray-700">Features</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700">Pricing</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700">Testimonials</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700">Contact</a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <a href="https://app.chattalyst.com/dashboard" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button variant="ghost" className="w-full mb-2">Login</Button>
                </a>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
