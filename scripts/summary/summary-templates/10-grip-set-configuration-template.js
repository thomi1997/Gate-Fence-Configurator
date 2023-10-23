function htmlGripSetBoxConfiguration() {
    return /*html*/`
        <div class="configuration-column">
            <div class="collection-prise">
                <p>
                    Griffgarnitur
                </p>
                <p class="summary-prise-color">
                    ${currentGripSet[0]['prise-grip-set']} €
                </p>
            </div>
            <span>
                ${currentGripSet[0]['grip-set']}
            </span>
        </div>
    `;
}