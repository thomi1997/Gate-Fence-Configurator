function blankCurrentTotalPrise() {
    if (currentTotalPrise.length > 0) {
        currentTotalPrise = [];
    }
}


function calculateNotSameBox(priseSurfaceNotSame, totalPrise, currentPreviouSurfacePrice) {
    let totalSubtractPrise = totalPrise - currentPreviouSurfacePrice;
    let changeTotalSum = totalSubtractPrise + priseSurfaceNotSame;
    formSumToString(changeTotalSum);
}


function calculateTheFirstBox(totalPrise, currentPreviouSurfacePrice) {
    let totalAddedPreviouPrise = totalPrise + currentPreviouSurfacePrice;
    formSumToString(totalAddedPreviouPrise);
}


function formSumToString(changeTotalSum) {
    let changeTotalSumWithPoint = (changeTotalSum / 100).toFixed(2);
    let priseNotSame = changeTotalSumWithPoint.replace(".", ",");
    let resultNotSame = priseNotSame.toString();
    //console.log('form to string', resultNotSame);
    blankCurrentTotalPrise();
    currentTotalPrise.push(resultNotSame);
}