function htmlDimensions(dimensionsNumber) {
    return /*html*/`
        <div onclick="openDimensionsCollectionMobil()" class="collection-titel">
            <h2>
                ${dimensionsNumber}. Maße
            </h2>
            <svg id="series-11" class="collection-mobile-open-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path 
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </div>
        <div id="open-dimensions" class="dimensions-collection">
            <div class="dimensions-section">
                <p style="width: 200px;">
                    Torhöhe:
                </p>
                <input id="dimensions-1-input" type="number" onblur="addDimensionsHeight()">
                <p>
                    mm | Zulässiger Bereich: 700 - 2100
                </p>
            </div>
            <div class="dimensions-section">
                <p style="width: 200px;">
                    Breite inkl. Pfosten:
                </p>
                <input id="dimensions-2-input" type="number" onblur="addDimensionsWide()">
                <p>
                    mm | Zulässiger Bereich: 1600 - 5600
                </p>
            </div>
        </div>
    `;
}