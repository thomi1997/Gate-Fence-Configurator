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
                    ${basePrise} €
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
            <div class="end-price-div">
                <div class="collection-prise">
                    <p>
                        Summe
                    </p>
                    <p>
                        ${endSum} €
                    </p>
                </div>
                <p>inkl. MwSt., zzgl. Versandkosten</p>
            </div>
        </div>
    `;
}