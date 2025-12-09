import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const userId = localStorage.getItem("userId");

  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // ✅ FETCH USER DATA
 useEffect(() => {
  if (!userId) return;

  axios.get(`http://localhost:8080/api/users/${userId}`)
    .then((res) => {
      setUser(res.data);

      // ✅ FIX IS HERE
      setForm({
        name: res.data.name || "",
        email: res.data.email || "",
        phone: res.data.phone || ""
      });
    })
    .catch((err) => {
      console.log("PROFILE FETCH ERROR:", err);
    });
}, [userId]);


  // ✅ INPUT HANDLER
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ UPDATE PROFILE (ONLY NAME, EMAIL, PHONE)
  const handleUpdate = () => {
    axios
      .put(`http://localhost:8080/api/users/${userId}`, {
        name: form.name,
        email: form.email,
        phone: form.phone
      })
      .then((res) => {
        setUser(res.data);
        setEditMode(false);
        alert("Profile Updated Successfully ✅");
      })
      .catch((err) => {
        console.log("UPDATE ERROR:", err);
        alert("Profile Update Failed ❌");
      });
  };

  if (!user) {
    return <div className="ml-64 p-10">Loading profile...</div>;
  }

  return (
    <div className="ml-64 p-10 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <div className="bg-white max-w-xl p-8 rounded-2xl shadow-lg">

        {!editMode ? (
          <>
            <div className="space-y-4">
              <p><b>Name:</b> {user.name}</p>
              <p><b>Email:</b> {user.email}</p>
              <p><b>Phone:</b> {user.phone}</p>
            </div>

            <button
              onClick={() => setEditMode(true)}
              className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-lg"
            >
              Edit Profile
            </button>
          </>
        ) : (
          <>
            <div className="space-y-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Name"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Email"
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Mobile Number"
              />
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={handleUpdate}
                className="bg-green-600 text-white px-6 py-2 rounded"
              >
                Save Changes
              </button>

              <button
                onClick={() => setEditMode(false)}
                className="bg-gray-400 text-white px-6 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
