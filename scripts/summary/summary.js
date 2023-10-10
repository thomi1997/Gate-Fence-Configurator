function renderSummary() {
    let summaryContainer = document.getElementById('summary');
    summaryContainer.innerHTML = htmlSummary();
}


function renderSurfaceConfiguration() {
    //console.log('surface', currentSurface);
    let surfaceBox = document.getElementById('surface-configuration-box');
    surfaceBox.innerHTML = htmlSurfaceConfiguration();
}


function renderColorConfigurationen() {
    //console.log('color', currentColor);
    let colorBox = document.getElementById('color-configuration-box');
    colorBox.innerHTML = htmlColorConfiguration();
}


function renderOpeningDirectionConfigurationen() {
    //console.log('open direction', currentOpeningDirection);
    let openingDirectionBox = document.getElementById('opening-direction-configuration-box');
    openingDirectionBox.innerHTML = htmlOpeningDirectionConfiguration();
}

function renderMountingMethodConfiguration() {
    //console.log('mounting method', currentMountingMethod);
    let mountingMethodBox = document.getElementById('mounting-method-configuration-box');
    mountingMethodBox.innerHTML = htmlMountingMethodConfiguration();
}

function renderMountingMethodHingesConfiguration() {
    //console.log('mounting method hinges', currentMountingGateHinges);
    let mountingMethodHingesBox = document.getElementById('mounting-method-hinges-configuration-box');
    mountingMethodHingesBox.innerHTML = htmlMountingMethodHingesConfiguration();
}


function renderMountingTypePostConfiguration() {
    //console.log('mounting type post', currentMountingTypePost);
    let mountingTypePostBox = document.getElementById('mounting-type-post-configuration-box');
    mountingTypePostBox.innerHTML = htmlMountingTypePostBoxConfiguration();
}


function renderExecutionConfiguration() {
    //console.log('execution', currentExecution);
    let executionBox = document.getElementById('execution-configuration-box');
    executionBox.innerHTML = htmlExecutionBoxConfiguration();
}


function renderVariantMountingPlatesConfiguration() {
    //console.log('variant mounting plates', currentVariantMountingPlates);
    let variantMountingPlatesBox = document.getElementById('variant-mounting-plates-configuration-box');
    variantMountingPlatesBox.innerHTML = htmlVariantMountingPlatesBoxConfiguration();
}


function renderGroundClearanceConfiguration() {
    //console.log('ground clearance', currentGroundClearance);
    let groundClearanceBox = document.getElementById('ground-clearance-configuration-box');
    groundClearanceBox.innerHTML = htmlGroundClearanceBoxConfiguration();
}


function renderGripSetConfiguration() {
    //console.log('grip set', currentGripSet);
    let gripSetBox = document.getElementById('grip-set-configuration-box');
    gripSetBox.innerHTML = htmlGripSetBoxConfiguration();
}


function renderDimensionsConfiguration() {
    //console.log('dimensions height', currentDimensionsHeight);
    //console.log('dimensions wide', currentDimensionsWide);
    let dimensionsBox = document.getElementById('dimensions-configuration-box');
    let priseDimensionsHeight = currentDimensions[0]['dimensions-height'][0]['prise-dimensions-height'];
    let priseDimensionsWide = currentDimensions[0]['dimensions-wide'][0]['prise-dimensions-wide'];
    let priseDimensions = priseDimensionsHeight + priseDimensionsWide;
    let priseEuro = `${priseDimensions}`.replace(".", ",");
    //console.log('dimensions prise', priseEuro);
    dimensionsBox.innerHTML = htmlDimensionsBoxConfiguration(priseEuro);
}


function renderWingLayoutConfiguration() {
    //console.log('Wing Layout', currentWingLayout);
    let wingLayoutBox = document.getElementById('wing-layout-configuration-box');
    wingLayoutBox.innerHTML = htmlWingLayoutBoxConfiguration();
}


function renderWideWingsConfiguration() {
    //console.log('Wide wings', currentWideWings);
    let wideWingsBox = document.getElementById('wide-wings-configuration-box');
    wideWingsBox.innerHTML = htmlWideWingsBoxConfiguration();
}


function renderProductionDrawingConfiguration() {
    //console.log('production drawing', currentProductionDrawing);
    let productionDrawingBox = document.getElementById('production-drawing-configuration-box');
    productionDrawingBox.innerHTML = htmlProductionDrawingBoxConfiguration();
}


function renderNumberOfPostsConfiguration() {
    let numberOfPostsBox = document.getElementById('number-of-posts-configuration-box');
    numberOfPostsBox.innerHTML = htmlNumberOfPostsBoxConfiguration();
}