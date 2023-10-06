function htmlMountingGateHinges(imgPath) {
    return /*html*/`
        <h2>5. Montage der Torbänder</h2>
        <div class="mounting-gate-hinges-collection">
            <div onclick="markTheMountingGateHingesBox(this)" id="mounting-gate-hinges-1" class="box-coating">
                <p id="mounting-gate-hinges-text-top">
                </p>
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="mounting-gate-hinges-img" src="${imgPath}" alt="mounting-gate-hinges-png">
                </div>
                <p id="mounting-gate-hinges-text-bottom">
                </p>               
            </div>
        </div>
    `;
}


function htmlMountingGateHingesDouble(imgPath1, imgPath2) {
    return /*html*/`
        <h2>5. Montage der Torbänder</h2>
        <div class="mounting-gate-hinges-collection">
            <div onclick="markTheMountingGateHingesBox(this)" id="mounting-gate-hinges-1" class="box-coating">
                <p id="mounting-gate-hinges-text-top">
                </p>
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="mounting-gate-hinges-img" src="${imgPath1}" alt="mounting-gate-hinges-png">
                </div>
                <p id="mounting-gate-hinges-text-bottom">
                </p>               
            </div>
            <div onclick="markTheMountingGateHingesBox(this)" id="mounting-gate-hinges-2" class="box-coating">
                <p id="mounting-gate-hinges-text-top">
                </p>
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="mounting-gate-hinges-img" src="${imgPath2}" alt="mounting-gate-hinges-png">
                </div>
                <p id="mounting-gate-hinges-text-bottom">
                </p>               
            </div>
        </div>
    `;
}