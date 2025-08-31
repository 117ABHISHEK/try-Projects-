import React from "react";

export default function MedicalHistory() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">🩺 Medical History</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-medium">Allergies</label>
          <textarea
            placeholder="Enter any allergies"
            className="w-full border rounded-lg p-2"
          ></textarea>
        </div>
        <div>
          <label className="block font-medium">Past Illnesses</label>
          <textarea
            placeholder="List your past illnesses"
            className="w-full border rounded-lg p-2"
          ></textarea>
        </div>
        <div>
          <label className="block font-medium">Current Medications</label>
          <textarea
            placeholder="List your current medications"
            className="w-full border rounded-lg p-2"
          ></textarea>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
          Save
        </button>
      </form>
    </div>
  );
}
