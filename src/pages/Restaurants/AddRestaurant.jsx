import { useState } from "react";
import restaurantApi from "../../api/restaurantApi";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function AddRestaurant() {
  const [restaurant, setRestaurant] = useState({
    name: "",
    location: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await restaurantApi.createRestaurant(restaurant);
    navigate("/restaurants");
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Add Restaurant</h1>

      <input
        name="name"
        placeholder="Restaurant Name"
        className="w-full border p-2 rounded-lg mb-3"
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Location"
        className="w-full border p-2 rounded-lg mb-3"
        onChange={handleChange}
      />

      <Button text="Save Restaurant" onClick={handleSubmit} />
    </div>
  );
}
