let currentOptionalNotes = [];
let optionalNotesIsOpen = true;


function renderOptionalNotes() {
    let optionalNotesDiv = document.getElementById('optional-notes-box');
    let optionalNotesNumber = wingLayoutNumber;
    if (asymmetric) {
        optionalNotesNumber = optionalNotesNumber +4;
    } else if (symmetrical) {
        optionalNotesNumber = optionalNotesNumber +3;
    }
    optionalNotesDiv.innerHTML = htmlOptionalNotes(optionalNotesNumber);
}


function addOptionalNotes() {
    let optionalNotesInput = document.getElementById('optional-notes-input');
    let optionalNotesValue = optionalNotesInput.value;
    //console.log('optional notes', optionalNotesValue);
    if (currentOptionalNotes.length > 0) {
        currentOptionalNotes = [];
    }

    if (currentOptionalNotes.length == 0) {
        let optionalNotes = optionalNotesValue;
        let offerOptionalNotes = {
            'optional-notes': optionalNotes,
        }
        currentOptionalNotes.push(offerOptionalNotes);
    }
}

function openOptionalNotesCollectionMobil() {
    let optionalNotesTitelDiv = document.getElementById('open-optional-notes');
    let optionalNotesSeries = document.getElementById('series-16');
    if (optionalNotesIsOpen) {
        optionalNotesSeries.classList.remove('back-rotate-mobile-open-svg');
        optionalNotesTitelDiv.classList.add('open-optional-notes-configuration');
        optionalNotesSeries.classList.add('rotate-mobile-open-svg');
        optionalNotesIsOpen = false;
    } else {
        optionalNotesTitelDiv.classList.remove('open-optional-notes-configuration');
        optionalNotesSeries.classList.remove('rotate-mobile-open-svg');
        optionalNotesSeries.classList.add('back-rotate-mobile-open-svg');
        optionalNotesIsOpen = true;
    }
}