function htmlSurface() {
    return /*html*/`
        <h2>1. Oberfläche</h2>
        <div class="surface-collection">
            <div onclick="markTheSurfaceBox(this)" id="surface-1" class="box-coating">
                <div class="box-content">
                    <p>
                        Feuerverzinkt
                    </p>
                </div>
            </div>
            <div onclick="markTheSurfaceBox(this)" id="surface-2" class="box-coating">
                <div class="box-content">
                    <p>
                        Feuerverzinkt + Matt
                    </p>
                </div>
            </div>
            <div onclick="markTheSurfaceBox(this)" id="surface-3" class="box-coating">
                <div class="box-content">
                    <p>
                        Feuerverzinkt + Glänzend
                    </p>
                </div>
            </div>
            <div onclick="markTheSurfaceBox(this)" id="surface-4" class="box-coating">
                <div class="box-content">
                    <p>
                        Feuerverzinkt + Hammerschlag Farbbeschichtet
                    </p>
                </div>
            </div>
            <div onclick="markTheSurfaceBox(this)" id="surface-5" class="box-coating">
                <div class="box-content">
                    <p>
                        Feuerverzinkt + DB Farbbeschichtet
                    </p>
                </div>
            </div>
        </div>
    `;
}