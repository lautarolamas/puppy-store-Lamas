import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ItemListContainer />
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
