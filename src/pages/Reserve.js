import React, { useState, useEffect, useContext } from 'react';
import { supabase } from '../supabaseClient';
import { SessionContext } from '../SessionContext';

const Reserve = () => {
  const session = useContext(SessionContext);
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [reservations, setReservations] = useState([]);

  const handleReserve = async () => {
    const { error } = await supabase.from('reservations').insert([
      {
        user_id: session.user.id,
        location,
        date,
      },
    ]);

    if (error) alert(error.message);
    else {
      alert('Reservation saved!');
      setLocation('');
      setDate('');
      // Refresh reservations
      supabase
        .from('reservations')
        .select('*')
        .eq('user_id', session.user.id)
        .order('date', { ascending: true })
        .then(({ data, error }) => {
          if (error) console.error(error.message);
          else setReservations(data);
        });
    }
  };

  useEffect(() => {
    if (session) {
      supabase
        .from('reservations')
        .select('*')
        .eq('user_id', session.user.id)
        .order('date', { ascending: true })
        .then(({ data, error }) => {
          if (error) console.error(error.message);
          else setReservations(data);
        });
    }
  }, [session]);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Reserve a Spot</h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleReserve}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Reserve
        </button>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-2">Your Reservations</h3>
      <ul className="space-y-2">
        {reservations.map((r) => (
          <li
            key={r.id}
            className="border px-4 py-2 rounded-md flex justify-between items-center"
          >
            <span>{r.location}</span>
            <span className="text-gray-500">{r.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reserve;
