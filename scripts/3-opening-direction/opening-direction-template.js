function htmlOpeningDirection() {
    return /*html*/`
        <div onclick="openOpeningDirectionCollectionMobil()" class="collection-titel">
            <h2>
                3. Öffnungsrichtung
            </h2>
            <svg id="series-3" class="collection-mobile-open-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path 
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </div>
        <div id="open-opening-direction-collection" class="opening-direction-collection">
            <div onclick="markTheOpeningDirectionBox(this)" id="opening-direction-1" class="box-coating">
                <p class="opening-direction-content-absolute">
                    Grundstück (Innen)
                </p>
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="img/opening-direction-img/din-right-inside.png" alt="opening-direction-din-png">
                </div>
                <p>
                    Din rechts innen
                </p>
            </div>
            <div onclick="markTheOpeningDirectionBox(this)" id="opening-direction-2" class="box-coating">
                <p class="opening-direction-content-absolute">
                    Grundstück (Innen)
                </p>
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="img/opening-direction-img/din-left-inside.png" alt="opening-direction-din-png">
                </div>
                <p>
                    Din links innen
                </p>
            </div>
            <div onclick="markTheOpeningDirectionBox(this)" id="opening-direction-3" class="box-coating">
                <p class="opening-direction-content-absolute">
                    Grundstück (Innen)
                </p>
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="img/opening-direction-img/din-right-out.png" alt="opening-direction-din-png">
                </div>
                <p>
                    Din rechts außen
                </p>
            </div>
            <div onclick="markTheOpeningDirectionBox(this)" id="opening-direction-4" class="box-coating">
                <p class="opening-direction-content-absolute">
                    Grundstück (Innen)
                </p>
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="img/opening-direction-img/din-left-out.png" alt="opening-direction-din-png">
                </div>
                <p>
                    Din links außen
                </p>
            </div>
        </div>
    `;
}