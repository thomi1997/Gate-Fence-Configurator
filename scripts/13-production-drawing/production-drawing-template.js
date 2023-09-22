function htmlProductionDrawing() {
    return /*html*/`
        <h2>(variable). Produktionszeichnung</h2>
        <div class="production-drawing-collection">
            <select onclick="addProductionDrawing()" id="production-drawing-select">
                <option disabled>bitte wählen</option>
                <option value="false">Nein</option>
                <option value="true">Ja [+99,99 €]</option>
            </select>
        </div>
    `;
}