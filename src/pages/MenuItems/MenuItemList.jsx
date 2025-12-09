

import { useEffect, useState } from "react";
import menuItemApi from "../../api/menuItemApi";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";

import item1 from "../../assets/menu/item1.jpg";
import item2 from "../../assets/menu/item2.jpg";
import item3 from "../../assets/menu/item3.jpg";
import item4 from "../../assets/menu/item4.jpg";
import item5 from "../../assets/menu/item5.jpg";
import item6 from "../../assets/menu/item6.jpg";
import item7 from "../../assets/menu/item7.jpg";
import item8 from "../../assets/menu/item8.jpg";
import item9 from "../../assets/menu/item9.jpg";
import item10 from "../../assets/menu/item10.jpg";

export default function MenuItemList() {
  const [menuItems, setMenuItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const menuImageMap = {
    1: item1, 2: item2, 3: item3, 4: item4, 5: item5,
    6: item6, 7: item7, 8: item8, 9: item9, 10: item10,
  };

  useEffect(() => {
    menuItemApi.getAllMenuItems().then((res) => {
      setMenuItems(res);
      const q = {};
      res.forEach((i) => (q[i.id] = 1));
      setQuantities(q);
    });

    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const addToCart = (item) => {
    const existing = cart.find((i) => i.id === item.id);

    let updated;
    if (existing) {
      updated = cart.map((i) =>
        i.id === item.id
          ? { ...i, quantity: i.quantity + quantities[item.id] }
          : i
      );
    } else {
      updated = [
        ...cart,
        { ...item, quantity: quantities[item.id], image: menuImageMap[item.id] },
      ];
    }

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    // alert("✅ Item Added to Cart");
  };

  const amount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">

      {/* ✅ MENU LIST */}
      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <Card key={item.id}>
            <img
              src={menuImageMap[item.id]}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p>₹{item.price}</p>

            <div className="flex gap-3 mt-3">
              <button onClick={() =>
                setQuantities({ ...quantities, [item.id]: Math.max(1, quantities[item.id] - 1) })
              }>-</button>

              <span>{quantities[item.id]}</span>

              <button onClick={() =>
                setQuantities({ ...quantities, [item.id]: quantities[item.id] + 1 })
              }>+</button>
            </div>

            <button
              onClick={() => addToCart(item)}
              className="w-full mt-3 bg-orange-600 text-white py-2 rounded"
            >
              Add To Cart
            </button>
          </Card>
        ))}
      </div>

      {/* ✅ SIDE CART */}
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="flex gap-2 mb-2">
                <img src={item.image} className="w-12 h-10" />
                <div>
                  <p>{item.name}</p>
                  <p>₹{item.price} × {item.quantity}</p>
                </div>
              </div>
            ))}

            <h3 className="font-bold mt-3">Total: ₹{amount}</h3>

            {/* ✅ THIS NOW ALWAYS GOES TO CART */}
            <button
              onClick={() => navigate("/cart")}
              className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg"
            >
              Proceed To Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}
