function htmlMountingGateHinges() {
    return /*html*/`
        <h2>5. Montage der Torbänder</h2>
        <div class="mounting-gate-hinges-collection">
            <div onclick="markTheMountingGateHingesBox('r-3d')" id="mounting-gate-hinges-1" class="box-coating">
                <p>
                    3-D-Band
                </p>
                <!--bild-->
                <p id="r-3d-text">
                    Rückseitig mit 3D-Band
                </p>               
            </div>
            <div onclick="markTheMountingGateHingesBox('s-2d')" id="mounting-gate-hinges-2" class="box-coating">
                <p>
                    2-D-Band
                </p>
                <p id="s-2d-text">
                    Seitlich mit 2D-Band
                </p>
            </div>
            <div onclick="markTheMountingGateHingesBox('r-2d')" id="mounting-gate-hinges-3" class="box-coating">
                <p>
                    2-D-Band
                </p> 
                <p id="r-2d-text">
                    Rückseitig mit 2D-Band
                </p>
            </div>
        </div>
    `;
}