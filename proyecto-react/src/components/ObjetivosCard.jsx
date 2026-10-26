import { motion } from "framer-motion";

export default function ObjetivosCard({ objetivo }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ duration: 0.3 }}
      style={{
        padding: "16px",
        background: "#FFFDD0",
        borderRadius: "8px",
        margin: "10px 0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
      }}
    >
      <h3>Objetivo de Aprendizaje</h3>
      <p>{objetivo}</p>
    </motion.div>
  );
}