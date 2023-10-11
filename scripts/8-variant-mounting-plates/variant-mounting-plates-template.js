function htmlVariantMountingPlates() {
    return /*html*/`
        <h2>
            7. Variante der Montageplatten
        </h2>
        <div class="variant-mounting-plates-collection">
            <div onclick="markTheVariantMountingPlatesBox(this)" id="variant-mounting-plates-1" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="varian-mounting-plates-img" src="${variantMountingPlatesImgs[0]}" alt="varian-mounting-plates-png">
                </div>
                <p>
                    150x150x8 mm (mittig)
                </p>
            </div>
            <div onclick="markTheVariantMountingPlatesBox(this)" id="variant-mounting-plates-2" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="varian-mounting-plates-img" src="${variantMountingPlatesImgs[2]}" alt="varian-mounting-plates-png">
                </div>
                <p>
                    250x150x8 mm (mittig)
                </p>
            </div>
            <div onclick="markTheVariantMountingPlatesBox(this)" id="variant-mounting-plates-3" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="varian-mounting-plates-img" src="${variantMountingPlatesImgs[4]}" alt="varian-mounting-plates-png">
                </div>
                <p>
                    250x250x8 mm (mittig)
                </p>
            </div>
            <div onclick="markTheVariantMountingPlatesBox(this)" id="variant-mounting-plates-4" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="varian-mounting-plates-img" src="${variantMountingPlatesImgs[1]}" alt="varian-mounting-plates-png">
                </div>
                <p>
                    150x150x8 mm (versetzt)
                </p>
            </div>
            <div onclick="markTheVariantMountingPlatesBox(this)" id="variant-mounting-plates-5" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="varian-mounting-plates-img" src="${variantMountingPlatesImgs[3]}" alt="varian-mounting-plates-png">
                </div>
                <p>
                    250x150x8 mm (versetzt)
                </p>
            </div>
            <div onclick="markTheVariantMountingPlatesBox(this)" id="variant-mounting-plates-6" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="varian-mounting-plates-img" src="${variantMountingPlatesImgs[5]}" alt="varian-mounting-plates-png">
                </div>
                <p>
                    250x250x8 mm (versetzt)
                </p>
            </div>
        </div>
    `;
}