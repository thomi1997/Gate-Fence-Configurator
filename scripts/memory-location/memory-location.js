async function initMemory() {
    await loadDataBase();

    let memoryLocationDiv = document.getElementById('memory-location');
    for (let i = 0; i < allOffers.length; i++) {
        let offer = allOffers[i];
        
        let surface = offer['selected-surface'][0]['surface'];
        let surfacePrise = offer['selected-surface'][0]['prise-surface'];
        let color = offer['selected-color'][0]['color'];
        let colorPrise = offer['selected-color'][0]['prise-color'];
        let openingDirection = offer['selected-opening-direction'][0]['opening-direction'];
        let openingDirectionPrise = offer['selected-opening-direction'][0]['prise-opening-direction'];
        memoryLocationDiv.innerHTML += 
        htmlMemoryLocation(
            surface, 
            surfacePrise, 
            color, 
            colorPrise, 
            openingDirection, 
            openingDirectionPrise
        );
    }
}


function openFloppyDisk() {
    window.location.href = "memory-location.html"; //https://thomas-ketler.developerakademie.net/Gruppenarbeit-Join/backlog.html
}


function addOffer() {
    const completeOffer = {
        'selected-surface': currentSurface,
        'selected-color': currentColor,
        'selected-opening-direction': currentOpeningDirection,
        'selected-mounting-method': currentMountingMethod,
        'selected-mounting-gates-hinges': currentMountingGateHinges,
        'selected-mounting-type-post': currentMountingTypePost,
        'selected-execution': currentExecution,
        'selected-variant-mounting-plates': currentVariantMountingPlates,
        'selected-ground-clearance': currentGroundClearance,
        'selected-grip-set': currentGripSet,
        'selected-dimensions-height': currentDimensionsHeight,
        'selected-dimensions-wide': currentDimensionsWide,
        'selected-wing-layout': currentWingLayout,
        'selected-wide-wings': currentWideWings,
        'selected-production-drawing': currentProductionDrawing,
        //number of posts
        'selected-optional-notes': currentOptionalNotes
    };
    console.log(completeOffer);

    allOffers.push(completeOffer);
    backend.setItem('allOffers', JSON.stringify(allOffers));
}