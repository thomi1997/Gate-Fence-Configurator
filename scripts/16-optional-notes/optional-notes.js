let currentOptionalNotes = [];
let optionalNotesIsOpen = false;


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
    optionalNotesIsOpen = true;
    if (optionalNotesIsOpen) {
        optionalNotesTitelDiv.classList.toggle('open-optional-notes-configuration');
        optionalNotesIsOpen = false;
    }
}