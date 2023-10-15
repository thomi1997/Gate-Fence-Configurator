function htmlMountingMethod(keyLockPath) {
    return /*html*/`
        <div class="collection-titel">
            <h2>
                4. Befästigungsart
            </h2>
        </div>
        <div class="mounting-method-collection">
            <div onclick="markTheMountingMethodBox(this)" id="mounting-method-1" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${keyLockPath[0]}" alt="mounting-method-png">
                </div>
                <p>
                    Pfeiler-Pfeiler
                </p>
            </div>
            <div onclick="markTheMountingMethodBox(this)" id="mounting-method-2" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${keyLockPath[1]}" alt="mounting-method-png">
                </div>
                <p>
                    Pfeiler-Pfosten
                </p>
            </div>
            <div onclick="markTheMountingMethodBox(this)" id="mounting-method-3" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${keyLockPath[2]}" alt="mounting-method-png">
                </div>
                <p>
                    Pfosten-Pfeiler
                </p>
            </div>
            <div onclick="markTheMountingMethodBox(this)" id="mounting-method-4" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${keyLockPath[3]}" alt="mounting-method-png">
                </div>
                <p>
                    Pfosten-Pfosten
                </p>
            </div>
            <div onclick="markTheMountingMethodBox(this)" id="mounting-method-5" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${keyLockPath[4]}" alt="mounting-method-png">
                </div>
                <p>
                    Pfeiler-Anschlusspfosten
                </p>
            </div>
            <div onclick="markTheMountingMethodBox(this)" id="mounting-method-6" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${keyLockPath[5]}" alt="mounting-method-png">
                </div>
                <p>
                    Anschlusspfosten-Pfeiler
                </p>
            </div>
            <div onclick="markTheMountingMethodBox(this)" id="mounting-method-7" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${keyLockPath[6]}" alt="mounting-method-png">
                </div>
                <p>
                    Anschlusspfosten-Anschlusspfosten
                </p>
            </div>
        </div>
    `;
}