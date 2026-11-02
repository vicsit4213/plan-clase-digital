import { motion } from "framer-motion";

export default function ObjetivosCard({ objetivo }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ 
        scale: 1.03, 
        rotateX: 3, 
        rotateY: -3, 
        boxShadow: "0 15px 35px rgba(255, 253, 208, 0.25)" 
      }}
      style={{
        padding: "22px",
        background: "linear-gradient(145deg, #FFFDD0 0%, #fef08a 100%)",
        borderRadius: "14px",
        margin: "20px 0",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        color: "#1e293b",
        borderLeft: "6px solid #0f4c81"
      }}
    >
      <h3 style={{ margin: "0 0 8px 0", color: "#0f4c81", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "8px" }}>
        🎯 Meta de Aprendizaje
      </h3>
      <p style={{ margin: 0, fontSize: "1rem", lineHeight: "1.5", color: "#334155" }}>
        {objetivo}
      </p>
    </motion.div>
  );
}