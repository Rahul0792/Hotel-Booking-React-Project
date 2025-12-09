// // import { useEffect, useState } from "react";
// // import hotelApi from "../../api/hotelApi";
// // import { Link, useNavigate } from "react-router-dom";

// // export default function HotelList() {
// //   const navigate = useNavigate();
// //   const [hotels, setHotels] = useState([]);
// //   const [search, setSearch] = useState("");

// //   useEffect(() => {
// //     hotelApi.getAllHotels().then(setHotels);
// //   }, []);

// //   const filtered = hotels.filter(
// //     (h) =>
// //       h.name?.toLowerCase().includes(search.toLowerCase()) ||
// //       h.location?.toLowerCase().includes(search.toLowerCase())
// //   );

// //   return (
// //     <div className="p-10">
// //       <input
// //         className="border p-3 mb-6 w-full rounded"
// //         placeholder="Search hotel or city"
// //         value={search}
// //         onChange={(e) => setSearch(e.target.value)}
// //       />

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         {filtered.map((hotel) => (
// //           <div key={hotel.id} className="border rounded shadow">
// //             <img src={hotel.image_url} className="h-48 w-full object-cover" />
// //             <div className="p-4">
// //               <h3 className="font-bold">{hotel.name}</h3>
// //               <p>{hotel.location}</p>
// //               <p>⭐ {hotel.rating} · ₹{hotel.price}</p>

// //               <Link
// //                 to={`/hotels/${hotel.id}`}
// //                 className="text-blue-600 mt-3 inline-block"
// //               >
// //                 View Details
// //               </Link>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// //============================================================================


// import { useEffect, useState } from "react";
// import hotelApi from "../../api/hotelApi";
// import { Link, useNavigate } from "react-router-dom";

// export default function HotelList() {
//   const navigate = useNavigate();
//   const [hotels, setHotels] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     hotelApi.getAllHotels().then(setHotels);
//   }, []);

//   const filtered = hotels.filter(
//     (h) =>
//       h.name?.toLowerCase().includes(search.toLowerCase()) ||
//       h.location?.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-10">
//       <input
//         className="border p-3 mb-6 w-full rounded"
//         placeholder="Search hotel or city"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {filtered.map((hotel) => (
//           <div key={hotel.id} className="border rounded shadow">
//             <img
//               src={hotel.image_url}
//               className="h-48 w-full object-cover"
//               alt={hotel.name}
//             />

//             <div className="p-4">
//               <h3 className="font-bold text-lg">{hotel.name}</h3>
//               <p className="text-gray-600">{hotel.location}</p>
//               <p className="mt-1">
//                 ⭐ {hotel.rating} · ₹{hotel.price}
//               </p>

//               {/* ✅ BUTTONS */}
//               <div className="mt-4 flex justify-between items-center">
//                 {/* View Details */}
//                 <Link
//                   to={`/hotels/${hotel.id}`}
//                   className="text-blue-600 font-medium"
//                 >
//                   View Details
//                 </Link>

//                 {/* ✅ Book Room Button */}
//                 <button
//                   onClick={() => navigate(`/rooms?hotelId=${hotel.id}`)}
//                   className="bg-blue-600 text-white px-6 py-4 rounded"
//                 >
//                   Book Room
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


//----------------------------------------------


// import { useEffect, useState } from "react";
// import hotelApi from "../../api/hotelApi";
// import { Link, useNavigate } from "react-router-dom";
// import Loader from "../../components/Loader";

// // ✅ SAME IMAGE SET AS HOME
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

// // ✅ FALLBACK IMAGE
// const defaultImage =
//   "https://images.unsplash.com/photo-1501117716987-c8e1ecb210ff?auto=format&fit=crop&w=1200&q=60";

// export default function HotelList() {
//   const navigate = useNavigate();
//   const [hotels, setHotels] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     hotelApi
//       .getAllHotels()
//       .then((data) => {
//         setHotels(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   const filtered = hotels.filter(
//     (h) =>
//       h.name?.toLowerCase().includes(search.toLowerCase()) ||
//       h.location?.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-10 min-h-screen bg-gray-50">
//       {/* ✅ SEARCH */}
//       <input
//         className="border p-3 mb-8 w-full rounded shadow-sm"
//         placeholder="Search hotel or city"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* ✅ LOADER */}
//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {filtered.map((hotel, index) => (
//             <div
//               key={hotel.id}
//               className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
//             >
//               {/* ✅ IMAGE FROM ASSETS */}
//               <img
//                 src={hotelImages[index] || defaultImage}
//                 className="h-52 w-full object-cover"
//                 alt={hotel.name}
//               />

//               <div className="p-5">
//                 <h3 className="font-bold text-xl">{hotel.name}</h3>
//                 <p className="text-gray-600">{hotel.location}</p>

//                 <p className="mt-2 font-medium">
//                   ⭐ {hotel.rating} · ₹{hotel.price}
//                 </p>

//                 {/* ✅ ACTION BUTTONS */}
//                 <div className="mt-5 flex justify-between items-center">
//                   {/* View Details */}
//                   <Link
//                     to={`/hotels/${hotel.id}`}
//                     className="text-blue-600 font-semibold"
//                   >
//                     View Details
//                   </Link>

//                   {/* ✅ Book Room */}
//                   <button
//                     onClick={() => navigate(`/rooms?hotelId=${hotel.id}`)}
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
//                   >
//                     Book Room
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import hotelApi from "../../api/hotelApi";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

// ✅ SAME IMAGE SET AS HOME
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

export default function HotelList() {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    hotelApi
      .getAllHotels()
      .then((data) => {
        setHotels(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = hotels.filter(
    (h) =>
      h.name?.toLowerCase().includes(search.toLowerCase()) ||
      h.location?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-8 py-16 min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50">

      {/* ✅ SEARCH */}
      <div className="max-w-5xl mx-auto mb-14">
        <input
          className="w-full px-6 py-4 rounded-full shadow-xl border outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search hotel or city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ✅ LOADER */}
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {filtered.map((hotel, index) => (
            <div
              key={hotel.id}
              className="bg-white/90 backdrop-blur rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* ✅ IMAGE FROM ASSETS */}
              <img
                src={hotelImages[index] || defaultImage}
                className="h-56 w-full object-cover"
                alt={hotel.name}
              />

              <div className="p-6">
                <h3 className="font-bold text-2xl text-blue-700">
                  {hotel.name}
                </h3>

                <p className="text-gray-600 mt-1">{hotel.location}</p>

                <p className="mt-3 font-semibold text-gray-700">
                  ⭐ {hotel.rating} · ₹{hotel.price}
                </p>

                {/* ✅ ACTION BUTTONS */}
                <div className="mt-6 flex justify-between items-center">
                  {/* View Details */}
                  <Link
                    to={`/hotels/${hotel.id}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    View Details →
                  </Link>

                  {/* ✅ Book Room */}
                  <button
                    onClick={() => navigate(`/rooms?hotelId=${hotel.id}`)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md transition"
                  >
                    Book Room
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
