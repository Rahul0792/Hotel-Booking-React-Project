// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white text-center py-4 mt-10">
      <p className="text-sm">&copy; {new Date().getFullYear()} Hotel Booking System. All rights reserved.</p>
    </footer>
  );
}
