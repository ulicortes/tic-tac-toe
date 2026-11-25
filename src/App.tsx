import { useState } from 'react'
import './App.css'
import Tablero from './components/Tablero'
import Jugador from './components/Jugador'
import { ManosGanadoras } from './types/Tipos';
import Historial from './components/Historial';

function App() {
  const [movimientos, setMovimiento] = useState(0);
  const [activo, setActivo] = useState<'X' | 'O'>('X')
  const [sectores, setSectores] = useState(['', '', '', '', '', '', '', '', '']);
  const [mensaje, setMensaje] = useState("");
  const [j1, setJ1] = useState("Jugador 1");
  const [j2, setJ2] = useState("Jugador 2");
  const [vj1, setVj1] = useState(0);
  const [vj2, setVj2] = useState(0);
  const [empate, setEmpate] = useState(0);

  const llenarTablero = (indice: number) => {
    let aux = [...sectores];
    aux[indice] = activo;
    setSectores(aux);
    setMovimiento(movimientos + 1);
    if (movimientos > 3) {
      ManosGanadoras.find((s) => {
        if (aux[s[0]] === activo && aux[s[1]] === activo && aux[s[2]] === activo) {
          activo == 'X' ? (setVj1(vj1 + 1), setMensaje("El ganador es: " + j1)) : (setVj2(vj2 + 1), setMensaje("El ganador es: " + j2));
        }
      })
    }
    if (movimientos === 8) {setMensaje("Empate"); setEmpate(empate + 1)}
    setActivo(activo === 'X' ? 'O' : 'X');
  }

  return (
    <div id='content'>
      {mensaje === "" && <>
        <h1>Juega {(activo == 'X' ? j1 : j2)}</h1>
        <div className='jugadores'>
          <Jugador nombre={j1} cc='X' cambio={setJ1} />
          <Tablero sectores={sectores} marcar={llenarTablero} />
          <Jugador nombre={j2} cc='O' cambio={setJ2} />
        </div>
      </>}
      {mensaje !== "" && <div id='reinicio'>
        <h1>{mensaje}</h1>
        <button onClick={() => { setSectores(['', '', '', '', '', '', '', '', '']); setMovimiento(0); setActivo('X'); setMensaje("") }}>Reiniciar</button>
      </div>
      }
      <Historial j1={j1} j2={j2} vj1={vj1} vj2={vj2} empates={empate} />
    </div>
  )
}

export default App
