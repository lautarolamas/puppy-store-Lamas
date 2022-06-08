import "./App.css";
import "./components/NavBar.js";
import ResponsiveAppBar from "./components/NavBar.js";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
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
