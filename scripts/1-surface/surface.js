let currentSurface = [];
let previouSurfaceId = 'surface-1';


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


function markTheSurfaceBox(thisId) {
    let currentSurfaceId = thisId.id;
    document.getElementById(`${currentSurfaceId}`).classList.add('mark-the-box');
    if (previouSurfaceId !== currentSurfaceId) {
        console.log('aktuelle', currentSurfaceId);
        console.log('vorherige', previouSurfaceId);
        document.getElementById(`${previouSurfaceId}`).classList.remove('mark-the-box');
        previouSurfaceId = currentSurfaceId;
    }
    //surfaceGetText(i);
}