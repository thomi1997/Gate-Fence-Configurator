function htmlMountingTypePost() {
    return /*html*/`
        <h2>6. Befestigungsart der Pfosten</h2>
        <div class="mounting-type-post-collection">
            <div onclick="markTheMountingTypePost('p-e')" id="mounting-type-post-1" class="box-coating">
                <p>
                    Pfosten zum Einbetonieren
                </p>
            </div>
            <div onclick="markTheMountingTypePost('p-a')" id="mounting-type-post-2" class="box-coating">
                <p>
                    Pfosten zum Aufschrauben
                </p>
            </div>
        </div>
    `;
}