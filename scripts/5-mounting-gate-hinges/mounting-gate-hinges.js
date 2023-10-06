let currentMountingGateHinges = [];
let previouMountingGateHingesId = 'mounting-gate-hinges-1';


function renderMountingGateHinges() {
    let mountingGateHingesDiv = document.getElementById('mounting-gate-hinges-box');
    mountingGateHingesDiv.innerHTML = '';
    let currentId = currentMountingMethod[0]['id'];
    //let mountingGateHingesTextTop = document.getElementById('mounting-gate-hinges-text-top');
    //let mountingGateHingesTextBottom = document.getElementById('mounting-gate-hinges-text-bottom');
    if (insideRight) {
        if (currentId == 'mounting-method-1' || currentId == 'mounting-method-2' || currentId == 'mounting-method-5') {
            mountingGateHingesDiv.innerHTML = htmlMountingGateHinges(mountingGateHingesImgPathsInsideRight[0]);
        }

        if (currentId == 'mounting-method-3' || currentId == 'mounting-method-6') {
            mountingGateHingesDiv.innerHTML = htmlMountingGateHinges(mountingGateHingesImgPathsInsideRight[1]);
        }

        if (currentId == 'mounting-method-4' || currentId == 'mounting-method-7') {
            mountingGateHingesDiv.innerHTML = htmlMountingGateHingesDouble(mountingGateHingesImgPathsInsideRight[2], mountingGateHingesImgPathsOutSideLeft[1]);
        }
    } else if (insideLeft) {
        if (currentId == 'mounting-method-1' || currentId == 'mounting-method-3' || currentId == 'mounting-method-6') {
            mountingGateHingesDiv.innerHTML = htmlMountingGateHinges(mountingGateHingesImgPathsInsideLeft[0]);
        }

        if (currentId == 'mounting-method-2' || currentId == 'mounting-method-5') {
            mountingGateHingesDiv.innerHTML = htmlMountingGateHinges(mountingGateHingesImgPathsInsideLeft[1]);
        }

        if (currentId == 'mounting-method-4' || currentId == 'mounting-method-7') {
            mountingGateHingesDiv.innerHTML = htmlMountingGateHingesDouble(mountingGateHingesImgPathsInsideLeft[2], mountingGateHingesImgPathsOutSideRight[1]);
        }
    } else if (outsideRight) {
        if (currentId == 'mounting-method-1' || currentId == 'mounting-method-3' || currentId == 'mounting-method-6') {
            mountingGateHingesDiv.innerHTML = htmlMountingGateHinges(mountingGateHingesImgPathsOutSideRight[0]);
        }

        if (currentId == 'mounting-method-2' || currentId == 'mounting-method-5' || currentId == 'mounting-method-4' || currentId == 'mounting-method-7') {
            mountingGateHingesDiv.innerHTML = htmlMountingGateHinges(mountingGateHingesImgPathsOutSideRight[1]);
        }
    } else if (outsideLeft) {
        if (currentId == 'mounting-method-1' || currentId == 'mounting-method-2' || currentId == 'mounting-method-5') {
            mountingGateHingesDiv.innerHTML = htmlMountingGateHinges(mountingGateHingesImgPathsOutSideLeft[0]);
        }

        if (currentId == 'mounting-method-3' || currentId == 'mounting-method-4' || currentId == 'mounting-method-6' || currentId == 'mounting-method-7') {
            mountingGateHingesDiv.innerHTML = htmlMountingGateHinges(mountingGateHingesImgPathsOutSideLeft[1]);
        }
    }
    let firstMountingGateHingesMark = document.getElementById('mounting-gate-hinges-1');
    markTheMountingGateHingesBox(firstMountingGateHingesMark);
}


function markTheMountingGateHingesBox(thisId) {
    let currentMountingGateHingesId = thisId.id;
    document.getElementById(`${currentMountingGateHingesId}`).classList.add('mark-the-box');
    if (previouMountingGateHingesId !== currentMountingGateHingesId) {
        document.getElementById(`${previouMountingGateHingesId}`).classList.remove('mark-the-box');
        previouMountingGateHingesId = currentMountingGateHingesId;
    }
    mountingGateHingesGetText(currentMountingGateHingesId);
}


function mountingGateHingesGetText(currentMountingGateHingesId) {
    let mountingGateHingesId = document.getElementById(`${currentMountingGateHingesId}`);
    let paragraphsmountingGateHinges = mountingGateHingesId.querySelector(`#${currentMountingGateHingesId} p:nth-child(3)`);
    let trimmedMountingGateHinges = paragraphsmountingGateHinges.textContent.trim();
    addMountingGateHinges(trimmedMountingGateHinges, currentMountingGateHingesId);
}


function addMountingGateHinges(allMountingGateHingesAsText, currentMountingGateHingesId) {
    let mountingGateHinges = allMountingGateHingesAsText;
    if (currentMountingGateHinges.length > 0) {
        currentMountingGateHinges = [];
    }
    if (currentMountingGateHinges.length == 0) {
        queryIdMountingGateHinges(currentMountingGateHingesId, mountingGateHinges);
    }
}


function queryIdMountingGateHinges(currentMountingGateHingesId, mountingGateHinges) {
    let priseMountingGateHinges = '';
    if (currentMountingGateHingesId == 'mounting-gate-hinges-1') {
        priseMountingGateHinges = '0,00';
    } else if (currentMountingGateHingesId == 'mounting-gate-hinges-2') {
        priseMountingGateHinges = '0,00';
    } else if (currentMountingGateHingesId == 'mounting-gate-hinges-3') {
        priseMountingGateHinges = '0,00';
    }
    pushMountingGateHingesContent(currentMountingGateHingesId, priseMountingGateHinges, mountingGateHinges);
}


function pushMountingGateHingesContent(currentMountingGateHingesId, priseMountingGateHinges, mountingGateHinges) {
    //console.log('aktuelle id', currentMountingGateHingesId);
    //console.log('aktueller preis', priseMountingGateHinges);
    //console.log('aktueller text', mountingGateHinges);
    let offerMountingGateHinges = {
        'id': currentMountingGateHingesId,
        'mounting-gate-hinges': mountingGateHinges,
        'prise-mounting-gate-hinges': priseMountingGateHinges,
    }
    currentMountingGateHinges.push(offerMountingGateHinges);
}