function htmlExecution(executionNumber, currentExecutionImgPath) {
    return /*html*/`
        <h2>${executionNumber}. Ausführung</h2>
        <div class="execution-collection">
            <div onclick="markTheExecutionBox(this)" id="execution-1" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="execution-img" src="${currentExecutionImgPath}" alt="execution-png">
                </div>
                <p>
                    Für Nutzung ohne elektrischen Torantrieb (Mit Griffgarnitur / Schloß)
                </p>
            </div>
            <div onclick="markTheExecutionBox(this)" id="execution-2" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="execution-img" src="${executionImgs[0]}" alt="execution-png">
                </div>
                <p>
                    Für Nutzung mit elektrischem Torantrieb (ohne Griffgarnitur / Schloß)
                </p>
            </div>
        </div>
    `;
}