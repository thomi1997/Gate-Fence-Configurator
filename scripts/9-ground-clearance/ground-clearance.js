let currentGroundClearance = [];


function renderGroundClearance() {
    let groundClearanceDiv = document.getElementById('ground-clearance-box');
    if (postScrewOn) {
        document.getElementById('ground-clearance-configuration-box').classList.remove('d-none');
        groundClearanceDiv.classList.remove('d-none');
        groundClearanceDiv.innerHTML = htmlGroundClearance();
    } else if (postConcrete) {
        document.getElementById('ground-clearance-configuration-box').classList.add('d-none');
        groundClearanceDiv.classList.add('d-none');

    }
}


function addGroundClearance() {
    let groundClearanceInput = document.getElementById('ground-clearance-input');
    let groundClearanceValue = groundClearanceInput.value;
    //console.log(groundClearanceValue);
    if (currentGroundClearance.length > 0) {
        currentGroundClearance = [];
    }

    if (currentGroundClearance.length == 0) {
        let groundClearance = groundClearanceValue;
        let priseGroundClearance = '0,00';
        let offerGroundClearance = {
            'ground-clearance': groundClearance,
            'prise-ground-clearance': priseGroundClearance,
        }
        currentGroundClearance.push(offerGroundClearance);
        renderGroundClearanceConfiguration();
    }
}