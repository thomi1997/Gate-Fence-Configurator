function htmlSurfaceConfiguration() {
    return /*html*/`
        <div class="configuration-column">
            <div class="collection-prise">
                <p>
                    Oberfläche
                </p>
                <p class="summary-prise-color">
                    ${currentSurface[0]['prise-surface']} €
                </p>
            </div>
            <span> 
                ${currentSurface[0]['surface']}
            </span>
        </div>
    `;
}