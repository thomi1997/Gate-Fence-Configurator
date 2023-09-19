function htmlExecution() {
    return /*html*/`
        <h2>7. Ausführung</h2>
        <div class="execution-collection">
            <div onclick="markTheExecutionBox('without')" id="execution-1" class="box-coating">
                <p>
                    Für Nutzung ohne elektrischen Torantrieb (Mit Griffgarnitur / Schloß)
                </p>
            </div>
            <div onclick="markTheExecutionBox('with')" id="execution-2" class="box-coating">
                <p>
                    Für Nutzung mit elektrischem Torantrieb (ohne Griffgarnitur / Schloß)
                </p>
            </div>
        </div>
    `;
}