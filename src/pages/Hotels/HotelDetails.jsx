import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/hotels/${id}`)
      .then((res) => res.json())
      .then(setHotel)
      .catch((err) => console.error("Hotel Fetch Error:", err));
  }, [id]);

  if (!hotel) return <div className="p-10 text-xl">Loading...</div>;

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      
      {/* ✅ FIXED IMAGE FROM YOUR LINK */}
      <img
        src="https://gos3.ibcdn.com/80ec3494641b11e98fac0242ac110003.jpg"
        alt={hotel.name}
        className="h-96 w-full object-cover rounded-lg shadow-lg"
      />

      <div className="mt-6 grid md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow">
        <div>
          <h1 className="text-3xl font-bold">{hotel.name}</h1>

          <p className="mt-3 text-gray-600">
            📍 Location: {hotel.location}
          </p>

          <p className="mt-2 text-yellow-600 font-semibold">
            ⭐ Rating: {hotel.rating}
          </p>

          <p className="mt-3 font-bold text-green-600 text-xl">
            ₹ {hotel.price} / night
          </p>
        </div>

        {/* ✅ BOOK ROOM BUTTON */}
        <div className="flex items-center justify-center">
          <button
            onClick={() => navigate(`/rooms?hotelId=${hotel.id}`)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow"
          >
            Book Room
          </button>
        </div>
      </div>
    </div>
  );
}
