import usePnlEstructura from "./usePnlEstructura";
import  "../App.css";

function PanelEstructura() {

    const {regiones, marcas} = usePnlEstructura();

    return (

        <div>
            <label >Region:</label>

            <select>
                {
                    regiones.map(region => <option key={region.cveReg}> {region.nombRegion} </option>)
                }
            </select>

            <label>Marcas:</label>

            <select>
                {
                    marcas.map(marca => <option key={marca.cveMarca}> {marca.nombMarca} </option>)
                }
            </select>

        </div>
    )


}

export default PanelEstructura;