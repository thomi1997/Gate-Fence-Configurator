function htmlWingLayout(wingLayoutNumber, currentAsymmetric, currentSymmetrical) {
    return /*html*/`
        <div class="collection-titel">
            <h2>
                ${wingLayoutNumber}. Flügelaufteilung
            </h2>
        </div>
        <div class="wing-layout-collection">
            <div onclick="markTheWingLayoutBox(this)" id="wing-layout-1" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${currentSymmetrical}" alt="wing-layout-png">
                </div>
                <p>
                    Symmetrisch
                </p>
            </div>
            <div onclick="markTheWingLayoutBox(this)" id="wing-layout-2" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${currentAsymmetric}" alt="wing-layout-png">
                </div>
                <p>
                    Asymmetrisch
                </p>
            </div>
        </div>
    `;
}