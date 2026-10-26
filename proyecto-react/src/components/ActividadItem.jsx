import { motion } from "framer-motion";
import { useState } from "react";

export default function ActividadItem({ titulo, tiempo }) {
  const [completada, setCompletada] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 16px",
        margin: "8px 0",
        background: "#FFFDD0",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
      }}
    >
      <span>
        <strong>{titulo}</strong> ({tiempo})
      </span>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCompletada(!completada)}
        style={{
          background: completada ? "#2e7d32" : "#0f4c81",
          color: "white",
          border: "none",
          padding: "6px 12px",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "0.85em",
          fontWeight: "bold"
        }}
      >
        {completada ? "✓ Listo" : "Marcar avance"}
      </motion.button>
    </motion.div>
  );
}