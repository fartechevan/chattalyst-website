
import { MessageSquare, Zap, BarChart3, Users, Clock, Shield } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Smart Automation",
      description: "AI-powered chatbots that understand context and provide personalized responses to your customers."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant message delivery and real-time synchronization across all your communication channels."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights and reporting to track performance and optimize your communication strategy."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless team management with role-based access and collaborative inbox features."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock automated responses ensure you never miss a customer inquiry."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance with global standards."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features to Automate Sales with an
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Chatbot</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to automate, scale, and optimize your WhatsApp business communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 hover-scale"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
