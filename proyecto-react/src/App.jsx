import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ListaActividades from './components/ListaActividades';

export default function App() {
  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#f8fafc", 
      padding: "30px 15px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Encabezado Semana 7 */}
        <HeaderClase />

        {/* Competencias e Indicador */}
        <ObjetivosCard />

        {/* Lista Dinámica desde NocoDB */}
        <ListaActividades />
      </div>
    </div>
  );
}