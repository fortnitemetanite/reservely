import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';

const Dashboard = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      const { data, error } = await supabase
        .from('reservations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching reservations:', error);
      } else {
        setReservations(data);
      }

      setLoading(false);
    };

    fetchReservations();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Reservation Dashboard</h1>

      {loading ? (
        <p className="text-gray-600">Loading reservations...</p>
      ) : reservations.length === 0 ? (
        <p className="text-gray-600">No reservations found.</p>
      ) : (
        <div className="space-y-4">
          {reservations.map((res) => (
            <div
              key={res.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-blue-500">{res.location}</h2>
              <p className="text-gray-700">Date: {res.date}</p>
              <p className="text-gray-700">Notes: {res.notes || '—'}</p>
              <p className="text-sm text-gray-400">
                Created: {new Date(res.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
