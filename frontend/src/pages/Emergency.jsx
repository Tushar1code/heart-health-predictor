import React, { useState } from "react";
import { AlertTriangle } from "lucide-react";

const Emergency = () => {
  const [loading, setLoading] = useState(false);

  const handleEmergency = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/emergency/send-alert", {
        method: "POST",
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Emergency alert sent via SMS!");
      } else {
        alert("❌ Failed to send emergency alert.");
      }
    } catch (err) {
      alert("❌ Error connecting to emergency service.");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
        <AlertTriangle className="text-red-600 mx-auto mb-4" size={48} />
        <h2 className="text-3xl font-bold mb-4 text-red-700">Heart Emergency Support</h2>
        <p className="mb-6 text-gray-700">
          If you're experiencing a heart emergency, click the button below to send an urgent alert to your emergency contact.
        </p>
        <button
          onClick={handleEmergency}
          disabled={loading}
          className={`w-full py-3 text-lg rounded-lg font-semibold transition-colors ${
            loading ? "bg-red-300" : "bg-red-500 hover:bg-red-600"
          } text-white`}
        >
          {loading ? "Sending Alert..." : "🚨 Send Emergency Alert"}
        </button>
      </div>
    </div>
  );
};

export default Emergency;
