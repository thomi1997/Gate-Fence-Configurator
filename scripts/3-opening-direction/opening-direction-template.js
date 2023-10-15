function htmlOpeningDirection() {
    return /*html*/`
        <div class="collection-titel">
            <h2>
                3. Öffnungsrichtung
            </h2>
        </div>
        <div class="opening-direction-collection">
            <div onclick="markTheOpeningDirectionBox(this)" id="opening-direction-1" class="box-coating">
                <p>
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
                <p>
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
                <p>
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
                <p>
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