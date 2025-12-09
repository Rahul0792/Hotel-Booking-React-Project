// src/api/roomApi.js
import axiosClient from "./axiosClient";

const BASE = "/api/rooms";

const roomApi = {
  getAllRooms: () =>
    axiosClient.get(BASE).then(res => res.data),

  getRoomById: (id) =>
    axiosClient.get(`${BASE}/${id}`).then(res => res.data),

  createRoom: (room) =>
    axiosClient.post(BASE, room).then(res => res.data),

  updateRoom: (id, room) =>
    axiosClient.put(`${BASE}/${id}`, room).then(res => res.data),

  deleteRoom: (id) =>
    axiosClient.delete(`${BASE}/${id}`).then(res => res.data),
};

export default roomApi;   // ✅ REQUIRED
