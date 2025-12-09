import { useState, useEffect } from "react";
import restaurantApi from "../../api/restaurantApi";
import menuItemApi from "../../api/menuItemApi";

export default function AddMenuItem() {
  const [form, setForm] = useState({ name: "", price: "", restaurantId: "" });
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    restaurantApi.getAllRestaurants().then(res => setRestaurants(res));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    menuItemApi.addMenuItem(form).then(() => alert("Menu Item Added!"));
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Menu Item</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full border p-3 rounded"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />

        <select
          className="w-full border p-3 rounded"
          value={form.restaurantId}
          onChange={(e) => setForm({ ...form, restaurantId: e.target.value })}
          required
        >
          <option value="">Select Restaurant</option>
          {restaurants.map((r) => (
            <option key={r.id} value={r.id}>{r.name}</option>
          ))}
        </select>

        <button className="w-full bg-blue-600 text-white py-3 rounded">
          Add Menu Item
        </button>
      </form>
    </div>
  );
}
