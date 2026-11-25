import { useState } from "react";

export default function Tablero({sectores, marcar}: {sectores: string[], marcar:(i: number) => void}) {
    const llenarTablero = (indice: number) => {
        marcar(indice);
    }
    return <div id="tablero">
        {sectores.map((s, i) => {
            return <div key={i} onClick={() => llenarTablero(i)} className="sector">{s}</div>
        })}
    </div>
}