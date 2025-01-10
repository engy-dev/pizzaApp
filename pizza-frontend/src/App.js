import "./App.css";
import pizzaData from "./MockData.json";
import PizzaMenu from "./components/PizzaMenu.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div>
      <Header />
      <PizzaMenu />
    </div>
  );
}

export default App;
