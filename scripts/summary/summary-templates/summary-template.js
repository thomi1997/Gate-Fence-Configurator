function htmlSummary() {
    return /*html*/`
        <div class="summary-content">
            <div class="base-price-div">
                <h2>
                    Ihre Konfiguration
                </h2>
                <div class="collection-prise align-item-baseline">
                    <p>
                        Grundpreis
                    </p>
                    <p class="summary-prise-color end-price-size">
                        2300,00 €
                    </p>
                </div>
                <hr>
            </div>
            <div>
                <button onclick="summaryConfigurationOpenAndClose()" class="summary-btn-open-configuration">
                    Konfiguration anzeigen
                    <svg class="summary-open-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path 
                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                    </svg>
                </button>
            </div>
            <div id="configuration" class="summary-configuration-box">
            </div>
            <hr>
            <div id="end-sum">
            </div>
            <div class="summary-quantity">
                <p>
                    Menge:
                </p>
                <select onclick="" id="quantity" class="summary-select">
                </select>
            </div>
            <div class="summary-buttons-div">
                <button onclick="" class="summary-button-shopping-cart" style="margin-bottom: 20px;">
                    <svg class="shopping-cart-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path 
                            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                    </svg>
                    IN DEN WARENKORB
                </button>
                <button onclick="" class="summary-button-save">
                    KONFIGURATION SPEICHERN
                </button>
            </div>
        </div>
    `;
}