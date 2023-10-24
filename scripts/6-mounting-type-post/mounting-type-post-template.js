function htmlMountingTypePost() {
    return /*html*/`
        <div onclick="openMountingTypePostCollectionMobil()" class="collection-titel">
            <h2>
                6. Befestigungsart der Pfosten
            </h2>
            <svg class="collection-mobile-open-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path 
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </div>
        <div id="open-mounting-type-post" class="mounting-type-post-collection">
            <div onclick="markTheMountingTypePostBox(this)" id="mounting-type-post-1" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="img/mounting-type-post-img/0-mounting-type-post.png" alt="mounting-type-post-png">
                </div>
                <p>
                    Pfosten zum Einbetonieren
                </p>
            </div>
            <div onclick="markTheMountingTypePostBox(this)" id="mounting-type-post-2" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="img/mounting-type-post-img/1-mounting-type-post.png" alt="mounting-type-post-png">
                </div>
                <p>
                    Pfosten zum Aufschrauben
                </p>
            </div>
        </div>
    `;
}