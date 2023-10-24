function htmlWingLayout(wingLayoutNumber, currentAsymmetric, currentSymmetrical) {
    return /*html*/`
        <div onclick="openWingLayoutCollectionMobil()" class="collection-titel">
            <h2>
                ${wingLayoutNumber}. Flügelaufteilung
            </h2>
            <svg class="collection-mobile-open-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path 
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </div>
        <div id="open-wing-layout" class="wing-layout-collection">
            <div onclick="markTheWingLayoutBox(this)" id="wing-layout-1" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${currentSymmetrical}" alt="wing-layout-png">
                </div>
                <p>
                    Symmetrisch
                </p>
            </div>
            <div onclick="markTheWingLayoutBox(this)" id="wing-layout-2" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${currentAsymmetric}" alt="wing-layout-png">
                </div>
                <p>
                    Asymmetrisch
                </p>
            </div>
        </div>
    `;
}