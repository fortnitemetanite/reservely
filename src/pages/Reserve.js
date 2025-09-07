import React from 'react';

const Reserve = () => {
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

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Location / Venue"
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Special Requests"
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reserve;
