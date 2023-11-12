function htmlMemoryLocation(
    surface, 
    surfacePrise, 
    color, 
    colorPrise, 
    openingDirection, 
    openingDirectionPrise) {
    return /*html*/`
        <div>
            <table>
                <tr>
                    <th>
                        Collection
                    </th>
                    <th>
                        Info
                    </th>
                    <th>
                        Prise
                    </th>
                </tr>
                <tr>
                    <td>
                        Oberfläche
                    </td>
                    <td>
                        ${surface}
                    </td>
                    <td>
                        ${surfacePrise}
                    </td>
                </tr>
                <tr>
                    <td>
                        Farbe
                    </td>
                    <td>
                        ${color}
                    </td>
                    <td>
                        ${colorPrise}
                    </td>
                </tr>
                <tr>
                    <td>
                        Öffnungsrichtung
                    </td>
                    <td>
                        ${openingDirection}
                    </td>
                    <td>
                        ${openingDirectionPrise}
                    </td>
                </tr>
            </table>
        </div>
    `;
}