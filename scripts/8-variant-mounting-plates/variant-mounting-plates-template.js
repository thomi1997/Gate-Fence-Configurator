function htmlVariantMountingPlates() {
    return /*html*/`
        <div onclick="openVariantMountingPlatesCollectionMobil()" class="collection-titel">
            <h2>
                7. Variante der Montageplatten
            </h2>
            <svg id="series-8" class="collection-mobile-open-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path 
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </div>
        <div id="open-variant-mounting-plates" class="variant-mounting-plates-collection">
            <div onclick="markTheVariantMountingPlatesBox(this)" id="variant-mounting-plates-1" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${variantMountingPlatesImgs[0]}" alt="varian-mounting-plates-png">
                </div>
                <p>
                    150x150x8 mm (mittig)
                </p>
            </div>
            <div onclick="markTheVariantMountingPlatesBox(this)" id="variant-mounting-plates-2" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${variantMountingPlatesImgs[2]}" alt="varian-mounting-plates-png">
                </div>
                <p>
                    250x150x8 mm (mittig)
                </p>
            </div>
            <div onclick="markTheVariantMountingPlatesBox(this)" id="variant-mounting-plates-3" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${variantMountingPlatesImgs[4]}" alt="varian-mounting-plates-png">
                </div>
                <p>
                    250x250x8 mm (mittig)
                </p>
            </div>
            <div onclick="markTheVariantMountingPlatesBox(this)" id="variant-mounting-plates-4" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${variantMountingPlatesImgs[1]}" alt="varian-mounting-plates-png">
                </div>
                <p>
                    150x150x8 mm (versetzt)
                </p>
            </div>
            <div onclick="markTheVariantMountingPlatesBox(this)" id="variant-mounting-plates-5" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${variantMountingPlatesImgs[3]}" alt="varian-mounting-plates-png">
                </div>
                <p>
                    250x150x8 mm (versetzt)
                </p>
            </div>
            <div onclick="markTheVariantMountingPlatesBox(this)" id="variant-mounting-plates-6" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${variantMountingPlatesImgs[5]}" alt="varian-mounting-plates-png">
                </div>
                <p>
                    250x250x8 mm (versetzt)
                </p>
            </div>
        </div>
    `;
}