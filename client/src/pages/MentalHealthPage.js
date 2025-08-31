import React from "react";

const MedicalHistoryPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Medical History</h1>
      <p className="text-gray-600">
        Here you can view and manage your medical history records.
      </p>

      {/* Example Table */}
      <div className="mt-6 bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Diagnosis
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prescription
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Doctor
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">12 Jan 2025</td>
              <td className="px-6 py-4 whitespace-nowrap">Thalassemia Checkup</td>
              <td className="px-6 py-4 whitespace-nowrap">Folic Acid, Vitamin D</td>
              <td className="px-6 py-4 whitespace-nowrap">Dr. Sharma</td>
            </tr>
            {/* Add more rows dynamically */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedicalHistoryPage;
