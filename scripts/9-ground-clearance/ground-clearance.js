let currentGroundClearance = [];


function renderGroundClearance() {
    let groundClearanceDiv = document.getElementById('ground-clearance-box');
    groundClearanceDiv.innerHTML = htmlGroundClearance();
}


function addGroundClearance() {
    let groundClearanceInput = document.getElementById('ground-clearance-input');
    let groundClearanceValue = groundClearanceInput.value;
    console.log(groundClearanceValue);
    if (currentGroundClearance.length > 0) {
        currentGroundClearance.forEach(groundClearance => {
            deleteGroundClearance(groundClearance);
        });
    }

    if (currentGroundClearance.length == 0) {
        let groundClearance = groundClearanceValue;
        let priseGroundClearance = '49,99';
        let offerGroundClearance = {
            'ground-clearance': groundClearance,
            'prise-ground-clearance': priseGroundClearance,
        }
        currentGroundClearance.push(offerGroundClearance);
    }
}


function deleteGroundClearance(groundClearance) {
    currentGroundClearance.splice(groundClearance, 1);
}