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
      { id: 101, name: "Tomato Soup", price: 120, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/tomato-soup-recipe.jpg" },
      { id: 102, name: "Sweet Corn Soup", price: 130, image: "https://www.cookwithmanali.com/wp-content/uploads/2021/01/Sweet-Corn-Soup.jpg" },
      { id: 103, name: "Hot and Sour Soup", price: 140, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/10/hot-and-sour-soup.jpg" },
      { id: 104, name: "Manchow Soup", price: 135, image: "https://www.cookwithkushi.com/wp-content/uploads/2021/12/best_vegetable_manchow_soup_recipe.jpg" },
      { id: 105, name: "Mushroom Soup", price: 150, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/mushroom-soup-recipe.jpg" },
      { id: 106, name: "Vegetable Clear Soup", price: 125, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/12/clear-soup.jpg" },
      { id: 107, name: "Cream of Broccoli Soup", price: 145, image: "https://www.cookwithmanali.com/wp-content/uploads/2020/10/Cream-of-Broccoli-Soup.jpg" },
      { id: 108, name: "Lentil Soup", price: 110, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/masoor-dal-soup.jpg" },
      { id: 109, name: "Chicken Soup", price: 160, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/chicken-soup.jpg" },
      { id: 110, name: "Mutton Soup", price: 180, image: "https://www.yummytummyaarthi.com/wp-content/uploads/2014/04/1-13.jpg" },
    ],
    Starters: [
      { id: 201, name: "Paneer Tikka", price: 180, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/03/paneer-tikka.jpg" },
      { id: 202, name: "Chilli Paneer", price: 190, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/chilli-paneer.jpg" },
      { id: 203, name: "Veg Manchurian", price: 170, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/veg-manchurian.jpg" },
      { id: 204, name: "Spring Rolls", price: 160, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/spring-rolls.jpg" },
      { id: 205, name: "Crispy Corn", price: 150, image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/02/crispy-corn-1.jpg" },
      { id: 206, name: "Gobi 65", price: 140, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/gobi-65.jpg" },
      { id: 207, name: "Chicken 65", price: 200, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/03/chicken-65.jpg" },
      { id: 208, name: "Chicken Lollipop", price: 210, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/10/chicken-lollipop.jpg" },
      { id: 209, name: "Chicken Tikka", price: 220, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/08/chicken-tikka.jpg" },
      { id: 210, name: "Pepper Chicken", price: 230, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/07/pepper-chicken.jpg" },
      { id: 211, name: "Fish Fingers", price: 240, image: "https://www.cookwithmanali.com/wp-content/uploads/2021/07/Fish-Fingers.jpg" },
      { id: 212, name: "Apollo Fish", price: 250, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/apollo-fish.jpg" },
      { id: 213, name: "Prawn Tempura", price: 260, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/08/prawn-tempura.jpg" },
      { id: 214, name: "Chicken Wings", price: 215, image: "https://www.cookwithmanali.com/wp-content/uploads/2021/09/Baked-Chicken-Wings.jpg" },
      { id: 215, name: "Mutton Seekh Kebab", price: 270, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/mutton-seekh-kebab.jpg" },
    ],
    "Main Course": [
      { id: 301, name: "Butter Chicken", price: 250, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/butter-chicken.jpg" },
      { id: 302, name: "Veg Biryani", price: 220, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/10/veg-biryani.jpg" },
      { id: 303, name: "Chicken Biryani", price: 260, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/08/chicken-biryani.jpg" },
      { id: 304, name: "Mutton Biryani", price: 300, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/09/mutton-biryani.jpg" },
      { id: 305, name: "Paneer Butter Masala", price: 230, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/paneer-butter-masala.jpg" },
      { id: 306, name: "Kadai Paneer", price: 240, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/kadai-paneer.jpg" },
      { id: 307, name: "Dal Makhani", price: 200, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/dal-makhani.jpg" },
      { id: 308, name: "Palak Paneer", price: 220, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/palak-paneer.jpg" },
      { id: 309, name: "Chicken Curry", price: 250, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/10/chicken-curry.jpg" },
      { id: 310, name: "Mutton Rogan Josh", price: 310, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/mutton-rogan-josh.jpg" },
      { id: 311, name: "Egg Curry", price: 190, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/egg-curry.jpg" },
      { id: 312, name: "Fish Curry", price: 270, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/fish-curry.jpg" },
      { id: 313, name: "Prawn Masala", price: 290, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/prawn-masala.jpg" },
      { id: 314, name: "Vegetable Fried Rice", price: 200, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/veg-fried-rice.jpg" },
      { id: 315, name: "Chicken Fried Rice", price: 230, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/chicken-fried-rice.jpg" },
    ],
    Desserts: [
      { id: 402, name: "Chocolate Brownie", price: 150, image: "https://www.cookwithmanali.com/wp-content/uploads/2021/04/Chocolate-Brownie.jpg" },
      { id: 403, name: "Butterscotch Ice Cream", price: 100, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/butterscotch-ice-cream.jpg" },
      { id: 404, name: "Vanilla Ice Cream", price: 80, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/vanilla-ice-cream.jpg" },
      { id: 405, name: "Chocolate Lava Cake", price: 160, image: "https://www.cookwithmanali.com/wp-content/uploads/2020/09/Chocolate-Lava-Cake.jpg" },
      { id: 406, name: "Strawberry Pastry", price: 120, image: "https://www.cookwithmanali.com/wp-content/uploads/2020/07/Strawberry-Pastry.jpg" },
      { id: 407, name: "Black Forest Cake", price: 140, image: "https://www.cookwithmanali.com/wp-content/uploads/2020/06/Black-Forest-Cake.jpg" },
      { id: 408, name: "Cheesecake", price: 180, image: "https://www.cookwithmanali.com/wp-content/uploads/2021/09/No-Bake-Cheesecake.jpg" },
      { id: 409, name: "Brownie with Ice Cream", price: 170, image: "https://www.cookwithmanali.com/wp-content/uploads/2021/03/Brownie-with-Ice-Cream.jpg" },
      { id: 410, name: "Rasmalai", price: 130, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/rasmalai.jpg" },
      { id: 411, name: "Caramel Custard", price: 140, image: "https://www.cookwithmanali.com/wp-content/uploads/2021/05/Caramel-Custard.jpg" },
      { id: 412, name: "Fruit Salad with Ice Cream", price: 150, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/08/fruit-salad-with-ice-cream.jpg" },
      { id: 413, name: "Mango Mousse", price: 130, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/mango-mousse.jpg" },
      { id: 414, name: "Red Velvet Pastry", price: 160, image: "https://www.cookwithmanali.com/wp-content/uploads/2021/09/Red-Velvet-Pastry.jpg" },
      { id: 415, name: "Dry Fruit Halwa", price: 110, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/08/dry-fruit-halwa.jpg" },
    ],
    Drinks: [
      { id: 501, name: "Lemon Soda", price: 60, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/lemon-soda.jpg" },
      { id: 502, name: "Cold Coffee", price: 100, image: "https://www.cookwithmanali.com/wp-content/uploads/2020/08/Cold-Coffee.jpg" },
      { id: 503, name: "Iced Tea", price: 90, image: "https://www.cookwithmanali.com/wp-content/uploads/2021/04/Iced-Tea.jpg" },
      { id: 504, name: "Masala Chai", price: 50, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/masala-chai.jpg" },
      { id: 505, name: "Green Tea", price: 70, image: "https://www.cookwithmanali.com/wp-content/uploads/2020/08/Green-Tea.jpg" },
      { id: 506, name: "Filter Coffee", price: 80, image: "https://www.cookwithmanali.com/wp-content/uploads/2021/02/Filter-Coffee.jpg" },
      { id: 507, name: "Mango Milkshake", price: 120, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/mango-milkshake.jpg" },
      { id: 508, name: "Chocolate Milkshake", price: 130, image: "https://www.cookwithmanali.com/wp-content/uploads/2021/07/Chocolate-Milkshake.jpg" },
      { id: 509, name: "Strawberry Milkshake", price: 120, image: "https://www.cookwithmanali.com/wp-content/uploads/2020/06/Strawberry-Milkshake.jpg" },
      { id: 510, name: "Butterscotch Milkshake", price: 130, image: "https://www.cookwithmanali.com/wp-content/uploads/2021/04/Butterscotch-Milkshake.jpg" },
      { id: 511, name: "Fresh Lime Juice", price: 70, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/fresh-lime-juice.jpg" },
      { id: 512, name: "Watermelon Juice", price: 90, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/09/watermelon-juice.jpg" },
      { id: 513, name: "Pineapple Juice", price: 100, image: "https://www.cookwithmanali.com/wp-content/uploads/2021/03/Pineapple-Juice.jpg" },
      { id: 514, name: "Mango Juice", price: 90, image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/10/mango-juice.jpg" },
      { id: 515, name: "Tender Coconut Water", price: 60, image: "https://www.cookwithmanali.com/wp-content/uploads/2021/07/Coconut-Water.jpg" },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

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
                <img
                  src={item.image}
                  alt={item.name}
                  className="item-image"
                  style={{ width: "120px", height: "100px", borderRadius: "8px", objectFit: "cover" }}
                />
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
