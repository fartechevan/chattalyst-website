import { Utensils } from "lucide-react";

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description, href }) => (
  <a href={href} className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-4">
      <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </a>
);

export const Solutions = () => {
  const industries = [
    {
      icon: <Utensils size={24} />,
      title: "F&B",
      description: "Innovative solutions for the food and beverage sector",
      href: "#solutions-fnb",
    },
  ];

  return (
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};
