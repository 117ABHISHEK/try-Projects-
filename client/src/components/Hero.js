import React from 'react';

const Hero = () => {
  return (
    <section className="bg-body-light-grey py-16 px-4 flex items-center justify-center min-h-screen">
      <div className="text-center max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-grey mb-8 animate-fade-in-up">
          🩸 What is Thalassemia?
        </h1>
        
        {/* Paragraph */}
        <p className="text-lg md:text-xl text-charcoal-grey max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Thalassemia is a genetic blood disorder where the body makes an abnormal form of hemoglobin — the protein in red blood cells that carries oxygen. Because of this, people with Thalassemia have fewer healthy red blood cells, leading to anemia (low blood count), weakness, and fatigue.
        </p>
        
        {/* Image */}
        <div className="flex justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="max-w-md w-full">
            <img
              src="/ThalaAI_images/Questions-amico.png"
              alt="Thalassemia illustration"
              className="w-full h-auto max-w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
