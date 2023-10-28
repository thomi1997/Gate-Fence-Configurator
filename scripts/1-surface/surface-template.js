function htmlSurface() {
    return /*html*/`
        <div onclick="openSurfaceCollectionMobil()" class="collection-titel">
            <h2>
                1. Oberfläche
            </h2>
            <div>
                <svg id="series-1" class="collection-mobile-open-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path 
                        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                </svg>
                <svg class="info-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path 
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                </svg>
            </div>
        </div>
        <div id="open-surface" class="surface-collection">
            <div onclick="markTheSurfaceBox(this)" id="surface-1" class="box-coating">
                <div class="box-content">
                    <div class="surface-img-div">
                        <img class="collection-imgs" src="img/surface-img/0-surface-hot-dip.png" alt="surface-img">
                    </div>
                    <p>
                        Feuerverzinkt
                    </p>
                </div>
            </div>
            <div onclick="markTheSurfaceBox(this)" id="surface-2" class="box-coating">
                <div class="box-content">
                    <div class="surface-img-div">
                        <img class="collection-imgs" src="img/surface-img/1-surface-matt.png" alt="surface-img">
                    </div>
                    <p>
                        Feuerverzinkt + Matt
                    </p>
                </div>
            </div>
            <div onclick="markTheSurfaceBox(this)" id="surface-3" class="box-coating">
                <div class="box-content">
                    <div class="surface-img-div">
                        <img class="collection-imgs" src="img/surface-img/2-surface-glossy.png" alt="surface-img">
                    </div>
                    <p>
                        Feuerverzinkt + Glänzend
                    </p>
                </div>
            </div>
            <div onclick="markTheSurfaceBox(this)" id="surface-4" class="box-coating">
                <div class="box-content">
                    <div class="surface-img-div">
                        <img class="collection-imgs" src="img/surface-img/3-surface-hammer-blow-color-coated.png" alt="surface-img">
                    </div>
                    <p>
                        Feuerverzinkt + Hammerschlag Farbbeschichtet
                    </p>
                </div>
            </div>
            <div onclick="markTheSurfaceBox(this)" id="surface-5" class="box-coating">
                <div class="box-content">
                    <div class="surface-img-div">
                        <img class="collection-imgs" src="img/surface-img/4-surface-db-color-coated.png" alt="surface-img">
                    </div>
                    <p>
                        Feuerverzinkt + DB Farbbeschichtet
                    </p>
                </div>
            </div>
        </div>
    `;
}