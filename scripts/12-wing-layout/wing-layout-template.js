function htmlWingLayout() {
    return /*html*/`
        <h2>(variable). Flügelaufteilung</h2>
        <div class="wing-layout-collection">
            <div onclick="markTheWingLayoutBox('sy')" id="wing-layout-1" class="box-coating">
                <p>
                    Symmetrisch
                </p>
            </div>
            <div onclick="markTheWingLayoutBox('asy')" id="wing-layout-2" class="box-coating">
                <p>
                    Asymmetrisch
                </p>
            </div>
        </div>
    `;
}