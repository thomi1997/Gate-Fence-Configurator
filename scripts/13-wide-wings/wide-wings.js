let currentWideWings = [];
let wideWingsIsOpen = true;


function renderwideWings() {
    let wideWingsDiv = document.getElementById('wide-wings-box');
    if (asymmetric) {
        document.getElementById('wide-wings-configuration-box').classList.remove('d-none');
        wideWingsDiv.classList.remove('d-none');
        let wideWingsNumber = wingLayoutNumber + 1;
        wideWingsDiv.innerHTML = htmlWideWings(wideWingsNumber);
        renderProductionDrawing();
        renderNumberOfPosts();
        renderOptionalNotes();
    } else if (symmetrical) {
        currentWideWings = [];
        document.getElementById('wide-wings-configuration-box').classList.add('d-none');
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
        let priseWideWings = '0,00';
        let offerWideWings = {
            'wide-wings': wideWings,
            'prise-wide-wings': priseWideWings,
        }
        currentWideWings.push(offerWideWings);
        renderWideWingsConfiguration();
    }
}

function openWideWingsCollectionMobil() {
    let wideWingsTitelDiv = document.getElementById('open-wide-wings');
    let wideWingsSeries = document.getElementById('series-13');
    if (wideWingsIsOpen) {
        wideWingsSeries.classList.remove('back-rotate-mobile-open-svg');
        wideWingsTitelDiv.classList.add('open-wide-wings-configuration');
        wideWingsSeries.classList.add('rotate-mobile-open-svg');
        wideWingsIsOpen = false;
    } else {
        wideWingsTitelDiv.classList.remove('open-wide-wings-configuration');
        wideWingsSeries.classList.remove('rotate-mobile-open-svg');
        wideWingsSeries.classList.add('back-rotate-mobile-open-svg');
        wideWingsIsOpen = true;
    }
}