// src/api/restaurantApi.js
import axiosClient from "./axiosClient";

const BASE = "/api/restaurants";

const restaurantApi = {
  getAllRestaurants: () =>
    axiosClient.get(BASE).then(res => res.data),

  getRestaurantById: (id) =>
    axiosClient.get(`${BASE}/${id}`).then(res => res.data),

  createRestaurant: (restaurant) =>
    axiosClient.post(BASE, restaurant).then(res => res.data),

  updateRestaurant: (id, restaurant) =>
    axiosClient.put(`${BASE}/${id}`, restaurant).then(res => res.data),

  deleteRestaurant: (id) =>
    axiosClient.delete(`${BASE}/${id}`).then(res => res.data),
};

export default restaurantApi;   // ✅ REQUIRED
