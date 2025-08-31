import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000); // Message disappears after 5 seconds
  };

  return (
    <>
      <Header />
      <section className="py-16 px-4 bg-[#ecf0f1] relative overflow-hidden">
        {submitted && (
          <div className="fixed top-0 left-0 right-0 z-50 bg-green-500 text-white text-center py-3 shadow-lg">
            <strong className="font-bold">Success!</strong> Your message has been sent successfully.
          </div>
        )}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Contact Us
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed text-center">
            We'd love to hear from you! Whether you have a question, a suggestion, or just want to say hello, please don't hesitate to reach out.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1c40f]"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1c40f]"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f1c40f]"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#f1c40f] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#e0b800] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;