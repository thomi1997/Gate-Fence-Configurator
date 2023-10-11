function htmlGripSet(gripSetNumber) {
    return /*html*/`
        <h2>${gripSetNumber}. Griffgarnitur</h2>
        <div class="grip-set-collection">
            <div onclick="markTheGripSetBox(this)" id="grip-set-1" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="grip-set-img" src="${gripSetImgs[0]}" alt="grip-set-png">
                </div>
                <p>
                    Knaufset (Alu)
                </p>
            </div>
            <div onclick="markTheGripSetBox(this)" id="grip-set-2" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="grip-set-img" src="${gripSetImgs[1]}" alt="grip-set-png">
                </div>
                <p>
                    Klinkenset (Alu)
                </p>
            </div>
            <div onclick="markTheGripSetBox(this)" id="grip-set-3" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="grip-set-img" src="${gripSetImgs[2]}" alt="grip-set-png">
                </div>
                <p>
                    Klinke/Knauf (Alu)
                </p>
            </div>
            <div onclick="markTheGripSetBox(this)" id="grip-set-4" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="grip-set-img" src="${gripSetImgs[3]}" alt="grip-set-png">
                </div>
                <p>
                    Knaufset (Edelstahl)
                </p>
            </div>
            <div onclick="markTheGripSetBox(this)" id="grip-set-5" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="grip-set-img" src="${gripSetImgs[4]}" alt="grip-set-png">
                </div>
                <p>
                    Klinkenset (Edelstahl)
                </p>
            </div>
            <div onclick="markTheGripSetBox(this)" id="grip-set-6" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="grip-set-img" src="${gripSetImgs[5]}" alt="grip-set-png">
                </div>
                <p>
                    Klinke/Knauf (Edelstahl)
                </p>
            </div>
        </div>
    `;
}