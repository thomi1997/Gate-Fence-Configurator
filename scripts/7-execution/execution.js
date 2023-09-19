let currentExecution = [];


function renderExecution() {
    let executionDiv = document.getElementById('execution-box');
    executionDiv.innerHTML = htmlExecution();
}


function addExecution(executionAsText) {
    console.log(executionAsText);
    if (currentExecution.length > 0) {
        currentExecution.forEach(execution => {
            deleteExecution(execution);
        });
    }

    if (currentExecution.length == 0) {
        let execution = executionAsText;
        let priseExecution = '49,99';
        let offerExecution = {
            'execution': execution,
            'prise-execution': priseExecution,
        }
        currentExecution.push(offerExecution);
    }
}


function deleteExecution(execution) {
    currentExecution.splice(execution, 1);
}


function executionGetText(i) {
    if (i == 'without') {
        let execution1 = document.getElementById('execution-1');
        let execution1AsText = execution1.textContent;
        let execution1clean = execution1AsText.trim();
        addExecution(execution1clean);
    }

    if (i == 'with') {
        let execution2 = document.getElementById('execution-2');
        let execution2AsText = execution2.textContent;
        let execution2clean = execution2AsText.trim();
        addExecution(execution2clean);
    }
}


function markTheExecutionBox(i) {
    let execution1 = document.getElementById('execution-1');
    let execution2 = document.getElementById('execution-2');

    if (i == 'without') {
        execution1.classList.add('mark-the-box');

        execution2.classList.remove('mark-the-box');
    }

    if (i == 'with') {
        execution2.classList.add('mark-the-box');

        execution1.classList.remove('mark-the-box');
    }
    executionGetText(i);
}