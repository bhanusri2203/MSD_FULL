import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Handle order confirmation
  const handleOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderDetails = {
      items: cartItems,
      total: totalPrice,
      date: new Date().toLocaleString(),
      token: Math.floor(1000 + Math.random() * 9000), // random 4-digit token
    };

    // Save order details to localStorage for OrderSummary page
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

    // Clear cart after order
    setCartItems([]);

    // Redirect to Order Summary page
    navigate("/order-summary");
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Add some items!</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <div>
                  <strong>{item.name}</strong> (x{item.quantity})
                </div>
                <div>₹{item.price * item.quantity}</div>
              </li>
            ))}
          </ul>

          <h3>Total: ₹{totalPrice}</h3>

          <button className="order-btn" onClick={handleOrder}>
            Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
