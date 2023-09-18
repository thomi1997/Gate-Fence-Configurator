setURL('https://thomas-ketler.de/gate-fence-configurator/smallest_backend_ever-master');

let allOffers = [];


async function init() {
    await downloadFromServer();
    allOffers = JSON.parse(backend.getItem('allOffers')) || [];
    renderSummary();
    renderSurface();
    renderColor();
    renderOpeningDirection();
    renderMountingMethod();
    renderMountingGateHinges();
    renderMountingTypePost();
}


function add() {
    let fruit = "apple";
    allOffers.push(fruit);
    backend.setItem('allOffers', JSON.stringify(allOffers));
}


async function saveConfigurations() {
    backend.setItem('allOffers', JSON.stringify(allOffers));
}