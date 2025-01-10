import React from "react";
import { useCart } from "../services/CartContext";
import { FaTrash } from "react-icons/fa"; // Import the trash icon

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Add removeFromCart function

  return (
    <div className="cart-display">
      <h3>Cart ({cart.length})</h3>
      <ul>
        {cart.map((pizza, index) => (
          <li key={index}>
            {pizza.name}
            <button
              className="remove-item-btn"
              onClick={() => removeFromCart(index)}
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
