import React from "react";
import PizzaCard from "./PizzaItem.jsx";
import pizzaData from "../MockData.json";
import MakeYourPizza from "./MakeYourPizza.jsx";

const PizzaMenu = () => {
  return (
    <div className="pizza-menu">
      {pizzaData.map((pizza) => (
        <PizzaCard key={pizza.pizza_id} pizza={pizza} />
      ))}
      <MakeYourPizza />
    </div>
  );
};

export default PizzaMenu;
