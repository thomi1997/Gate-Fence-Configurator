let currentVariantMountingPlates = [];
let previouVariantMountingPlatesId = 'variant-mounting-plates-1';
let previouVariantMountingPlatesPrice = '49,99';
let priseVariantMountingPlatesAlreadyExecuted = false;


let variantMountingPlatesImgs = [
    'img/variant-mounting-plates-img/0-150-150-mittig.png',
    'img/variant-mounting-plates-img/1-150-150-versetzt.png',
    'img/variant-mounting-plates-img/2-250-150-mittig.png',
    'img/variant-mounting-plates-img/3-250-150-versetzt.png',
    'img/variant-mounting-plates-img/4-250-250-mittig.png',
    'img/variant-mounting-plates-img/5-250-250-versetzt.png'
];


function renderVariantMountingPlates() {
    let variantMountingPlatesDiv = document.getElementById('variant-mounting-plates-box');
    if (postScrewOn) {
        variantMountingPlatesDiv.classList.remove('d-none');
        document.getElementById('variant-mounting-plates-configuration-box').classList.remove('d-none')
        variantMountingPlatesDiv.innerHTML = htmlVariantMountingPlates();
        let firstVariantMountingPlatesMark = document.getElementById('variant-mounting-plates-1');
        markTheVariantMountingPlatesBox(firstVariantMountingPlatesMark);
        renderVariantMountingPlatesConfiguration();
    } else if (postConcrete) {
        variantMountingPlatesDiv.classList.add('d-none');
        document.getElementById('variant-mounting-plates-configuration-box').classList.add('d-none');
    }
}


function markTheVariantMountingPlatesBox(thisId) {
    let currentVariantMountingPlatesId = thisId.id;
    document.getElementById(`${currentVariantMountingPlatesId}`).classList.add('mark-the-box');
    if (previouVariantMountingPlatesId !== currentVariantMountingPlatesId) {
        document.getElementById(`${previouVariantMountingPlatesId}`).classList.remove('mark-the-box');
        previouVariantMountingPlatesId = currentVariantMountingPlatesId;
    }
    variantMountingPlatesGetText(currentVariantMountingPlatesId);
}


function variantMountingPlatesGetText(currentVariantMountingPlatesId) {
    let variantMountingPlatesId = document.getElementById(`${currentVariantMountingPlatesId}`);
    let variantMountingPlatesAsText = variantMountingPlatesId.textContent;
    let variantMountingPlatesclean = variantMountingPlatesAsText.trim();
    addVariantMountingPlates(variantMountingPlatesclean, currentVariantMountingPlatesId);
}


function addVariantMountingPlates(variantMountingPlatesAsText, currentVariantMountingPlatesId) {
    let variantMountingPlates = variantMountingPlatesAsText;
    if (currentVariantMountingPlates.length > 0) {
        currentVariantMountingPlates = [];
    }
    if (currentVariantMountingPlates.length == 0) {
        queryIdVariantMountingPlates(currentVariantMountingPlatesId, variantMountingPlates);
    }
}


function queryIdVariantMountingPlates(currentVariantMountingPlatesId, variantMountingPlates) {
    let priseVariantMountingPlates = '';
    if (currentVariantMountingPlatesId == 'variant-mounting-plates-1') {
        priseVariantMountingPlates = '49,99';
    } else if (currentVariantMountingPlatesId == 'variant-mounting-plates-2') {
        priseVariantMountingPlates = '43,76';
    } else if (currentVariantMountingPlatesId == 'variant-mounting-plates-3') {
        priseVariantMountingPlates = '12,43';
    } else if (currentVariantMountingPlatesId == 'variant-mounting-plates-4') {
        priseVariantMountingPlates = '67,49';
    } else if (currentVariantMountingPlatesId == 'variant-mounting-plates-5') {
        priseVariantMountingPlates = '53,76';
    } else if (currentVariantMountingPlatesId == 'variant-mounting-plates-6') {
        priseVariantMountingPlates = '54,45';
    }
    pushVariantMountingPlatesContent(currentVariantMountingPlatesId, priseVariantMountingPlates, variantMountingPlates);
}


function pushVariantMountingPlatesContent(currentVariantMountingPlatesId, priseVariantMountingPlates, variantMountingPlates) {
    //console.log('aktuelle id', currentVariantMountingPlatesId);
    //console.log('aktueller preis', priseVariantMountingPlates);
    //console.log('aktueller text', variantMountingPlates);
    let offerVariantMountingPlates = {
        'id': currentVariantMountingPlatesId,
        'variant-mounting-plates': variantMountingPlates,
        'prise-variant-mounting-plates': priseVariantMountingPlates,
    }
    currentVariantMountingPlates.push(offerVariantMountingPlates);
    renderVariantMountingPlatesConfiguration();
    calculationVariantMountingPlates(priseVariantMountingPlates);
}


function calculationVariantMountingPlates(priseVariantMountingPlates) {
    let priseVariantMountingPlatesNotSame = parseFloat(priseVariantMountingPlates.replace(",", ""));
    let totalPrise = parseFloat(currentTotalPrise[0].replace(",", ""));
    let currentPreviouVariantMountingPlatesPrice = parseFloat(previouVariantMountingPlatesPrice.replace(",", ""));
    queryVariantMountingPlatesWhatCalculate(priseVariantMountingPlates, priseVariantMountingPlatesNotSame, totalPrise, currentPreviouVariantMountingPlatesPrice);
}


function queryVariantMountingPlatesWhatCalculate(priseVariantMountingPlates, priseVariantMountingPlatesNotSame, totalPrise, currentPreviouVariantMountingPlatesPrice) {
    if (previouVariantMountingPlatesPrice !== priseVariantMountingPlates) {
        calculateNotSameBox(priseVariantMountingPlatesNotSame, totalPrise, currentPreviouVariantMountingPlatesPrice);
        previouVariantMountingPlatesPrice = priseVariantMountingPlates;
    } else if (previouVariantMountingPlatesPrice == priseVariantMountingPlates && !priseVariantMountingPlatesAlreadyExecuted) {
        priseVariantMountingPlatesAlreadyExecuted = true;
        calculateTheFirstBox(totalPrise, currentPreviouVariantMountingPlatesPrice);
    }
    renderEndSum();
}