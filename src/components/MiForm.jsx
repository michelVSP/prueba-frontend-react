import { useState } from "react";

function MiForm()
{

     const [texto, setTexto] = useState(""); // Estado para guardar lo que escribes


     return (

        <div>
            <label >Mi Form:</label>
    
            <input  type="text" value={texto} onChange={(e) => setTexto(e.target.value)} 
        placeholder="Escribe aquí..."/> 
      
            <p>Lo que escribes es: {texto}</p>
        </div>
    )
}

export default MiForm;