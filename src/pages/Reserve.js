import React, { useState } from 'react';

const Reserve = () => {
  const [formData, setFormData] = useState({
    location: '',
    date: '',
    notes: '',
  });

  const [confirmed, setConfirmed] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-4"
      style={{
        backgroundImage: `url('/reserve-bg.jpeg')`,
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Reserve Your Spot</h1>
        <p className="text-lg mb-6">
          Choose your date, location, and experience. Reservely makes it seamless.
        </p>

        {!confirmed ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="location"
              placeholder="Location / Venue"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="notes"
              placeholder="Special Requests"
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Confirm Reservation
            </button>
          </form>
        ) : (
          <div className="text-white space-y-4">
            <h2 className="text-2xl font-bold">Reservation Confirmed 🎉</h2>
            <p>
              You’ve reserved <strong>{formData.location}</strong> on{' '}
              <strong>{formData.date}</strong>.
            </p>
            <p className="italic text-sm text-gray-300">
              We’ll follow up with details and access instructions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reserve;
