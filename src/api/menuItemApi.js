const BASE_URL = "http://localhost:8080/api/menu_items";

const menuItemApi = {

  getAllMenuItems: async () => {
    const res = await fetch(BASE_URL);

    if (!res.ok) {
      throw new Error("Failed to fetch menu items");
    }

    return res.json();
  },

  getMenuItemById: async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch menu item");
    }

    return res.json();
  },

  addMenuItem: async (data) => {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to add menu item");
    }

    return res.json();
  },
};

export default menuItemApi;
