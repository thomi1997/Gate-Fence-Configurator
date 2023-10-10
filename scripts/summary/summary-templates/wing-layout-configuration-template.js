function htmlWingLayoutBoxConfiguration() {
    return /*html*/`
        <div class="configuration-column">
            <div class="collection-prise">
                <p>
                    Flügelaufteilung
                </p>
                <p>
                    ${currentWingLayout[0]['prise-wing-layout']} €
                </p>
            </div>
            <span>
                ${currentWingLayout[0]['wing-layout']}
            </span>
        </div>
    `;
}