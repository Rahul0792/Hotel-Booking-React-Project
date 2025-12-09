import { useState } from "react";
import hotelApi from "../../api/hotelApi";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function AddHotel() {
  const [hotel, setHotel] = useState({
    name: "",
    location: "",
    rating: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await hotelApi.createHotel(hotel);
    navigate("/hotels");
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Add Hotel</h1>

      <input
        name="name"
        placeholder="Hotel Name"
        className="w-full border p-2 rounded-lg mb-3"
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Location"
        className="w-full border p-2 rounded-lg mb-3"
        onChange={handleChange}
      />

      <input
        name="rating"
        placeholder="Rating"
        className="w-full border p-2 rounded-lg mb-3"
        onChange={handleChange}
      />

      <Button text="Save Hotel" onClick={handleSubmit} />
    </div>
  );
}
