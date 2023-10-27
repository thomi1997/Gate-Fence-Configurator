function htmlGroundClearance() {
    return /*html*/`
        <div onclick="openGroundClearanceCollectionMobil()" class="collection-titel">
            <h2>
                8. Bodenabstand
            </h2>
            <svg id="series-9" class="collection-mobile-open-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path 
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </div>
        <div id="open-ground-clearance" class="ground-clearance-collection">
            <p>
                Bodenabstand:
            </p>
            <input id="ground-clearance-input" type="number" onblur="addGroundClearance()">
            <p>
                mm | Zulässiger Bereich: 50 - 200
            </p>
        </div>
    `;
}