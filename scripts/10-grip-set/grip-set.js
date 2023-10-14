let currentGripSet = [];
let previouGripSetId = 'grip-set-1';
let previouGripSetPrice = '49,99';
let priseGripSetAlreadyExecuted = false;


let gripSetImgs = [
    'img/grip-set-img/0-knob-set-alu.png',
    'img/grip-set-img/1-presser-set-alu.png',
    'img/grip-set-img/2-presser-knob-set-alu.png',
    'img/grip-set-img/3-knob-set-stainless-steel.png',
    'img/grip-set-img/4-presser-set-stainless-steel.png',
    'img/grip-set-img/5-presser-knob-set-stainless-steel.png',
];


function renderGripSet() {
    let gripSetDiv = document.getElementById('grip-set-box');
    if (withoutMotor) {
        document.getElementById('grip-set-configuration-box').classList.remove('d-none');
        queryGripSetNumber(gripSetDiv);
    } else if (withMotor) {
        gripSetDiv.classList.add('d-none');
        document.getElementById('grip-set-configuration-box').classList.add('d-none');
    }
}


function queryGripSetNumber(gripSetDiv) {
    let gripSetNumber = 8;
    if (postScrewOn) {
        gripSetNumber = 10;
    } else if (pillarsOnly) {
        gripSetNumber = gripSetNumber -1;
    }
    showGripSet(gripSetDiv, gripSetNumber);
}


function showGripSet(gripSetDiv, gripSetNumber) {
    gripSetDiv.classList.remove('d-none');
    gripSetDiv.innerHTML = htmlGripSet(gripSetNumber);
    let firstGripSetMark = document.getElementById('grip-set-1');
    markTheGripSetBox(firstGripSetMark);
}


function markTheGripSetBox(thisId) {
    let currentGripSetId = thisId.id;
    document.getElementById(`${currentGripSetId}`).classList.add('mark-the-box');
    if (previouGripSetId !== currentGripSetId) {
        document.getElementById(`${previouGripSetId}`).classList.remove('mark-the-box');
        previouGripSetId = currentGripSetId;
    }
    gripSetGetText(currentGripSetId);
}


function gripSetGetText(currentGripSetId) {
    let gripSetId = document.getElementById(`${currentGripSetId}`);
    let gripSetAsText = gripSetId.textContent;
    let gripSetclean = gripSetAsText.trim();
    addGripSet(gripSetclean, currentGripSetId);
}


function addGripSet(gripSetAsText, currentGripSetId) {
    let gripSet = gripSetAsText;
    if (currentGripSet.length > 0) {
        currentGripSet = [];
    }
    if (currentGripSet.length == 0) {
        queryIdGripSet(currentGripSetId, gripSet);
    }
}


function queryIdGripSet(currentGripSetId, gripSet) {
    let priseGripSet = '';
    if (currentGripSetId == 'grip-set-1') {
        priseGripSet = '49,99';
    } else if (currentGripSetId == 'grip-set-2') {
        priseGripSet = '43,76';
    } else if (currentGripSetId == 'grip-set-3') {
        priseGripSet = '12,43';
    } else if (currentGripSetId == 'grip-set-4') {
        priseGripSet = '67,49';
    } else if (currentGripSetId == 'grip-set-5') {
        priseGripSet = '53,76';
    } else if (currentGripSetId == 'grip-set-6') {
        priseGripSet = '32,57';
    }
    pushGripSetContent(currentGripSetId, priseGripSet, gripSet);
}


function pushGripSetContent(currentGripSetId, priseGripSet, gripSet) {
    //console.log('aktuelle id', currentGripSetId);
    //console.log('aktueller preis', priseGripSet);
    //console.log('aktueller text', gripSet);
    let offerGripSet = {
        'id': currentGripSetId,
        'grip-set': gripSet,
        'prise-grip-set': priseGripSet,
    }
    currentGripSet.push(offerGripSet);
    renderGripSetConfiguration();
    calculationGripSet(priseGripSet);
}


function calculationGripSet(priseGripSet) {
    let priseGripSetNotSame = parseFloat(priseGripSet.replace(",", ""));
    let totalPrise = parseFloat(currentTotalPrise[0].replace(",", ""));
    let currentPreviouGripSetPrice = parseFloat(previouGripSetPrice.replace(",", ""));
    queryGripSetWhatCalculate(priseGripSet, priseGripSetNotSame, totalPrise, currentPreviouGripSetPrice);
}


function queryGripSetWhatCalculate(priseGripSet, priseGripSetNotSame, totalPrise, currentPreviouGripSetPrice) {
    if (previouGripSetPrice !== priseGripSet) {
        calculateNotSameBox(priseGripSetNotSame, totalPrise, currentPreviouGripSetPrice);
        previouGripSetPrice = priseGripSet;
    } else if (previouGripSetPrice == priseGripSet && !priseGripSetAlreadyExecuted) {
        priseGripSetAlreadyExecuted = true;
        calculateTheFirstBox(totalPrise, currentPreviouGripSetPrice);
    }
    renderEndSum();
}