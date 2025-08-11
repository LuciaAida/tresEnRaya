import Header from "./Header.jsx"
import Jugador from "./componentes/Jugador.jsx"
import TableroJuego from "./componentes/TableroJuego.jsx"
import { useState } from "react";
import Registro from "./componentes/Registro.jsx";


function jugadorActualJuego(turnosJuego){
   //estado actual
  let jugadorActual = 'X';

  if((turnosJuego.length > 0) && (turnosJuego[0].jugador === 'X')){ //miramos último turno
      jugadorActual = 'O';
  }

  return jugadorActual;
}

function App() {
  const [turnosJuego, setTurnosJuego] = useState([]); //matriz datos
  
  const jugadorActivo = jugadorActualJuego(turnosJuego);

  function cambiarJugador(indiceFil, indiceCol){
   
    setTurnosJuego(antiguosTurnos => {
      //estado antiguo
      const jugadorActual = jugadorActualJuego(antiguosTurnos);

      const turnosActualizados = [
        { cuadrado:{ fila: indiceFil, col: indiceCol}, jugador: jugadorActual } ,
        ...antiguosTurnos,
      ];

      return turnosActualizados;
    });
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
          <TableroJuego cambioJugador={cambiarJugador} turnos={turnosJuego}/>
        </div>
        <Registro turnos={turnosJuego}/>
      </main>
    </div>
  )
}

export default App
