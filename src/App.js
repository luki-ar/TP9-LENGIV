import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Inicio from "./components/Inicio";
import AcercaDeNosotros from "./components/AcercaDeNosotros";
import Reservas from "./components/Reservas";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca" element={<AcercaDeNosotros />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>

      <footer className="footer">
        <h2>LOS ÁLAMOS</h2>
        <p>Un lugar para descansar y disfrutar.</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;