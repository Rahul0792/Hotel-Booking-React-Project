// src/api/hotelBookingApi.js

import axiosClient from "./axiosClient";

// =========================
// GET ALL HOTEL BOOKINGS
// =========================
export const getHotelBookings = () => {
  return axiosClient.get("/hotel-bookings");
};

// =========================
// GET BOOKING BY ID
// =========================
export const getHotelBookingById = (id) => {
  return axiosClient.get(`/hotel-bookings/${id}`);
};

// =========================
// CREATE HOTEL BOOKING
// =========================
export const createHotelBooking = (data) => {
  return axiosClient.post("/hotel-bookings", data);
};

// =========================
// UPDATE BOOKING
// =========================
export const updateHotelBooking = (id, data) => {
  return axiosClient.put(`/hotel-bookings/${id}`, data);
};

// =========================
// DELETE BOOKING
// =========================
export const deleteHotelBooking = (id) => {
  return axiosClient.delete(`/hotel-bookings/${id}`);
};

// ================================
// 👇 Default export (Fixes error)
// ================================
export default {
  getHotelBookings,
  getHotelBookingById,
  createHotelBooking,
  updateHotelBooking,
  deleteHotelBooking,
};
