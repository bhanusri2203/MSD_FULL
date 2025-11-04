import React, { useEffect } from "react";
import "./OrderSummary.css";

const OrderSummary = () => {
  let orderDetails = null;

  // ✅ Safely parse JSON
  try {
    const storedData = localStorage.getItem("orderDetails");
    orderDetails = storedData ? JSON.parse(storedData) : null;
  } catch (error) {
    console.error("⚠️ Error parsing orderDetails from localStorage:", error);
    orderDetails = null;
  }

  useEffect(() => {
    const saveOrderToDatabase = async () => {
      if (!orderDetails) return;

      try {
        const token = localStorage.getItem("token");

        // ✅ Check if token or data missing
        if (!token) {
          console.warn("⚠️ No token found — skipping order save.");
          return;
        }

        // ✅ Corrected backend URL
        const response = await fetch("https://msd-full-stack.onrender.com/api/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            items: orderDetails.items || [],
            totalPrice: orderDetails.total || 0,
          }),
        });

        const text = await response.text(); // ✅ first get text
        let data;
        try {
          data = JSON.parse(text);
        } catch {
          console.error("⚠️ Server response is not valid JSON:", text);
          return;
        }

        if (response.ok) {
          console.log("✅ Order saved successfully:", data.message);
        } else {
          console.error("❌ Order save failed:", data.message || data.error);
        }
      } catch (error) {
        console.error("⚠️ Error connecting to server:", error);
      }
    };

    saveOrderToDatabase();
  }, [orderDetails]);

  if (!orderDetails) {
    return <p>No order found!</p>;
  }

  return (
    <div className="order-summary-container">
      <h2>Order Summary</h2>
      <p>Date: {orderDetails.date}</p>
      <p>
        Token No: <strong>{orderDetails.token}</strong>
      </p>
      <ul>
        {orderDetails.items.map((item, index) => (
          <li key={index}>
            {item.name} × {item.quantity} — ₹{item.price * item.quantity}
          </li>
        ))}
        <h3>Total: ₹{orderDetails.total}</h3>
      </ul>
    </div>
  );
};

export default OrderSummary;
