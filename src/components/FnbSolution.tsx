export const FnbSolution = () => {
  return (
    // Apply light gradient similar to Hero section
    <div className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        {/* Section 1: Title - Reverted to original color scheme */}
        <div className="text-center mb-16 pt-10">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Enhancing F&B with</span>{' '}
            <span className="block text-blue-600 xl:inline">AI Ecosystem</span> {/* Original blue color */}
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"> {/* Original text colors */}
            Leveraging LLM and Vision AI to revolutionize your Food & Beverage operations.
          </p>
        </div>

        {/* Section 2: Why Build Your Own Ecosystem? - Reverted to light background and original text colors */}
        <div className="mb-16 p-8 bg-white rounded-xl shadow-lg"> {/* Light background, added padding and shadow */}
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-8 text-center">
            Why Build Your Own Ecosystem?
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

        {/* Section 3: F&B Pain Points - Reverted to original card style and text colors */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-8 text-center">
            F&B Pain Points: What Keeps You Up at Night?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow"> {/* Original card style */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Labor Shortages & Rising Costs</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Difficulty hiring and retaining skilled workers.</li>
                <li>Rising wages and operational costs impacting profitability.</li>
                <li>Staffing gaps affecting service quality and customer satisfaction.</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow"> {/* Original card style */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">E-Commerce Competition</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Shift to online delivery (GrabFood, Food Panda) requires new infrastructure.</li>
                <li>Rise of cloud kitchens focusing on delivery.</li>
                <li>High delivery costs from third-party platforms.</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow"> {/* Original card style */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Improving Customer Experience</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>High initial investment in digital infrastructure.</li>
                <li>Ensuring customer happiness in outlets.</li>
                <li>Managing expectations for speed, quality, and personalization.</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow"> {/* Original card style */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Labor Management & Compliance</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Ensuring hygiene compliance with SOPs.</li>
                <li>Effectiveness of random auditing.</li>
                <li>Need for automation in AI-powered restaurants.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: AI Automation Solution at Outlet - Reverted to light background and original text colors */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-8">
            AI Automation Solution at Your Outlet
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Utilizing cutting-edge AI Vision technology to enhance efficiency and customer experience.
          </p>
          <div className="bg-gray-100 p-8 rounded-lg shadow"> {/* Original background and styling */}
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

        {/* Section 5: Build Your Own Food Delivery - Applying stronger gradient */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-8 text-center">
            Build Your Own Food Delivery Platform
          </h2>
          {/* Applying a stronger gradient and ensuring text is light for contrast */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12 rounded-xl shadow-xl text-white"> {/* Stronger gradient, more padding, rounded-xl, shadow-xl, white text */}
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

        {/* Section 6: Automation Modules - Reverted to original card style and text colors */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-12 text-center">
            Automation Modules: Futureproof Your Customer Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Pre-Train Model Agent", items: ["Custom Trained AI Model for company products/services", "Model Update and retraining from Portal", "Document upload & Overwriting content", "Human interrupt into conversation anytime"] },
              { title: "Mini CRM", items: ["Upload Contacts from excel", "Track opportunity status", "Record conversation and interest", "Create campaign", "Customer reactivation"] },
              { title: "Flow Creation", items: ["Marketing content sharing", "Selection of leads for appointments", "Scheduling of tasks"] },
              { title: "Appointment Agent", items: ["Initiates appointments with human-like conversation", "Creates Gmail appointments", "Attaches interaction history"] },
              { title: "Sentiment Agent", items: ["Detects conversation health", "Tags high potential leads", "Detects urgent requests"] },
              { title: "Analytics & Reporting", items: ["Conversation logs", "Conversion rate tracking", "Traffic and sentiment analysis", "Topic monitoring"] }
            ].map((module) => (
              <div key={module.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"> {/* Original card style */}
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{module.title}</h3> {/* Original text color */}
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                  {module.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Section 7: Ecosystem Functionalities - Reverted to original card style and text colors */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-8 text-center">
            Ecosystem Functionalities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { title: "Customer Acquisition", details: "Attract potential customers via marketing content and engage them with 24/7 Q&A on products/services." },
              { title: "Customer Engagement", details: "Record interaction details and transition leads with human-like appointment making integrated with external calendars." },
              { title: "Customer Transition", details: "Seamlessly move potential customers through your sales funnel, from initial contact to confirmed appointments." },
              { title: "Customer Maintenance", details: "Re-activate existing customers with new product intros, cross-selling, and maintain relationships through your CRM and ecosystem portal." }
            ].map(func => (
              <div key={func.title} className="bg-gray-50 p-6 rounded-lg shadow"> {/* Original card style */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{func.title}</h3>
                <p className="text-sm text-gray-600">{func.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 8: Portal Outlook - Reverted to original card style and text colors */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-8 text-center">
            Portal Outlook
          </h2>
          <p className="text-center text-gray-600 mb-8">
            A glimpse into the powerful tools at your disposal.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Main Page", description: "A central hub for accessing all features and an overview of your ecosystem's performance." },
              { name: "Chat Module", description: "Engage with customers in real-time, automate responses, and manage conversations efficiently." },
              { name: "Broadcasting Module", description: "Send targeted marketing messages, promotions, and updates to your customer segments." },
              { name: "Mini CRM", description: "Manage customer data, track interactions, and build detailed profiles for personalized engagement." },
              { name: "AI Model Management", description: "Train, update, and manage your custom AI models to ensure they align with your business needs." },
              { name: "Engagement Records", description: "Keep a comprehensive log of all customer interactions and engagement activities." },
              { name: "Sentiment Statistic", description: "Analyze customer sentiment from conversations to identify trends and areas for improvement." },
              { name: "Administration and Setting", description: "Configure your ecosystem, manage user access, and customize settings to fit your workflow." },
              { name: "Dashboard and Analytics", description: "Visualize key metrics, track performance, and gain actionable insights from your data." }
            ].map(item => (
              <div key={item.name} className="bg-white p-6 rounded-lg shadow-lg flex flex-col"> {/* Original card style */}
                <div className="h-32 bg-gray-200 rounded-md flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <h4 className="font-semibold text-gray-800 text-lg mb-2">{item.name}</h4> {/* Original text color */}
                <p className="text-sm text-gray-600 flex-grow">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
