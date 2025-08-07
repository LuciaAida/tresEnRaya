import { useState } from "react";

const tableroInicial = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function TableroJuego({cambioJugador, simboloJug}){
    const[tablero, setTablero] =useState(tableroInicial);

    function actualizarTablero(indiceFil, indiceCol){
        setTablero((tableroAnt) => {
            const tableroActualizado = [...tableroAnt.map(arrayInterno =>[...arrayInterno])]; //nuevo array(otros arrays), antiguos elementos
            tableroActualizado[indiceFil][indiceCol] = simboloJug;
            return tableroActualizado;
        });

        cambioJugador();
    }

    return(
        <ol id="tablero">
           {tablero.map((fila, indiceFil) => (
                <li key={indiceFil}>
                    <ol>
                        {fila.map((simboloJug, indiceCol) =>(
                        <li key={indiceCol}>
                            <button onClick={() => 
                                actualizarTablero(indiceFil, indiceCol)
                            }>
                                {simboloJug}
                            </button>
                        </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}