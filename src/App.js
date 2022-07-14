import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer/Footer";
import { WelcomeAndItems } from "./pages/WelcomeAndItems";
import Cart from "./components/Cart/Cart";
import testFirebase from "./firebase/testFirebase";
import { CartProvider } from "./components/context/CartContex";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChakraProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<WelcomeAndItems />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/category/:idCategory"
                element={<ItemListContainer />}
              />
              {/* <Route path="/testFirebase" element={<testFirebase />} /> */}
              <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            </Routes>
            <Footer />
          </CartProvider>
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
