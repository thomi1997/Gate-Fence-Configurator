let currentColor = [];
let previouColorId = '1';
let previouColorPrice = '222,99';
let changeColorSurface = true;
let changeColorHammerBlowSurface = false;
let changeColorDB = false;

let colorOnLoad = false;
let priseColorAlreadyExecuted = false;
let colorIsOpen = false;


function renderColor() {
    let colorDiv = document.getElementById('color-box');
    colorDiv.innerHTML = htmlColor();
    if (changeColorSurface) {
        queryRenderColors();
    } else if (changeColorHammerBlowSurface) {
        queryRenderHammerBlowColors();
    } else if (changeColorDB) {
        queryRenderDBColor();
    }
    document.getElementById('color-overview').style = 'display: none';
}


function queryRenderColors() {
    let colorButtonDiv = document.getElementById('change-color');
    colorButtonDiv.innerHTML = htmlColorButton();
    renderAllRalColorsOverview();
    firstColorMark();
}


function queryRenderHammerBlowColors() {
    let colorDivH2 = document.getElementById('h2-color-collection');
    colorDivH2.innerHTML = '2. Farbe des Hammerschlags';
    renderHammerBlowColor();
}


function queryRenderDBColor() {
    let colorDivH2 = document.getElementById('h2-color-collection');
    colorDivH2.innerHTML = '2. DB-Farbe';
    renderDBColor();
}


function renderAllRalColorsOverview() {
    let colorOverviewDiv = document.getElementById('color-overview');
    colorOverviewDiv.innerHTML = htmlColorOverview();
    renderAllColors();
}


function firstColorMark() {
    document.getElementById('mark-color-collection').classList.add('mark-the-box');
    let firstRGBColorBoxMark = document.getElementById('1');
    let color = greenBeige;
    markTheRGBColorBox(firstRGBColorBoxMark, color);
    document.getElementById('color-selected').style = `background-color: ${currentColor[0]['color']}`;
}


function openColorOverview() {
    let colorOverviewDiv = document.getElementById('color-overview');
    colorOverviewDiv.style = 'display: flex;'
}


function closeColorOverview() {
    document.getElementById('color-selected').style = `background-color: ${currentColor[0]['color']}`;
    document.getElementById('color-overview').style = 'display: none;'
}


function renderAllColors() {
    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        let colorListDiv = document.getElementById('rgb-color-id');
        colorListDiv.innerHTML += htmlAllColorsList(color, i);
    }
}


function renderHammerBlowColor() {
    for (let i = 0; i < colorsHammerBlow.length; i++) {
        const colorHammerBlow = colorsHammerBlow[i];
        let colorHammerBlowListDiv = document.getElementById('change-color');
        colorHammerBlowListDiv.innerHTML += htmlHammerBlowColor(colorHammerBlow, i);
    }
}


function renderDBColor() {
    for (let i = 0; i < colorsDB.length; i++) {
        const colorDB = colorsDB[i];
        let colorDBListDiv = document.getElementById('change-color');
        colorDBListDiv.innerHTML += htmlHammerBlowColor(colorDB, i);
    }
}


function markTheRGBColorBox(thisColorId, color) {
    let currentColorId = thisColorId.id;
    document.getElementById(`${currentColorId}`).classList.add('mark-the-color-box');
    if (previouColorId !== currentColorId) {
        if (previouColorId == 0) {
            previouColorId = currentColorId;
        }
        document.getElementById(`${previouColorId}`).classList.remove('mark-the-color-box');
        previouColorId = currentColorId;
    }
    if (currentColor.length > 0) {
        currentColor = [];
    }
    if (currentColor.length == 0) {
        pushColor(currentColorId, color);
    }
}


function pushColor(currentColorId, color) {
    //console.log('aktuelle id', currentColorId);
    //console.log('aktuelle farbe', color);
    colorOnLoad = true;
    let priseColor = '222,99'
    let offerColor = {
        'id': currentColorId,
        'color': color,
        'prise-color': priseColor,
    }
    currentColor.push(offerColor);
    renderColorConfigurationen();
    calculationColor(priseColor);
    changeAllImgsColor();
}

function changeAllImgsColor() {
    renderOpeningDirection();
    renderMountingTypePost();
}


function calculationColor(priseColor) {
    let priseColorNotSame = parseFloat(priseColor.replace(",", ""));
    let totalPrise = parseFloat(currentTotalPrise[0].replace(",", ""));
    let currentPreviouColorPrice = parseFloat(previouColorPrice.replace(",", ""));
    queryColorWhatCalculate(priseColor, priseColorNotSame, totalPrise, currentPreviouColorPrice);
}


function queryColorWhatCalculate(priseColor, priseColorNotSame, totalPrise, currentPreviouColorPrice) {
    if (previouColorPrice !== priseColor) {
        calculateNotSameBox(priseColorNotSame, totalPrise, currentPreviouColorPrice);
        previouColorPrice = priseColor;
    } else if (previouColorPrice == priseColor && !priseColorAlreadyExecuted) {
        priseColorAlreadyExecuted = true;
        calculateTheFirstBox(totalPrise, currentPreviouColorPrice);
    }
    renderEndSum();
}


function openColorCollectionMobil() {
    let colorTitelDiv = document.getElementById('change-color');
    colorIsOpen = true;
    if (colorIsOpen) {
        colorTitelDiv.classList.toggle('open-color-configuration');
        colorIsOpen = false;
    }
}