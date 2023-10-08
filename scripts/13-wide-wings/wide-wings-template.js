function htmlWideWings(wideWingsNumber) {
    return /*html*/`
    <h2>${wideWingsNumber}. Breite Gehflügel</h2>
        <div class="wide-wings-collection">
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