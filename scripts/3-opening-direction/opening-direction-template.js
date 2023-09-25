function htmlOpeningDirection() {
    return /*html*/`
        <h2>3. Öffnungsrichtung</h2>
        <div class="opening-direction-collection">
            <div onclick="markTheOpeningDirectionBox(this)" id="opening-direction-1" class="box-coating">
                <p>
                    Grundstück (Innen) Din rechts innen
                </p>
            </div>
            <div onclick="markTheOpeningDirectionBox(this)" id="opening-direction-2" class="box-coating">
                <p>
                    Grundstück (Innen) Din links innen
                </p>
            </div>
            <div onclick="markTheOpeningDirectionBox(this)" id="opening-direction-3" class="box-coating">
                <p>
                    Grundstück (Innen) Din rechts außen
                </p>
            </div>
            <div onclick="markTheOpeningDirectionBox(this)" id="opening-direction-4" class="box-coating">
                <p>
                    Grundstück (Innen) Din links außen
                </p>
            </div>
        </div>
    `;
}