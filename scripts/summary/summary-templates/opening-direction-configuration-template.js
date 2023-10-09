function htmlOpeningDirectionConfiguration() {
    return /*html*/`
        <div class="configuration-column">
            <div class="collection-prise">
                <p>
                    Öffnungsrichtung
                </p>
                <p>
                    ${currentOpeningDirection[0]['prise-opening-direction']} €
                </p>
            </div>
            <span>
                ${currentOpeningDirection[0]['opening-direction']}
            </span>
        </div>
    `;
}