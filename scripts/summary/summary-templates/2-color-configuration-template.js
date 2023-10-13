function htmlColorConfiguration() {
    return /*html*/`
        <div class="configuration-column">
            <div class="collection-prise">
                <p>
                    Farbe der Pulverbeschichtung
                </p>
                <p>
                    ${currentColor[0]['prise-color']} €
                </p>
            </div>
            <div class="summary-color-box" style="background-color: ${currentColor[0]['color']};">
            </div>
        </div>
    `;
}