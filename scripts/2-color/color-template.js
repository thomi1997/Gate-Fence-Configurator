function htmlColor() {
    return /*html*/`
        <h2>2. Farbe der Pulverbeschichtung</h2>
        <div class="color-collection">
            <div onclick="selectColor()" class="box-coating">
                <div class="color-in-the-box" style="background-color: black;">
                </div>
                <div class="color-content">
                    <span>RAL 7016</span>
                    <span>Anthrazitgrau</span>
                </div>
                <button onclick="selectColor()">Farbe auswählen</button>
            </div>
        </div>
    `;
}