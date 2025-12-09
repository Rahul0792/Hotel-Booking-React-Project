// import { useState } from "react";
// import axios from "axios";

// export default function Register() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: ""
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       await axios.post("http://localhost:8080/api/users", form);
//       alert("User Registered Successfully ✅");
//       setLoading(false);

//       setForm({
//         name: "",
//         email: "",
//         password: "",
//         phone: ""
//       });

//     } catch (err) {
//       setError(err.response?.data || "Registration Failed ❌");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-purple-200 p-6">

//       <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200">

//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
//           Create Account 🚀
//         </h2>

//         <p className="text-center text-gray-500 mb-6 text-sm">
//           Register to start booking
//         </p>

//         {error && (
//           <div className="bg-red-100 text-red-700 p-3 rounded-lg text-center mb-4 border border-red-300">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">

//           {/* Name */}
//           <div>
//             <label className="block text-gray-700 mb-1 text-sm font-medium">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter full name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg border border-gray-300 text-gray-700
//               focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-gray-700 mb-1 text-sm font-medium">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter email"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg border border-gray-300 text-gray-700
//               focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-gray-700 mb-1 text-sm font-medium">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Create password"
//               value={form.password}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg border border-gray-300 text-gray-700
//               focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-gray-700 mb-1 text-sm font-medium">
//               Phone Number
//             </label>
//             <input
//               type="text"
//               name="phone"
//               placeholder="Enter phone number"
//               value={form.phone}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg border border-gray-300 text-gray-700
//               focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>

//           {/* Button */}
//           <button
//             disabled={loading}
//             className={`w-full py-3 rounded-lg text-white font-semibold text-lg transition-all duration-200 
//             ${loading ? "bg-purple-300" : "bg-purple-600 hover:bg-purple-700"}`}
//           >
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>

//         {/* Login Link */}
//         <p className="text-center text-gray-600 mt-6 text-sm">
//           Already have an account?{" "}
//           <a href="/login" className="text-purple-600 hover:text-purple-700 font-medium">
//             Login here
//           </a>
//         </p>

//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post("http://localhost:8080/api/users", form);

      alert("User Registered Successfully ✅");

      setForm({
        name: "",
        email: "",
        password: "",
        phone: ""
      });

    } catch (err) {
      console.log("REGISTER ERROR:", err.response);

      // ✅ If backend sends message
      if (err.response && err.response.data) {
        const msg = err.response.data.message || err.response.data;

        if (
          msg.toLowerCase().includes("email") ||
          msg.toLowerCase().includes("phone") ||
          msg.toLowerCase().includes("exist")
        ) {
          setError("Email or Mobile Number already exists ❌");
        } else {
          setError(msg);
        }
      } 
      // ✅ Server not reachable
      else {
        setError("Server not responding ❌");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-purple-200 p-6">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account 🚀
        </h2>

        <p className="text-center text-gray-500 mb-6 text-sm">
          Register to start booking
        </p>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg text-center mb-4 border border-red-300">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 mb-1 text-sm font-medium">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>

          {/* Button */}
          <button
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white font-semibold text-lg transition-all duration-200 
            ${loading ? "bg-purple-300" : "bg-purple-600 hover:bg-purple-700"}`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 hover:text-purple-700 font-medium">
            Login here
          </a>
        </p>

      </div>
    </div>
  );
}
