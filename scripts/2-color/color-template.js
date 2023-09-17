function htmlColor() {
    return /*html*/`
        <h2>2. Farbe der Pulverbeschichtung</h2>
        <div class="color-collection">
            <div onclick="openColorOverview()" class="box-coating">
                <div class="color-in-the-box" style="background-color: black;">
                </div>
                <div class="color-content">
                    <span>RAL 7016</span>
                    <span>Anthrazitgrau</span>
                </div>
                <button onclick="openColorOverview()">Farbe auswählen</button>
            </div>
        </div>
    `;
}


function htmlColorRalOverview() {
    return /*html*/`
        <div class="color-overview-collection">
            <div class="overview-head">
                <h2>
                    RAL Farben
                </h2>
                <svg onclick="closeColorOverview()" class="close-color-overview-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path 
                        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </div>
            <div class="overview-color-list">
                <div class="color-box-overview"></div>
                <div class="color-box-overview"></div>
                <div class="color-box-overview"></div>
                <div class="color-box-overview"></div>
            </div>
        </div>
    `;
}