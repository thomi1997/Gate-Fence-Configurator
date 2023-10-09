function htmlMountingMethodHingesConfiguration() {
    return /*html*/`
        <div class="configuration-column">
            <div class="collection-prise">
                <p>
                    Montage der Torbänder
                </p>
                <p>
                    ${currentMountingGateHinges[0]['prise-mounting-gate-hinges']} €
                </p>
            </div>
            <span>
                ${currentMountingGateHinges[0]['mounting-gate-hinges']}
            </span>
        </div>
    `;
}