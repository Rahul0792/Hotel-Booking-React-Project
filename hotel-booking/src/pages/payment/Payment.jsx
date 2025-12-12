

import { useLocation, useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const amount = location.state?.amount;
  const type = location.state?.type;
  const bookingData = location.state?.bookingData || null;
  const dineBookingId = location.state?.dineBookingId || null;

  const handlePayment = async () => {
    if (!amount || !type) {
      alert("❌ Invalid Access");
      navigate("/");
      return;
    }

    const options = {
      key: "rzp_test_RnWne9Wybzn0Ws",
      amount: amount * 100,
      currency: "INR",
      name: "Hotel & Food Booking",
      description: type.toUpperCase(),

      handler: async function (response) {
        console.log("✅ Payment ID:", response.razorpay_payment_id);

        // ✅ HOTEL ONLINE PAYMENT (already working)
        if (type === "hotel") {
          const payload = {
            name: bookingData.name,
            email: bookingData.email,
            checkIn: bookingData.check_in,
            checkOut: bookingData.check_out,
            guests: Number(bookingData.guests),
            roomType: bookingData.roomType,
            paymentType: "ONLINE",
            paymentId: response.razorpay_payment_id,

            room: { id: bookingData.roomId },
            hotel: { id: bookingData.hotelId },
            user: { id: bookingData.userId },
          };

          await fetch("http://localhost:8080/api/hotel_bookings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          alert("✅ Hotel Booking Confirmed!");
          navigate("/booking-success");
        }

        // ✅ ✅ DINE ONLINE PAYMENT (FIXED)
        else if (type === "dine") {
          await fetch(
            `http://localhost:8080/api/dine_bookings/${dineBookingId}/mark-paid`,
            { method: "PUT" }
          );

          alert("✅ Dine Booking Confirmed!");
          navigate("/dine-booking-success");
        }

        // ✅ ✅ FOOD ONLINE PAYMENT (FIXED)
        else if (type === "food") {
          alert("✅ Food Order Successful!");
          localStorage.removeItem("cart");
          navigate("/food-order-success");
        }

        else navigate("/");
      },

      theme: { color: "#16a34a" },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md text-center">

        <h1 className="text-3xl font-bold mb-4 text-green-600">
          Razorpay Payment
        </h1>

        <p className="text-lg mb-6 font-bold">Pay ₹ {amount}</p>

        <button
          onClick={handlePayment}
          className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded text-lg font-bold"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
