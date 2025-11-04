import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cartItems = [], setCartItems }) => {
  const navigate = useNavigate();

  // Calculate total price safely
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );

  // Handle order confirmation
  const handleOrder = () => {
    if (!cartItems || cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderDetails = {
      items: cartItems,
      total: totalPrice,
      date: new Date().toLocaleString(),
      token: Math.floor(1000 + Math.random() * 9000), // random 4-digit token
    };

    // Save order details to localStorage
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

    // Clear cart after placing the order
    setCartItems([]);

    // Redirect to order summary
    navigate("/order-summary");
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {(!cartItems || cartItems.length === 0) ? (
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

          <div className="cart-buttons">
            <button
              className="order-btn"
              onClick={handleOrder}
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "10px 20px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Place Order
            </button>

            <button
              className="back-btn"
              onClick={() => navigate("/menu")}
              style={{
                backgroundColor: "orange",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "10px 20px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Back to Menu
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
