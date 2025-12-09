import { useState, useEffect } from "react";
import roomApi from "../../api/roomApi";
import hotelApi from "../../api/hotelApi";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function AddRoom() {
  const [room, setRoom] = useState({
    type: "",
    price: "",
    hotelId: ""
  });

  const [hotels, setHotels] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    hotelApi.getAllHotels().then(setHotels);
  }, []);

  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await roomApi.createRoom({
      ...room,
      hotel: { id: room.hotelId }
    });
    navigate("/rooms");
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Add Room</h1>

      <input
        name="type"
        placeholder="Room Type"
        className="w-full border p-2 rounded-lg mb-3"
        onChange={handleChange}
      />

      <input
        name="price"
        placeholder="Price"
        className="w-full border p-2 rounded-lg mb-3"
        onChange={handleChange}
      />

      <select name="hotelId" className="w-full border p-2 rounded-lg mb-3" onChange={handleChange}>
        <option>Select Hotel</option>
        {hotels.map((h) => (
          <option key={h.id} value={h.id}>{h.name}</option>
        ))}
      </select>

      <Button text="Save Room" onClick={handleSubmit} />
    </div>
  );
}
