import Header from "./Header.jsx"
import Jugador from "./componentes/Jugador.jsx"
import TableroJuego from "./componentes/TableroJuego.jsx"
import { useState } from "react";
import PartidaFin from "./componentes/Fin.jsx";
import { COMBINACIONES_GANADORAS } from "./Combinaciones-ganadoras.js";


const tableroInicial = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

function jugadorActualJuego(turnosJuego){
   //estado actual
  let jugadorActual = 'X';

  if((turnosJuego.length > 0) && (turnosJuego[0].jugador === 'X')){ //miramos último turno
      jugadorActual = 'O';
  }

  return jugadorActual;
}

function App() {
  const [jugadores, setJugadores]= useState({
    'X':'Jugador 1',
    'O':'Jugador 2'
  });
  const [turnosJuego, setTurnosJuego] = useState([]); //matriz datos

  const jugadorActivo = jugadorActualJuego(turnosJuego);

  let tablero = [...tableroInicial.map(array => [...array])]; //sobreescribir con datos de turnos

    for(const turno of turnosJuego){
        const{ cuadrado, jugador} = turno;
        const{fila, col} = cuadrado;

        tablero[fila][col] = jugador;
    }

  let ganador;

  for(const combinacion of COMBINACIONES_GANADORAS){
    const primerSimbolo = tablero[combinacion[0].fila][combinacion[0].col];
    const segundoSimbolo = tablero[combinacion[1].fila][combinacion[1].col];
    const tercerSimbolo = tablero[combinacion[2].fila][combinacion[2].col];

    if(primerSimbolo && (primerSimbolo=== segundoSimbolo) && (primerSimbolo == tercerSimbolo)){
      ganador = jugadores[primerSimbolo];
    }
  }

  const hayEmpate = turnosJuego.length === 9 && !ganador;

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

  function volverAJugar(){
    setTurnosJuego([]);
  }

  function nombreCambiarJugador(simbolo, nuevoNombre){
    setJugadores(antiguosJug => {
      return{
        ...antiguosJug,
        [simbolo]: nuevoNombre
      }
    });
  }

  return (
    <div>
      <Header></Header>
      <main>
        <div id="contenedor-juego">
            <ol id="jugadores" className="recuadro-jugador">
              <Jugador nombreInicial="Jugador 1" simbolo="X" estaActivo={jugadorActivo === 'X'} cambiarNombre={nombreCambiarJugador}/>
              <Jugador nombreInicial="Jugador 2" simbolo="O" estaActivo={jugadorActivo === 'O'} cambiarNombre={nombreCambiarJugador}/>
            </ol>
          {(ganador || hayEmpate)
             &&(
            <PartidaFin ganador={ganador} reiniciar={volverAJugar}/>
          )}
          <TableroJuego cambioJugador={cambiarJugador} tablero={tablero}/>
        </div>
      </main>
    </div>
  )
}

export default App;
