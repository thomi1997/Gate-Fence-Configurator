function htmlDimensions(dimensionsNumber) {
    return /*html*/`
        <div class="collection-titel">
            <h2>
                ${dimensionsNumber}. Maße
            </h2>
        </div>
        <div class="dimensions-collection">
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