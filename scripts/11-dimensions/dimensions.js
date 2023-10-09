let currentDimensionsHeight = [];
let currentDimensionsWide = [];


function renderDimensions() {
    let dimensionsDiv = document.getElementById('dimensions-box');
    queryDimensionsNumber(dimensionsDiv);
}


function queryDimensionsNumber(dimensionsDiv) {
    let dimensionsNumber = 9;
    if (postScrewOn) {
        queryDimensionsPostScrewOn(dimensionsDiv, dimensionsNumber);
    } else if (postConcrete) {
        queryDimensionsPostConcrete(dimensionsDiv, dimensionsNumber);
    }
}


function queryDimensionsPostScrewOn(dimensionsDiv, dimensionsNumber) {
    if (withoutMotor) {
        dimensionsNumber = 11;
        renderWingLayout();
    } else if (withMotor) {
        dimensionsNumber = 10;
        renderWingLayout();
    }
    renderHtmlDimensions(dimensionsDiv, dimensionsNumber);
}


function queryDimensionsPostConcrete(dimensionsDiv, dimensionsNumber) {
    if (withMotor) {
        dimensionsNumber = 8;
        if (pillarsOnly) {
            dimensionsNumber = 7;
        }
        renderWingLayout();
    } else if (withoutMotor) {
        dimensionsNumber = 8;
        if (pillarsOnly) {
            dimensionsNumber = 8;
        } else if (!pillarsOnly) {
            dimensionsNumber = 9;
        }
        renderWingLayout();
    }
    renderWingLayout();
    renderHtmlDimensions(dimensionsDiv, dimensionsNumber);
}


function renderHtmlDimensions(dimensionsDiv, dimensionsNumber) {
    dimensionsDiv.innerHTML = htmlDimensions(dimensionsNumber);
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
        renderDimensionsConfiguration();
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
        renderDimensionsConfiguration();
    }
}