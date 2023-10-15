function htmlMountingTypePost() {
    return /*html*/`
        <div class="collection-titel">
            <h2>
                6. Befestigungsart der Pfosten
            </h2>
        </div>
        <div class="mounting-type-post-collection">
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