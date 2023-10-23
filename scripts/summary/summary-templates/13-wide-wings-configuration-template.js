function htmlWideWingsBoxConfiguration() {
    return /*html*/`
        <div class="configuration-column">
            <div class="collection-prise">
                <p>
                    Breite Gehflügel
                </p>
                <p class="summary-prise-color">
                    ${currentWideWings[0]['prise-wide-wings']} €
                </p>
            </div>
            <span>
                ${currentWideWings[0]['wide-wings']}
            </span>
        </div>
    `;
}