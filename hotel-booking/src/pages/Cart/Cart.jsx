// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Cart() {
//   const [cart, setCart] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     mobile: "",
//     address: "",
//   });

//   const [location, setLocation] = useState(null);
//   const navigate = useNavigate();

//   // ✅ LOAD CART
//   useEffect(() => {
//     setCart(JSON.parse(localStorage.getItem("cart")) || []);
//   }, []);

//   // ✅ REMOVE ITEM
//   const removeItem = (id) => {
//     const updated = cart.filter((item) => item.id !== id);
//     setCart(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//   };

//   // ✅ INCREASE QTY
//   const increaseQty = (id) => {
//     const updated = cart.map((item) =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setCart(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//   };

//   // ✅ DECREASE QTY
//   const decreaseQty = (id) => {
//     const updated = cart.map((item) =>
//       item.id === id
//         ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
//         : item
//     );
//     setCart(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//   };

//   // ✅ TOTAL AMOUNT
//   const amount = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   // ✅ FORM CHANGE
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ✅ GET CURRENT LOCATION
//   const getCurrentLocation = () => {
//     if (!navigator.geolocation) {
//       alert("Geolocation not supported");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setLocation({ latitude, longitude });

//         setForm({
//           ...form,
//           address: `Lat: ${latitude}, Lng: ${longitude}`,
//         });
//       },
//       () => {
//         alert("❌ Location access denied");
//       }
//     );
//   };

//   // ✅ MAKE PAYMENT → REDIRECT TO PAYMENT PAGE
//   const placeOrder = () => {
//   if (!form.name || !form.mobile || !form.address) {
//     alert("❌ Please fill all details");
//     return;
//   }

//   const orderData = {
//     customer: form,
//     items: cart,
//     amount: amount,   // ✅ SAME TOTAL SAVED
//   };

//   localStorage.setItem("orderDetails", JSON.stringify(orderData));

//   navigate("/payment"); // ✅ Redirect to Payment page
// };


//   if (cart.length === 0) {
//     return <div className="p-10 text-xl">🛒 Your cart is empty</div>;
//   }

//   return (
//     <div className="p-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

//       {/* ✅ CART SECTION */}
//       <div>
//         <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

//         {cart.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-center gap-4 border p-4 mb-4 rounded"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-24 h-20 object-cover rounded"
//             />

//             <div className="flex-1">
//               <h2 className="font-bold">{item.name}</h2>

//               {/* ✅ QTY CONTROLS */}
//               <div className="flex items-center gap-3 my-2">
//                 <button
//                   onClick={() => decreaseQty(item.id)}
//                   className="px-3 py-1 bg-gray-300 rounded"
//                 >
//                   -
//                 </button>

//                 <span className="font-bold">{item.quantity}</span>

//                 <button
//                   onClick={() => increaseQty(item.id)}
//                   className="px-3 py-1 bg-gray-300 rounded"
//                 >
//                   +
//                 </button>
//               </div>

//               <p className="font-semibold">
//                 ₹{item.price} × {item.quantity} = ₹
//                 {item.price * item.quantity}
//               </p>
//             </div>

//             <button
//               onClick={() => removeItem(item.id)}
//               className="bg-red-600 text-white px-4 py-1 rounded"
//             >
//               Remove
//             </button>
//           </div>
//         ))}

//         <h2 className="text-2xl font-bold text-right mt-4">
//           Total Amount: ₹{amount}
//         </h2>
//       </div>

//       {/* ✅ FOOD ORDER FORM + LOCATION */}
//       <div className="bg-white p-6 rounded-lg shadow">
//         <h1 className="text-3xl font-bold mb-6">🍽 Food Order Details</h1>

//         <input
//           type="text"
//           name="name"
//           placeholder="Enter Full Name"
//           value={form.name}
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

