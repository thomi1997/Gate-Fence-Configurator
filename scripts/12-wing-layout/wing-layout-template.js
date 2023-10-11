function htmlWingLayout(wingLayoutNumber, currentAsymmetric, currentSymmetrical) {
    return /*html*/`
        <h2>${wingLayoutNumber}. Flügelaufteilung</h2>
        <div class="wing-layout-collection">
            <div onclick="markTheWingLayoutBox(this)" id="wing-layout-1" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="wing-layout-img" src="${currentSymmetrical}" alt="wing-layout-png">
                </div>
                <p>
                    Symmetrisch
                </p>
            </div>
            <div onclick="markTheWingLayoutBox(this)" id="wing-layout-2" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="wing-layout-img" src="${currentAsymmetric}" alt="wing-layout-png">
                </div>
                <p>
                    Asymmetrisch
                </p>
            </div>
        </div>
    `;
}