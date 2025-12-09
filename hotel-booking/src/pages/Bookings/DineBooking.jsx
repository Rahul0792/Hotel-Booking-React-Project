// // import { useNavigate } from "react-router-dom";

// // export default function DineBooking() {
// //   const navigate = useNavigate();
// //   const dineAmount = 500;

// //   const goToPayment = () => {
// //     navigate("/payment", {
// //       state: {
// //         amount: dineAmount,
// //         type: "dine",
// //       },
// //     });
// //   };

// //   return (
// //     <div className="p-6">
// //       <h1 className="text-2xl font-bold mb-4">Book a Table</h1>
// //       <p className="text-lg mb-4">Table Charges: ₹{dineAmount}</p>

// //       <button
// //         onClick={goToPayment}
// //         className="bg-purple-600 text-white px-6 py-3 rounded"
// //       >
// //         Pay & Reserve Table
// //       </button>
// //     </div>
// //   );
// // }


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function DineBooking() {
//   const navigate = useNavigate();
//   const dineAmount = 500;

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     bookingDate: "",
//     people: 1,
//   });

//   // ✅ INPUT HANDLER
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ✅ SUBMIT & GO TO PAYMENT
//   const goToPayment = async () => {
//     const { name, email, mobile, bookingDate, people } = form;

//     if (!name || !email || !mobile || !bookingDate || !people) {
//       alert("❌ Please fill all details");
//       return;
//     }

//     const payload = {
//       name,
//       email,
//       mobile,
//       bookingDate,
//       numberOfPeople: people,
//       amount: dineAmount,
//       paymentStatus: "PENDING",
//     };

//     try {
//       // ✅ SAVE DINE BOOKING
//       const res = await fetch("http://localhost:8080/api/dine_bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) throw new Error("Booking Failed");

//       const savedBooking = await res.json();

//       // ✅ REDIRECT TO PAYMENT WITH BOOKING INFO
//       navigate("/payment", {
//         state: {
//           amount: dineAmount,
//           type: "dine",
//           dineBookingId: savedBooking.id, // ✅ optional for backend update after payment
//         },
//       });
//     } catch (error) {
//       alert("❌ Dine booking failed. Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
//       <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">

//         <h1 className="text-3xl font-bold text-center mb-6">
//           🍽 Dine Table Booking
//         </h1>

//         <input
//           type="text"
//           name="name"
//           placeholder="Enter Full Name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full border p-3 mb-4 rounded"
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Email"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full border p-3 mb-4 rounded"
//         />

//         <input
//           type="text"
//           name="mobile"
//           placeholder="Enter Mobile Number"
//           value={form.mobile}
//           onChange={handleChange}
//           className="w-full border p-3 mb-4 rounded"
//         />

//         <input
//           type="date"
//           name="bookingDate"
//           value={form.bookingDate}
//           onChange={handleChange}
//           className="w-full border p-3 mb-4 rounded"
//         />

//         <input
//           type="number"
//           min="1"
//           name="people"
//           placeholder="Number of People"
//           value={form.people}
//           onChange={handleChange}
//           className="w-full border p-3 mb-4 rounded"
//         />

//         <p className="text-lg font-semibold mb-4 text-center">
//           Table Charges: ₹{dineAmount}
//         </p>

//         <button
//           onClick={goToPayment}
//           className="bg-purple-600 hover:bg-purple-700 text-white w-full py-3 rounded text-lg font-bold"
//         >
//           ✅ Pay & Reserve Table
//         </button>
//       </div>
//     </div>
//   );
// }

//==========================================================================================

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function DineBooking() {
//   const navigate = useNavigate();
//   const dineAmount = 500;

//   const userId = localStorage.getItem("userId");      // ✅ REQUIRED
//   const restaurantId = 3;                             // ✅ CHANGE BASED ON SELECTED RESTAURANT

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     bookingDate: "",
//     people: 1,
//   });

//   // ✅ INPUT HANDLER
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ✅ SUBMIT & GO TO PAYMENT
//   const goToPayment = async () => {
//     const { name, email, mobile, bookingDate, people } = form;

//     if (!name || !email || !mobile || !bookingDate || !people) {
//       alert("❌ Please fill all details");
//       return;
//     }

//     if (!userId) {
//       alert("❌ Please login first");
//       navigate("/login");
//       return;
//     }

//     const payload = {
//       name,
//       email,
//       mobile,
//       bookingDate,
//       numberOfPeople: Number(people),
//       amount: dineAmount,
//       paymentStatus: "PENDING",

//       // ✅ REQUIRED FOREIGN KEYS
//       restaurantId: Number(restaurantId),
//       userId: Number(userId),
//     };

//     try {
//       // ✅ SAVE DINE BOOKING IN DB (PENDING)
//       const res = await fetch("http://localhost:8080/api/dine_bookings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) throw new Error("Booking Failed");

//       const savedBooking = await res.json();

//       // ✅ REDIRECT TO PAYMENT WITH BOOKING INFO
//       navigate("/payment", {
//         state: {
//           amount: dineAmount,
//           type: "dine",
//           dineBookingId: savedBooking.id,   // ✅ USED AFTER PAYMENT SUCCESS
//         },
//       });

//     } catch (error) {
//       console.error("❌ Booking Error:", error);
//       alert("❌ Dine booking failed. Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
//       <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">

//         <h1 className="text-3xl font-bold text-center mb-6">
//           🍽 Dine Table Booking
//         </h1>

//         <input
//           type="text"
//           name="name"
//           placeholder="Enter Full Name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full border p-3 mb-4 rounded"
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Email"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full border p-3 mb-4 rounded"
//         />

//         <input
//           type="text"
//           name="mobile"
//           placeholder="Enter Mobile Number"
//           value={form.mobile}
//           onChange={handleChange}
//           className="w-full border p-3 mb-4 rounded"
//         />

//         <input
//           type="date"
//           name="bookingDate"
//           value={form.bookingDate}
//           onChange={handleChange}
//           className="w-full border p-3 mb-4 rounded"
//         />

//         <input
//           type="number"
//           min="1"
//           name="people"
//           placeholder="Number of People"
//           value={form.people}
//           onChange={handleChange}
//           className="w-full border p-3 mb-4 rounded"
//         />

//         <p className="text-lg font-semibold mb-4 text-center">
//           Table Charges: ₹{dineAmount}
//         </p>

//         <button
//           onClick={goToPayment}
//           className="bg-purple-600 hover:bg-purple-700 text-white w-full py-3 rounded text-lg font-bold"
//         >
//           ✅ Pay & Reserve Table
//         </button>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DineBooking() {
  const navigate = useNavigate();
  const dineAmount = 500;

  const userId = localStorage.getItem("userId");   // ✅ REQUIRED
  const restaurantId = 3;                          // ✅ SELECTED RESTAURANT ID

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    bookingDate: "",
    people: 1,
  });

  // ✅ INPUT HANDLER
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ ONLINE PAYMENT FLOW
  const goToPayment = async () => {
    const { name, email, mobile, bookingDate, people } = form;

    if (!name || !email || !mobile || !bookingDate || !people) {
      alert("❌ Please fill all details");
      return;
    }

    if (!userId) {
      alert("❌ Please login first");
      navigate("/login");
      return;
    }

    const payload = {
      name,
      email,
      mobile,
      bookingDate,
      numberOfPeople: Number(people),
      amount: dineAmount,
      paymentStatus: "PENDING",
      restaurantId: Number(restaurantId),
      userId: Number(userId),
    };

    try {
      const res = await fetch("http://localhost:8080/api/dine_bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Booking Failed");

      const savedBooking = await res.json();

      navigate("/payment", {
        state: {
          amount: dineAmount,
          type: "dine",
          dineBookingId: savedBooking.id,
        },
      });
    } catch (error) {
      console.error("❌ Booking Error:", error);
      alert("❌ Dine booking failed. Try again.");
    }
  };

  // ✅ PAY AT HOTEL FLOW
  const payAtHotel = async () => {
    const { name, email, mobile, bookingDate, people } = form;

    if (!name || !email || !mobile || !bookingDate || !people) {
      alert("❌ Please fill all details");
      return;
    }

    if (!userId) {
      alert("❌ Please login first");
      navigate("/login");
      return;
    }

    const payload = {
      name,
      email,
      mobile,
      bookingDate,
      numberOfPeople: Number(people),
      amount: dineAmount,
      paymentStatus: "PAY_AT_HOTEL",   // ✅ IMPORTANT
      restaurantId: Number(restaurantId),
      userId: Number(userId),
    };

    try {
      const res = await fetch("http://localhost:8080/api/dine_bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Booking Failed");

      alert("✅ Table booked successfully! Pay at hotel.");
      navigate("/success");   // ✅ redirect to success page
    } catch (error) {
      console.error("❌ Booking Error:", error);
      alert("❌ Dine booking failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          🍽 Dine Table Booking
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="text"
          name="mobile"
          placeholder="Enter Mobile Number"
          value={form.mobile}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="date"
          name="bookingDate"
          value={form.bookingDate}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="number"
          min="1"
          name="people"
          placeholder="Number of People"
          value={form.people}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />

        <p className="text-lg font-semibold mb-6 text-center">
          Table Charges: ₹{dineAmount}
        </p>

        {/* ✅ ONLINE PAYMENT BUTTON */}
        <button
          onClick={goToPayment}
          className="bg-purple-600 hover:bg-purple-700 text-white w-full py-3 rounded text-lg font-bold mb-3"
        >
          ✅ Pay Online & Reserve
        </button>

        {/* ✅ PAY AT HOTEL BUTTON */}
        <button
          onClick={payAtHotel}
          className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded text-lg font-bold"
        >
          🏨 Pay At Hotel
        </button>

      </div>
    </div>
  );
}


// D:\Work\React\hotel-booking\src\assets\restaurants\rest10.jpg