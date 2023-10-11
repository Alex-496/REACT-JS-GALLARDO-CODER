import Navbar from '../components/NavBar';
import ItemDetailContainer from '../components/ItemDetail/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer.js';
import Index from '../components/CartContainer/index';
import { CartContextProvider } from '../components/context/CartContext';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default function Router() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos Tienda-Destiny"} />}  />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/checkout" element={< Index />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}