

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Hotel, Utensils, BedDouble } from "lucide-react";
// import hotelApi from "../../api/hotelApi";
// import Loader from "../../components/Loader";

// // Local images
// const hotelImages = [
//   "/src/assets/hotels/hotel1.jpg",
//   "/src/assets/hotels/hotel2.jpg",
//   "/src/assets/hotels/hotel3.jpg",
//   "/src/assets/hotels/hotel4.jpg",
//   "/src/assets/hotels/hotel5.jpg",
//   "/src/assets/hotels/hotel6.jpg",
//   "/src/assets/hotels/hotel7.jpg",
//   "/src/assets/hotels/hotel8.jpg",
//   "/src/assets/hotels/hotel9.jpg",
//   "/src/assets/hotels/hotel10.jpg",
// ];

// export default function Home() {
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchHotels = async () => {
//     const data = await hotelApi.getAllHotels();
//     setHotels(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchHotels();
//   }, []);

//   const defaultImage =
//     "https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?auto=format&fit=crop&w=1200&q=60";

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 p-10">

//       {/* ================= HERO SECTION ================= */}
//       <div className="text-center mt-12">
//         <h1 className="text-6xl font-extrabold text-blue-700 drop-shadow-md tracking-tight">
//           Find Your Perfect Stay
//         </h1>

//         <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
//           Explore luxury hotels, premium rooms, and fine-dining restaurants — all at your fingertips.
//         </p>

//         <Link
//           to="/hotels"
//           className="inline-block mt-8 px-10 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
//         >
//           Start Exploring
//         </Link>

//         {/* ✅ LOGIN / SIGNUP SECTION */}
//         <div className="mt-10 flex flex-col items-center gap-4">
//           <p className="text-gray-600 text-lg font-medium">
//             Not registered yet? Join us to unlock exclusive bookings!
//           </p>

//           <div className="flex gap-6">
//             <Link
//               to="/login"
//               className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
//             >
//               Login
//             </Link>

//             <Link
//               to="/register"
//               className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300 shadow-md"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* ================= FEATURE CARDS ================= */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 max-w-6xl mx-auto">

//         <Link
//           to="/hotels"
//           className="p-10 bg-white rounded-3xl border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group"
//         >
//           <div className="flex justify-center mb-4">
//             <Hotel className="h-16 w-16 text-blue-600 group-hover:scale-125 transition" />
//           </div>
//           <h2 className="text-2xl font-semibold group-hover:text-blue-600 transition">
//             Explore Hotels
//           </h2>
//           <p className="text-gray-500 mt-3">
//             Discover premium hotels and book instantly.
//           </p>
//         </Link>

//         <Link
//           to="/restaurants"
//           className="p-10 bg-white rounded-3xl border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group"
//         >
//           <div className="flex justify-center mb-4">
//             <Utensils className="h-16 w-16 text-green-600 group-hover:scale-125 transition" />
//           </div>
//           <h2 className="text-2xl font-semibold group-hover:text-green-600 transition">
//             Discover Restaurants
//           </h2>
//           <p className="text-gray-500 mt-3">
//             Reserve tables at top restaurants.
//           </p>
//         </Link>

//         <Link
//           to="/rooms"
//           className="p-10 bg-white rounded-3xl border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group"
//         >
//           <div className="flex justify-center mb-4">
//             <BedDouble className="h-16 w-16 text-purple-600 group-hover:scale-125 transition" />
//           </div>
//           <h2 className="text-2xl font-semibold group-hover:text-purple-600 transition">
//             Rooms & Suites
//           </h2>
//           <p className="text-gray-500 mt-3">
//             Choose rooms tailored for comfort.
//           </p>
//         </Link>

//       </div>

//       {/* ================= FEATURED HOTELS ================= */}
//       <div className="mt-24 max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
//           Featured Hotels
//         </h2>

//         {loading ? (
//           <Loader />
//         ) : hotels.length === 0 ? (
//           <p className="text-center text-gray-500 text-lg">No hotels available.</p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {hotels.map((hotel, index) => (
//               <div
//                 key={hotel.id}
//                 className="bg-white rounded-3xl shadow-lg border overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//               >
//                 <img
//                   src={hotelImages[index] || defaultImage}
//                   alt={hotel.name}
//                   className="h-48 w-full object-cover"
//                 />

//                 <div className="p-6">
//                   <h3 className="text-2xl font-semibold text-blue-700">
//                     {hotel.name}
//                   </h3>

//                   <p className="text-gray-500 mt-1">{hotel.location}</p>

//                   <p className="text-gray-700 mt-3 font-medium">
//                     ⭐ Rating: {hotel.rating}
//                   </p>

//                   <Link
//                     to={`/hotels/${hotel.id}`}
//                     className="mt-5 inline-block text-blue-600 font-medium hover:underline"
//                   >
//                     View Details →
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//     </div>
//   );
// }





import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Hotel, Utensils, BedDouble } from "lucide-react";
import hotelApi from "../../api/hotelApi";
import Loader from "../../components/Loader";

