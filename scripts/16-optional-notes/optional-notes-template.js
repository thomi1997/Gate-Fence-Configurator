function htmlOptionalNotes(optionalNotesNumber) {
    return /*html*/`
        <div class="collection-titel">
            <h2>
                ${optionalNotesNumber}. Optionale Anmerkungen
            </h2>
        </div>
        <div class="optional-notes-collection">
            <textarea id="optional-notes-input" name="optional-notes" class="optional-notes-text-area" onblur="addOptionalNotes()"></textarea>
        </div>
    `;
}