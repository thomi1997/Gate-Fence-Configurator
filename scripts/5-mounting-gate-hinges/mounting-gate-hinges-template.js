function htmlMountingGateHinges(imgPath, contentTop, contentBottom) {
    return /*html*/`
        <div class="collection-titel">
            <h2>
                5. Montage der Torbänder
            </h2>
        </div>
        <div class="mounting-gate-hinges-collection">
            <div onclick="markTheMountingGateHingesBox(this)" id="mounting-gate-hinges-1" class="box-coating">
                <p>
                    ${contentTop}
                </p>
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${imgPath}" alt="mounting-gate-hinges-png">
                </div>
                <p>
                    ${contentBottom}
                </p>               
            </div>
        </div>
    `;
}


function htmlMountingGateHingesDouble(contentTop1, imgPath1, contentBottom1, contentTop2, imgPath2, contentBottom2) {
    return /*html*/`
        <div class="collection-titel">
            <h2>
                5. Montage der Torbänder
            </h2>
        </div>
        <div class="mounting-gate-hinges-collection">
            <div onclick="markTheMountingGateHingesBox(this)" id="mounting-gate-hinges-1" class="box-coating">
                <p>
                    ${contentTop1}
                </p>
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${imgPath1}" alt="mounting-gate-hinges-png">
                </div>
                <p>
                    ${contentBottom1}
                </p>               
            </div>
            <div onclick="markTheMountingGateHingesBox(this)" id="mounting-gate-hinges-2" class="box-coating">
                <p>
                    ${contentTop2}
                </p>
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${imgPath2}" alt="mounting-gate-hinges-png">
                </div>
                <p>
                    ${contentBottom2}
                </p>               
            </div>
        </div>
    `;
}