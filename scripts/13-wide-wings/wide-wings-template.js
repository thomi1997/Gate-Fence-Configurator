function htmlWideWings(wideWingsNumber) {
    return /*html*/`
        <div onclick="openWideWingsCollectionMobil()" class="collection-titel">
            <h2>
                ${wideWingsNumber}. Breite Gehflügel
            </h2>
            <svg class="collection-mobile-open-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path 
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </div>
        <div id="open-wide-wings" class="wide-wings-collection">
            <p style="width: 200px;">
                Breite Gehflügel:
            </p>
            <input id="wide-wings-input" type="number" onblur="addWideWings()">
            <p>
                mm | Zulässiger Bereich: 1000 - 3000
            </p>
        </div>
    `;
}