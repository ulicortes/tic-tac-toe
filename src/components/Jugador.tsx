import { useState } from "react";

export default function Jugador({ nombre, cc, cambio }: { nombre: string, cc: string, cambio: (n: string) => void }) {
    const [nombreJugador, setNombreJugador] = useState(nombre);
    const [editar, setEditar] = useState(true);

    return <div className="jugador">
        <h1 hidden={!editar}>{nombre} - {cc}</h1>
        <input hidden={editar} disabled={editar} type="text" value={nombreJugador} onChange={(e) => setNombreJugador(e.target.value)} />
        <button onClick={() => {setEditar(!editar); if(!editar) cambio(nombreJugador)}}>{!editar ? 'Guardar' : 'Editar'}</button>
    </div>
}