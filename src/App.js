import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

const greeting = "$200";
let initial = 1;
let stock = 5;
const onAdd = (stock) => {
  if (stock > 0) {
    alert("Usted agrego productos al carrito de compras !!!");
  } else {
    return;
  }
};
function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemCount initial={initial} stock={stock} onAdd={onAdd} />
        <ItemListContainer greeting={greeting} />

        <p>Puppy Store loading . . .</p>
        <a
          className="App-link"
          href="https://portafolio-lamas.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Creado por Lautaro Lamas
        </a>
      </header>
    </div>
  );
}

export default App;
