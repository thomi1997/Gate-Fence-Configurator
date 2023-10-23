function htmlMountingTypePostBoxConfiguration() {
    return /*html*/`
        <div class="configuration-column">
            <div class="collection-prise">
                <p>
                    Befestigungsart der Pfosten
                </p>
                <p class="summary-prise-color">
                    ${currentMountingTypePost[0]['prise-mounting-type-post']} €
                </p>
            </div>
            <span>
                ${currentMountingTypePost[0]['mounting-type-post']}
            </span>
        </div>
    `;
}