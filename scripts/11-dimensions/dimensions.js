let currentDimensions = [];
let currentDimensionsHeight = [];
let currentDimensionsWide = [];
let pushHeight = false;
let pushWide = false;
let dimensionsIsOpen = true;

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


    if (dimensionsValue1Height.length > 0) {
        document.getElementById('dimensions-configuration-box').classList.remove('d-none');
        console.log('Das Input-Feld hoehe ist nicht leer: ' + dimensionsValue1Height);
        pushDimensionsHeight(dimensionsValue1Height);
    } else {
        console.log('Das Input-Feld ist leer.');
        document.getElementById('dimensions-configuration-box').classList.add('d-none');
        pushHeight = false;
        console.log('pushHeight leer', pushHeight);
    }
}


function addDimensionsWide() {
    let dimensionsInput2Wide = document.getElementById('dimensions-2-input');
    let dimensionsValue2Wide = dimensionsInput2Wide.value;

    if (dimensionsValue2Wide.length > 0) {
        document.getElementById('dimensions-configuration-box').classList.remove('d-none');
        console.log('Das Input-Feld weite ist nicht leer: ' + dimensionsValue2Wide);
        pushDimensionsWide(dimensionsValue2Wide);
    } else {
        console.log('Das Input-Feld ist leer.');
        document.getElementById('dimensions-configuration-box').classList.add('d-none');
        pushWide = false;
        console.log('pushWide leer', pushWide);
    }
}


function pushDimensionsHeight(dimensionsValue1Height) {
    if (currentDimensionsHeight.length > 0) {
        currentDimensionsHeight = [];
    }

    if (currentDimensionsHeight.length == 0) {
        let dimensionsHeight = dimensionsValue1Height;
        let priseDimensionsHeight = 2999.99;
        let offerDimensionsHeight = {
            'dimensions-height': dimensionsHeight,
            'prise-dimensions-height': priseDimensionsHeight,
        }
        currentDimensionsHeight.push(offerDimensionsHeight);
        pushHeight = true;
        console.log('pushHeight', pushHeight);
        pushDimensions();
    }
}


function pushDimensionsWide(dimensionsValue2Wide) {
    if (currentDimensionsWide.length > 0) {
        currentDimensionsWide = [];
    }

    if (currentDimensionsWide.length == 0) {
        let dimensionsWide = dimensionsValue2Wide;
        let priseDimensionsWide = 4999.99;
        let offerDimensionsWide = {
            'dimensions-wide': dimensionsWide,
            'prise-dimensions-wide': priseDimensionsWide,
        }
        currentDimensionsWide.push(offerDimensionsWide);
        pushWide = true;
        console.log('pushwide', pushWide);
        pushDimensions();
    }
}


function pushDimensions() {
    if (pushHeight && pushWide) {
        if (currentDimensions.length > 0) {
            currentDimensions = [];
        }
        console.log('beide sind true');
        let offerDimensions = {
            'dimensions-height': currentDimensionsHeight,
            'dimensions-wide': currentDimensionsWide,
        }
        currentDimensions.push(offerDimensions);
        renderDimensionsConfiguration();
    }
}


function openDimensionsCollectionMobil() {
    let dimensionsTitelDiv = document.getElementById('open-dimensions');
    let dimensionsSeries = document.getElementById('series-11');
    if (dimensionsIsOpen) {
        dimensionsSeries.classList.remove('back-rotate-mobile-open-svg');
        dimensionsTitelDiv.classList.add('open-dimensions-configuration');
        dimensionsSeries.classList.add('rotate-mobile-open-svg');
        dimensionsIsOpen = false;
    } else {
        dimensionsTitelDiv.classList.remove('open-dimensions-configuration');
        dimensionsSeries.classList.remove('rotate-mobile-open-svg');
        dimensionsSeries.classList.add('back-rotate-mobile-open-svg');
        dimensionsIsOpen = true;
    }
}