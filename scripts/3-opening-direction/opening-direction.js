let currentOpeningDirection = [];
let previouOpeningDirectionId = 'opening-direction-1';

let keyLockLeft = false;
let keyLockRight = false;

let insideLeft = false;
let insideRight = false;
let outsideLeft = false;
let outsideRight = false;


function renderOpeningDirection() {
    let openingDirectionDiv = document.getElementById('opening-direction-box');
    openingDirectionDiv.innerHTML = htmlOpeningDirection();
    let firstOpeningDirectionMark = document.getElementById('opening-direction-1');
    markTheOpeningDirectionBox(firstOpeningDirectionMark);
}


function markTheOpeningDirectionBox(thisId) {
    let currentOpeningDirectionId = thisId.id;
    document.getElementById(`${currentOpeningDirectionId}`).classList.add('mark-the-box');
    if (previouOpeningDirectionId !== currentOpeningDirectionId) {
        document.getElementById(`${previouOpeningDirectionId}`).classList.remove('mark-the-box');
        previouOpeningDirectionId = currentOpeningDirectionId;
    }
    openingDirectionGetText(currentOpeningDirectionId);
    keyLockQuery(currentOpeningDirectionId);
}


function keyLockQuery(currentOpeningDirectionId) {
    let queryLeft = currentOpeningDirectionId == 'opening-direction-1' || currentOpeningDirectionId == 'opening-direction-4'; // innen
    let queryRight = currentOpeningDirectionId == 'opening-direction-2' || currentOpeningDirectionId == 'opening-direction-3'; // außen
    let queryOutsideRight = currentOpeningDirectionId == 'opening-direction-3';
    let queryOutsideLeft = currentOpeningDirectionId == 'opening-direction-4';
    queryAllSides(queryLeft, queryRight, queryOutsideRight, queryOutsideLeft);
}


function queryAllSides(queryLeft, queryRight, queryOutsideRight, queryOutsideLeft) {
    if (queryLeft) {
        queryInsideRight();
        queryOutSideLeft(queryOutsideLeft);
    } else if (queryRight) {
        queryInsideLeft();
        queryOutSideRight(queryOutsideRight);
    }
    //console.log('inside right', insideRight);
    //console.log('outside left', outsideLeft);
    //console.log('outside right', outsideRight);
    //console.log('inside left', insideLeft);
    renderMountingMethod();
    renderMountingGateHinges();
}


function queryInsideRight() {
    insideRight = true;
    insideLeft = false;
    outsideLeft = false;
    outsideRight = false;
    keyLockLeft = true;
    keyLockRight = false;
}


function queryOutSideLeft(queryOutsideLeft) {
    if (queryOutsideLeft) {
        outsideLeft = true;
        outsideRight = false;
        insideRight = false;
        insideLeft = false;
    }
}


function queryInsideLeft() {
    insideLeft = true;
    insideRight = false;
    outsideLeft = false;
    outsideRight = false;
    keyLockLeft = false;
    keyLockRight = true;
}


function queryOutSideRight(queryOutsideRight) {
    if (queryOutsideRight) {
        outsideRight = true;
        outsideLeft = false;
        insideLeft = false;
        insideRight = false;
    }
}


function openingDirectionGetText(currentOpeningDirectionId) {
    let openingDirectionId = document.getElementById(`${currentOpeningDirectionId}`);
    let paragraphsOpeningDirection = openingDirectionId.querySelector(`#${currentOpeningDirectionId} p:nth-child(3)`);
    let trimmedOpeningDirection = paragraphsOpeningDirection.textContent.trim();
    addOpeningDirection(trimmedOpeningDirection, currentOpeningDirectionId);
}


function addOpeningDirection(openingDirectionAsText, currentOpeningDirectionId) {
    let openingDirection = openingDirectionAsText;
    if (currentOpeningDirection.length > 0) {
        currentOpeningDirection = [];
    }
    if (currentOpeningDirection.length == 0) {
        pushOpeningDirectionContent(currentOpeningDirectionId, openingDirection);
    }
}


function pushOpeningDirectionContent(currentOpeningDirectionId, openingDirection) {
    //console.log('aktuelle id', currentOpeningDirectionId);
    //console.log('aktueller text', openingDirection);
    let priseOpeningDirection = '0,00';
    //console.log('aktueller preis', priseOpeningDirection);
    let offerOpeningDirection = {
        'id': currentOpeningDirectionId,
        'opening-direction': openingDirection,
        'prise-opening-direction': priseOpeningDirection
    }
    currentOpeningDirection.push(offerOpeningDirection);
}