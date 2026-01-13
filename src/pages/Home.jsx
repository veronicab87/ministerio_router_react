import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa"
import hero from "../assets/hero.jpg"
import "../pages/home.css"

export default function Home() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const eventDate = new Date("2026-02-01T19:00:00").getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const diff = eventDate - now

      if (diff <= 0) return setTime("¡Evento en vivo ahora!")

      const d = Math.floor(diff / (1000 * 60 * 60 * 24))
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const m = Math.floor((diff / (1000 * 60)) % 60)

      setTime(`${d} días ${h}h ${m}min`)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
      <div className="overlay">


        {/* CONTENIDO CENTRAL */}
        <motion.div
          className="hero-box"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="hero-sub">IGLESIA ONLINE</h3>
          <h1 className="hero-title">MINISTERIO SIEMBRA Y COSECHA DE MILES</h1>
          <p className="hero-text">
            Conéctate a nuestras reuniones, discipulados y tiempos de oración desde cualquier parte del mundo. Una comunidad internacional creciendo en fe, amor y propósito.
          </p>

          <div className="hero-buttons">
            <Link to="/meetings" className="btn-main">Ver reuniones</Link>
            <a href="https://meet.google.com" target="_blank" rel="noreferrer" className="btn-alt">Acceder a Meet</a>
          </div>

          <div className="countdown">
            <strong>⏳ Próxima reunión en:</strong>
            <p>{time}</p>
          </div>

          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
        </motion.div>

        <a href="https://wa.me/573000000000" target="_blank" rel="noreferrer" className="whatsapp-float">
          <FaWhatsapp />
        </a>
      </div>
    </section>
  )
}