export default function PartidaFin({ganador, reiniciar}){
    return(
        <div id="fin-juego">
            <h2>Fin del juego</h2>
            {ganador && <p>El ganador es {ganador}</p>}
            {!ganador && <p>Empate</p>}
            <p>
                <button onClick={reiniciar}>Juega otra vez</button>
            </p>
        </div>
    )
}