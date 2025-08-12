import React from 'react';

const Campaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: "Blood Donation Drive",
      description: "Help us organize blood donation camps for Thalassemia patients across the country.",
      image: "/campaign1.jpg",
      target: 50000,
      raised: 35000,
      progress: 70
    },
    {
      id: 2,
      title: "Medical Equipment Fund",
      description: "Support the purchase of advanced medical equipment for Thalassemia treatment centers.",
      image: "/campaign2.jpg",
      target: 100000,
      raised: 75000,
      progress: 75
    },
    {
      id: 3,
      title: "Patient Support Program",
      description: "Provide financial assistance to families struggling with Thalassemia treatment costs.",
      image: "/campaign3.jpg",
      target: 75000,
      raised: 45000,
      progress: 60
    },
    {
      id: 4,
      title: "Research & Development",
      description: "Fund research initiatives to find better treatments and potential cures for Thalassemia.",
      image: "/campaign4.jpg",
      target: 200000,
      raised: 120000,
      progress: 60
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-body-light-grey">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal-grey mb-4">
            Donation Campaigns
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Support our ongoing campaigns and make a real difference in the lives of Thalassemia patients
          </p>
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {campaigns.map((campaign, index) => (
            <div 
              key={campaign.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Campaign Image */}
              <div className="h-48 bg-gradient-to-br from-deep-red to-serenity-blue relative">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Campaign Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal-grey mb-3">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {campaign.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{campaign.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-deep-red h-2 rounded-full transition-all duration-500"
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Amount Raised */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Raised</p>
                    <p className="text-lg font-semibold text-charcoal-grey">
                      ₹{campaign.raised.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Target</p>
                    <p className="text-lg font-semibold text-charcoal-grey">
                      ₹{campaign.target.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Donate Button */}
                <button className="w-full bg-sage-green text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg">
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Campaigns Button */}
        <div className="text-center mt-12">
          <button className="bg-deep-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg">
            View All Campaigns
          </button>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
