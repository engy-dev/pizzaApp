import React from "react";
import { FaPizzaSlice, FaDog } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="pizza-header">
      <div className="header-content">
        <FaPizzaSlice className="logo" />
        <FaDog className="logo" />
        <h1>Pizza Mutt</h1>
      </div>
    </header>
  );
}
