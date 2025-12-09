// src/components/Card.jsx
export default function Card({ image, title, subtitle, description, children }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 border hover:shadow-xl transition">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-3"
        />
      )}

      <h2 className="text-xl font-semibold">{title}</h2>

      {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}

      {description && <p className="text-gray-700 mt-2 text-sm">{description}</p>}

      {/* buttons or extra content */}
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
