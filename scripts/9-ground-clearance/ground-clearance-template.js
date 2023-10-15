function htmlGroundClearance() {
    return /*html*/`
        <div class="collection-titel">
            <h2>
                8. Bodenabstand
            </h2>
        </div>
        <div class="ground-clearance-collection">
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