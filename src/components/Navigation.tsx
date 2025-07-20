
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import Link, useLocation, and useNavigate
import logoUrl from "../../assets/chattalyst-logo.png";
import { WhatsAppButton } from "./WhatsAppButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Assuming this is the correct path

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: "Features", hrefBase: "#features" },
    { name: "Pricing", hrefBase: "#pricing" },
    // Solutions dropdown is handled separately
    { name: "Testimonials", hrefBase: "#testimonials" },
    { name: "Contact", hrefBase: "#contact" },
  ];

  const industrySolutions = [
    { name: "F&B", href: "/fnb" }, // Updated href to point to the new page
    { name: "Insurance Agency", href: "/insurance" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/"> {/* Wrap logo with Link to homepage */}
                <img src={logoUrl} alt="Chattalyst - AI Chatbot for Sales Automation" className="h-16 w-auto" />
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={isHomePage ? link.hrefBase : `/${link.hrefBase}`} 
                  className="text-gray-700 hover:text-blue-600 transition-colors" // Reverted hover color
                >
                  {link.name}
                </a>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"> {/* Reverted hover color */}
                    Solutions
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-white shadow-lg rounded-md mt-2 py-1 w-56">
                  {industrySolutions.map((solution) => (
                    <DropdownMenuItem
                      key={solution.name}
                      onSelect={() => {
                        console.log(`${solution.name} DropdownMenuItem selected, attempting to navigate to: ${solution.href}`);
                        navigate(solution.href);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer"
                    >
                      {solution.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://app.chattalyst.com/dashboard" target="_blank" rel="noopener noreferrer" data-tracking-id="cta-nav-login">
              <Button variant="ghost" className="text-gray-700">
                Login
              </Button>
            </a>
            <WhatsAppButton
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              data-tracking-id="cta-nav-start-free-trial"
            >
              Start Free Trial
            </WhatsAppButton>
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
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={isHomePage ? link.hrefBase : `/${link.hrefBase}`} 
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600" /* Reverted hover color */
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div>
                <button
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:text-blue-600" /* Reverted hover color */
                >
                  Solutions
                  <ChevronDown size={16} className={`transform transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {solutionsOpen && (
                  <div className="pl-4">
                    {industrySolutions.map((solution) => (
                       <Link // Use Link for mobile solutions too
                        key={solution.name}
                        to={solution.href}
                        className="block px-3 py-2 text-gray-600 hover:text-blue-600" /* Reverted hover color */
                        onClick={() => setIsOpen(false)}
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <a href="https://app.chattalyst.com/dashboard" target="_blank" rel="noopener noreferrer" className="block w-full" data-tracking-id="cta-mobile-nav-login">
                  <Button variant="ghost" className="w-full mb-2">Login</Button>
                </a>
                <WhatsAppButton
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                  data-tracking-id="cta-mobile-nav-start-free-trial"
                >
                  Start Free Trial
                </WhatsAppButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
