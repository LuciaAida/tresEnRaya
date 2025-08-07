import Header from "./Header.jsx"
import Jugador from "./componentes/Jugador.jsx"
import TableroJuego from "./componentes/TableroJuego.jsx"
import { useState } from "react";

function App() {
  const[jugadorActivo, setJugadorActivo] =useState('X');

  function cambiarJugador(){
    setJugadorActivo((jugadorActivo) => jugadorActivo ==='X' ? 'O':'X');
  }
  return (
    <div>
      <Header></Header>
      <main>
        <div id="contenedor-juego">
          <div>
            <ol id="jugadores" className="recuadro-jugador">
              <Jugador nombreInicial="Jugador 1" simbolo="X" estaActivo={jugadorActivo === 'X'}/>
              <Jugador nombreInicial="Jugador 2" simbolo="O" estaActivo={jugadorActivo === 'O'}/>
            </ol>
          </div>
          <TableroJuego cambioJugador={cambiarJugador} simboloJug={jugadorActivo}/>
        </div>

        Log
      </main>
    </div>
  )
}

export default App
