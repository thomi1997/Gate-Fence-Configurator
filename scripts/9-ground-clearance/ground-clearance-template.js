function htmlGroundClearance() {
    return /*html*/`
        <h2>8. Bodenabstand</h2>
        <div class="ground-clearance-collection">
            <p>
                Bodenabstand:
            </p>
            <input id="ground-clearance-input" type="text" onblur="addGroundClearance()">
            <p>
                mm | Zulässiger Bereich: 50 - 200
            </p>
        </div>
    `;
}