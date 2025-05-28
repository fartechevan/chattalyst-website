import React from 'react';

const channels = [
  {
    name: 'WhatsApp Web',
    description: 'Access your WhatsApp chats directly from your computer\'s web browser. Convenient and easy to use for desktop users.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp Business',
    description: 'A dedicated app for small business owners to connect with their customers, showcase products, and automate messages.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-12 h-12 text-green-500">
        <circle cx="12" cy="12" r="11" fill="currentColor" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">B</text>
      </svg>
    ),
  },
  {
    name: 'WhatsApp API',
    description: 'For medium and large businesses to integrate WhatsApp messaging with their existing tools and workflows, enabling programmatic communication at scale.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
];

export const Channels: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-slate-100 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Supported WhatsApp Channels
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We support a variety of WhatsApp platforms to suit your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3 sm:mt-16">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900">{channel.name}</h3>
                <p className="mt-3 text-base text-center text-gray-600 flex-grow">{channel.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
