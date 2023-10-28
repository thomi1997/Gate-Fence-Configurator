function htmlMountingGateHinges(imgPath, contentTop, contentBottom) {
    return /*html*/`
        <div onclick="openMountingGateHingesCollectionMobil_1()" class="collection-titel">
            <h2>
                5. Montage der Torbänder
            </h2>
            <div>
                <svg id="series-5" class="collection-mobile-open-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path 
                        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                </svg>
                <svg class="info-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path 
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                </svg>
            </div>
        </div>
        <div id="open-mounting-gate-hinges-1" class="mounting-gate-hinges-collection">
            <div onclick="markTheMountingGateHingesBox(this)" id="mounting-gate-hinges-1" class="box-coating">
                <p class="mounting-gate-hinges-content-absolute">
                    ${contentTop}
                </p>
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${imgPath}" alt="mounting-gate-hinges-png">
                </div>
                <p>
                    ${contentBottom}
                </p>               
            </div>
        </div>
    `;
}


function htmlMountingGateHingesDouble(contentTop1, imgPath1, contentBottom1, contentTop2, imgPath2, contentBottom2) {
    return /*html*/`
        <div onclick="openMountingGateHingesCollectionMobil_2()" class="collection-titel">
            <h2>
                5. Montage der Torbänder
            </h2>
            <svg id="series-5" class="collection-mobile-open-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path 
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
            <svg class="info-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path 
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
            </svg>
        </div>
        <div id="open-mounting-gate-hinges-2" class="mounting-gate-hinges-collection">
            <div onclick="markTheMountingGateHingesBox(this)" id="mounting-gate-hinges-1" class="box-coating">
                <p class="mounting-gate-hinges-content-absolute">
                    ${contentTop1}
                </p>
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${imgPath1}" alt="mounting-gate-hinges-png">
                </div>
                <p>
                    ${contentBottom1}
                </p>               
            </div>
            <div onclick="markTheMountingGateHingesBox(this)" id="mounting-gate-hinges-2" class="box-coating">
                <p class="mounting-gate-hinges-content-absolute">
                    ${contentTop2}
                </p>
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${imgPath2}" alt="mounting-gate-hinges-png">
                </div>
                <p>
                    ${contentBottom2}
                </p>               
            </div>
        </div>
    `;
}