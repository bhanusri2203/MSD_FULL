import React, { useState } from "react";
import "./Menu.css";
import { useNavigate } from "react-router-dom";

const Menu = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "Soups" },
    { id: 2, name: "Starters" },
    { id: 3, name: "Main Course" },
    { id: 4, name: "Desserts" },
    { id: 5, name: "Drinks" },
  ];

  const menuItems = {
    Soups: [
      { id: 101, name: "Tomato Soup", price: 120 },
      { id: 102, name: "Sweet Corn Soup", price: 130 },
      { id: 103, name: "Hot and Sour Soup", price: 140 },
      { id: 104, name: "Manchow Soup", price: 135 },
      { id: 105, name: "Mushroom Soup", price: 150 },
      { id: 106, name: "Vegetable Clear Soup", price: 125 },
      { id: 107, name: "Cream of Broccoli Soup", price: 145 },
      { id: 108, name: "Lentil Soup", price: 110 },
      { id: 109, name: "Chicken Soup", price: 160 },
      { id: 110, name: "Mutton Soup", price: 180 },
    ],
    Starters: [
      { id: 201, name: "Paneer Tikka", price: 180 },
      { id: 202, name: "Chilli Paneer", price: 190 },
      { id: 203, name: "Veg Manchurian", price: 170 },
      { id: 204, name: "Spring Rolls", price: 160 },
      { id: 205, name: "Crispy Corn", price: 150 },
      { id: 206, name: "Gobi 65", price: 140 },
      { id: 207, name: "Chicken 65", price: 200 },
      { id: 208, name: "Chicken Lollipop", price: 210 },
      { id: 209, name: "Chicken Tikka", price: 220 },
      { id: 210, name: "Pepper Chicken", price: 230 },
      { id: 211, name: "Fish Fingers", price: 240 },
      { id: 212, name: "Apollo Fish", price: 250 },
      { id: 213, name: "Prawn Tempura", price: 260 },
      { id: 214, name: "Chicken Wings", price: 215 },
      { id: 215, name: "Mutton Seekh Kebab", price: 270 },
    ],
    "Main Course": [
      { id: 301, name: "Butter Chicken", price: 250 },
      { id: 302, name: "Veg Biryani", price: 220 },
      { id: 303, name: "Chicken Biryani", price: 260 },
      { id: 304, name: "Mutton Biryani", price: 300 },
      { id: 305, name: "Paneer Butter Masala", price: 230 },
      { id: 306, name: "Kadai Paneer", price: 240 },
      { id: 307, name: "Dal Makhani", price: 200 },
      { id: 308, name: "Palak Paneer", price: 220 },
      { id: 309, name: "Chicken Curry", price: 250 },
      { id: 310, name: "Mutton Rogan Josh", price: 310 },
      { id: 311, name: "Egg Curry", price: 190 },
      { id: 312, name: "Fish Curry", price: 270 },
      { id: 313, name: "Prawn Masala", price: 290 },
      { id: 314, name: "Vegetable Fried Rice", price: 200 },
      { id: 315, name: "Chicken Fried Rice", price: 230 },
    ],
    Desserts: [
      { id: 402, name: "Chocolate Brownie", price: 150 },
      { id: 403, name: "Butterscotch Ice Cream", price: 100 },
      { id: 404, name: "Vanilla Ice Cream", price: 80 },
      { id: 405, name: "Chocolate Lava Cake", price: 160 },
      { id: 406, name: "Strawberry Pastry", price: 120 },
      { id: 407, name: "Black Forest Cake", price: 140 },
      { id: 408, name: "Cheesecake", price: 180 },
      { id: 409, name: "Brownie with Ice Cream", price: 170 },
      { id: 410, name: "Rasmalai", price: 130 },
      { id: 411, name: "Caramel Custard", price: 140 },
      { id: 412, name: "Fruit Salad with Ice Cream", price: 150 },
      { id: 413, name: "Mango Mousse", price: 130 },
      { id: 414, name: "Red Velvet Pastry", price: 160 },
      { id: 415, name: "Dry Fruit Halwa", price: 110 },
    ],
    Drinks: [
      { id: 501, name: "Lemon Soda", price: 60 },
      { id: 502, name: "Cold Coffee", price: 100 },
      { id: 503, name: "Iced Tea", price: 90 },
      { id: 504, name: "Masala Chai", price: 50 },
      { id: 505, name: "Green Tea", price: 70 },
      { id: 506, name: "Filter Coffee", price: 80 },
      { id: 507, name: "Mango Milkshake", price: 120 },
      { id: 508, name: "Chocolate Milkshake", price: 130 },
      { id: 509, name: "Strawberry Milkshake", price: 120 },
      { id: 510, name: "Butterscotch Milkshake", price: 130 },
      { id: 511, name: "Fresh Lime Juice", price: 70 },
      { id: 512, name: "Watermelon Juice", price: 90 },
      { id: 513, name: "Pineapple Juice", price: 100 },
      { id: 514, name: "Mango Juice", price: 90 },
      { id: 515, name: "Tender Coconut Water", price: 60 },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  // ✅ Add to Cart - updates global state
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCart = [...cartItems, { ...item, quantity: 1 }];
    }

    setCartItems(updatedCart);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="menu-container">
      <h2>Our Menu</h2>

      {!selectedCategory ? (
        <div className="categories">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="category-card"
              onClick={() => setSelectedCategory(cat.name)}
            >
              <h3>{cat.name}</h3>
              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="items-section">
          <button className="back-btn" onClick={() => setSelectedCategory(null)}>
            ← Back
          </button>
          <h3>{selectedCategory}</h3>
          <div className="items-list">
            {menuItems[selectedCategory].map((item) => (
              <div key={item.id} className="item-card">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            ))}
          </div>
          <button className="go-to-cart-btn" onClick={() => navigate("/cart")}>
            Go to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
