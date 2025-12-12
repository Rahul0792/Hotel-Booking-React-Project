import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

// Main Pages
import Home from "./pages/Home/Home";

// Hotels
import HotelList from "./pages/Hotels/HotelList";
import HotelDetails from "./pages/Hotels/HotelDetails";
import AddHotel from "./pages/Hotels/AddHotel";

// Rooms
import RoomList from "./pages/Rooms/RoomList";
import RoomDetails from "./pages/Rooms/RoomDetails";
import AddRoom from "./pages/Rooms/AddRoom";

// Restaurants
import RestaurantList from "./pages/Restaurants/RestaurantList";
import RestaurantDetails from "./pages/Restaurants/RestaurantDetails";
import AddRestaurant from "./pages/Restaurants/AddRestaurant";

// Menu & Cart
import MenuItemList from "./pages/MenuItems/MenuItemList";
import MenuItemDetails from "./pages/MenuItems/MenuItemDetails";
import AddMenuItem from "./pages/MenuItems/AddMenuItem";
import Cart from "./pages/Cart/Cart";

// Bookings
import FoodOrder from "./pages/Bookings/FoodOrder";
import DineBooking from "./pages/Bookings/DineBooking";
import HotelBooking from "./pages/Bookings/HotelBooking";
import AllBookings from "./pages/Bookings/AllBookings";

// Booking Success
import BookingSuccess from "./pages/BookingSuccess/BookingSuccess";

// Payment
import Payment from "./pages/payment/Payment";


// Users
import UserList from "./pages/Users/UserList";
import UserDetails from "./pages/Users/UserDetails";

// Auth
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

// Dashboard
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";

function LayoutWrapper() {
  const location = useLocation();

  const showSidebar =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/my-bookings") ||
    location.pathname.startsWith("/profile");

  return (
    <>
      {showSidebar ? <Sidebar /> : <Navbar />}

      <div
        className={`min-h-screen bg-gray-100 pt-20 pb-10 ${
          showSidebar ? "ml-64 p-10 pt-10" : ""
        }`}
      >
        <Routes>

          {/* ✅ MAIN */}
          <Route path="/" element={<Home />} />

          {/* ✅ AUTH */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ✅ DASHBOARD */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-bookings" element={<AllBookings />} />
          <Route path="/profile" element={<Profile />} />

          {/* ✅ HOTELS */}
          <Route path="/hotels" element={<HotelList />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/hotels/add" element={<AddHotel />} />

          {/* ✅ ROOMS */}
          <Route path="/rooms" element={<RoomList />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/rooms/add" element={<AddRoom />} />

          {/* ✅ RESTAURANTS */}
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route path="/restaurants/add" element={<AddRestaurant />} />

          {/* ✅ MENU ITEMS */}
          <Route path="/menu-items" element={<MenuItemList />} />
          <Route path="/menu-items/:id" element={<MenuItemDetails />} />
          <Route path="/menu-items/add" element={<AddMenuItem />} />

          {/* ✅ CART & FOOD */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/food-order" element={<FoodOrder />} />

          {/* ✅ ✅ ✅ FINAL HOTEL BOOKING FLOW */}
          <Route path="/booking/:roomId" element={<HotelBooking />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/booking-success" element={<BookingSuccess />} />

          {/* ✅ DINE BOOKING */}
          <Route path="/bookings/dine" element={<DineBooking />} />

          {/* ✅ ALL BOOKINGS */}
          <Route path="/bookings" element={<AllBookings />} />

          {/* ✅ USERS */}
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />

          {/* ✅ FALLBACK */}
          <Route path="*" element={<Home />} />

        </Routes>
      </div>

      {!showSidebar && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  );
}
