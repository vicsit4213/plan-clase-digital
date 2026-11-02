import { motion } from "framer-motion";

export default function HeaderClase() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.02 }}
      style={{
        padding: "30px",
        background: "linear-gradient(135deg, #0f4c81 0%, #1e3a8a 50%, #3b82f6 100%)",
        color: "white",
        borderRadius: "16px",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(15, 76, 129, 0.4)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <h1 style={{ margin: "0 0 8px 0", fontSize: "2rem", letterSpacing: "1px" }}>🚀 Plan de Clase Digital</h1>
        <p style={{ margin: 0, opacity: 0.9, fontSize: "1.05rem", fontWeight: "300" }}>Innovación Interactiva y Tecnologías TIC</p>
      </motion.div>
    </motion.header>
  );
}