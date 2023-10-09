function htmlGroundClearanceBoxConfiguration() {
    return /*html*/`
        <div class="configuration-column">
            <div class="collection-prise">
                <p>
                    Bodenabstand
                </p>
                <p>
                    ${currentGroundClearance[0]['prise-ground-clearance']} €
                </p>
            </div>
            <span> 
                ${currentGroundClearance[0]['ground-clearance']} mm
            </span>
        </div>
    `;
}