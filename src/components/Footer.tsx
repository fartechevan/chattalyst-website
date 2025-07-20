import { Facebook, Linkedin } from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing"],
    Solutions: ["F&B", "Insurance"],
    Company: ["About", "Blog", "Contact", "Testimonials"],
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Chattalyst
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Pioneering Agentic AI to automate sales and customer service with a human-like experience.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61577637883935" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/company/chattalyst/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={
                        link === "Pricing"
                          ? "#pricing"
                          : link === "Features"
                          ? "#features"
                          : link === "Contact"
                          ? "#contact"
                          : link === "About"
                          ? "#about"
                          : link === "F&B"
                          ? "/fnb"
                          : link === "Insurance"
                          ? "/insurance"
                          : link === "Testimonials"
                          ? "#testimonials"
                          : "#"
                      }
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Chattalyst. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
