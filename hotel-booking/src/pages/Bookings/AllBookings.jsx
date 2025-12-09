import { useEffect, useState } from "react";
import axios from "axios";

export default function AllBookings() {
  const [dineBookings, setDineBookings] = useState([]);
  const [hotelBookings, setHotelBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [editingDineId, setEditingDineId] = useState(null);
  const [editingHotelId, setEditingHotelId] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    fetchAllBookings();
  }, []);

  const fetchAllBookings = async () => {
    try {
      const dineRes = await axios.get("http://localhost:8080/api/dine_bookings");
      const hotelRes = await axios.get("http://localhost:8080/api/hotel_bookings");

      setDineBookings(dineRes.data);
      setHotelBookings(hotelRes.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load bookings ❌");
    } finally {
      setLoading(false);
    }
  };

  const deleteDineBooking = async (id) => {
    if (!window.confirm("Delete this dine booking?")) return;
    await axios.delete(`http://localhost:8080/api/dine_bookings/${id}`);
    fetchAllBookings();
  };

  const deleteHotelBooking = async (id) => {
    if (!window.confirm("Delete this hotel booking?")) return;
    await axios.delete(`http://localhost:8080/api/hotel_bookings/${id}`);
    fetchAllBookings();
  };

  const startEdit = (booking, type) => {
    setEditForm(booking);
    type === "dine"
      ? setEditingDineId(booking.id)
      : setEditingHotelId(booking.id);
  };

  const cancelEdit = () => {
    setEditingDineId(null);
    setEditingHotelId(null);
    setEditForm({});
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const updateDineBooking = async () => {
    await axios.put(
      `http://localhost:8080/api/dine_bookings/${editingDineId}`,
      editForm
    );
    cancelEdit();
    fetchAllBookings();
  };

  const updateHotelBooking = async () => {
    await axios.put(
      `http://localhost:8080/api/hotel_bookings/${editingHotelId}`,
      editForm
    );
    cancelEdit();
    fetchAllBookings();
  };

  if (loading) {
    return <div className="p-10 text-center text-xl font-semibold text-gray-600">Loading all bookings...</div>;
  }

  if (error) {
    return <div className="p-10 text-center text-red-600 font-semibold">{error}</div>;
  }

  return (
    <div className="p-10 bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-700 drop-shadow">
        All Bookings (Admin Dashboard)
      </h1>

      {/* ================= DINE BOOKINGS ================= */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-green-700">🍽️ Restaurant Bookings</h2>

        <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
          <table className="w-full text-sm">
            <thead className="bg-green-600 text-white">
              <tr>
                {["ID","Name","Email","Mobile","People","Date","Amount","Payment","Actions"].map(h => (
                  <th key={h} className="py-3 px-4 text-center">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dineBookings.map((b, i) => (
                <tr key={b.id} className={`border-t text-center ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                  {editingDineId === b.id ? (
                    <>
                      <td>{b.id}</td>
                      {["name","email","mobile","numberOfPeople","bookingDate","amount","paymentStatus"].map(f => (
                        <td key={f} className="p-2">
                          <input
                            name={f}
                            value={editForm[f]}
                            onChange={handleEditChange}
                            className="w-full border rounded px-2 py-1 focus:ring-2 focus:ring-green-500"
                          />
                        </td>
                      ))}
                      <td className="flex justify-center gap-2 p-2">
                        <button onClick={updateDineBooking} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Save</button>
                        <button onClick={cancelEdit} className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400">Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{b.id}</td>
                      <td>{b.name}</td>
                      <td>{b.email}</td>
                      <td>{b.mobile}</td>
                      <td>{b.numberOfPeople}</td>
                      <td>{b.bookingDate}</td>
                      <td className="font-semibold text-green-700">₹{b.amount}</td>
                      <td className="font-medium">{b.paymentStatus}</td>
                      <td className="flex justify-center gap-2 p-2">
                        <button onClick={() => startEdit(b, "dine")} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Edit</button>
                        <button onClick={() => deleteDineBooking(b.id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= HOTEL BOOKINGS ================= */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-purple-700">🏨 Hotel Bookings</h2>

        <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
          <table className="w-full text-sm">
            <thead className="bg-purple-600 text-white">
              <tr>
                {["ID","Name","Email","Guests","Room","Check In","Check Out","Actions"].map(h => (
                  <th key={h} className="py-3 px-4 text-center">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hotelBookings.map((b, i) => (
                <tr key={b.id} className={`border-t text-center ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                  {editingHotelId === b.id ? (
                    <>
                      <td>{b.id}</td>
                      {["name","email","guests","roomType","checkIn","checkOut"].map(f => (
                        <td key={f} className="p-2">
                          <input
                            name={f}
                            value={editForm[f]}
                            onChange={handleEditChange}
                            className="w-full border rounded px-2 py-1 focus:ring-2 focus:ring-purple-500"
                          />
                        </td>
                      ))}
                      <td className="flex justify-center gap-2 p-2">
                        <button onClick={updateHotelBooking} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Save</button>
                        <button onClick={cancelEdit} className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400">Cancel</button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{b.id}</td>
                      <td>{b.name}</td>
                      <td>{b.email}</td>
                      <td>{b.guests}</td>
                      <td>{b.roomType}</td>
                      <td>{b.checkIn}</td>
                      <td>{b.checkOut}</td>
                      <td className="flex justify-center gap-2 p-2">
                        <button onClick={() => startEdit(b, "hotel")} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Edit</button>
                        <button onClick={() => deleteHotelBooking(b.id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
