import { motion } from "framer-motion";

export default function ObjetivosCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{
        background: "#ffffff",
        padding: "24px",
        borderRadius: "16px",
        marginBottom: "24px",
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
        borderLeft: "6px solid #0f4c81"
      }}
    >
      <h3 style={{ color: '#0f4c81', marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
        🎯 Indicador de Logro & Competencia
      </h3>
      <p style={{ color: "#334155", margin: "8px 0", fontSize: "0.95rem" }}>
        <strong>Indicador de Logro:</strong> Conecta aplicaciones web en React a bases de datos en la nube mediante API REST y llamadas asincrónicas con fetch.
      </p>
      <p style={{ color: "#64748b", margin: 0, fontSize: "0.9rem" }}>
        <strong>Competencia:</strong> Evolucionar la arquitectura de software de almacenamiento volátil local a persistencia dinámica en bases de datos relacionales en la nube.
      </p>
    </motion.div>
  );
}