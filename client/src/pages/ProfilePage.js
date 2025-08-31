import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Chatbot from "../components/Chatbot";
import DonorPersonalDetails from "./DonorPersonalDetails";
import PatientPersonalDetails from "./PatientPersonalDetails";
import { FaUser, FaHeartbeat, FaHistory, FaComments, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';
const ProfilePage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [activeSection, setActiveSection] = useState("personal-details");
  const [userName, setUserName] = useState("User Name");
  const [userRole, setUserRole] = useState("");
  const [profileImage, setProfileImage] = useState("/public/placeholder-user.jpg");

  // Personal Details State
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  });

  // Medical History State
  const [medicalHistory, setMedicalHistory] = useState({
    allergies: "",
    illnesses: "",
    medications: "",
    documents: [],
  });

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUserName(loggedInUser.name);
      setUserRole(loggedInUser.role);
    }

    // Load saved data from localStorage
    const savedPersonal = JSON.parse(localStorage.getItem("personalDetails"));
    const savedMedical = JSON.parse(localStorage.getItem("medicalHistory"));

    if (savedPersonal) setPersonalDetails(savedPersonal);
    if (savedMedical) setMedicalHistory(savedMedical);
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/welcome");
  };

  // Save functions
  const savePersonalDetails = () => {
    localStorage.setItem("personalDetails", JSON.stringify(personalDetails));
    alert("✅ Personal details saved!");
  };

  const saveMedicalHistory = () => {
    localStorage.setItem("medicalHistory", JSON.stringify(medicalHistory));
    alert("✅ Medical history saved!");
  };

  const handleDocumentUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      if (medicalHistory.documents.length < 3) {
        const newDocument = e.target.files[0];
        setMedicalHistory((prev) => ({
          ...prev,
          documents: [...prev.documents, newDocument],
        }));
      } else {
        alert("You can upload a maximum of 3 documents.");
      }
    }
  };

  const handleRemoveDocument = (index) => {
    setMedicalHistory((prev) => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index),
    }));
  };

  // File Upload (removed unused handleFileUpload)

  const renderContent = () => {
    // Donor-specific content
    if (userRole === "donor") {
      switch (activeSection) {
        case "personal-details":
          return <DonorPersonalDetails />;
        case "medical-history":
          return (
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">🩺 Donor Medical History</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="allergies" className="block text-sm font-medium text-gray-700">Allergies</label>
                  <textarea id="allergies" name="allergies" value={medicalHistory.allergies} onChange={(e) => setMedicalHistory({...medicalHistory, allergies: e.target.value})} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="illnesses" className="block text-sm font-medium text-gray-700">Illnesses</label>
                  <textarea id="illnesses" name="illnesses" value={medicalHistory.illnesses} onChange={(e) => setMedicalHistory({...medicalHistory, illnesses: e.target.value})} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="medications" className="block text-sm font-medium text-gray-700">Medications</label>
                  <textarea id="medications" name="medications" value={medicalHistory.medications} onChange={(e) => setMedicalHistory({...medicalHistory, medications: e.target.value})} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block font-medium">Upload Documents (up to 3)</label>
                  <input type="file" onChange={handleDocumentUpload} className="w-full border rounded-lg p-2" />
                  <div className="mt-2 space-y-2">
                    {medicalHistory.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
                        <span>{doc.name}</span>
                        <button type="button" onClick={() => handleRemoveDocument(index)} className="text-red-500 hover:text-red-700">Remove</button>
                      </div>
                    ))}
                  </div>
                </div>
                <button type="button" onClick={saveMedicalHistory} className="bg-green-600 text-white px-4 py-2 rounded-lg">Save</button>
              </form>
            </div>
          );
        case "health-tracking":
          return <div className="text-[#f1c40f]">🩸 Donor Health Tracking Content</div>;
        case "chat":
          return <div className="w-full h-full text-[#f1c40f]"><Chatbot /></div>;
        case "settings":
          return <div className="text-[#f1c40f]">⚙️ Settings Coming Soon...</div>;
        default:
          return <div className="text-[#f1c40f]">Donor Personal Details Content</div>;
      }
    }
    // Patient-specific content
    if (userRole === "patient") {
      switch (activeSection) {
        case "personal-details":
          return <PatientPersonalDetails />;
        case "medical-history":
          return (
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">🩺 Patient Medical History</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="allergies" className="block text-sm font-medium text-gray-700">Allergies</label>
                  <textarea id="allergies" name="allergies" value={medicalHistory.allergies} onChange={(e) => setMedicalHistory({...medicalHistory, allergies: e.target.value})} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="illnesses" className="block text-sm font-medium text-gray-700">Illnesses</label>
                  <textarea id="illnesses" name="illnesses" value={medicalHistory.illnesses} onChange={(e) => setMedicalHistory({...medicalHistory, illnesses: e.target.value})} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="medications" className="block text-sm font-medium text-gray-700">Medications</label>
                  <textarea id="medications" name="medications" value={medicalHistory.medications} onChange={(e) => setMedicalHistory({...medicalHistory, medications: e.target.value})} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block font-medium">Upload Documents (up to 3)</label>
                  <input type="file" onChange={handleDocumentUpload} className="w-full border rounded-lg p-2" />
                  <div className="mt-2 space-y-2">
                    {medicalHistory.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded-lg">
                        <span>{doc.name}</span>
                        <button type="button" onClick={() => handleRemoveDocument(index)} className="text-red-500 hover:text-red-700">Remove</button>
                      </div>
                    ))}
                  </div>
                </div>
                <button type="button" onClick={saveMedicalHistory} className="bg-green-600 text-white px-4 py-2 rounded-lg">Save</button>
              </form>
            </div>
          );
        case "health-tracking":
          return <div className="text-[#f1c40f]">🧑‍⚕️ Patient Health Tracking Content</div>;
        case "chat":
          return <div className="w-full h-full text-[#f1c40f]"><Chatbot /></div>;
        case "settings":
          return <div className="text-[#f1c40f]">⚙️ Settings Coming Soon...</div>;
                default:
          return <div className="text-[#f1c40f]">Patient Personal Details Content</div>;
      }
    }
    // Default fallback
    switch (activeSection) {
              case "personal-details":
        return <div className="bg-white shadow rounded-lg p-6 text-[#f1c40f]">👤 Personal Details</div>;
      default:
        return <div>Personal Details Content</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-[#0f1b2b] shadow-md flex flex-col relative">
        <button
          onClick={() => navigate("/home")}
          className="absolute top-4 left-4 text-gray-300 hover:text-white text-2xl"
        >
          &times;
        </button>
        <div className="p-4">
          <div
            className="flex flex-col items-center"
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4 cursor-pointer"
              onClick={() => fileInputRef.current.click()}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              ref={fileInputRef}
            />
            <h2 className="text-xl font-bold text-white mt-4">{userName}</h2>
            <p className="text-gray-300">{userRole}</p>
          </div>
          <nav className="mt-8">
            <ul>
              {userRole === "donor" && (
                <>
                  <li>
                    <button onClick={() => setActiveSection("personal-details")} className={`w-full flex items-center text-white text-left px-4 py-2 rounded-md ${activeSection === "personal-details" ? "text-[#0f1b2b] bg-[#f1c40f]" : ""}`}><FaUser className="mr-3" /><span>Donor Personal Detail</span></button>
                  </li>
                  <li>
                    <button onClick={() => setActiveSection("health-tracking")} className={`w-full flex items-center text-white text-left px-4 py-2 rounded-md ${activeSection === "health-tracking" ? "text-[#0f1b2b] bg-[#f1c40f]" : ""}`}><FaHeartbeat className="mr-3" /><span>Donor Health Tracking</span></button>
                  </li>
                  <li>
                    <button onClick={() => setActiveSection("medical-history")} className={`w-full flex items-center text-white text-left px-4 py-2 rounded-md ${activeSection === "medical-history" ? "text-[#0f1b2b] bg-[#f1c40f]" : ""}`}><FaHistory className="mr-3" /><span>Donor Medical History</span></button>
                  </li>
                  <li>
                    <button onClick={() => setActiveSection("chat")} className={`w-full flex items-center text-white text-left px-4 py-2 rounded-md ${activeSection === "chat" ? "text-[#0f1b2b] bg-[#f1c40f]" : ""}`}><FaComments className="mr-3" /><span>Chat</span></button>
                  </li>
                </>
              )}
              {userRole === "patient" && (
                <>
                  <li>
                    <button onClick={() => setActiveSection("personal-details")} className={`w-full flex items-center text-white text-left px-4 py-2 rounded-md ${activeSection === "personal-details" ? "text-[#0f1b2b] bg-[#f1c40f]" : ""}`}><FaUser className="mr-3" /><span>Patient Personal Detail</span></button>
                  </li>
                  <li>
                    <button onClick={() => setActiveSection("health-tracking")} className={`w-full flex items-center text-white text-left px-4 py-2 rounded-md ${activeSection === "health-tracking" ? "text-[#0f1b2b] bg-[#f1c40f]" : ""}`}><FaHeartbeat className="mr-3" /><span>Patient Health Tracking</span></button>
                  </li>
                  <li>
                    <button onClick={() => setActiveSection("medical-history")} className={`w-full flex items-center text-white text-left px-4 py-2 rounded-md ${activeSection === "medical-history" ? "text-[#0f1b2b] bg-[#f1c40f]" : ""}`}><FaHistory className="mr-3" /><span>Patient Medical History</span></button>
                  </li>
                  <li>
                    <button onClick={() => setActiveSection("chat")} className={`w-full flex items-center text-white text-left px-4 py-2 rounded-md ${activeSection === "chat" ? "text-[#0f1b2b] bg-[#f1c40f]" : ""}`}><FaComments className="mr-3" /><span>Chat</span></button>
                  </li>
                </>
              )}
              {userRole !== "donor" && userRole !== "patient" && (
                <>
                  <li>
                    <button onClick={() => setActiveSection("personal-details")} className={`w-full flex items-center text-white text-left px-4 py-2 rounded-md ${activeSection === "personal-details" ? "text-[#0f1b2b] bg-[#f1c40f]" : ""}`}><FaUser className="mr-3" /><span>Personal Detail</span></button>
                  </li>
                  <li>
                    <button onClick={() => setActiveSection("health-tracking")} className={`w-full flex items-center text-white text-left px-4 py-2 rounded-md ${activeSection === "health-tracking" ? "text-[#0f1b2b] bg-[#f1c40f]" : ""}`}><FaHeartbeat className="mr-3" /><span>Health Tracking</span></button>
                  </li>
                  <li>
                    <button onClick={() => setActiveSection("medical-history")} className={`w-full flex items-center text-white text-left px-4 py-2 rounded-md ${activeSection === "medical-history" ? "text-[#0f1b2b] bg-[#f1c40f]" : ""}`}><FaHistory className="mr-3" /><span>Medical History</span></button>
                  </li>
                  <li>
                    <button onClick={() => setActiveSection("chat")} className={`w-full flex items-center text-white text-left px-4 py-2 rounded-md ${activeSection === "chat" ? "text-[#0f1b2b] bg-[#f1c40f]" : ""}`}><FaComments className="mr-3" /><span>Chat</span></button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => setActiveSection("settings")}
                  className={`w-full flex items-center text-white text-left px-4 py-2 rounded-md ${
                    activeSection === "settings" ? "text-[#0f1b2b] bg-[#f1c40f]" : ""
                  }`}
                >
                  <FaCog className="mr-3" /><span>Settings</span>
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center text-left px-4 py-2 mt-4 text-red-600 hover:bg-red-100 rounded-md"
                >
                  <FaSignOutAlt className="mr-3" />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto bg-white">{renderContent()}</div>
    </div>
  );
};

export default ProfilePage;
