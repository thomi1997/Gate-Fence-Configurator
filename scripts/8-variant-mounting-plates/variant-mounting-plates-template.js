function htmlVariantMountingPlates() {
    return /*html*/`
        <h2>
            (Variable). Variante der Montageplatten
        </h2>
        <div class="variant-mounting-plates-collection">
            <div onclick="markTheVariantMountingPlatesBox(this)" id="variant-mounting-plates-1" class="box-coating">
                <p>
                    150x150x8 mm (mittig)
                </p>
            </div>
            <div onclick="markTheVariantMountingPlatesBox(this)" id="variant-mounting-plates-2" class="box-coating">
                <p>
                    250x150x8 mm (mittig)
                </p>
            </div>
            <div onclick="markTheVariantMountingPlatesBox(this)" id="variant-mounting-plates-3" class="box-coating">
                <p>
                    250x250x8 mm (mittig)
                </p>
            </div>
            <div onclick="markTheVariantMountingPlatesBox(this)" id="variant-mounting-plates-4" class="box-coating">
                <p>
                    150x150x8 mm (versetzt)
                </p>
            </div>
            <div onclick="markTheVariantMountingPlatesBox(this)" id="variant-mounting-plates-5" class="box-coating">
                <p>
                    250x150x8 mm (versetzt)
                </p>
            </div>
            <div onclick="markTheVariantMountingPlatesBox(this)" id="variant-mounting-plates-6" class="box-coating">
                <p>
                    250x250x8 mm (versetzt)
                </p>
            </div>
        </div>
    `;
}