//         <textarea
//           name="address"
//           placeholder="Enter Delivery Address"
//           value={form.address}
//           onChange={handleChange}
//           className="w-full border p-3 mb-3 rounded"
//         />

//         {/* ✅ LOCATION BUTTON */}
//         <button
//           onClick={getCurrentLocation}
//           className="w-full mb-4 bg-blue-600 text-white py-2 rounded-lg"
//         >
//           📍 Use Current Location
//         </button>

//         {/* ✅ GOOGLE MAP PREVIEW */}
//         {location && (
//           <iframe
//             title="map"
//             className="w-full h-48 mb-4 rounded"
//             src={`https://www.google.com/maps?q=${location.latitude},${location.longitude}&output=embed`}
//           ></iframe>
//         )}

//         <button
//           onClick={placeOrder}
//           className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold"
//         >
//           ✅ Make Payment
//         </button>
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
  });

  const [location, setLocation] = useState(null);
  const navigate = useNavigate();

  // ✅ LOAD CART
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // ✅ REMOVE ITEM
  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // ✅ INCREASE QTY
  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // ✅ DECREASE QTY
  const decreaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // ✅ TOTAL AMOUNT
  const amount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ✅ FORM CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ GET CURRENT LOCATION
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        setForm({
          ...form,
          address: `Lat: ${latitude}, Lng: ${longitude}`,
        });
      },
      () => {
        alert("❌ Location access denied");
      }
    );
  };

  // ✅ ✅ FINAL PAYMENT REDIRECT (FIXED)
  const placeOrder = () => {
    if (!form.name || !form.mobile || !form.address) {
      alert("❌ Please fill all details");
      return;
    }

    const orderData = {
      customer: form,
      items: cart,
      amount: amount,
    };

    localStorage.setItem("orderDetails", JSON.stringify(orderData));

    // ✅ PASS DATA TO PAYMENT PAGE
    navigate("/payment", {
      state: {
        amount: amount,
        type: "food",   // ✅ IMPORTANT
      },
    });
  };

  if (cart.length === 0) {
    return <div className="p-10 text-xl">🛒 Your cart is empty</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

      {/* ✅ CART SECTION */}
      <div>
        <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border p-4 mb-4 rounded"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-20 object-cover rounded"
            />

            <div className="flex-1">
              <h2 className="font-bold">{item.name}</h2>

              <div className="flex items-center gap-3 my-2">
                <button onClick={() => decreaseQty(item.id)} className="px-3 py-1 bg-gray-300 rounded">-</button>
                <span className="font-bold">{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)} className="px-3 py-1 bg-gray-300 rounded">+</button>
              </div>

              <p className="font-semibold">
                ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
              </p>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-600 text-white px-4 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}

        <h2 className="text-2xl font-bold text-right mt-4">
          Total Amount: ₹{amount}
        </h2>
      </div>

      {/* ✅ FOOD ORDER FORM */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6">🍽 Food Order Details</h1>

        <input type="text" name="name" placeholder="Enter Full Name"
          value={form.name} onChange={handleChange}
          className="w-full border p-3 mb-4 rounded" />

        <input type="text" name="mobile" placeholder="Enter Mobile Number"
          value={form.mobile} onChange={handleChange}
          className="w-full border p-3 mb-4 rounded" />

        <textarea name="address" placeholder="Enter Delivery Address"
          value={form.address} onChange={handleChange}
          className="w-full border p-3 mb-3 rounded" />

        <button
          onClick={getCurrentLocation}
          className="w-full mb-4 bg-blue-600 text-white py-2 rounded-lg"
        >
          📍 Use Current Location
        </button>

        {location && (
          <iframe
            title="map"
            className="w-full h-48 mb-4 rounded"
            src={`https://www.google.com/maps?q=${location.latitude},${location.longitude}&output=embed`}
          ></iframe>
        )}

        <button
          onClick={placeOrder}
          className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold"
        >
          ✅ Make Payment
        </button>
      </div>
    </div>
  );
}
