let currentColor = [];
let previouColorId = '1';


function renderColor() {
    let colorDiv = document.getElementById('color-box');
    colorDiv.innerHTML = htmlColor();
    generateColors();
    document.getElementById('color-overview').style = 'display: none';
}


function openColorOverview() {
    let colorOverviewDiv = document.getElementById('color-overview');
    colorOverviewDiv.style = 'display: flex;'
    renderAllRalColorsOverview(colorOverviewDiv);
    renderAllColors();
}


function closeColorOverview() {
    document.getElementById('color-selected').style = `background-color: ${currentColor[0]['color']}`;
    document.getElementById('color-overview').style = 'display: none;'
}


function renderAllRalColorsOverview(colorOverviewDiv) {
        colorOverviewDiv.innerHTML = htmlColorOverview();
}


function renderAllColors() {
    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        let colorListDiv = document.getElementById('rgb-color-id');
        colorListDiv.innerHTML += htmlAllColorsList(color, i);
    }
}


function markTheRGBColorBox(thisColorId, color) {
    let currentColorId = thisColorId.id;
    document.getElementById(`${currentColorId}`).classList.add('mark-the-color-box');
    if (previouColorId !== currentColorId) {
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
    console.log('aktuelle id', currentColorId);
    console.log('aktuelle farbe', color);
    let offerColor = {
        'id': currentColorId,
        'color': color,
        'prise-color': '222,99',
    }
    currentColor.push(offerColor);
}