let currentGripSet = [];


function renderGripSet() {
    let gripSetDiv = document.getElementById('grip-set-box');
    gripSetDiv.innerHTML = htmlGripSet();
}


function addGripSet(gripSetAsText) {
    console.log(gripSetAsText);
    if (currentGripSet.length > 0) {
        currentGripSet.forEach(gripSet => {
            deleteGripSet(gripSet);
        });
    }

    if (currentGripSet.length == 0) {
        let gripSet = gripSetAsText;
        let priseGripSet = '49,99';
        let offerGripSet = {
            'grip-set': gripSet,
            'prise-grip-set': priseGripSet,
        }
        currentGripSet.push(offerGripSet);
    }
}


function deleteGripSet(gripSet) {
    currentGripSet.splice(gripSet, 1);
}


function gripSetGetText(i) {
    if (i == 'kn-alu') {
        let gripSet1 = document.getElementById('grip-set-1');
        let gripSet1AsText = gripSet1.textContent;
        let gripSet1clean = gripSet1AsText.trim();
        addGripSet(gripSet1clean);
    }

    if (i == 'kl-alu') {
        let gripSet2 = document.getElementById('grip-set-2');
        let gripSet2AsText = gripSet2.textContent;
        let gripSet2clean = gripSet2AsText.trim();
        addGripSet(gripSet2clean);
    }

    if (i == 'kl-kn-alu') {
        let gripSet3 = document.getElementById('grip-set-3');
        let gripSet3AsText = gripSet3.textContent;
        let gripSet3clean = gripSet3AsText.trim();
        addGripSet(gripSet3clean);
    }

    if (i == 'kn-v2a') {
        let gripSet4 = document.getElementById('grip-set-4');
        let gripSet4AsText = gripSet4.textContent;
        let gripSet4clean = gripSet4AsText.trim();
        addGripSet(gripSet4clean);
    }

    if (i == 'kl-v2a') {
        let gripSet5 = document.getElementById('grip-set-5');
        let gripSet5AsText = gripSet5.textContent;
        let gripSet5clean = gripSet5AsText.trim();
        addGripSet(gripSet5clean);
    }

    if (i == 'kl-kn-v2a') {
        let gripSet6 = document.getElementById('grip-set-6');
        let gripSet6AsText = gripSet6.textContent;
        let gripSet6clean = gripSet6AsText.trim();
        addGripSet(gripSet6clean);
    }
}


function markTheSetGripBox(i) {
    let gripSet1 = document.getElementById('grip-set-1');
    let gripSet2 = document.getElementById('grip-set-2');
    let gripSet3 = document.getElementById('grip-set-3');
    let gripSet4 = document.getElementById('grip-set-4');
    let gripSet5 = document.getElementById('grip-set-5');
    let gripSet6 = document.getElementById('grip-set-6');

    if (i == 'kn-alu') {
        gripSet1.classList.add('mark-the-box');

        gripSet2.classList.remove('mark-the-box');
        gripSet3.classList.remove('mark-the-box');
        gripSet4.classList.remove('mark-the-box');
        gripSet5.classList.remove('mark-the-box');
        gripSet6.classList.remove('mark-the-box');
    }

    if (i == 'kl-alu') {
        gripSet2.classList.add('mark-the-box');

        gripSet1.classList.remove('mark-the-box');
        gripSet3.classList.remove('mark-the-box');
        gripSet4.classList.remove('mark-the-box');
        gripSet5.classList.remove('mark-the-box');
        gripSet6.classList.remove('mark-the-box');
    }

    if (i == 'kl-kn-alu') {
        gripSet3.classList.add('mark-the-box');

        gripSet1.classList.remove('mark-the-box');
        gripSet2.classList.remove('mark-the-box');
        gripSet4.classList.remove('mark-the-box');
        gripSet5.classList.remove('mark-the-box');
        gripSet6.classList.remove('mark-the-box');
    }

    if (i == 'kn-v2a') {
        gripSet4.classList.add('mark-the-box');

        gripSet1.classList.remove('mark-the-box');
        gripSet2.classList.remove('mark-the-box');
        gripSet3.classList.remove('mark-the-box');
        gripSet5.classList.remove('mark-the-box');
        gripSet6.classList.remove('mark-the-box');
    }

    if (i == 'kl-v2a') {
        gripSet5.classList.add('mark-the-box');

        gripSet1.classList.remove('mark-the-box');
        gripSet2.classList.remove('mark-the-box');
        gripSet3.classList.remove('mark-the-box');
        gripSet4.classList.remove('mark-the-box');
        gripSet6.classList.remove('mark-the-box');
    }

    if (i == 'kl-kn-v2a') {
        gripSet6.classList.add('mark-the-box');

        gripSet1.classList.remove('mark-the-box');
        gripSet2.classList.remove('mark-the-box');
        gripSet3.classList.remove('mark-the-box');
        gripSet4.classList.remove('mark-the-box');
        gripSet5.classList.remove('mark-the-box');
    }
    gripSetGetText(i);
}