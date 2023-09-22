let currentOptionalNotes = [];


function renderOptionalNotes() {
    let optionalNotesDiv = document.getElementById('optional-notes-box');
    optionalNotesDiv.innerHTML = htmlOptionalNotes();
}


function addOptionalNotes() {
    let optionalNotesInput = document.getElementById('optional-notes-input');
    let optionalNotesValue = optionalNotesInput.value;
    console.log('optional notes', optionalNotesValue);
    if (currentOptionalNotes.length > 0) {
        currentOptionalNotes.forEach(optionalNotes => {
            deleteOptionalNotes(optionalNotes);
        });
    }

    if (currentOptionalNotes.length == 0) {
        let optionalNotes = optionalNotesValue;
        let offerOptionalNotes = {
            'optional-notes': optionalNotes,
        }
        currentOptionalNotes.push(offerOptionalNotes);
    }
}


function deleteOptionalNotes(optionalNotes) {
    currentOptionalNotes.splice(optionalNotes, 1);
}