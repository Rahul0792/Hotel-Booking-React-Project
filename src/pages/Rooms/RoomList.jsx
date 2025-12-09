

import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

import room1 from "../../assets/room/room1.jpg";
import room2 from "../../assets/room/room2.jpg";
import room3 from "../../assets/room/room3.jpg";
import room4 from "../../assets/room/room4.jpg";
import room5 from "../../assets/room/room5.jpg";
import room6 from "../../assets/room/room6.jpg";
import room7 from "../../assets/room/room7.jpg";
import room8 from "../../assets/room/room8.jpg";
import room9 from "../../assets/room/room9.jpg";
import room10 from "../../assets/room/room10.jpg";

// ✅ ROOM IMAGE ARRAY
const roomImages = [
  room1, room2, room3, room4, room5,
  room6, room7, room8, room9, room10
];


export default function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [params] = useSearchParams();
  const hotelId = params.get("hotelId");

  useEffect(() => {
    fetch(`http://localhost:8080/api/rooms?hotelId=${hotelId}`)
      .then((res) => res.json())
      .then(setRooms)
      .catch((err) => console.error("Room Fetch Error:", err));
  }, [hotelId]);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Available Rooms
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {rooms.map((room, index) => (
          <div
            key={room.id}
            className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition"
          >
            {/* ✅ ROOM IMAGE FROM LOCAL FOLDER */}
            <img
              src={roomImages[index % roomImages.length]}
              alt={room.type}
              className="h-40 w-full object-cover rounded mb-3"
            />

            <h2 className="font-bold text-lg">{room.type}</h2>

            <p className="text-gray-600 mt-1">
              {room.description || "Luxury comfortable room"}
            </p>

            <p className="text-green-600 font-semibold mt-2">
              ₹ {room.price} / night
            </p>

            <Link
              to={`/rooms/${room.id}`}
              className="block text-center bg-blue-600 text-white py-2 mt-4 rounded hover:bg-blue-700"
            >
              View Room
            </Link>
          </div>
        ))}
      </div>

      {rooms.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No rooms available for this hotel.
        </p>
      )}
    </div>
  );
}
