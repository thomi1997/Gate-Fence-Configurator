function htmlSurface() {
    return /*html*/`
        <h2>1. Oberfläche</h2>
        <div class="surface-collection">
            <div onclick="markTheBox('fz')" id="surface-1" class="box-coating">
                <p>
                    Feuerverzinkt
                </p>
            </div>
            <div onclick="markTheBox('fz-m')" id="surface-2" class="box-coating">
                <p>
                    Feuerverzinkt + Matt
                </p>
            </div>
            <div onclick="markTheBox('fz-g')" id="surface-3" class="box-coating">
                <p>
                    Feuerverzinkt + Glänzend
                </p>
            </div>
            <div onclick="markTheBox('fz-h-fb')" id="surface-4" class="box-coating">
                <p>Feuerverzinkt + Hammerschlag Farbbeschichtet</p>
            </div>
            <div onclick="markTheBox('fz-db-fb')" id="surface-5" class="box-coating">
                <p>
                    Feuerverzinkt + DB Farbbeschichtet
                </p>
            </div>
        </div>
    `;
}