// Local images
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

export default function Home() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHotels = async () => {
    const data = await hotelApi.getAllHotels();
    setHotels(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const defaultImage =
    "https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?auto=format&fit=crop&w=1200&q=60";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 px-6 md:px-12 py-12">

      {/* ================= HERO SECTION ================= */}
      <div className="text-center max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 drop-shadow leading-tight">
          Find Your Perfect Stay
        </h1>

        <p className="text-gray-600 mt-5 text-lg md:text-xl leading-relaxed">
          Explore luxury hotels, premium rooms, and fine-dining restaurants — all at your fingertips.
        </p>

        <Link
          to="/hotels"
          className="inline-block mt-8 px-12 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Start Exploring
        </Link>

        {/* ✅ LOGIN / SIGNUP SECTION */}
        <div className="mt-12 flex flex-col items-center gap-5">
          <p className="text-gray-600 text-lg font-medium">
            Not registered yet? Join us to unlock exclusive bookings!
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/login"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300 shadow-md"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* ================= FEATURE CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-24 max-w-7xl mx-auto">

        <Link
          to="/hotels"
          className="p-10 bg-white/90 backdrop-blur rounded-3xl border shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group"
        >
          <div className="flex justify-center mb-5">
            <Hotel className="h-16 w-16 text-blue-600 group-hover:scale-125 transition" />
          </div>
          <h2 className="text-2xl font-semibold group-hover:text-blue-600 transition">
            Explore Hotels
          </h2>
          <p className="text-gray-500 mt-3">
            Discover premium hotels and book instantly.
          </p>
        </Link>

        <Link
          to="/restaurants"
          className="p-10 bg-white/90 backdrop-blur rounded-3xl border shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group"
        >
          <div className="flex justify-center mb-5">
            <Utensils className="h-16 w-16 text-green-600 group-hover:scale-125 transition" />
          </div>
          <h2 className="text-2xl font-semibold group-hover:text-green-600 transition">
            Discover Restaurants
          </h2>
          <p className="text-gray-500 mt-3">
            Reserve tables at top restaurants.
          </p>
        </Link>

        <Link
          to="/rooms"
          className="p-10 bg-white/90 backdrop-blur rounded-3xl border shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group"
        >
          <div className="flex justify-center mb-5">
            <BedDouble className="h-16 w-16 text-purple-600 group-hover:scale-125 transition" />
          </div>
          <h2 className="text-2xl font-semibold group-hover:text-purple-600 transition">
            Rooms & Suites
          </h2>
          <p className="text-gray-500 mt-3">
            Choose rooms tailored for comfort.
          </p>
        </Link>

      </div>

      {/* ================= FEATURED HOTELS ================= */}
      <div className="mt-28 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-gray-800 text-center">
          Featured Hotels
        </h2>

        {loading ? (
          <Loader />
        ) : hotels.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No hotels available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {hotels.map((hotel, index) => (
              <div
                key={hotel.id}
                className="bg-white/95 backdrop-blur rounded-3xl shadow-xl border overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={hotelImages[index] || defaultImage}
                  alt={hotel.name}
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-blue-700">
                    {hotel.name}
                  </h3>

                  <p className="text-gray-500 mt-1">{hotel.location}</p>

                  <p className="text-gray-700 mt-3 font-medium">
                    ⭐ Rating: {hotel.rating}
                  </p>

                  <Link
                    to={`/hotels/${hotel.id}`}
                    className="mt-5 inline-block text-blue-600 font-semibold hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
