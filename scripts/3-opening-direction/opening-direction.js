let currentOpeningDirection = [];
let previouOpeningDirectionId = 'opening-direction-1';


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
}


function openingDirectionGetText(currentOpeningDirectionId) {
    let openingDirectionId = document.getElementById(`${currentOpeningDirectionId}`);
    let openingDirectionAsText = openingDirectionId.textContent;
    let openingDirectionclean = openingDirectionAsText.trim();
    addOpeningDirection(openingDirectionclean, currentOpeningDirectionId);
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
    console.log('aktuelle id', currentOpeningDirectionId);
    console.log('aktueller text', openingDirection);
    let priseOpeningDirection = '0,00';
    console.log('aktueller preis', priseOpeningDirection);
    let offerOpeningDirection = {
        'id': currentOpeningDirectionId,
        'opening-direction': openingDirection,
        'prise-opening-direction': priseOpeningDirection
    }
    currentOpeningDirection.push(offerOpeningDirection);
}