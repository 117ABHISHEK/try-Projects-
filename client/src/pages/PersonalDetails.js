import React from "react";

export default function PersonalDetails() {
  return (
    <div className="min-h-screen bg-[#0f1b2b] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-[#34495e] mb-8 text-center">Personal Details</h2>
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5d9cec] focus:border-[#5d9cec] sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              id="age"
              placeholder="Enter your age"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5d9cec] focus:border-[#5d9cec] sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5d9cec] focus:border-[#5d9cec] sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#5d9cec] focus:border-[#5d9cec] sm:text-sm"
            />
          </div>
          <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#2ecc71] hover:bg-[#27ae60] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2ecc71]">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}