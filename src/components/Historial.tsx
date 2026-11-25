export default function Historial({ j1, vj1, j2, vj2, empates }: { j1: string, vj1: number, j2: string, vj2: number, empates: number }) {
    return <div>
        <h1>Historial</h1>
        <table>
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">V</th>
                    <th scope="col">E</th>
                    <th scope="col">D</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">{j1}</td>
                    <td scope="row">{vj1}</td>
                    <td scope="row">{empates}</td>
                    <td scope="row">{vj2}</td>
                </tr>
                <tr>
                    <td scope="row">{j2}</td>
                    <td scope="row">{vj2}</td>
                    <td scope="row">{empates}</td>
                    <td scope="row">{vj1}</td>
                </tr>
            </tbody>
        </table>
    </div>
}