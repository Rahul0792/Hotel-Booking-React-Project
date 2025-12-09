import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// ✅ PROPERTY TYPE IMAGES
import hotelImg from "../../assets/property/hotels.jpg";
import apartmentImg from "../../assets/property/apartments.jpg";
import resortImg from "../../assets/property/resorts.jpg";
import villaImg from "../../assets/property/villas.jpg";
import cabinImg from "../../assets/property/cabins.jpg";
import hostelImg from "../../assets/property/hostels.jpg";

// ✅ CITY IMAGES
import mumbaiImg from "../../assets/cities/mumbai.jpg";
import puneImg from "../../assets/cities/pune.jpg";
import delhiImg from "../../assets/cities/delhi.jpg";
import goaImg from "../../assets/cities/goa.jpg";
import jaipurImg from "../../assets/cities/jaipur.jpg";

// ✅ HOTEL IMAGES FROM ASSETS
const hotelImages = [
  "/src/assets/hotels/hotel1.jpg",
  "/src/assets/hotels/hotel2.jpg",
  "/src/assets/hotels/hotel3.jpg",
  "/src/assets/hotels/hotel4.jpg",
  "/src/assets/hotels/hotel5.jpg",
  "/src/assets/hotels/hotel6.jpg",
  "/src/assets/hotels/hotel7.jpg",
  "/src/assets/hotels/hotel8.jpg",
  "/src/assets/hotels/hotel9.jpg",
  "/src/assets/hotels/hotel10.jpg",
];

// ✅ FALLBACK IMAGE
const defaultImage =
  "https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?auto=format&fit=crop&w=1200&q=60";

export default function Dashboard() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [deals, setDeals] = useState([]);
  const [filteredDeals, setFilteredDeals] = useState([]);

  useEffect(() => {
    const result = deals.filter(
      (hotel) =>
        hotel.city?.toLowerCase().includes(search.toLowerCase()) ||
        hotel.location?.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredDeals(result);
  }, [search, deals]);

  useEffect(() => {
    const fetchDeals = async () => {
      const res = await fetch("http://localhost:8080/api/hotels");
      const data = await res.json();
      setDeals(data);
      setFilteredDeals(data);
    };
    fetchDeals();
  }, []);

  const propertyTypes = [
    { name: "Hotels", image: hotelImg },
    { name: "Apartments", image: apartmentImg },
    { name: "Resorts", image: resortImg },
    { name: "Villas", image: villaImg },
    { name: "Cabins", image: cabinImg },
    { name: "Hostels", image: hostelImg },
  ];

  const cities = [
    { name: "Mumbai", image: mumbaiImg },
    { name: "Pune", image: puneImg },
    { name: "Delhi", image: delhiImg },
    { name: "Goa", image: goaImg },
    { name: "Jaipur", image: jaipurImg },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-100 via-white to-blue-100 min-h-screen">

      {/* ================= SEARCH ================= */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-16 text-center shadow-xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
          Find your perfect stay
        </h1>

        <div className="max-w-xl mx-auto bg-white rounded-full shadow-xl p-2 flex gap-2">
          <input
            className="w-full px-6 py-3 rounded-full outline-none text-gray-800"
            placeholder="Enter city like Pune, Mumbai..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      {/* ================= ✅ SEARCH RESULT ================= */}
      {search && (
        <section className="px-8 py-16 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
            Search Results for "{search}"
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredDeals.length === 0 && (
              <p className="text-gray-500">No properties found</p>
            )}

            {filteredDeals.map((deal, index) => (
              <div
                key={deal.id}
                className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-5 hover:-translate-y-1 hover:shadow-2xl transition"
              >
                <img
                  src={hotelImages[index] || defaultImage}
                  className="h-44 w-full object-cover rounded-xl mb-4"
                  alt={deal.name}
                />

                <h3 className="font-bold text-lg text-indigo-700">{deal.name}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  📍 {deal.location}, {deal.city}
                </p>

                <button
                  onClick={() => navigate(`/hotels/${deal.id}`)}
                  className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-full text-sm hover:bg-indigo-700 transition shadow-md"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= ✅ PROPERTY TYPE ================= */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Browse by property type
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {propertyTypes.map((type) => (
            <div
              key={type.name}
              onClick={() => navigate(`/search?type=${type.name}`)}
              className="cursor-pointer bg-white/80 backdrop-blur p-4 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition text-center"
            >
              <img
                src={type.image}
                className="h-24 w-full object-cover rounded-xl"
                alt={type.name}
              />
              <p className="mt-3 font-semibold text-indigo-700">{type.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ✅ TRENDING ================= */}
      <section className="px-8 py-16 bg-indigo-50">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Trending destinations
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {cities.map((city) => (
            <div
              key={city.name}
              onClick={() => navigate(`/search?city=${city.name}`)}
              className="cursor-pointer bg-white/80 backdrop-blur p-4 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition text-center"
            >
              <img
                src={city.image}
                className="h-24 w-full object-cover rounded-xl"
                alt={city.name}
              />
              <p className="mt-3 font-bold text-indigo-700">{city.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ✅ SPECIAL DEALS ================= */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Special Deals</h2>
          <Link to="/deals" className="text-indigo-600 font-semibold hover:underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.slice(0, 7).map((deal, index) => (
            <div
              key={deal.id}
              className="bg-white/85 backdrop-blur rounded-2xl shadow-xl p-5 hover:-translate-y-1 hover:shadow-2xl transition"
            >
              <img
                src={hotelImages[index] || defaultImage}
                className="h-44 w-full object-cover rounded-xl mb-4"
                alt={deal.name}
              />

              <h3 className="font-bold text-lg text-indigo-700">{deal.name}</h3>

              <p className="text-sm text-gray-600 mt-1">
                📍 {deal.location}
              </p>

              <p className="text-amber-600 text-sm mt-1 font-medium">
                ⭐ Rating: {deal.rating}/5
              </p>

              <p className="text-emerald-600 font-bold mt-2">
                ₹ {deal.price} / night
              </p>

              <button
                onClick={() => navigate(`/hotels/${deal.id}`)}
                className="mt-4 bg-indigo-600 text-white w-full py-2 rounded-full hover:bg-indigo-700 transition shadow-md"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
