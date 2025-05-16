import React, { useEffect, useState } from "react";
import axios from "axios";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [visibleDoctorId, setVisibleDoctorId] = useState(null);
  const [bookingData, setBookingData] = useState({
    userName: "",
    userEmail: "",
    message: "",
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/doctors").then((response) => {
      setDoctors(response.data); 
    });
  }, []);

  const handleBookNow = (id) => {
    setVisibleDoctorId(id === visibleDoctorId ? null : id);
    setBookingData({ userName: "", userEmail: "", message: "" }); // reset form
  };

  const handleBookingSubmit = async (e, doctorId) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/bookings", {
        doctorId,
        ...bookingData,
      });
      alert("Appointment booked successfully!");
      setVisibleDoctorId(null);
    } catch (err) {
      alert("Error booking appointment");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-red-600">Our Doctors</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="bg-white shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialty}</p>

            <button
              onClick={() => handleBookNow(doctor._id)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              {visibleDoctorId === doctor._id ? "Cancel" : "Book Now"}
            </button>

            {visibleDoctorId === doctor._id && (
              <form
                className="mt-4 space-y-2"
                onSubmit={(e) => handleBookingSubmit(e, doctor._id)}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border rounded"
                  value={bookingData.userName}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, userName: e.target.value })
                  }
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 border rounded"
                  value={bookingData.userEmail}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, userEmail: e.target.value })
                  }
                  required
                />
                <textarea
                  placeholder="Message (optional)"
                  className="w-full px-3 py-2 border rounded"
                  value={bookingData.message}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, message: e.target.value })
                  }
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                  Confirm Booking
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
