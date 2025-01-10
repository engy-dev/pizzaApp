import "./App.css";
import pizzaData from "./MockData.json";
import PizzaMenu from "./components/PizzaMenu.jsx";
import Header from "./components/Header.jsx";
import { CartProvider } from "./services/CartContext.js";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <CartProvider>
      <div>
        <Header />
        <Cart />
        <PizzaMenu />
      </div>
    </CartProvider>
  );
}

export default App;
