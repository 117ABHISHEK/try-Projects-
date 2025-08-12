import React from 'react';

const About = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/ThalaAI_images/Hospital bed-pana.png" 
                  alt="ThalaAI team working together" 
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-soft-gold rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-sage-green rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal-grey">
                About ThalaAI
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                ThalaAI is a comprehensive platform dedicated to supporting individuals and families affected by Thalassemia. 
                We believe that no one should face this genetic blood disorder alone.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to provide accessible healthcare resources, connect patients with donors, 
                and raise awareness about Thalassemia through innovative technology and community support.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-deep-red">10K+</div>
                  <div className="text-sm text-gray-600">Patients Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-serenity-blue">50+</div>
                  <div className="text-sm text-gray-600">Partner Hospitals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sage-green">₹2M+</div>
                  <div className="text-sm text-gray-600">Funds Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-soft-gold">1000+</div>
                  <div className="text-sm text-gray-600">Blood Donors</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button className="bg-deep-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg mr-4">
                  Learn More
                </button>
                <button className="border-2 border-deep-red text-deep-red px-8 py-3 rounded-lg font-semibold hover:bg-deep-red hover:text-white transition-all duration-300">
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
