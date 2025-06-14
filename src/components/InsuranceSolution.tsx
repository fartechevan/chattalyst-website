import { ShieldCheck, MessageSquare, Users, LineChart, Send, Target } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-3">
      <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const BenefitItem = ({ title, description }: { title: string, description: string }) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const DetailedFeature = ({ icon, title, description, points }: { icon: React.ReactNode, title: string, description: string, points: string[] }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <div className="flex items-start mb-4">
      <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4 shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);


export const InsuranceSolution = () => {
  const keyBenefits = [
    { title: "Increased Efficiency", description: "Automate routine tasks and free up your agents to focus on complex cases and sales." },
    { title: "Enhanced Customer Satisfaction", description: "Provide instant, 24/7 support and personalized interactions, improving client loyalty." },
    { title: "Higher Conversion Rates", description: "Optimize your sales pipeline and leverage AI for intelligent lead follow-up and engagement." },
    { title: "Data-Driven Decisions", description: "Gain actionable insights from comprehensive dashboards to refine strategies and boost performance." },
  ];

  const detailedFeatures = [
    {
      icon: <MessageSquare size={24} />,
      title: "Relay Policies & AI Insurance Agent",
      description: "Our intelligent AI agent acts as a tireless extension of your team, available around the clock to support your clients and streamline operations.",
      points: [
        "Handles common policy inquiries and FAQs instantly.",
        "Assists with policy understanding and comparisons.",
        "Schedules appointments with human agents seamlessly.",
        "Captures lead information from prospective clients.",
      ],
    },
    {
      icon: <Users size={24} />,
      title: "Mini CRM & Sales Pipeline Management",
      description: "A lightweight yet powerful CRM built to cater specifically to the needs of insurance agencies, helping you nurture leads effectively.",
      points: [
        "Centralized customer interaction history.",
        "Visual sales pipeline to track leads from prospect to close.",
        "Automated reminders for follow-ups.",
        "Segmentation capabilities for targeted communication.",
      ],
    },
    {
      icon: <Send size={24} />,
      title: "Automated Customer Blasting & Intelligent Follow-ups",
      description: "Reach your audience at scale and engage them meaningfully with automated, intent-driven communication strategies.",
      points: [
        "Broadcast important updates, new policy information, or promotional offers.",
        "AI analyzes conversation intent to trigger relevant follow-up sequences.",
        "Personalized messaging based on customer data and history.",
        "Reduce manual effort in outreach and nurturing.",
      ],
    },
    {
      icon: <LineChart size={24} />,
      title: "Result-Oriented Performance Dashboard",
      description: "Get a clear view of your agency's performance with intuitive dashboards that highlight key metrics and areas for growth.",
      points: [
        "Track campaign reach and engagement rates.",
        "Monitor appointment setting success.",
        "Analyze lead conversion and sales performance.",
        "Identify trends and opportunities for optimization.",
      ],
    },
  ];

  const howItWorksSteps = [
    { id: 1, title: "Connect Your Channels", description: "Integrate with your existing communication platforms (website chat, WhatsApp, etc.)." },
    { id: 2, title: "Configure Your AI", description: "Customize the AI agent with your specific policy information, FAQs, and branding." },
    { id: 3, title: "Launch & Automate", description: "Go live and let the AI handle inquiries, manage leads, and automate outreach." },
    { id: 4, title: "Monitor & Optimize", description: "Use the dashboard to track performance and continuously refine your strategies." },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <ShieldCheck className="mx-auto h-12 w-12 text-blue-600 mb-4" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            AI-Powered Solutions for Insurance Agencies
          </h1>
          <p className="mt-4 text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your insurance agency with intelligent automation, enhanced customer engagement, and data-driven insights. Our platform is designed to streamline your operations, boost sales, and deliver exceptional client experiences.
          </p>
        </div>

        {/* Key Benefits Section */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8 md:mb-12">
            Unlock Key Benefits for Your Agency
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyBenefits.map((benefit) => (
              <BenefitItem key={benefit.title} title={benefit.title} description={benefit.description} />
            ))}
          </div>
        </div>

        {/* Detailed Features Section */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8 md:mb-12">
            Comprehensive Features to Empower Your Team
          </h2>
          <div className="space-y-10">
            {detailedFeatures.map((feature) => (
              <DetailedFeature
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                points={feature.points}
              />
            ))}
          </div>
        </div>
        
        {/* How It Works Section */}
        <div className="mb-12 md:mb-20 py-12 bg-white rounded-xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8 md:mb-12">
            Simple Steps to Get Started
          </h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line - pseudo element or SVG can be used for better responsiveness */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2" style={{ zIndex: 0 }}></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative" style={{ zIndex: 1 }}>
              {howItWorksSteps.map((step) => (
                <div key={step.id} className="text-center p-4 bg-white rounded-lg ">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                    {step.id}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center bg-gray-100 p-8 md:p-12 rounded-lg shadow-inner">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Revolutionize Your Insurance Agency?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-xl mx-auto">
            Discover how Chattalyst can help you automate processes, improve client communication, and drive growth. Schedule a personalized demo today!
          </p>
          <a
            href="#contact" // Assuming you have a contact section with this ID
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-10 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 text-lg"
          >
            Request a Free Demo
          </a>
        </div>
      </div>
    </section>
  );
};
