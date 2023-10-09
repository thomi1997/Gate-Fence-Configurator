let currentExecution = [];
let previouExecutionId = 'execution-1';
let withMotor = false;
let withoutMotor = false;

function renderExecution() {
    let executionDiv = document.getElementById('execution-box');
    queryExecutionNumber(executionDiv);
    let firstExecutionMark = document.getElementById('execution-1');
    markTheExecutionBox(firstExecutionMark);
}


function queryExecutionNumber(executionDiv) {
    if (postConcrete) {
        let executionNumber = 7;
        executionDiv.innerHTML = htmlExecution(executionNumber);
    } else if (postScrewOn) {
        executionNumber = 9;
        executionDiv.innerHTML = htmlExecution(executionNumber);
    }
    if (pillarsOnly) {
        executionNumber = 6;
        executionDiv.innerHTML = htmlExecution(executionNumber);
    }
}


function markTheExecutionBox(thisId) {
    let currentExecutionId = thisId.id;
    document.getElementById(`${currentExecutionId}`).classList.add('mark-the-box');
    if (previouExecutionId !== currentExecutionId) {
        document.getElementById(`${previouExecutionId}`).classList.remove('mark-the-box');
        previouExecutionId = currentExecutionId;
    }
    executionGetText(currentExecutionId);
    if (currentExecutionId == 'execution-1') {
        withoutMotor = true;
        withMotor = false;
        renderGripSet();
        renderDimensions();
    } else if (currentExecutionId == 'execution-2') {
        withMotor = true;
        withoutMotor = false;
        renderGripSet();
        renderDimensions();
    }
}


function executionGetText(currentExecutionId) {
    let executionId = document.getElementById(`${currentExecutionId}`);
    let executionAsText = executionId.textContent;
    let executionclean = executionAsText.trim();
    addExecution(executionclean, currentExecutionId);
}


function addExecution(executionAsText, currentExecutionId) {
    let execution = executionAsText;
    if (currentExecution.length > 0) {
        currentExecution = [];
    }
    if (currentExecution.length == 0) {
        queryIdExecution(currentExecutionId, execution);
    }
}


function queryIdExecution(currentExecutionId, execution) {
    let priseExecution = '';
    if (currentExecutionId == 'execution-1') {
        priseExecution = '0,00';
    } else if (currentExecutionId == 'execution-2') {
        priseExecution = '0,00';
    }
    pushExecutionContent(currentExecutionId, priseExecution, execution);
}


function pushExecutionContent(currentExecutionId, priseExecution, execution) {
    //console.log('aktuelle id', currentExecutionId);
    //console.log('aktueller preis', priseExecution);
    //console.log('aktueller text', execution);
    let offerExecution = {
        'id': currentExecutionId,
        'execution': execution,
        'prise-execution': priseExecution,
    }
    currentExecution.push(offerExecution);
    renderExecutionConfiguration();
}