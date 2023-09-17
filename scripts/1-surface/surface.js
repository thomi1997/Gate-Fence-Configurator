let currentSurface = [];


function renderSurface() {
    let surfaceDiv = document.getElementById('surface-box');
    surfaceDiv.innerHTML = htmlSurface();
}


function addSurface(surfaceAsText) {
    console.log(surfaceAsText);
    if (currentSurface.length > 0) {
        currentSurface.forEach(surface => {
            deleteSurface(surface);
        });
    }

    if (currentSurface.length == 0) {
        let surface = surfaceAsText;
        let priseSurface = '49,99';
        let offerSurface = {
            'surface': surface,
            'prise-surface': priseSurface,
        }
        currentSurface.push(offerSurface);
    }
}


function deleteSurface(surface) {
    currentSurface.splice(surface, 1);
}


function surfaceGetText(i) {
    if (i == 'fz') {
        let surface1 = document.getElementById('surface-1');
        let surface1AsText = surface1.textContent;
        let surface1clean = surface1AsText.trim();
        addSurface(surface1clean);
    }

    if (i == 'fz-m') {
        let surface2 = document.getElementById('surface-2');
        let surface2AsText = surface2.textContent;
        let surface2clean = surface2AsText.trim();
        addSurface(surface2clean);
    }

    if (i == 'fz-g') {
        let surface3 = document.getElementById('surface-3');
        let surface3AsText = surface3.textContent;
        let surface3clean = surface3AsText.trim();
        addSurface(surface3clean);
    }
    
    
    if (i == 'fz-h-fb') {
        let surface4 = document.getElementById('surface-4');
        let surface4AsText = surface4.textContent;
        let surface4clean = surface4AsText.trim();
        addSurface(surface4clean);
    }
    

    if (i == 'fz-db-fb') {
        let surface5 = document.getElementById('surface-5');
        let surface5AsText = surface5.textContent;
        let surface5clean = surface5AsText.trim();
        addSurface(surface5clean);
    }
}


function markTheBox(i) {
    let surface1 = document.getElementById('surface-1');
    let surface2 = document.getElementById('surface-2');
    let surface3 = document.getElementById('surface-3');
    let surface4 = document.getElementById('surface-4');
    let surface5 = document.getElementById('surface-5');

    if (i == 'fz') {
        surface1.classList.add('mark-the-box');

        surface2.classList.remove('mark-the-box');
        surface3.classList.remove('mark-the-box');
        surface4.classList.remove('mark-the-box');
        surface5.classList.remove('mark-the-box');
    }

    if (i == 'fz-m') {
        surface2.classList.add('mark-the-box');

        surface1.classList.remove('mark-the-box');
        surface3.classList.remove('mark-the-box');
        surface4.classList.remove('mark-the-box');
        surface5.classList.remove('mark-the-box');
    }

    if (i == 'fz-g') {
        surface3.classList.add('mark-the-box');

        surface1.classList.remove('mark-the-box');
        surface2.classList.remove('mark-the-box');
        surface4.classList.remove('mark-the-box');
        surface5.classList.remove('mark-the-box');
    }

    if (i == 'fz-h-fb') {
        surface4.classList.add('mark-the-box');

        surface1.classList.remove('mark-the-box');
        surface2.classList.remove('mark-the-box');
        surface3.classList.remove('mark-the-box');
        surface5.classList.remove('mark-the-box');
    }

    if (i == 'fz-db-fb') {
        surface5.classList.add('mark-the-box');

        surface1.classList.remove('mark-the-box');
        surface2.classList.remove('mark-the-box');
        surface3.classList.remove('mark-the-box');
        surface4.classList.remove('mark-the-box');
    }
    surfaceGetText(i);
}