import { motion } from "framer-motion"

export default function Meetings() {
  return (
    <div className="page">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 900, margin: "auto" }}
      >
        <h1 style={{ color: "#f5b04c" }}>Reuniones Online</h1>

        <p style={{ marginTop: 10, color: "#ccc" }}>
          Conéctate a nuestras reuniones en vivo mediante nuestras plataformas oficiales.
        </p>

        {/* Opciones */}
        <div style={{
          marginTop: 30,
          display: "grid",
          gap: 20
        }}>
          <div style={{ background: "#9b9fb6ff", padding: 20, borderRadius: 15 }}>
            <h3>📹 Reunión por Google Meet</h3>
            <p>Accede a nuestra sala oficial de reunión.</p>
            <a
              href="https://meet.google.com"
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              Entrar a Meet
            </a>
          </div>

          <div style={{ background: "#bcbfd1ff", padding: 20, borderRadius: 15 }}>
            <h3>📺 Canal oficial de YouTube</h3>
            <p>Mira nuestras transmisiones y prédicas grabadas.</p>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#cc0000",
                padding: "10px 20px",
                borderRadius: 25,
                color: "white",
                textDecoration: "none",
                display: "inline-block"
              }}
            >
              Ir a YouTube
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
