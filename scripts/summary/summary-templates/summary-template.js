function htmlSummary() {
    return /*html*/`
        <div class="summary-content">
            <div class="base-price-div">
                <h2>
                    Ihre Konfiguration
                </h2>
                <div class="collection-prise">
                <p>
                    Grundpreis
                </p>
                <p>
                    2300,00 €
                </p>
                </div>
                <hr>
            </div>
            <div>
                <button class="summary-btn-open-configuration">
                    Konfiguration anzeigen
                </button>
            </div>
            <div id="configuration">
            </div>
            <div id="end-sum">
            </div>
        </div>
    `;
}