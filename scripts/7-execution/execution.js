let currentExecution = [];
let previouExecutionId = 'execution-1';
let withMotor = false;
let withoutMotor = false;
let executionIsOpen = true;


let executionImgs = [
    'img/execution-img/0-execution-with-motor.png',
    'img/execution-img/1-execution-without-motor-grip-left.png',
    'img/execution-img/2-execution-without-motor-grip-right.png'
];


function renderExecution() {
    let executionDiv = document.getElementById('execution-box');
    queryExecutionWichImg(executionDiv);
    
    let firstExecutionMark = document.getElementById('execution-1');
    markTheExecutionBox(firstExecutionMark);
}


function queryExecutionWichImg(executionDiv) {
    let currentExecutionImgPath = executionImgs;
    if (keyLockLeft) {
        currentExecutionImgPath = executionImgs[1];
    } else if (keyLockRight) {
        currentExecutionImgPath = executionImgs[2];
    }
    queryExecutionNumber(executionDiv, currentExecutionImgPath);
}


function queryExecutionNumber(executionDiv, currentExecutionImgPath) {
    if (postConcrete) {
        let executionNumber = 7;
        executionDiv.innerHTML = htmlExecution(executionNumber, currentExecutionImgPath);
    } else if (postScrewOn) {
        executionNumber = 9;
        executionDiv.innerHTML = htmlExecution(executionNumber, currentExecutionImgPath);
    }
    if (pillarsOnly) {
        executionNumber = 6;
        executionDiv.innerHTML = htmlExecution(executionNumber, currentExecutionImgPath);
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


function openExecutionCollectionMobil() {
    let executionTitelDiv = document.getElementById('open-execution');
    let executionSeries = document.getElementById('series-7');
    if (executionIsOpen) {
        executionSeries.classList.remove('back-rotate-mobile-open-svg');
        executionTitelDiv.classList.add('open-execution-configuration');
        executionSeries.classList.add('rotate-mobile-open-svg');
        executionIsOpen = false;
    } else {
        executionTitelDiv.classList.remove('open-execution-configuration');
        executionSeries.classList.remove('rotate-mobile-open-svg');
        executionSeries.classList.add('back-rotate-mobile-open-svg');
        executionIsOpen = true;
    }
}