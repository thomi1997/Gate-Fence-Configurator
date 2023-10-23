function htmlProductionDrawingBoxConfiguration() {
    return /*html*/`
        <div class="configuration-column">
            <div class="collection-prise">
                <p>
                    Produktionszeichnung
                </p>
                <p class="summary-prise-color">
                    ${currentProductionDrawing[0]['prise-production-drawing']} €
                </p>
            </div>
            <span>
                ${currentProductionDrawing[0]['production-drawing']}
            </span>
        </div>
    `;
}