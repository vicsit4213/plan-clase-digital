import { useState, useEffect } from 'react';
import ActividadItem from './ActividadItem';

export default function ListaActividades() {
  const [registros, setRegistros] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Tus credenciales y endpoint de NocoDB Cloud
  const ENDPOINT_NOCODB = 'https://app.nocodb.com/api/v3/data/pwwjrloq71mp5cm/mnksm5d2dnp1lc3/records?pageSize=25';
  const TOKEN_ACCESO = 'nc_pat_YLB5OIswuFdyiF8lCLmOEdfsVFSoSS99t61qRkAP';

  useEffect(() => {
    fetch(ENDPOINT_NOCODB, {
      method: 'GET',
      headers: {
        'xc-token': TOKEN_ACCESO,
        'Content-Type': 'application/json'
      }
    })
      .then(respuesta => respuesta.json())
      .then(datos => {
        const lista = datos.records || datos.list || [];
        setRegistros(lista);
        setCargando(false);
      })
      .catch(error => {
        console.error('Error al conectar con NocoDB:', error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p style={{ textAlign: 'center', padding: '20px' }}>Cargando actividades desde la nube...</p>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: '0 auto' }}>
      <h2 style={{ color: '#0f4c81', marginBottom: '16px' }}>📋 Plan de Clase: Actividades Dinámicas</h2>
      
      {registros.length === 0 ? (
        <p>No se encontraron registros en la base de datos.</p>
      ) : (
        registros.map((item, index) => {
          const campos = item.fields || item;
          const tituloActividad = campos.Titulo || campos.titulo || campos.Title || campos.title || 'Sin título';
          const duracionActividad = campos.Duracion || campos.duracion || campos.Duration || campos.duration || '0 min';

          return (
            <ActividadItem 
              key={item.id || index}
              titulo={tituloActividad}
              tiempo={duracionActividad}
              index={index}
            />
          );
        })
      )}
    </div>
  );
}
