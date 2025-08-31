import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Blood Donor",
      description: "Connect with blood donors in your area and find compatible donors for Thalassemia patients.",
      image: "/ThalaAI_images/Blood donation-rafiki.png"
    },
    {
      id: 2,
      title: "Chat Bot",
      description: "Get instant answers to your questions about Thalassemia from our AI-powered chatbot.",
      image: "/ThalaAI_images/Chat bot-pana.png"
    },
    {
      id: 3,
      title: "Hospital Finder",
      description: "Find specialized hospitals and treatment centers for Thalassemia care near you.",
      image: "/ThalaAI_images/Hospital building-bro.png"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-grey mb-4">
            Our Services
          </h2>
          <p className="text-lg text-charcoal-grey max-w-2xl mx-auto">
            Comprehensive support for Thalassemia patients and donors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 0.1}s`,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(52, 73, 94, 0.4), 0 0 0 1px rgba(52, 73, 94, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
              }}
            >
              {/* Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-32 h-32 object-contain"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-charcoal-grey mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-charcoal-grey leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
