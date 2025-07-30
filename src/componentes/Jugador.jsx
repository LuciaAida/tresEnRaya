import { useState } from "react";

export default function Jugador({nombre, simbolo}){
    const[editando, setEditando] = useState(false);

    function poderEditar(){
        setEditando(true);
    }
    return(
        <li>
            <span className="jugador-nombre">
                {editando ? <input type="text" required/> :  <span className="jugador-nombre">{nombre}</span>}
                <span className="jugador-simbolo">{simbolo}</span>
            </span>
            <button onClick={poderEditar}>
                Editar
            </button>
        </li>
    )
}