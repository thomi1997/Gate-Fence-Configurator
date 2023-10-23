function htmlMountingMethodConfiguration() {
    return /*html*/`
        <div class="configuration-column">
            <div class="collection-prise">
                <p>
                    Befästigungsart
                </p>
                <p class="summary-prise-color">
                    ${currentMountingMethod[0]['prise-mounting-method']} €
                </p>
            </div>
            <span>
                ${currentMountingMethod[0]['mounting-method']}
            </span>
        </div>
    `;
}