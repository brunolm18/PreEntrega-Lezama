import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="p-4">
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="¡Bienvenidos a TecnologyWord!" />}
          />
          <Route
            path="/category/:catid"
            element={<ItemListContainer greeting="¡Explora nuestras categorías!" />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} /> {/* Ruta 404 */}
        </Routes>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <small>Created by Coderhouse 2025.</small>
      </footer>
    </BrowserRouter>
  );
}

export default App;
