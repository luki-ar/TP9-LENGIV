import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        LOS ÁLAMOS
        <span>HOTEL & DESCANSO</span>
      </Link>

      <nav className="menu">
        <Link to="/">Inicio</Link>
        <Link to="/acerca">Nosotros</Link>
        <Link to="/reservas">Reservas</Link>
      </nav>

      <Link to="/reservas" className="boton-header">
        Reserva ahora!
      </Link>
    </header>
  );
}

export default Header;