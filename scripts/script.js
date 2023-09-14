setURL('https://thomas-ketler.de/gate-fence-configurator/smallest_backend_ever-master');

let allStrings = [];


async function init() {
    await downloadFromServer();
    allStrings = JSON.parse(backend.getItem('allStrings')) || [];
}


function add() {
    let fruit = "apple";
    allStrings.push(fruit);
    //console.log('huhu', allStrings);
    backend.setItem('allStrings', JSON.stringify(allStrings));
}


async function deleteStrings() {
    allStrings.splice(1);
    await backend.deleteItem('allStrings');
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
    console.log(i);
}