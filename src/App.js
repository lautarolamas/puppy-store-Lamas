import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
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
