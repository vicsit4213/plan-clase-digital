import HeaderClase from "./components/HeaderClase";
import ObjetivosCard from "./components/ObjetivosCard";
import ActividadItem from "./components/ActividadItem";

export default function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "30px auto", fontFamily: "sans-serif", padding: "0 20px" }}>
      <HeaderClase />
      <ObjetivosCard objetivo="Implementar animaciones fluidas y micro-interacciones con Framer Motion." />
      
      <div style={{ marginTop: "20px" }}>
        <h3>Actividades de la Clase</h3>
        <ActividadItem titulo="Configuración del entorno y dependencias" tiempo="15 min" />
        <ActividadItem titulo="Refactorización con propiedades motion" tiempo="25 min" />
        <ActividadItem titulo="Pruebas de rendimiento y smoke testing" tiempo="10 min" />
      </div>
    </div>
  );
}