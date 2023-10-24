function htmlMountingMethod(keyLockPath) {
    return /*html*/`
        <div onclick="openMountingMethodCollectionMobil()" class="collection-titel">
            <h2>
                4. Befästigungsart
            </h2>
            <svg class="collection-mobile-open-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path 
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </div>
        <div id="open-mounting-method" class="mounting-method-collection">
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