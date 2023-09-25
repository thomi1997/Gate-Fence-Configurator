let currentMountingGateHinges = [];
let previouMountingGateHingesId = 'mounting-gate-hinges-1'


function renderMountingGateHinges() {
    let mountingGateHingesDiv = document.getElementById('mounting-gate-hinges-box');
    mountingGateHingesDiv.innerHTML = htmlMountingGateHinges();
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
    let mountingGateHingesAsText = mountingGateHingesId.textContent;
    let mountingGateHingesclean = mountingGateHingesAsText.trim();
    addMountingGateHinges(mountingGateHingesclean, currentMountingGateHingesId);
}


function addMountingGateHinges(mountingGateHingesAsText, currentMountingGateHingesId) {
    let mountingGateHinges = mountingGateHingesAsText;
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
    console.log('aktuelle id', currentMountingGateHingesId);
    console.log('aktueller preis', priseMountingGateHinges);
    console.log('aktueller text', mountingGateHinges);
    let offerMountingGateHinges = {
        'id': currentMountingGateHingesId,
        'mounting-gate-hinges': mountingGateHinges,
        'prise-mounting-gate-hinges': priseMountingGateHinges,
    }
    currentMountingGateHinges.push(offerMountingGateHinges);
}