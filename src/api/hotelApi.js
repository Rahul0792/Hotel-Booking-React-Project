// // src/api/hotelApi.js
// import axiosClient from "./axiosClient";

// const BASE = "/api/hotels";

// const hotelApi = {
//   getAllHotels: () =>
//     axiosClient.get(BASE).then(res => res.data),

//   getHotelById: (id) =>
//     axiosClient.get(`${BASE}/${id}`).then(res => res.data),

//   createHotel: (hotel) =>
//     axiosClient.post(BASE, hotel).then(res => res.data),

//   updateHotel: (id, hotel) =>
//     axiosClient.put(`${BASE}/${id}`, hotel).then(res => res.data),

//   deleteHotel: (id) =>
//     axiosClient.delete(`${BASE}/${id}`).then(res => res.data),
// };

// export default hotelApi;   // ✅ IMPORTANT



// src/api/hotelApi.js
import axiosClient from "./axiosClient";

const BASE = "/api/hotels";

const hotelApi = {
  getAllHotels: async () => {
    const res = await axiosClient.get(BASE);
    return res.data;   // VERY IMPORTANT
  },

  getById: async (id) => {
    const res = await axiosClient.get(`${BASE}/${id}`);
    return res.data;
  },

  createHotel: async (hotel) => {
    const res = await axiosClient.post(BASE, hotel);
    return res.data;
  },

  updateHotel: async (id, hotel) => {
    const res = await axiosClient.put(`${BASE}/${id}`, hotel);
    return res.data;
  },

  deleteHotel: async (id) => {
    const res = await axiosClient.delete(`${BASE}/${id}`);
    return res.data;
  }
};

export default hotelApi;
