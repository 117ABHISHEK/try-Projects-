// ThalAI Chatbot - Rule-based chatbot for Thalassemia support and information
class ThalassemiaChatbotService {
  constructor() {
    this.responses = {
      greeting: [
        "Hello! I'm ThalAI, your Thalassemia support assistant. How can I help you today?",
        "Hi there! I'm here to help with Thalassemia information and support. What would you like to know?",
        "Welcome! I'm ThalAI, ready to assist you with Thalassemia care and information. How may I help?",
      ],
      thalassemia_info: [
        "Thalassemia is an inherited blood disorder that affects hemoglobin production in red blood cells. It requires regular blood transfusions and medical care. People with Thalassemia Major typically need transfusions every 2-4 weeks. Would you like to know about symptoms, treatment, or management?",
        "Thalassemia is a genetic condition where the body doesn't produce enough hemoglobin. This leads to anemia and requires ongoing medical treatment including blood transfusions and iron chelation therapy. What specific aspect would you like to learn about?",
      ],
      blood_transfusion: [
        "Most Thalassemia Major patients need blood transfusions every 2-4 weeks to maintain healthy hemoglobin levels. The frequency depends on your individual condition and hemoglobin levels. You can schedule transfusions through our appointment system. Would you like to book an appointment?",
        "Blood transfusions are essential for Thalassemia Major patients. The typical frequency is every 14-28 days, but your doctor will determine the best schedule based on your hemoglobin levels. Regular transfusions help prevent complications and maintain quality of life.",
      ],
      finding_donors: [
        "I can help you find blood donors! You can use our Blood Donor Finder feature to search for donors by blood type and location. You can also create an urgent blood request that will notify matching donors in your area. What's your blood type?",
        "Finding compatible blood donors is important for regular transfusions. Our platform connects patients with registered donors. Would you like me to guide you through creating a blood request or searching for donors in your area?",
      ],
      appointment_booking: [
        "You can book appointments through our calendar system. We offer appointments for blood transfusions, doctor checkups, and counseling sessions. Would you like to schedule a transfusion appointment, medical checkup, or counseling session?",
        "Booking appointments is easy! Just visit the Appointments page to see available slots. You can schedule transfusions at nearby hospitals, checkups with your doctor, or counseling sessions. What type of appointment do you need?",
      ],
      medication: [
        "Iron chelation therapy is crucial for removing excess iron from regular blood transfusions. Common medications include Desferrioxamine (Desferal), Deferiprone (Ferriprox), and Deferasirox (Exjade/Jadenu). Always follow your doctor's prescribed dosage and schedule. Never adjust medication without consulting your healthcare provider.",
        "Chelation therapy prevents iron overload from transfusions. Your doctor may prescribe oral chelators like Deferiprone or Deferasirox, or injectable Desferrioxamine. Regular monitoring of ferritin levels is important to ensure the medication is working effectively.",
      ],
      diet: [
        "Thalassemia patients should avoid iron-rich foods since transfusions already provide excess iron. Limit red meat, liver, iron-fortified cereals, and spinach. Instead, focus on calcium-rich foods, vitamin D, folic acid, and avoid tea/coffee during meals as they can affect iron absorption. Would you like specific dietary recommendations?",
        "A proper diet helps manage Thalassemia. Avoid high-iron foods and focus on calcium (dairy, leafy greens), vitamin D (sunlight, fortified foods), folic acid (citrus fruits, beans), and vitamin C (in moderation). Drinking tea with meals can help reduce iron absorption from food.",
      ],
      symptoms: [
        "Common Thalassemia symptoms include fatigue, weakness, pale or yellowish skin, facial bone deformities, slow growth, abdominal swelling, and dark urine. If you're experiencing severe symptoms like difficulty breathing, chest pain, or extreme fatigue, please consult your doctor immediately or log them in your health tracker.",
        "Thalassemia symptoms vary by severity. Mild cases may have few symptoms, while Thalassemia Major causes severe anemia, delayed growth, bone problems, and enlarged spleen. Regular monitoring and treatment help manage these symptoms. Have you been experiencing any specific symptoms you'd like to discuss?",
      ],
      emergency: [
        "If this is a medical emergency with severe chest pain, difficulty breathing, or extreme weakness, please call emergency services immediately (911 or your local emergency number). For urgent blood needs, you can create an emergency blood request through our Blood Requests page. How can I help with your urgent situation?",
        "EMERGENCY: If you're experiencing a life-threatening situation, call 911 or go to the nearest emergency room immediately. For urgent blood requirements, use our emergency blood request feature which notifies nearby donors instantly. Please seek immediate medical attention if needed.",
      ],
      chelation: [
        "Iron chelation removes excess iron from blood transfusions that can damage organs. Common chelators: Deferasirox (oral, once daily), Deferiprone (oral, three times daily), or Desferrioxamine (injection/infusion, 5-7 nights weekly). Your doctor will choose based on your ferritin levels and lifestyle. Always follow your prescribed chelation schedule.",
        "Chelation therapy is life-saving for transfusion-dependent Thalassemia. It prevents iron buildup in the heart, liver, and endocrine glands. Regular chelation, combined with monitoring ferritin levels, helps prevent serious complications. Never skip chelation doses without medical advice.",
      ],
      complications: [
        "Without proper treatment, Thalassemia can lead to iron overload affecting the heart, liver, and endocrine system; bone problems; enlarged spleen; and growth delays. Regular transfusions, consistent chelation therapy, and medical monitoring prevent most complications. Are you concerned about a specific complication?",
        "Long-term complications include heart disease, liver damage, diabetes, thyroid problems, and bone issues. However, modern treatment with regular transfusions and chelation therapy significantly reduces these risks. Regular checkups and adherence to treatment are key to preventing complications.",
      ],
      pregnancy: [
        "Women with Thalassemia can have successful pregnancies with proper planning and care. It's important to consult with a hematologist and high-risk pregnancy specialist before conceiving. Genetic counseling is also recommended to understand risks to the baby. Would you like information about genetic counseling services?",
        "Pregnancy with Thalassemia requires specialized care. Your transfusion needs may increase during pregnancy, and chelation therapy must be stopped. Work closely with your hematologist and obstetrician. Prenatal testing can determine if the baby will have Thalassemia.",
      ],
      genetic: [
        "Thalassemia is inherited when both parents carry the Thalassemia gene. If both parents are carriers: 25% chance of Thalassemia Major, 50% chance of being a carrier, and 25% chance of no Thalassemia. Genetic counseling and prenatal testing are available for families. Would you like information about genetic testing?",
        "Thalassemia is passed through genes from parents to children. It's not contagious. Genetic testing can identify carriers, and prenatal diagnosis can detect Thalassemia in the fetus. If you're planning a family, genetic counseling is highly recommended.",
      ],
      support_groups: [
        "Connecting with others who understand Thalassemia can be very helpful. Our platform has a community feature where patients and families can share experiences. Local Thalassemia support groups also meet regularly. Would you like help finding a support group in your area?",
        "You're not alone in this journey! Many Thalassemia patients and families find support groups invaluable for emotional support and practical advice. Check our Community page or ask your doctor about local Thalassemia associations.",
      ],
      default: [
        "I'm not sure I understand. I can help you with: finding blood donors, booking appointments, Thalassemia information, treatment options, diet and medication guidance, managing symptoms, and connecting with support resources. What would you like to know?",
        "I specialize in Thalassemia support and information. I can assist with blood donor searches, appointment scheduling, treatment information, diet advice, symptom management, and more. How may I help you today?",
      ],
    }

    this.keywords = {
      greeting: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "start", "hey there"],
      thalassemia_info: [
        "what is thalassemia",
        "thalassemia definition",
        "explain thalassemia",
        "about thalassemia",
        "what is this disease",
        "what is this condition",
      ],
      blood_transfusion: [
        "blood transfusion",
        "transfusion",
        "how often transfusion",
        "transfusion frequency",
        "need blood",
        "transfusion process",
        "when transfusion",
      ],
      finding_donors: [
        "find donor",
        "blood donor",
        "need blood",
        "blood request",
        "donor search",
        "find blood",
        "compatible donor",
      ],
      appointment_booking: [
        "book appointment",
        "schedule appointment",
        "appointment",
        "make appointment",
        "schedule visit",
        "book visit",
      ],
      medication: [
        "iron chelation",
        "medication",
        "medicine",
        "desferrioxamine",
        "deferiprone",
        "deferasirox",
        "desferal",
        "exjade",
        "ferriprox",
        "chelation",
        "drugs",
      ],
      diet: [
        "diet",
        "food",
        "nutrition",
        "what to eat",
        "what not to eat",
        "dietary",
        "foods to avoid",
        "meal plan",
      ],
      symptoms: [
        "symptoms",
        "feeling tired",
        "fatigue",
        "weakness",
        "pale skin",
        "what are symptoms",
        "signs of thalassemia",
        "feeling weak",
      ],
      emergency: ["emergency", "urgent", "help urgent", "critical", "life threatening", "can't breathe", "severe pain"],
      chelation: ["chelation", "chelator", "iron overload", "ferritin", "iron removal", "desferal pump"],
      complications: [
        "complications",
        "side effects",
        "problems",
        "risks",
        "long term effects",
        "organ damage",
        "heart problems",
        "liver problems",
      ],
      pregnancy: ["pregnancy", "pregnant", "having baby", "conceive", "prenatal", "expecting"],
      genetic: ["genetic", "inheritance", "hereditary", "carrier", "genes", "inherited", "family planning"],
      support_groups: [
        "support group",
        "community",
        "meet others",
        "support network",
        "other patients",
        "share experience",
      ],
    }
  }

  analyzeMessage(message) {
    const lowerMessage = message.toLowerCase()

    // Check for emergency keywords first (highest priority)
    for (const keyword of this.keywords.emergency) {
      if (lowerMessage.includes(keyword)) {
        return "emergency"
      }
    }

    // Check other intents
    for (const [intent, keywords] of Object.entries(this.keywords)) {
      if (intent === "emergency") continue // Already checked

      for (const keyword of keywords) {
        if (lowerMessage.includes(keyword)) {
          return intent
        }
      }
    }

    return "default"
  }

  getResponse(intent) {
    const responses = this.responses[intent] || this.responses.default
    const randomIndex = Math.floor(Math.random() * responses.length)
    return responses[randomIndex]
  }

  processMessage(message, userId = null) {
    const intent = this.analyzeMessage(message)
    const response = this.getResponse(intent)

    return {
      intent,
      response,
      suggestions: this.getSuggestions(intent),
    }
  }

  getSuggestions(intent) {
    const suggestions = {
      greeting: [
        "What is Thalassemia?",
        "Find blood donors",
        "Book an appointment",
        "Diet recommendations",
      ],
      thalassemia_info: [
        "Symptoms of Thalassemia",
        "Treatment options",
        "Blood transfusions",
        "Managing the condition",
      ],
      blood_transfusion: [
        "Book transfusion appointment",
        "Find nearby hospitals",
        "Transfusion frequency",
        "What to expect",
      ],
      finding_donors: [
        "Search donors by blood type",
        "Create blood request",
        "Emergency blood need",
        "Donor requirements",
      ],
      appointment_booking: [
        "Transfusion appointment",
        "Doctor checkup",
        "Counseling session",
        "View my appointments",
      ],
      medication: [
        "Iron chelation therapy",
        "Medication schedule",
        "Side effects",
        "Ferritin monitoring",
      ],
      diet: [
        "Foods to avoid",
        "Calcium-rich foods",
        "Vitamin recommendations",
        "Meal planning tips",
      ],
      symptoms: [
        "Log my symptoms",
        "When to see doctor",
        "Managing fatigue",
        "Track health records",
      ],
      emergency: [
        "Create emergency blood request",
        "Find nearest hospital",
        "Call emergency services",
        "Contact my doctor",
      ],
      chelation: [
        "Types of chelators",
        "How to take medication",
        "Monitor ferritin levels",
        "Chelation side effects",
      ],
      complications: [
        "Preventing complications",
        "Regular monitoring",
        "Treatment adherence",
        "Organ health",
      ],
      pregnancy: [
        "Genetic counseling",
        "Pregnancy planning",
        "Prenatal testing",
        "High-risk pregnancy care",
      ],
      genetic: [
        "Carrier testing",
        "Genetic counseling",
        "Family planning",
        "Inheritance patterns",
      ],
      support_groups: [
        "Find local support group",
        "Join community",
        "Share my story",
        "Connect with others",
      ],
      default: [
        "Find blood donors",
        "Book appointment",
        "Learn about Thalassemia",
        "Diet and nutrition",
      ],
    }

    return suggestions[intent] || suggestions.default
  }
}

module.exports = new ThalassemiaChatbotService()
