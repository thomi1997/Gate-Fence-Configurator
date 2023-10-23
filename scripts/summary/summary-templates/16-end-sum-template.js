function htmlEndSum() {
    return /*html*/`
        <div class="end-price-div">
            <div class="collection-prise align-item-baseline">
                <p>
                    Summe
                </p>
                <p class="summary-prise-color end-price-size">
                    ${currentTotalPrise} €
                </p>
            </div>
            <p style="line-height: 0px;">inkl. MwSt., zzgl. Versandkosten</p>
        </div>
    `;
}