import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";
import { ArrowRight } from "lucide-react"; // Added ArrowRight import

export const FnbSolution = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    // Apply light gradient similar to Hero section
    <div className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        {/* Section 1: Title - Styled like Hero */}
        <div className="text-center mb-16 pt-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-purple-600">Enhancing F&B with</span>
            <br />
            <span className="text-gray-900">AI Ecosystem</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Leveraging LLM and Vision AI to revolutionize your Food & Beverage operations.
          </p>
        </div>

        {/* Section 2: Why Build Your Own Ecosystem? */}
        <div className="mb-16 p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Build <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your Own Ecosystem?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">The Lesson from Social Media Dependency</h3>
              <p className="text-gray-600 mb-4">
                Many businesses learn the hard way: relying solely on platforms like Facebook, Instagram, TikTok, or Shopee means you don't truly own your customer base. Accounts can be banned, and years of marketing efforts can vanish overnight.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><span className="font-semibold">Platform is the Real Owner:</span> Subscribers belong to the platform, not your business.</li>
                <li><span className="font-semibold">Irrecoverable Losses:</span> Marketing content and subscriber lists can be lost permanently.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">The Solution: Your Own Ecosystem</h3>
              <p className="text-gray-600">
                Use social media to attract new customers, then migrate them to your own platform. Engage them consistently with AI automation to build a loyal following and secure your business's future.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: F&B Pain Points - Styled cards */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            F&B Pain Points: <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">What Keeps You Up?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Adjusted lg:grid-cols-2 to md:grid-cols-2 for 4 items */}
            {[
              { title: "Labor Shortages & Rising Costs", items: ["Difficulty hiring and retaining skilled workers.", "Rising wages and operational costs impacting profitability.", "Staffing gaps affecting service quality and customer satisfaction."] },
              { title: "E-Commerce Competition", items: ["Shift to online delivery (GrabFood, Food Panda) requires new infrastructure.", "Rise of cloud kitchens focusing on delivery.", "High delivery costs from third-party platforms."] },
              { title: "Improving Customer Experience", items: ["High initial investment in digital infrastructure.", "Ensuring customer happiness in outlets.", "Managing expectations for speed, quality, and personalization."] },
              { title: "Labor Management & Compliance", items: ["Ensuring hygiene compliance with SOPs.", "Effectiveness of random auditing.", "Need for automation in AI-powered restaurants."] }
            ].map(point => (
              <div key={point.title} className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{point.title}</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 leading-relaxed">
                  {point.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: AI Automation Solution at Outlet */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            AI Automation <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Solution at Your Outlet</span>
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Utilizing cutting-edge AI Vision technology to enhance efficiency and customer experience.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg"> {/* Changed from bg-gray-100 */}
            <p className="text-gray-700 mb-4 text-lg">
              Our AI Vision solutions are designed to bring intelligent automation directly to your F&B outlets. This technology can be applied to various aspects of your operations, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Monitoring food preparation processes for quality and consistency.</li>
              <li>Ensuring compliance with hygiene standards through automated checks.</li>
              <li>Analyzing customer traffic and dining patterns for better staff allocation.</li>
              <li>Enhancing security and loss prevention.</li>
              <li>Streamlining inventory management by visually tracking stock levels.</li>
            </ul>
            <p className="text-gray-700 text-lg">
              By integrating AI Vision, you can reduce manual oversight, minimize errors, improve operational speed, and gather valuable data to make informed decisions.
            </p>
          </div>
        </div>

        {/* Section 5: Build Your Own Food Delivery */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Build Your Own <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Food Delivery Platform</span>
          </h2>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12 rounded-xl shadow-xl text-white">
            <p className="text-xl mb-6 text-center opacity-90"> {/* Centered text, opacity */}
              Remember the first slide? You don't own the customer on third-party platforms.
            </p>
            <ul className="space-y-4 text-lg"> {/* Increased spacing */}
              {/* Using a checkmark or similar icon could be good here if available, for now strong tags */}
              <li><strong className="font-semibold">Loyal Following:</strong> Build a loyal customer base through constant engagement, new menus, and promotions within your ecosystem.</li>
              <li><strong className="font-semibold">New Followers:</strong> Continuously attract new followers from social media to your owned platform.</li>
              <li><strong className="font-semibold">Direct Orders:</strong> Customers order food directly through your ecosystem, which you control.</li>
              <li><strong className="font-semibold">AI-Powered Orders:</strong> Automate food orders via chat for human-like recommendations and a seamless experience.</li>
            </ul>
          </div>
        </div>

        {/* Section 6: Automation Modules - Styled cards */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Automation Modules: <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Futureproof Your CX</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Pre-Train Model Agent", items: ["Custom Trained AI Model for company products/services", "Model Update and retraining from Portal", "Document upload & Overwriting content", "Human interrupt into conversation anytime"] },
              { title: "Mini CRM", items: ["Upload Contacts from excel", "Track opportunity status", "Record conversation and interest", "Create campaign", "Customer reactivation"] },
              { title: "Flow Creation", items: ["Marketing content sharing", "Selection of leads for appointments", "Scheduling of tasks"] },
              { title: "Appointment Agent", items: ["Initiates appointments with human-like conversation", "Creates Gmail appointments", "Attaches interaction history"] },
              { title: "Sentiment Agent", items: ["Conversation logs", "Conversion rate tracking", "Traffic and sentiment analysis", "Topic monitoring"] }
            ].map((module) => (
              <div key={module.title} className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{module.title}</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm leading-relaxed">
                  {module.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Section 7: Ecosystem Functionalities - Styled cards */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Ecosystem <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Functionalities</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"> {/* Increased gap */}
            {[
              { title: "Customer Acquisition", details: "Attract potential customers via marketing content and engage them with 24/7 Q&A on products/services." },
              { title: "Customer Engagement", details: "Record interaction details and transition leads with human-like appointment making integrated with external calendars." },
              { title: "Customer Transition", details: "Seamlessly move potential customers through your sales funnel, from initial contact to confirmed appointments." },
              { title: "Customer Maintenance", details: "Re-activate existing customers with new product intros, cross-selling, and maintain relationships through your CRM and ecosystem portal." }
            ].map(func => (
              <div key={func.title} className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{func.title}</h3>
                <p className="text-gray-600 leading-relaxed">{func.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Add a CTA section similar to Insurance Page / Homepage CTA */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-xl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Elevate Your F&B Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover how Chattalyst's AI ecosystem can streamline your operations, boost customer loyalty, and drive growth. Get started today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact"> {/* Update link as needed */}
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-md flex items-center justify-center">
                  Request a Demo
                  <ArrowRight size={20} className="ml-2" />
                </button>
              </a>
            </div>
            <p className="text-blue-100 text-sm mt-6">
              Personalized Setup • Ongoing Support • Scalable Solutions
            </p>
          </div>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[1275px]">
            {selectedImage && (
              <img src={selectedImage} alt="Preview" className="w-full object-contain" />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
