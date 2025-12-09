import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);

  const [booking, setBooking] = useState({
    name: "",
    email: "",
    check_in: "",
    check_out: "",
    guests: 1,
  });

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetch(`http://localhost:8080/api/rooms/${id}`)
      .then((res) => res.json())
      .then((data) => setRoom(data))
      .catch((err) => console.error("❌ Failed to fetch room:", err));
  }, [id]);

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    if (
      !booking.name ||
      !booking.email ||
      !booking.check_in ||
      !booking.check_out
    ) {
      alert("❌ Please fill all required fields");
      return;
    }

    if (!userId) {
      alert("❌ Please login first");
      navigate("/login");
      return;
    }

    const fullBookingData = {
      name: booking.name,
      email: booking.email,
      check_in: booking.check_in,
      check_out: booking.check_out,
      guests: booking.guests,

      userId: Number(userId),
      roomId: Number(room.id),
      hotelId: Number(room.hotel.id),
      roomType: room.type,
      price: room.price,
    };

    // ✅✅✅ CORRECT REDIRECT
    navigate(`/booking/${room.id}`, {
      state: fullBookingData,
    });
  };

  if (!room) return <div className="p-10 text-xl">Loading Room...</div>;

  return (
    <div className="p-10 max-w-3xl mx-auto bg-white rounded shadow">

      <h1 className="text-3xl font-bold mb-4">{room.type}</h1>

      <div className="space-y-2 text-lg mb-6">
        <p><strong>Room ID:</strong> {room.id}</p>
        <p><strong>Description:</strong> {room.description}</p>
        <p><strong>Price:</strong> ₹ {room.price}</p>
        <p><strong>Hotel ID:</strong> {room.hotel?.id}</p>
      </div>

      <hr className="my-6" />

      <h2 className="text-2xl font-bold mb-4">Book This Room</h2>

      <div className="grid gap-4">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={booking.name}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={booking.email}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="date"
          name="check_in"
          value={booking.check_in}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="date"
          name="check_out"
          value={booking.check_out}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          type="number"
          name="guests"
          min="1"
          value={booking.guests}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <button
          onClick={handleBooking}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 mt-4 rounded text-lg font-bold"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
