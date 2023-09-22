function htmlOptionalNotes() {
    return /*html*/`
        <h2>(Variable). Optionale Anmerkungen</h2>
        <div class="optional-notes-collection">
            <textarea id="optional-notes-input" name="optional-notes" class="optional-notes-text-area" onblur="addOptionalNotes()"></textarea>
        </div>
    `;
}