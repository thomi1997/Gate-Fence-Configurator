function htmlDimensionsBoxConfiguration(priseEuro) {
    
    return /*html*/`
        <div class="configuration-column">
            <div class="collection-prise">
                <p>
                    Maße
                </p>
                <p class="summary-prise-color">
                    ${priseEuro} €
                </p>
            </div>
            <span>
                Torhöhe: ${currentDimensions[0]['dimensions-height'][0]['dimensions-height']} mm / Pfeilerabstand: ${currentDimensions[0]['dimensions-wide'][0]['dimensions-wide']} mm
            </span>
        </div>
    `;
}