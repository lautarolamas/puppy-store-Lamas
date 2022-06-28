import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

// const onAdd = (stock) => {
//   if (stock > 0) {
//     alert("Usted agrego productos al carrito de compras !!!");
//   } else {
//     return;
//   }
// };
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:idCategory"
              element={<ItemListContainer />}
            />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          </Routes>
          <div>ACA VA EL FOOTER </div>
        </BrowserRouter>
        <header className="">
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
    </ChakraProvider>
  );
}

export default App;
