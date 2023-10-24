function htmlSurface() {
    return /*html*/`
        <div onclick="openSurfaceCollectionMobil()" class="collection-titel">
            <h2>
                1. Oberfläche
            </h2>
            <svg class="collection-mobile-open-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path 
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </div>
        <div id="open-surface" class="surface-collection">
            <div onclick="markTheSurfaceBox(this)" id="surface-1" class="box-coating">
                <div class="box-content">
                    <img class="collection-imgs" src="img/surface-img/0-surface-hot-dip.png" alt="surface-img">
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
                    <img class="collection-imgs" src="img/surface-img/3-surface-hammer-blow-color-coated.png" alt="surface-img">
                    <p>
                        Feuerverzinkt + Hammerschlag Farbbeschichtet
                    </p>
                </div>
            </div>
            <div onclick="markTheSurfaceBox(this)" id="surface-5" class="box-coating">
                <div class="box-content">
                    <img class="collection-imgs" src="img/surface-img/4-surface-db-color-coated.png" alt="surface-img">
                    <p>
                        Feuerverzinkt + DB Farbbeschichtet
                    </p>
                </div>
            </div>
        </div>
    `;
}