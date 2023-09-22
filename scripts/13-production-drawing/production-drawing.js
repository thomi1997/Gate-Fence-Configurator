let currentProductionDrawing = [];


function renderProductionDrawing() {
    let productionDrawingDiv = document.getElementById('production-drawing-box');
    productionDrawingDiv.innerHTML = htmlProductionDrawing();
}


function addProductionDrawing() {
    const productionDrawingSelect = document.getElementById('production-drawing-select');
    console.log('option value', productionDrawingSelect.value);

    if (currentProductionDrawing.length > 0) {
        currentProductionDrawing.forEach(productionDrawing => {
            deleteProductionDrawing(productionDrawing);
        });
    }

    if (currentProductionDrawing.length == 0) {
        let productionDrawing = productionDrawingSelect.value;
        let priseProductionDrawing = '99,99';
        let offerProductionDrawing = {
            'production-drawing': productionDrawing,
            'prise-production-drawing': priseProductionDrawing,
        }
        currentProductionDrawing.push(offerProductionDrawing);
    }

    function deleteProductionDrawing(productionDrawing) {
        currentProductionDrawing.splice(productionDrawing, 1);
    }
}