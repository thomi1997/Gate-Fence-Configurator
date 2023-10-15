function htmlExecution(executionNumber, currentExecutionImgPath) {
    return /*html*/`
        <div class="collection-titel">
            <h2>
                ${executionNumber}. Ausführung
            </h2>
        </div>
        <div class="execution-collection">
            <div onclick="markTheExecutionBox(this)" id="execution-1" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${currentExecutionImgPath}" alt="execution-png">
                </div>
                <p>
                    Für Nutzung ohne elektrischen Torantrieb (Mit Griffgarnitur / Schloß)
                </p>
            </div>
            <div onclick="markTheExecutionBox(this)" id="execution-2" class="box-coating">
                <div class="img-lower-level" style="background-color:${currentColor[0]['color']};">
                    <img class="collection-imgs" src="${executionImgs[0]}" alt="execution-png">
                </div>
                <p>
                    Für Nutzung mit elektrischem Torantrieb (ohne Griffgarnitur / Schloß)
                </p>
            </div>
        </div>
    `;
}