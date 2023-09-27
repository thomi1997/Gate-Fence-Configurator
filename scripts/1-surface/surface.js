let currentSurface = [];
let previouSurfaceId = 'surface-1';


function renderSurface() {
    let surfaceDiv = document.getElementById('surface-box');
    surfaceDiv.innerHTML = htmlSurface();
    let firstSurfaceMark = document.getElementById('surface-1');
    markTheSurfaceBox(firstSurfaceMark);
}


function markTheSurfaceBox(thisId) {
    let currentSurfaceId = thisId.id;
    document.getElementById(`${currentSurfaceId}`).classList.add('mark-the-box');
    if (previouSurfaceId !== currentSurfaceId) {
        document.getElementById(`${previouSurfaceId}`).classList.remove('mark-the-box');
        previouSurfaceId = currentSurfaceId;
    }
    surfaceGetText(currentSurfaceId);
    
    if (currentSurfaceId == 'surface-4') {
        changeColorSurface = false;
        changeColorDB = false;
        changeColorHammerBlowSurface = true;
        renderColor();
    } else if (currentSurfaceId == 'surface-5') {
        changeColorSurface = false;
        changeColorHammerBlowSurface = false;
        changeColorDB = true;
        renderColor();
    } else {
        changeColorHammerBlowSurface = false;
        changeColorDB = false;
        changeColorSurface = true;
        renderColor();
    }
}


function surfaceGetText(currentSurfaceId) {
    let surfaceId = document.getElementById(`${currentSurfaceId}`);
    let surfaceAsText = surfaceId.textContent;
    let surfaceclean = surfaceAsText.trim();
    addSurface(surfaceclean, currentSurfaceId);
}


function addSurface(surfaceAsText, currentSurfaceId) {
    let surface = surfaceAsText;
    if (currentSurface.length > 0) {
        currentSurface = [];
    }
    if (currentSurface.length == 0) {
        queryIdSurface(currentSurfaceId, surface);
    }
}


function queryIdSurface(currentSurfaceId, surface) {
    let priseSurface = '';
    if (currentSurfaceId == 'surface-1') {
        priseSurface = '49,99';
    } else if (currentSurfaceId == 'surface-2') {
        priseSurface = '43,76';
    } else if (currentSurfaceId == 'surface-3') {
        priseSurface = '12,43';
    } else if (currentSurfaceId == 'surface-4') {
        priseSurface = '67,49';
    } else if (currentSurfaceId == 'surface-5') {
        priseSurface = '53,76';
    }
    pushSurfaceContent(currentSurfaceId, priseSurface, surface);
}


function pushSurfaceContent(currentSurfaceId, priseSurface, surface) {
    console.log('aktuelle id', currentSurfaceId);
    console.log('aktueller preis', priseSurface);
    console.log('aktueller text', surface);
    let offerSurface = {
        'id': currentSurfaceId,
        'surface': surface,
        'prise-surface': priseSurface,
    }
    currentSurface.push(offerSurface);
}