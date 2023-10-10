let currentProductionDrawing = [];


function renderProductionDrawing() {
    let productionDrawingNumber = wingLayoutNumber;
    if (asymmetric) {
        productionDrawingNumber = productionDrawingNumber +2;
    } else if (symmetrical) {
        productionDrawingNumber = productionDrawingNumber +1;
    }
    let productionDrawingDiv = document.getElementById('production-drawing-box');
    productionDrawingDiv.innerHTML = htmlProductionDrawing(productionDrawingNumber);
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
        let priceProductionDrawing = '0.00';
        let productionDrawingText = 'Nein';
        if (productionDrawing == 'true') {
            priceProductionDrawing = 99.99;
            productionDrawingText = 'Ja';
        }
        let offerProductionDrawing = {
            'production-drawing': productionDrawingText,
            'prise-production-drawing': priceProductionDrawing,
        }
        currentProductionDrawing.push(offerProductionDrawing);
        renderProductionDrawingConfiguration();
    }

    function deleteProductionDrawing(productionDrawing) {
        currentProductionDrawing.splice(productionDrawing, 1);
    }
}