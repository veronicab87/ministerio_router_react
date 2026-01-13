import { Link } from "react-router-dom"
import logo from "../assets/logo.jpg"   // Asegúrate que exista: src/assets/logo.jpg

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO + NOMBRE */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo Ministerio" />
          <span>Ministerio Siembra y Cosecha</span>
        </Link>

        {/* MENÚ */}
        <nav className="navbar-links">
          <Link to="/">Inicio</Link>
          <Link to="/sobre">Nosotros</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/login" className="btn-login">UNETE AHORA</Link>
        </nav>

      </div>
    </header>
  )
}


