import { ShieldCheck, MessageSquare, Users, LineChart, Send, Target, ArrowRight, CheckCircle } from 'lucide-react'; // Added ArrowRight and CheckCircle

// This FeatureCard is not used in the final component, but kept for now if needed elsewhere or as reference.
// If it's confirmed as unused, it can be removed.
const FeatureCard_UNUSED = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
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

// Modified BenefitItem to align with Features.tsx card style
const BenefitItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105">
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const DetailedFeature = ({ icon, title, description, points }: { icon: React.ReactNode, title: string, description: string, points: string[] }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <div className="flex items-start mb-4">
      {/* Modified Icon Styling for DetailedFeature */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full mr-4 shrink-0">
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
    { icon: <LineChart size={24} className="text-white" />, title: "Increased Efficiency", description: "Automate routine tasks and free up your agents to focus on complex cases and sales." },
    { icon: <CheckCircle size={24} className="text-white" />, title: "Enhanced Customer Satisfaction", description: "Provide instant, 24/7 support and personalized interactions, improving client loyalty." },
    { icon: <Target size={24} className="text-white" />, title: "Higher Conversion Rates", description: "Optimize your sales pipeline and leverage AI for intelligent lead follow-up and engagement." },
    { icon: <Users size={24} className="text-white" />, title: "Data-Driven Decisions", description: "Gain actionable insights from comprehensive dashboards to refine strategies and boost performance." },
  ];

  const detailedFeatures = [
    {
      icon: <MessageSquare size={24} className="text-white" />,
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
      icon: <Users size={24} className="text-white" />, // Added text-white for consistency
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
      icon: <Send size={24} className="text-white" />, // Added text-white for consistency
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
      icon: <LineChart size={24} className="text-white" />, // Added text-white for consistency
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
    // Hero/Introduction Section Styling
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <ShieldCheck className="mx-auto h-16 w-16 text-purple-600 mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-purple-600">AI-Powered Solutions</span>
            <br />
            <span className="text-gray-900">for Insurance Agencies</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Transform your insurance agency with intelligent automation, enhanced customer engagement, and data-driven insights. Our platform is designed to streamline your operations, boost sales, and deliver exceptional client experiences.
          </p>
          {/* Optional CTA Buttons for Hero - can be added later if needed */}
        </div>

        {/* Key Benefits Section - Styled like Features.tsx */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Unlock Key Benefits <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">for Your Agency</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit) => (
              <BenefitItem key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} />
            ))}
          </div>
        </div>

        {/* Detailed Features Section - Icons updated */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Comprehensive Features <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">to Empower Your Team</span>
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
        
        {/* How It Works Section - Accents changed to purple */}
        <div className="mb-16 md:mb-24 py-12 bg-white rounded-xl shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Simple Steps to Get Started
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-purple-200 transform -translate-y-1/2" style={{ zIndex: 0 }}></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative" style={{ zIndex: 1 }}>
              {howItWorksSteps.map((step) => (
                <div key={step.id} className="text-center p-4 bg-white rounded-lg ">
                  <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                    {step.id}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Call to Action (CTA) Section - Styled like CTA.tsx */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-xl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Insurance Agency?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover how Chattalyst can help you automate processes, improve client communication, and drive growth. Schedule a personalized demo today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact"> {/* Assuming you have a contact section with this ID or update link */}
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-md flex items-center justify-center">
                  Request a Free Demo
                  <ArrowRight size={20} className="ml-2" />
                </button>
              </a>
            </div>
            <p className="text-blue-100 text-sm mt-6">
              No setup fees • Personalized Demo • Expert Consultation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
