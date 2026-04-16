import axios from "axios";
import { useState,useEffect } from "react";

function usePnlEstructura() {
    const [regiones, setRegiones] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/v1/regiones/search') // uso de proxy definido vite.config.js
            .then(response => {
                setRegiones(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error al traer catálogo:", error);
                setLoading(false);
            });

        axios.get('/api/v1/marcas/search') // uso de proxy definido vite.config.js
            .then(response => {
            setMarcas(response.data);
            setLoading(false);
            })
            .catch(error => {
                console.error("Error al traer catálogo:", error);
                setLoading(false);
            });
    }, [])

    return {regiones, marcas, loading }  
}; 

export default usePnlEstructura;