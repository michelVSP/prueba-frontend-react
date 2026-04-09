import { useEffect, useState } from 'react';
import axios from 'axios';

const ListaCatalogos = () => 
{
  const [catalogos, setCatalogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Llamada a de API de Spring Boot o algun contenedor, de momento desde dev
    axios.get('/api/v1/regiones/search') // uso de proxy definido vite.config.js
       .then(response => {
        setCatalogos(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al traer catálogo:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando datos de Oracle...</p>;

  return (
    <div style={{ padding: '20px'}}>
      <h1>Catálogo de Regiones por AXIOS</h1>
      <ul>
        {catalogos.map((item) => (
          <li key={item.cveReg} className="liEstilo">
            <strong>{item.cveReg}</strong> - {item.nombRegion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCatalogos;