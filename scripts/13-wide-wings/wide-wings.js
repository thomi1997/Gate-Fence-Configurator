let currentWideWings = [];


function renderwideWings() {
    let wideWingsDiv = document.getElementById('wide-wings-box');
    if (asymmetric) {
        wideWingsDiv.classList.remove('d-none');
        let wideWingsNumber = wingLayoutNumber + 1;
        wideWingsDiv.innerHTML = htmlWideWings(wideWingsNumber);
        renderProductionDrawing();
        renderNumberOfPosts();
        renderOptionalNotes();
    } else if (symmetrical) {
        wideWingsDiv.classList.add('d-none');
        renderProductionDrawing();
        renderNumberOfPosts();
        renderOptionalNotes();
    }
}


function addWideWings() {
    let wideWingsInput = document.getElementById('wide-wings-input');
    let wideWingsValue = wideWingsInput.value;
    //console.log('weite gehfluegel', wideWingsValue);

    if (currentWideWings.length > 0) {
        currentWideWings = [];
    }

    if (currentWideWings.length == 0) {
        let wideWings = wideWingsValue;
        let priseWideWings = '49,99';
        let offerWideWings = {
            'wide-wings': wideWings,
            'prise-wide-wings': priseWideWings,
        }
        currentWideWings.push(offerWideWings);
    }
}