import Header from "./Header.jsx"
import Jugador from "./componentes/Jugador.jsx"

function App() {
  

  return (
    <div>
      <Header></Header>
      <main>
        <div id="contenedor-juego">
          <div>
            <ol id="jugadores">
              <Jugador nombreInicial="Jugador 1" simbolo="X"/>
              <Jugador nombreInicial="Jugador 2" simbolo="0"/>
            </ol>
          </div>
          Tablón de juego
        </div>

        Log
      </main>
    </div>
  )
}

export default App
