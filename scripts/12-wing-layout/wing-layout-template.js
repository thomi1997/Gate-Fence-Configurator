function htmlWingLayout(wingLayoutNumber) {
    return /*html*/`
        <h2>${wingLayoutNumber}. Flügelaufteilung</h2>
        <div class="wing-layout-collection">
            <div onclick="markTheWingLayoutBox(this)" id="wing-layout-1" class="box-coating">
                <p>
                    Symmetrisch
                </p>
            </div>
            <div onclick="markTheWingLayoutBox(this)" id="wing-layout-2" class="box-coating">
                <p>
                    Asymmetrisch
                </p>
            </div>
        </div>
    `;
}