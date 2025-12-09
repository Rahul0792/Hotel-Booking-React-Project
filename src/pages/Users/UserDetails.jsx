import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import userApi from "../../api/userApi";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    userApi.getUserById(id).then(setUser);
  }, [id]);

  if (!user) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <p className="mt-2 text-gray-600">{user.email}</p>
    </div>
  );
}
