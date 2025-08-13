export default function TableroJuego({cambioJugador, tablero}){
    return(
        <ol id="tablero">
           {tablero.map((fila, indiceFil) => (
                <li key={indiceFil}>
                    <ol>
                        {fila.map((simboloJug, indiceCol) =>(
                        <li key={indiceCol}>
                            <button onClick={() => cambioJugador(indiceFil, indiceCol)} 
                                disabled={simboloJug !== null}>
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