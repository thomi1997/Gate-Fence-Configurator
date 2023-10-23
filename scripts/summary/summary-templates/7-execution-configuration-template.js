function htmlExecutionBoxConfiguration() {
    return /*html*/`
        <div class="configuration-column">
            <div class="collection-prise">
                <p>
                    Ausführung
                </p>
                <p class="summary-prise-color">
                    ${currentExecution[0]['prise-execution']} €
                </p>
            </div>
            <span>
                ${currentExecution[0]['execution']}
            </span>
        </div>
    `;
}