import { motion } from "framer-motion";

export default function HeaderClase() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: "20px",
        background: "#0f4c81",
        color: "white",
        borderRadius: "8px",
        textAlign: "center"
      }}
    >
      <h1>Plan de Clase Digital</h1>
    </motion.header>
  );
}