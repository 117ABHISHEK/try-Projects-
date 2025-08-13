import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Footer from '../components/Footer';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="Welcome">
      <Header />
      <section id="home"><Hero /></section>
      <section id="services"><Features /></section>
      <section id="about"><About /></section>
      
      {/* Get Started Section */}
      <section className="bg-deep-red py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join our community of donors and patients working together to fight Thalassemia. 
            Every action counts towards saving lives.
          </p>
          <button
            onClick={() => navigate('/role-selection')}
            className="bg-white text-deep-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Welcome;
