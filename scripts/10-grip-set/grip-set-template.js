function htmlGripSet(gripSetNumber) {
    return /*html*/`
        <div onclick="openGripSetCollectionMobil()" class="collection-titel">
            <h2>
                ${gripSetNumber}. Griffgarnitur
            </h2>
            <svg id="series-10" class="collection-mobile-open-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path 
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </div>
        <div id="open-grip-set" class="grip-set-collection">
            <div onclick="markTheGripSetBox(this)" id="grip-set-1" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${gripSetImgs[0]}" alt="grip-set-png">
                </div>
                <p>
                    Knaufset (Alu)
                </p>
            </div>
            <div onclick="markTheGripSetBox(this)" id="grip-set-2" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${gripSetImgs[1]}" alt="grip-set-png">
                </div>
                <p>
                    Klinkenset (Alu)
                </p>
            </div>
            <div onclick="markTheGripSetBox(this)" id="grip-set-3" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${gripSetImgs[2]}" alt="grip-set-png">
                </div>
                <p>
                    Klinke/Knauf (Alu)
                </p>
            </div>
            <div onclick="markTheGripSetBox(this)" id="grip-set-4" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${gripSetImgs[3]}" alt="grip-set-png">
                </div>
                <p>
                    Knaufset (Edelstahl)
                </p>
            </div>
            <div onclick="markTheGripSetBox(this)" id="grip-set-5" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${gripSetImgs[4]}" alt="grip-set-png">
                </div>
                <p>
                    Klinkenset (Edelstahl)
                </p>
            </div>
            <div onclick="markTheGripSetBox(this)" id="grip-set-6" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${gripSetImgs[5]}" alt="grip-set-png">
                </div>
                <p>
                    Klinke/Knauf (Edelstahl)
                </p>
            </div>
        </div>
    `;
}