function htmlEndSum() {
    return /*html*/`
        <div class="end-price-div">
            <div class="collection-prise">
                <p>
                    Summe
                </p>
                <p>
                    ${currentTotalPrise} €
                </p>
            </div>
            <p>inkl. MwSt., zzgl. Versandkosten</p>
        </div>
    `;
}