let currentExecution = [];
let previouExecutionId = 'execution-1';


function renderExecution() {
    let executionDiv = document.getElementById('execution-box');
    executionDiv.innerHTML = htmlExecution();
    let firstExecutionMark = document.getElementById('execution-1');
    markTheExecutionBox(firstExecutionMark);
}


function markTheExecutionBox(thisId) {
    let currentExecutionId = thisId.id;
    document.getElementById(`${currentExecutionId}`).classList.add('mark-the-box');
    if (previouExecutionId !== currentExecutionId) {
        document.getElementById(`${previouExecutionId}`).classList.remove('mark-the-box');
        previouExecutionId = currentExecutionId;
    }
    executionGetText(currentExecutionId);
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
}