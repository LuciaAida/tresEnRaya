import { useState } from "react";

export default function Jugador({nombreInicial, simbolo, estaActivo}){
    const[nombre, setNombre] =useState(nombreInicial);
    const[editando, setEditando] = useState(false);

    function poderEditar(){
        setEditando((editando) => !editando);
    }

    function cambiarNombreJug(evento){
        setNombre(evento.target.value); //valor que el usuario introduce
    }
    return(
        <li className={estaActivo ? 'activo' : undefined}>
            <span className="jugador-nombre">
                {editando ? <input type="text" required value={nombre} onChange={cambiarNombreJug}/> :  <span className="jugador-nombre">{nombre}</span>}
                <span className="jugador-simbolo">{simbolo}</span>
            </span>
            <button onClick={poderEditar}>
                {editando ? 'Guardar' : 'Editar'}
            </button>
        </li>
    )
}