const BASE_URL = "http://localhost:8080/api/dine_bookings";

const dineBookingApi = {
  getAllDineBookings: async () => {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
      throw new Error("Failed to fetch dine bookings");
    }
    return res.json();
  },

  createDineBooking: async (data) => {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to create dine booking");
    }

    return res.json();
  },
};

export default dineBookingApi;
