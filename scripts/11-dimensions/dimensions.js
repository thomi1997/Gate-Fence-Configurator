let currentDimensionsHeight = [];
let currentDimensionsWide = [];


function renderDimensions() {
    let dimensionsDiv = document.getElementById('dimensions-box');
    dimensionsDiv.innerHTML = htmlDimensions();
}


function addDimensionsHeight() {
    let dimensionsInput1Height = document.getElementById('dimensions-1-input');
    let dimensionsValue1Height = dimensionsInput1Height.value;
    //console.log('hoehe', dimensionsValue1Height);
    
    if (currentDimensionsHeight.length > 0) {
        currentDimensionsHeight = [];
    }

    if (currentDimensionsHeight.length == 0) {
        let dimensionsHeight = dimensionsValue1Height;
        let priseDimensionsHeight = '49,99';
        let offerDimensionsHeight = {
            'dimensions-height': dimensionsHeight,
            'prise-dimensions-height': priseDimensionsHeight,
        }
        currentDimensionsHeight.push(offerDimensionsHeight);
    }
}


function addDimensionsWide() {
    let dimensionsInput2Wide = document.getElementById('dimensions-2-input');
    let dimensionsValue2Wide = dimensionsInput2Wide.value;
    //console.log('breite', dimensionsValue2Wide);

    if (currentDimensionsWide.length > 0) {
        currentDimensionsWide = [];
    }

    if (currentDimensionsWide.length == 0) {
        let dimensionsWide = dimensionsValue2Wide;
        let priseDimensionsWide = '49,99';
        let offerDimensionsWide = {
            'dimensions-wide': dimensionsWide,
            'prise-dimensions-wide': priseDimensionsWide,
        }
        currentDimensionsWide.push(offerDimensionsWide);
    }
}