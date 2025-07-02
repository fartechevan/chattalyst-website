import { Utensils, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  onClick?: () => void; // Add onClick for logging
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description, href, onClick }) => (
  <Link
    to={href}
    onClick={onClick}
    className="block bg-gradient-to-br from-yellowai_primary_purple to-yellowai_dark_purple p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="flex items-center mb-4">
      <div className="bg-yellowai_accent_yellow text-yellowai_dark_purple p-3 rounded-full mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-yellowai_text_light">{title}</h3>
    </div>
    <p className="text-gray-200">{description}</p>
  </Link>
);

export const Solutions = () => {
  const industries = [
    {
      icon: <Utensils size={24} />,
      title: "F&B",
      description: "Innovative solutions for the food and beverage sector",
      href: "/fnb", // Changed to route to /fnb
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Insurance Agency",
      description: "Streamline operations and enhance customer engagement for insurance agencies.",
      href: "/insurance",
    },
  ];

  return (
    <>
      <section id="demo" className="py-16 bg-gradient-to-br from-yellowai_primary_purple to-yellowai_dark_purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Easily get started with a personalized product tour
              </h2>
              <p className="mt-4 text-lg">
                An <u>onboarding specialist</u> is available during the first 90 days to help you get started with confidence –it’s already included with professional and enterprise plans.*
              </p>
              <div className="mt-8">
                <a href="#" className="inline-block bg-yellowai_accent_yellow text-yellowai_dark_purple font-bold py-3 px-6 rounded-lg">
                  Learn more
                </a>
              </div>
            </div>
            <div className="relative" style={{ paddingBottom: "56.25%", height: 0 }}>
              <video
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                controls
                src="https://yrnbbkljrdwoyqjpswtv.supabase.co/storage/v1/object/public/video//chattalyst-demo.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      <section id="solutions" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Solutions By Industry
            </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tailored AI-powered solutions to meet the unique needs of your industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <SolutionCard
              key={industry.title}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              href={industry.href}
              onClick={() => {
                if (industry.title === "F&B") {
                  console.log(`Solutions section F&B card clicked, navigating to: ${industry.href}`);
                } else if (industry.title === "Insurance Agency") {
                  console.log(`Solutions section Insurance Agency card clicked, navigating to: ${industry.href}`);
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};
