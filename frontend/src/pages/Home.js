import { Link } from "react-router-dom";
import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import axios from "axios";
import { motion } from "framer-motion";

const faqs = [
  { question: "What is your medical care?", answer: "One Medical provides high-quality and affordable service through innovative design, excellent customer service, and technology." },
  { question: "What happens if I need to go to a hospital?", answer: "Our team will guide you to the best facility based on your medical needs and insurance coverage." },
  { question: "Can I visit your medical office?", answer: "Yes, you can schedule an appointment or walk in during our working hours for medical consultations and check-ups." },
  { question: "Does your service provide urgent care?", answer: "Yes, we offer urgent care services for non-life-threatening emergencies, ensuring quick medical attention." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-600">Most questions by our beloved patients</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
              <button
                className="flex justify-between w-full text-lg font-semibold text-left text-gray-700 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span className="text-red-500 text-xl">
                  {openIndex === index ? "➖" : "➕"}
                </span>
              </button>
              {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    try {
      const res = await axios.post("http://localhost:5000/api/chat", { message });
      console.log(res.data);
      setResponse(res.data.reply || "No response from AI.");
    } catch (error) {
      console.error(error);
      setResponse("Error communicating with AI.");
    }
  };

  return (
    <div className="bg-gray-50 text-gray-900">
      <HeroSection />
      <section className="py-16 px-8">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-8">Why Trust Us?</h2>
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide p-4">
          {["Certified Cardiologists", "Secure & Private", "AI-Powered Predictions", "Trusted by Thousands"].map(
            (title, index) => (
              <div key={index} className="flex-none w-64 p-6 bg-white shadow-lg rounded-lg text-center">
                <h3 className="text-xl font-bold text-red-500">{title}</h3>
                <p>Description about {title}.</p>
              </div>
            )
          )}
        </div>
      </section>
      <FAQSection />
      <footer className="bg-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-blue-600">+Medicare</h2>
            <p className="text-sm text-gray-500 mt-2">Copyright © 2025 developed by Tushar Aambatwar. All rights reserved.</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-gray-600 hover:text-blue-600">FB</a>
              <a href="https://instagram.com" className="text-gray-600 hover:text-blue-600">IG</a>
              <a href="https://github.com" className="text-gray-600 hover:text-blue-600">GH</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Quick Links</h3>
            <ul className="mt-2 space-y-1">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
            <li><Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">I Want To</h3>
            <ul className="mt-2 space-y-1">
            <li><Link to="/appointment" className="text-gray-600 hover:text-blue-600">Book an Appointment</Link></li>
            <li><Link to="/doctors" className="text-gray-600 hover:text-blue-600">Find a Doctor</Link></li>
            <li><Link to="/records" className="text-gray-600 hover:text-blue-600">Access My Records</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Support</h3>
            <ul className="mt-2 space-y-1">
            <li><Link to="/faq" className="text-gray-600 hover:text-blue-600">FAQs</Link></li>
            <li><Link to="/customer-service" className="text-gray-600 hover:text-blue-600">Customer Service</Link></li>
            <li><Link to="/privacy-policy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-6 right-6">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={toggleChat} className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700">
          💬 Chat
        </motion.button>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="absolute bottom-14 right-0 w-80 bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-blue-600">AI Chatbot</h3>
            <div className="mt-2 p-2 border rounded h-32 overflow-y-auto text-gray-700">
              {response ? <p><strong>AI:</strong> {response}</p> : "Ask me anything!"}
            </div>
            <form onSubmit={handleSendMessage} className="mt-2 flex">
              <input type="text" className="flex-1 p-2 border rounded-l" placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)} />
              <button type="submit" className="p-2 bg-blue-600 text-white rounded-r">➤</button>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;


