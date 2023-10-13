function htmlGripSetBoxConfiguration() {
    return /*html*/`
        <div class="configuration-column">
            <div class="collection-prise">
                <p>
                    Griffgarnitur
                </p>
                <p>
                    ${currentGripSet[0]['prise-grip-set']} €
                </p>
            </div>
            <span>
                ${currentGripSet[0]['grip-set']}
            </span>
        </div>
    `;
}