import React, { useState } from "react";
import { useCart } from "../services/CartContext";

const MakeYourPizza = () => {
  const { addToCart } = useCart();
  const [customPizza, setCustomPizza] = useState({
    base: "Regular Crust",
    sauce: "",
    cheese: "",
    toppings: [],
  });

  const sauces = ["Tomato", "BBQ", "Garlic", "Pesto"];
  const cheeses = ["Mozzarella", "Cheddar", "Parmesan", "Vegan Cheese"];
  const toppings = [
    "Pepperoni",
    "Mushrooms",
    "Onions",
    "Olives",
    "Bell Peppers",
    "Sausage",
    "Pineapple",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomPizza((prev) => ({ ...prev, [name]: value }));
  };

  const handleToppingChange = (topping) => {
    setCustomPizza((prev) => ({
      ...prev,
      toppings: prev.toppings.includes(topping)
        ? prev.toppings.filter((t) => t !== topping)
        : [...prev.toppings, topping],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pizzaName = `Custom Pizza (${customPizza.sauce} sauce, ${customPizza.cheese} cheese)`;
    const pizzaPrice = 10 + customPizza.toppings.length * 0.5;
    addToCart({ ...customPizza, name: pizzaName, price: pizzaPrice });
    alert("Custom pizza added to cart!");
  };

  return (
    <div className="make-your-pizza">
      <h2>Make Your Own Pizza</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Sauce:</label>
          <select
            name="sauce"
            value={customPizza.sauce}
            onChange={handleChange}
            required
          >
            <option value="">Select a sauce</option>
            {sauces.map((sauce) => (
              <option key={sauce} value={sauce}>
                {sauce}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Cheese:</label>
          <select
            name="cheese"
            value={customPizza.cheese}
            onChange={handleChange}
            required
          >
            <option value="">Select a cheese</option>
            {cheeses.map((cheese) => (
              <option key={cheese} value={cheese}>
                {cheese}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Toppings:</label>
          <div className="toppings-container">
            {toppings.map((topping) => (
              <label key={topping} className="topping-option">
                <input
                  type="checkbox"
                  checked={customPizza.toppings.includes(topping)}
                  onChange={() => handleToppingChange(topping)}
                />
                {topping}
              </label>
            ))}
          </div>
        </div>
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
};

export default MakeYourPizza;
