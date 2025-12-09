// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function HotelBooking() {
//   const { roomId } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const bookingData = location.state;

//   const [room, setRoom] = useState(null);

//   // ✅ FETCH ROOM
//   useEffect(() => {
//     fetch(`http://localhost:8080/api/rooms/${roomId}`)
//       .then((res) => res.json())
//       .then((data) => setRoom(data));
//   }, [roomId]);

//   // ✅ SECURITY CHECK
//   useEffect(() => {
//     if (!bookingData) {
//       alert("❌ Invalid Access");
//       navigate("/");
//     }
//   }, [bookingData, navigate]);

//   // ✅ PAY AT HOTEL
//   const confirmBooking = async () => {
//     const payload = {
//       name: bookingData.name,
//       email: bookingData.email,
//       checkIn: bookingData.check_in,
//       checkOut: bookingData.check_out,
//       guests: Number(bookingData.guests),
//       roomType: bookingData.roomType,
//       paymentType: "PAY_AT_HOTEL",

//       room: { id: bookingData.roomId },
//       hotel: { id: bookingData.hotelId },
//       user: { id: bookingData.userId },
//     };

//     try {
//       const res = await fetch("http://localhost:8080/api/hotel_bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) throw new Error("Booking failed");

//       alert("✅ Booking Confirmed!");
//       navigate("/booking-success");
//     } catch {
//       alert("❌ Booking Failed");
//     }
//   };

//   // ✅ ✅ FINAL PAYMENT REDIRECT FOR HOTEL
//   const goToPayment = () => {
//     navigate("/payment", {
//       state: {
//         amount: room.price,
//         type: "hotel",          // ✅ IMPORTANT
//         bookingData: bookingData,
//       },
//     });
//   };

//   if (!room || !bookingData) {
//     return <div className="p-10 text-xl">Loading Booking...</div>;
//   }

//   return (
//     <div className="p-10 max-w-xl mx-auto bg-white shadow rounded">

//       <h1 className="text-3xl font-bold text-center mb-4">Confirm Booking</h1>

//       <div className="space-y-2 text-lg mb-6">
//         <p><strong>Room Type:</strong> {room.type}</p>
//         <p><strong>Price:</strong> ₹ {room.price}</p>
//         <p><strong>Guests:</strong> {bookingData.guests}</p>
//       </div>

//       <div className="space-y-4">
//         <button
//           onClick={goToPayment}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded text-lg font-bold"
//         >
//           Pay Now ₹ {room.price}
//         </button>

//         <button
//           onClick={confirmBooking}
//           className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded text-lg font-bold"
//         >
//           Pay at Hotel
//         </button>
//       </div>
//     </div>
//   );
// }



import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HotelBooking() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state;

  const [room, setRoom] = useState(null);

  // ✅ FETCH ROOM
  useEffect(() => {
    fetch(`http://localhost:8080/api/rooms/${roomId}`)
      .then((res) => res.json())
      .then((data) => setRoom(data));
  }, [roomId]);

  // ✅ ✅ ✅ SECURITY CHECK (CRASH PROOF)
  useEffect(() => {
    if (!location.state || !roomId) {
      alert("❌ Invalid Access");
      navigate("/");
    }
  }, [location.state, roomId, navigate]);

  // ✅ PAY AT HOTEL
  const confirmBooking = async () => {
    const payload = {
      name: bookingData.name,
      email: bookingData.email,
      checkIn: bookingData.check_in,
      checkOut: bookingData.check_out,
      guests: Number(bookingData.guests),
      roomType: bookingData.roomType,
      paymentType: "PAY_AT_HOTEL",

      room: { id: bookingData.roomId },
      hotel: { id: bookingData.hotelId },
      user: { id: bookingData.userId },
    };

    try {
      const res = await fetch("http://localhost:8080/api/hotel_bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Booking failed");

      alert("✅ Booking Confirmed!");
      navigate("/booking-success");
    } catch {
      alert("❌ Booking Failed");
    }
  };

  // ✅ ✅ ✅ FINAL PAYMENT REDIRECT
  const goToPayment = () => {
    navigate("/payment", {
      state: {
        amount: room.price,
        type: "hotel",
        bookingData: bookingData,
      },
    });
  };

  if (!room || !bookingData) {
    return <div className="p-10 text-xl">Loading Booking...</div>;
  }

  return (
    <div className="p-10 max-w-xl mx-auto bg-white shadow rounded">

      <h1 className="text-3xl font-bold text-center mb-4">Confirm Booking</h1>

      <div className="space-y-2 text-lg mb-6">
        <p><strong>Room Type:</strong> {room.type}</p>
        <p><strong>Price:</strong> ₹ {room.price}</p>
        <p><strong>Guests:</strong> {bookingData.guests}</p>
      </div>

      <div className="space-y-4">
        <button
          onClick={goToPayment}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded text-lg font-bold"
        >
          Pay Now ₹ {room.price}
        </button>

        <button
          onClick={confirmBooking}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded text-lg font-bold"
        >
          Pay at Hotel
        </button>
      </div>
    </div>
  );
}
