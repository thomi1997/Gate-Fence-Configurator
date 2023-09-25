function htmlMountingGateHinges() {
    return /*html*/`
        <h2>5. Montage der Torbänder</h2>
        <div class="mounting-gate-hinges-collection">
            <div onclick="markTheMountingGateHingesBox(this)" id="mounting-gate-hinges-1" class="box-coating">
                <p>
                    3-D-Band
                </p>
                <!--bild-->
                <p>
                    Rückseitig mit 3D-Band
                </p>               
            </div>
            <div onclick="markTheMountingGateHingesBox(this)" id="mounting-gate-hinges-2" class="box-coating">
                <p>
                    2-D-Band
                </p>
                <p>
                    Seitlich mit 2D-Band
                </p>
            </div>
            <div onclick="markTheMountingGateHingesBox(this)" id="mounting-gate-hinges-3" class="box-coating">
                <p>
                    2-D-Band
                </p> 
                <p>
                    Rückseitig mit 2D-Band
                </p>
            </div>
        </div>
    `;
}