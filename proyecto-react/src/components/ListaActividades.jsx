import { useState, useEffect } from 'react';
import ActividadItem from './ActividadItem';

export default function ListaActividades() {
  const [registros, setRegistros] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Endpoint y Token de NocoDB
  const ENDPOINT_NOCODB = 'https://app.nocodb.com/api/v3/data/pwwjrloq71mp5cm/mnksm5d2dnp1lc3/records?pageSize=25'
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
    return (
      <div style={{ textAlign: 'center', padding: '30px', color: '#0f4c81', fontWeight: 'bold' }}>
        🔄 Cargando actividades dinámicas desde NocoDB Cloud...
      </div>
    );
  }

  return (
    <div>
      <h3 style={{ color: '#0f4c81', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        📋 Secuencia Didáctica (Persistencia NocoDB Cloud)
      </h3>
      
      {registros.length === 0 ? (
        <p style={{ color: '#64748b' }}>No se encontraron registros en la base de datos.</p>
      ) : (
        registros.map((item, index) => {
          const campos = item.fields || item;
          const tituloActividad = campos.Titulo || campos.titulo || campos.Title || campos.title || 'Sin título';
          const duracionActividad = campos.Duracion || campos.duracion || campos.Duration || campos.duration || '0 min';

          return (
            <ActividadItem 
              key={item.id || index}
              titulo={tituloActividad}
              tiempo={typeof duracionActividad === 'number' ? `${duracionActividad} min` : duracionActividad}
              index={index}
            />
          );
        })
      )}
    </div>
  );
}