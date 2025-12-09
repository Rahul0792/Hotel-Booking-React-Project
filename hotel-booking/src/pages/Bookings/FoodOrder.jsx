import { useState } from "react";

export default function FoodOrder() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("✅ Order Placed Successfully!");
    localStorage.removeItem("cart");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🍽 Food Order Details</h1>

      <input
        type="text"
        name="name"
        placeholder="Enter Full Name"
        value={form.name}
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

      <textarea
        name="address"
        placeholder="Enter Delivery Address"
        value={form.address}
        onChange={handleChange}
        className="w-full border p-3 mb-4 rounded"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-orange-600 text-white py-3 rounded-lg"
      >
        ✅ Confirm Order
      </button>
    </div>
  );
}
