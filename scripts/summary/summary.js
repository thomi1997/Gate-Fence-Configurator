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
    dimensionsBox.innerHTML = htmlDimensionsBoxConfiguration();
}