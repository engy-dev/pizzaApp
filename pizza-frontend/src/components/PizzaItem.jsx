import React, { useState, useEffect } from "react";
import pizzaData from "../MockData.json";
import Button from "./Button";
import { FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import { useCart } from "../services/CartContext";

const PizzaCard = ({ pizza }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [icon, setIcon] = useState("cart");
  const { addToCart } = useCart();

  useEffect(() => {
    let timer;
    if (isAnimating) {
      timer = setTimeout(() => {
        setIcon("check");
        setTimeout(() => {
          setIcon("cart");
          setIsAnimating(false);
        }, 2000);
      }, 600); // Wait for bounce animation to complete
    }
    return () => clearTimeout(timer);
  }, [isAnimating]);

  const animateIcon = () => {
    setIsAnimating(true);
    addToCart(pizza);
  };

  return (
    <div className="pizza-card">
      <img src={pizza.image} alt={pizza.name} className="pizza-image" />
      <h2>{pizza.name}</h2>
      <p className="price">${pizza.price.toFixed(2)}</p>
      <h3>Toppings:</h3>
      <ul>
        {pizza.toppings.map((topping, index) => (
          <li key={index}>{topping}</li>
        ))}
      </ul>
      <Button
        text={<span> Add to cart</span>}
        btnClass="cart-btn"
        icon={
          <span className={`icon-wrapper ${isAnimating ? "icon-bounce" : ""}`}>
            {icon === "cart" ? (
              <FaShoppingCart className="cart-btn-icon" />
            ) : (
              <FaCheckCircle className="cart-btn-icon check-icon" />
            )}
          </span>
        }
        onClick={animateIcon}
      />
    </div>
  );
};

export default PizzaCard;
