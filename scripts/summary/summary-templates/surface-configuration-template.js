function htmlSurfaceConfiguration() {
    return /*html*/`
        <div class="configuration-column">
            <div class="collection-prise">
                <p>
                    Oberfläche
                </p>
                <p>
                    ${currentSurface[0]['prise-surface']} €
                </p>
            </div>
            <span> 
                ${currentSurface[0]['surface']}
            </span>
        </div>
    `;
}