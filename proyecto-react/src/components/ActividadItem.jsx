import { motion } from "framer-motion";
import { useState } from "react";

export default function ActividadItem({ titulo, tiempo, index }) {
  const [completada, setCompletada] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
      whileHover={{ scale: 1.02, x: 5 }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 20px",
        margin: "12px 0",
        background: completada ? "rgba(46, 125, 50, 0.15)" : "#FFFDD0",
        borderRadius: "12px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
        color: "#1e293b",
        border: completada ? "2px solid #2e7d32" : "2px solid transparent",
        transition: "background 0.3s ease"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <motion.span 
          animate={{ scale: completada ? [1, 1.3, 1] : 1 }}
          style={{ fontSize: "1.2rem" }}
        >
          {completada ? "✅" : "📌"}
        </motion.span>
        <div>
          <strong style={{ display: "block", fontSize: "1rem", color: completada ? "#166534" : "#1e293b" }}>
            {titulo}
          </strong>
          <span style={{ fontSize: "0.85rem", opacity: 0.7 }}>⏱️ Estimado: {tiempo}</span>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setCompletada(!completada)}
        style={{
          background: completada ? "#16a34a" : "#0f4c81",
          color: "white",
          border: "none",
          padding: "10px 18px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "0.85em",
          fontWeight: "bold",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      >
        {completada ? "Completado" : "Marcar avance"}
      </motion.button>
    </motion.div>
  );
}