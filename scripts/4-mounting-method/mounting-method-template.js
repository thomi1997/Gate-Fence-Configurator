function htmlMountingMethod() {
    return /*html*/`
        <h2>4. Befästigungsart</h2>
        <div class="mounting-method-collection">
            <div onclick="markTheMountingMethodBox(this)" id="mounting-method-1" class="box-coating">
                <p>
                    Pfeiler-Pfeiler
                </p>
            </div>
            <div onclick="markTheMountingMethodBox(this)" id="mounting-method-2" class="box-coating">
                <p>
                    Pfeiler-Pfosten
                </p>
            </div>
            <div onclick="markTheMountingMethodBox(this)" id="mounting-method-3" class="box-coating">
                <p>
                    Pfosten-Pfeiler
                </p>
            </div>
            <div onclick="markTheMountingMethodBox(this)" id="mounting-method-4" class="box-coating">
                <p>
                    Pfosten-Pfosten
                </p>
            </div>
            <div onclick="markTheMountingMethodBox(this)" id="mounting-method-5" class="box-coating">
                <p>
                    Pfeiler-Anschlusspfosten
                </p>
            </div>
            <div onclick="markTheMountingMethodBox(this)" id="mounting-method-6" class="box-coating">
                <p>
                    Anschlusspfosten-Pfeiler
                </p>
            </div>
            <div onclick="markTheMountingMethodBox(this)" id="mounting-method-7" class="box-coating">
                <p>
                    Anschlusspfosten-Anschlusspfosten
                </p>
            </div>
        </div>
    `;
}