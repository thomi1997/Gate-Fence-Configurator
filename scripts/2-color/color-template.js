function htmlColor() {
    return /*html*/`
        <div onclick="openColorCollectionMobil()" class="collection-titel">
            <h2 id="h2-color-collection">
                2. Farbe der Pulverbeschichtung
            </h2>
            <svg id="series-2" class="collection-mobile-open-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path 
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </div>
        <div id="change-color" class="color-collection">
        </div>
    `;
}


function htmlColorOverview() {
    return /*html*/`
        <div class="color-overview-collection">
            <div class="overview-head">
                <h2>
                    Farben
                </h2>
                <svg onclick="closeColorOverview()" class="close-color-overview-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path 
                        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </div>
            <div id="rgb-color-id" class="overview-color-list">
            </div>
        </div>
    `;
}


function htmlColorButton() {
    return /*html*/`
        <div onclick="openColorOverview()" id="mark-color-collection" class="box-coating">
            <div class="color-in-the-box" id="color-selected" >
            </div>
            <button onclick="openColorOverview()">Farbe auswählen</button>
        </div>
    `;
}


function htmlAllColorsList(color, i) {
    return /*html*/`  
        <div onclick="markTheRGBColorBox(this, '${color}')" id="${1+i}" class="color-box-overview" style="background-color: ${color};"></div>
    `;
}


function htmlHammerBlowColor(colorHammerBlow, i) {
    return /*html*/`
        <div onclick="markTheRGBColorBox(this, '${colorHammerBlow}')" id="${i}" class="box-coating">
            <div class="color-in-the-box" style="background-color: ${colorHammerBlow};">
            </div>
        </div>
    `;
}


function htmlDBColor(colorDB, i) {
    return /*html*/`
        <div onclick="markTheRGBColorBox(this, '${colorDB}')" id="${i}" class="box-coating">
            <div class="color-in-the-box" style="background-color: ${colorDB};">
            </div>
        </div>
    `;
}