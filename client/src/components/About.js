import React from 'react';

const About = () => {
  return (
    <section className="py-16 px-4 bg-body-light-grey">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/ThalaAI_images/Hospital bed-pana.png"
                  alt="ThalaAI team working together"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal-grey mb-6">
              About ThalaAI
            </h2>
            <p className="text-lg text-charcoal-grey mb-6 leading-relaxed">
              ThalaAI is a comprehensive platform dedicated to supporting individuals affected by Thalassemia. 
              We connect patients with donors, provide educational resources, and offer AI-powered assistance 
              to make the journey easier for everyone involved.
            </p>
            <p className="text-lg text-charcoal-grey mb-8 leading-relaxed">
              Our mission is to create a supportive community where patients can find the care they need 
              and donors can make a meaningful difference in someone's life. Together, we're fighting 
              Thalassemia one step at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-deep-red mb-2">1000+</div>
                <div className="text-charcoal-grey">Patients Helped</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-serenity-blue mb-2">500+</div>
                <div className="text-charcoal-grey">Active Donors</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-sage-green mb-2">50+</div>
                <div className="text-charcoal-grey">Partner Hospitals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
