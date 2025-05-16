import React, { useState, useRef } from "react";
import axios from "axios";

function OpenAIChat() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const responseRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(""); 
    try {
      const res = await axios.post("http://localhost:5000/api/chat", { message });
      setResponse(res.data.reply);
      setLoading(false);
      setTimeout(() => {
        responseRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Sorry, something went wrong.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">🧠 AI Medical Chatbot</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your symptoms or ask a question..."
            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Thinking..." : "Send"}
          </button>
        </form>

        {response && (
          <div
            ref={responseRef}
            className="mt-6 p-4 bg-blue-50 border border-blue-200 text-gray-800 rounded-lg shadow-sm"
          >
            <strong>AI Response:</strong>
            <p className="mt-2 whitespace-pre-line">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OpenAIChat;
