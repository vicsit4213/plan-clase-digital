import { motion } from "framer-motion";

export default function HeaderClase() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        background: "linear-gradient(135deg, #0f4c81 0%, #1e293b 100%)",
        color: "white",
        padding: "24px 30px",
        borderRadius: "16px",
        marginBottom: "24px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        textAlign: "center"
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.8rem", fontWeight: "bold" }}>
        Programación de Aplicaciones Web: Semana 7
      </h1>
      <p style={{ margin: "8px 0 0 0", fontSize: "0.95rem", opacity: 0.9 }}>
        👨‍🏫 <strong>Docente:</strong> Víctor Sitamul &nbsp;|&nbsp; ⏰ <strong>Horario:</strong> Sábados 7:00 - 9:20 AM
      </p>
    </motion.header>
  );
}