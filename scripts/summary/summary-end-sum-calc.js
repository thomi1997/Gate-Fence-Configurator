let currentTotalPrise = [];
let basePrise = '2300.00';


let previouIdSurface = [];
let previouPriceSurface = [];


function calculationsSum(currentId, currentPrise) {

    if (currentId == 'surface-1') {
        let basePriseWithoutString = parseFloat(basePrise.replace(".", ""));
        let priseSurface = parseFloat(currentPrise.replace(".", ""));
        let resultWithoutPoint = basePriseWithoutString + priseSurface;
        let resultWithPoint = (resultWithoutPoint / 100).toFixed(2);
        
        currentTotalPrise.push(resultWithPoint);
        blankSurfaceArrays();
        previouIdSurface.push(currentId);
        previouPriceSurface.push(currentPrise);
        
        
        console.log(currentTotalPrise, previouIdSurface, previouPriceSurface);
        //currentTotalPrise.push(resultWithPoint);
        //console.log('aktuelle summe', sum);
        //renderEntireSummary();
        renderEndSum();
    } else if (currentId == 'surface-2') {
        let currentPreviouPriceSurface = parseFloat(previouPriceSurface[0].replace(".", ""));
        let currentPreviouTotalPrise = parseFloat(currentTotalPrise[0].replace(".", ""));

        let newTotalPrise = currentPreviouTotalPrise - currentPreviouPriceSurface;
        let newresultWithPoint = (newTotalPrise / 100).toFixed(2);
        currentTotalPrise = [];
        currentTotalPrise.push(newresultWithPoint);
        console.log('letzter surface preis', currentTotalPrise);
        blankSurfaceArrays();
        previouIdSurface.push(currentId);
        previouPriceSurface.push(currentPrise);
        console.log(currentTotalPrise, previouIdSurface, previouPriceSurface);
        console.log(currentPrise);
    }
}


function blankSurfaceArrays() {
    if (currentTotalPrise.length > 0) {
        currentTotalPrise = [];
        previouIdSurface = [];
        previouPriceSurface = [];
    }
}
//let priseColor = parseFloat(currentColor[0]['prise-color'].replace(".", ""));
//let priseMountingMethod = parseFloat(currentMountingMethod[0]['prise-mounting-method'].replace(".", ""));