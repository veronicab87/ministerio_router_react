import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <h3 className="footer-title">Ministerio Siembra y Cosecha de Miles</h3>

        <div className="footer-socials">
          <a 
            href="https://www.facebook.com/TUPAGINA" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a 
            href="https://www.instagram.com/TUUSUARIO" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a 
            href="https://www.youtube.com/@TUCANAL" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>

          <a 
            href="https://wa.me/573000000000" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Ministerio Siembra y Cosecha de Miles · Todos los derechos reservados
        </p>

      </div>
    </footer>
  )
}

