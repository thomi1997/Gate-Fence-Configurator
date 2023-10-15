function htmlSurface() {
    return /*html*/`
        <div class="collection-titel">
            <h2>
                1. Oberfläche
            </h2>
        </div>
        <div class="surface-collection">
            <div onclick="markTheSurfaceBox(this)" id="surface-1" class="box-coating">
                <div class="box-content">
                    <img class="collection-imgs" src="img/surface-img/0-surface-hot-dip-.png" alt="surface-img">
                    <p>
                        Feuerverzinkt
                    </p>
                </div>
            </div>
            <div onclick="markTheSurfaceBox(this)" id="surface-2" class="box-coating">
                <div class="box-content">
                    <img class="collection-imgs" src="img/surface-img/1-surface-matt.png" alt="surface-img">
                    <p>
                        Feuerverzinkt + Matt
                    </p>
                </div>
            </div>
            <div onclick="markTheSurfaceBox(this)" id="surface-3" class="box-coating">
                <div class="box-content">
                    <img class="collection-imgs" src="img/surface-img/2-surface-glossy.png" alt="surface-img">
                    <p>
                        Feuerverzinkt + Glänzend
                    </p>
                </div>
            </div>
            <div onclick="markTheSurfaceBox(this)" id="surface-4" class="box-coating">
                <div class="box-content">
                    <img class="collection-imgs" src="img/surface-img/3-surface-hammer-blow-color-coated-.png" alt="surface-img">
                    <p>
                        Feuerverzinkt + Hammerschlag Farbbeschichtet
                    </p>
                </div>
            </div>
            <div onclick="markTheSurfaceBox(this)" id="surface-5" class="box-coating">
                <div class="box-content">
                    <img class="collection-imgs" src="img/surface-img/4-surface-db-color-coated-.png" alt="surface-img">
                    <p>
                        Feuerverzinkt + DB Farbbeschichtet
                    </p>
                </div>
            </div>
        </div>
    `;
}