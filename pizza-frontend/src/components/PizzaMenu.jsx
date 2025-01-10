import React from "react";
import PizzaCard from "./PizzaItem.jsx";
import pizzaData from "../MockData.json";

const PizzaMenu = () => {
  return (
    <div className="pizza-menu">
      {pizzaData.map((pizza) => (
        <PizzaCard key={pizza.pizza_id} pizza={pizza} />
      ))}
    </div>
  );
};

export default PizzaMenu;
