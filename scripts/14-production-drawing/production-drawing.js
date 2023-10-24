let currentProductionDrawing = [];
let previouProductionDrawingPrice = '0,00';
let priseProductionDrawingPriceAlreadyExecuted = false;
let productionDrawingIsOpen = false;


function renderProductionDrawing() {
    let productionDrawingNumber = wingLayoutNumber;
    if (asymmetric) {
        productionDrawingNumber = productionDrawingNumber + 2;
    } else if (symmetrical) {
        productionDrawingNumber = productionDrawingNumber + 1;
    }
    let productionDrawingDiv = document.getElementById('production-drawing-box');
    productionDrawingDiv.innerHTML = htmlProductionDrawing(productionDrawingNumber);
    addProductionDrawing();
}


function addProductionDrawing() {
    const productionDrawingSelect = document.getElementById('production-drawing-select');
    //console.log('option value', productionDrawingSelect.value);

    if (currentProductionDrawing.length > 0) {
        currentProductionDrawing.forEach(productionDrawing => {
            deleteProductionDrawing(productionDrawing);
        });
    }

    if (currentProductionDrawing.length == 0) {
        let productionDrawing = productionDrawingSelect.value;
        let priceProductionDrawing = '0,00';
        let productionDrawingText = 'Nein';
        if (productionDrawing == 'true') {
            priceProductionDrawing = '99,99';
            productionDrawingText = 'Ja';
        }
        let offerProductionDrawing = {
            'production-drawing': productionDrawingText,
            'prise-production-drawing': priceProductionDrawing,
        }
        currentProductionDrawing.push(offerProductionDrawing);
        renderProductionDrawingConfiguration();
        calculationProductionDrawing(priceProductionDrawing);
    }

    function deleteProductionDrawing(productionDrawing) {
        currentProductionDrawing.splice(productionDrawing, 1);
    }
}


function calculationProductionDrawing(priceProductionDrawing) {
    let priseProductionDrawingNotSame = parseFloat(priceProductionDrawing.replace(",", ""));
    let totalPrise = parseFloat(currentTotalPrise[0].replace(",", ""));
    let currentPreviouProductionDrawingPrice = parseFloat(previouProductionDrawingPrice.replace(",", ""));
    queryProductionDrawingWhatCalculate(priceProductionDrawing, priseProductionDrawingNotSame, totalPrise, currentPreviouProductionDrawingPrice);
}


function queryProductionDrawingWhatCalculate(priceProductionDrawing, priseProductionDrawingNotSame, totalPrise, currentPreviouProductionDrawingPrice) {
    if (previouProductionDrawingPrice !== priceProductionDrawing) {
        calculateNotSameBox(priseProductionDrawingNotSame, totalPrise, currentPreviouProductionDrawingPrice);
        previouProductionDrawingPrice = priceProductionDrawing;
    } else if (previouProductionDrawingPrice == priceProductionDrawing && !priseProductionDrawingPriceAlreadyExecuted) {
        priseProductionDrawingPriceAlreadyExecuted = true;
        calculateTheFirstBox(totalPrise, currentPreviouProductionDrawingPrice);
    }
    renderEndSum();
}


function openProductionDrawingCollectionMobil() {
    let productionDrawingTitelDiv = document.getElementById('open-production-drawing');
    productionDrawingIsOpen = true;
    if (productionDrawingIsOpen) {
        productionDrawingTitelDiv.classList.toggle('open-production-drawing-configuration');
        productionDrawingIsOpen = false;
    }
}