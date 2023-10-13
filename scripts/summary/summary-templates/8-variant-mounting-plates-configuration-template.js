function htmlVariantMountingPlatesBoxConfiguration() {
    return /*html*/`
        <div class="configuration-column">
            <div class="collection-prise">
                <p>
                    Variante der Montageplatte
                </p>
                <p>
                    ${currentVariantMountingPlates[0]['prise-variant-mounting-plates']} €
                </p>
            </div>
            <span> 
                ${currentVariantMountingPlates[0]['variant-mounting-plates']} mm
            </span>
        </div>
    `;
}