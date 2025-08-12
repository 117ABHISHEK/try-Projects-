import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>
      
      {/* Features Section */}
      <section id="services">
        <Features />
      </section>
      
      {/* About Section */}
      <section id="about">
        <About />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
