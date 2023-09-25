let currentMountingMethod = [];
let previouMountingMethodId = 'mounting-method-1';


function renderMountingMethod() {
    let mountingMethodDiv = document.getElementById('mounting-method-box');
    mountingMethodDiv.innerHTML = htmlMountingMethod();
}


function markTheMountingMethodBox(thisId) {
    let currentMountingMethodId = thisId.id;
    document.getElementById(`${currentMountingMethodId}`).classList.add('mark-the-box');
    if (previouMountingMethodId !== currentMountingMethodId) {
        document.getElementById(`${previouMountingMethodId}`).classList.remove('mark-the-box');
        previouMountingMethodId = currentMountingMethodId;
    }
    mountingMethodGetText(currentMountingMethodId);
}


function mountingMethodGetText(currentMountingMethodId) {
    let mountingMethodId = document.getElementById(`${currentMountingMethodId}`);
    let mountingMethodAsText = mountingMethodId.textContent;
    let mountingMethodclean = mountingMethodAsText.trim();
    addMountingMethod(mountingMethodclean, currentMountingMethodId);
}


function addMountingMethod(mountingMethodAsText, currentMountingMethodId) {
    let mountingMethod = mountingMethodAsText;
    if (currentSurface.length > 0) {
        currentSurface = [];
    }
    if (currentSurface.length == 0) {
        queryIdMountingMethod(currentMountingMethodId, mountingMethod);
    }
}


function queryIdMountingMethod(currentMountingMethodId, mountingMethod) {
    let priseMountingMethod = '';
    if (currentMountingMethodId == 'mounting-method-1') {
        priseMountingMethod = '0,00';
    } else if (currentMountingMethodId == 'mounting-method-2') {
        priseMountingMethod = '198,48';
    } else if (currentMountingMethodId == 'mounting-method-3') {
        priseMountingMethod = '198,48';
    } else if (currentMountingMethodId == 'mounting-method-4') {
        priseMountingMethod = '396,96';
    } else if (currentMountingMethodId == 'mounting-method-5') {
        priseMountingMethod = '0,00';
    } else if (currentMountingMethodId == 'mounting-method-6') {
        priseMountingMethod = '0,00';
    } else if (currentMountingMethodId == 'mounting-method-7') {
        priseMountingMethod = '0,00';
    }
    pushMountingMethodContent(currentMountingMethodId, priseMountingMethod, mountingMethod);
}


function pushMountingMethodContent(currentMountingMethodId, priseMountingMethod, mountingMethod) {
    console.log('aktuelle id', currentMountingMethodId);
    console.log('aktueller preis', priseMountingMethod);
    console.log('aktueller text', mountingMethod);
    let offerMountingMethod = {
        'id': currentMountingMethodId,
        'mounting-method': mountingMethod,
        'prise-mounting-method': priseMountingMethod,
    }
    currentMountingMethod.push(offerMountingMethod);
}