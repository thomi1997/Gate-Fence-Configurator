let currentOpeningDirection = [];
let previouOpeningDirectionId = 'opening-direction-1';
let keyLockLeft = false;
let keyLockRight = false;


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
    let queryLeft = currentOpeningDirectionId == 'opening-direction-1' || currentOpeningDirectionId == 'opening-direction-4';
    let queryRight = currentOpeningDirectionId == 'opening-direction-2' || currentOpeningDirectionId == 'opening-direction-3';
        if (queryLeft) {
            keyLockLeft = true;
            keyLockRight = false;
            renderMountingMethod();
            //console.log('opening direction', currentOpeningDirectionId);
            //console.log('keylock left', keyLockLeft);
            //console.log('keylock right', keyLockRight);
        } else if (queryRight) {
            keyLockLeft = false;
            keyLockRight = true;
            renderMountingMethod();
            //console.log('opening direction-2', currentOpeningDirectionId);
            //console.log('keylock left', keyLockLeft);
            //console.log('keylock right', keyLockRight);
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