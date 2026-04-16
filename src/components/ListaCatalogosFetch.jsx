import { useState } from 'react';

const ListaCatalogos = () => {
  const [datos, setDatos] = useState([]);

  // 1. Declaramos la función (método) con fetch
  const consultarRegiones = async () => {
    try {
      const response = await fetch('/api/v1/regiones/search');
      
      if (!response.ok) {
        throw new Error('Error en la conexión con Oracle');
      }

      const result = await response.json();
      setDatos(result); // Guardamos los datos en el estado
    } catch (error) {
      console.error("Hubo un problema:", error);
    }
  };

  return (
    <div>
      <h1>Catalogo de regiones por fetch</h1>
      
      <button className="botonEstilo" onClick={consultarRegiones}>
        Carga Regiones
      </button>

      <ul>
        {datos.map((reg) => (
          <li key={reg.cveReg} className="liEstilo">
            <strong>{reg.cveReg}</strong> - {reg.nombRegion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCatalogos;