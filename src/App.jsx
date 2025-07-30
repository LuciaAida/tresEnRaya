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
              <Jugador nombre="Jugador 1" simbolo="X"/>
              <Jugador nombre="Jugador 2" simbolo="0"/>
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
