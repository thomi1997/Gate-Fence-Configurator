let currentMountingGateHinges = [];


function renderMountingGateHinges() {
    let mountingGateHingesDiv = document.getElementById('mounting-gate-hinges-box');
    mountingGateHingesDiv.innerHTML = htmlMountingGateHinges();
}


function addMountingGateHinges(mountingGateHingesAsText) {
    console.log(mountingGateHingesAsText);
    if (currentMountingGateHinges.length > 0) {
        currentMountingGateHinges.forEach(mountingGateHinges => {
            deleteMountingGateHinges(mountingGateHinges);
        });
    }

    if (currentMountingGateHinges.length == 0) {
        let mountingGateHinges = mountingGateHingesAsText;
        let prisemountingGateHinges = '49,99';
        let offerMountingGateHinges = {
            'mounting-gate-hinges': mountingGateHinges,
            'prise-mounting-gate-hinges': prisemountingGateHinges,
        }
        currentMountingGateHinges.push(offerMountingGateHinges);
    }
}


function deleteMountingGateHinges(mountingGateHinges) {
    currentMountingGateHinges.splice(mountingGateHinges, 1);
}


function mountingGateHingesGetText(i) {
    if (i == 'r-3d') {
        let mountingGateHinges1 = document.getElementById('r-3d-text');
        let mountingGateHinges1AsText = mountingGateHinges1.textContent;
        let mountingGateHinges1clean = mountingGateHinges1AsText.trim();
        addMountingGateHinges(mountingGateHinges1clean);
    }

    if (i == 's-2d') {
        let mountingGateHinges2 = document.getElementById('s-2d-text');
        let mountingGateHinges2AsText = mountingGateHinges2.textContent;
        let mountingGateHinges2clean = mountingGateHinges2AsText.trim();
        addMountingGateHinges(mountingGateHinges2clean);
    }

    if (i == 'r-2d') {
        let mountingGateHinges3 = document.getElementById('r-2d-text');
        let mountingGateHinges3AsText = mountingGateHinges3.textContent;
        let mountingGateHinges3clean = mountingGateHinges3AsText.trim();
        addMountingGateHinges(mountingGateHinges3clean);
    }
}


function markTheMountingGateHingesBox(i) {
    let mountingGateHinges1 = document.getElementById('mounting-gate-hinges-1');
    let mountingGateHinges2 = document.getElementById('mounting-gate-hinges-2');
    let mountingGateHinges3 = document.getElementById('mounting-gate-hinges-3');

    if (i == 'r-3d') {
        mountingGateHinges1.classList.add('mark-the-box');

        mountingGateHinges2.classList.remove('mark-the-box');
        mountingGateHinges3.classList.remove('mark-the-box');
    }

    if (i == 's-2d') {
        mountingGateHinges2.classList.add('mark-the-box');

        mountingGateHinges1.classList.remove('mark-the-box');
        mountingGateHinges3.classList.remove('mark-the-box');
    }

    if (i == 'r-2d') {
        mountingGateHinges3.classList.add('mark-the-box');

        mountingGateHinges2.classList.remove('mark-the-box');
        mountingGateHinges1.classList.remove('mark-the-box');
    }
    mountingGateHingesGetText(i);
}