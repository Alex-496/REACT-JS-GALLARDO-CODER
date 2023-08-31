import Navbar from '../components/NavBar';
import ItemDetailContainer from '../components/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos Tienda-Destiny"} />}  />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}