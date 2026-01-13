// pages/Contact.jsx
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <motion.div className="p-6 max-w-xl mx-auto text-white"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Nombre" className="w-full p-3 rounded bg-dark text-white" />
        <input type="email" placeholder="Correo" className="w-full p-3 rounded bg-dark text-white" />
        <textarea placeholder="Mensaje" rows="5" className="w-full p-3 rounded bg-dark text-white" />
        <button type="submit" className="bg-primary text-black px-6 py-2 rounded font-bold">Enviar</button>
      </form>
    </motion.div>
  )
}