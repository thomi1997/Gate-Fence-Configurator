function htmlDimensionsBoxConfiguration() {
    return /*html*/`
        <div class="configuration-column">
            <div class="collection-prise">
                <p>
                    Maße
                </p>
                <p>
                    ${currentDimensionsHeight[0]['prise-dimensions-height']} €
                    ${currentDimensionsWide[0]['prise-dimensions-wide']} €
                </p>
            </div>
            <span>
                Torhöhe: ${currentDimensionsHeight[0]['dimensions-height']} mm / Pfeilerabstand: ${currentDimensionsWide[0]['dimensions-wide']} mm
            </span>
        </div>
    `;
}