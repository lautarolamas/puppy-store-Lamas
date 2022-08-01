import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer/Footer";
import { WelcomeAndItems } from "./pages/WelcomeAndItems";
import Cart from "./components/Cart/Cart";
import { CategoriesProvider } from "./components/context/CategoriesContext";
import { CartProvider } from "./components/context/CartContex";
import Checkout from "./components/Checkout/Checkout";
import { CartContainer } from "./components/Cart/CartContainer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChakraProvider>
          <CategoriesProvider>
            <CartProvider>
              <NavBar />
              <Routes>
                <Route path="/" element={<WelcomeAndItems />} />
                <Route path="/cart" element={<CartContainer />} />
                <Route
                  path="/category/:idCategory"
                  element={<ItemListContainer />}
                />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/item/:idItem" element={<ItemDetailContainer />} />
              </Routes>
              <Footer />
            </CartProvider>
          </CategoriesProvider>
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
