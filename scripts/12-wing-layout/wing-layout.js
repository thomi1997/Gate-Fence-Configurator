let currentWingLayout = [];
let previouWingLayoutId = 'wing-layout-1';


function renderWingLayout() {
    let wingLayoutDiv = document.getElementById('wing-layout-box');
    wingLayoutDiv.innerHTML = htmlWingLayout();
}


function markTheWingLayoutBox(thisId) {
    let currentWingLayoutId = thisId.id;
    document.getElementById(`${currentWingLayoutId}`).classList.add('mark-the-box');
    if (previouWingLayoutId !== currentWingLayoutId) {
        document.getElementById(`${previouWingLayoutId}`).classList.remove('mark-the-box');
        previouWingLayoutId = currentWingLayoutId;
    }
    wingLayoutGetText(currentWingLayoutId);
}


function wingLayoutGetText(currentWingLayoutId) {
    let wingLayoutId = document.getElementById(`${currentWingLayoutId}`);
    let wingLayoutAsText = wingLayoutId.textContent;
    let wingLayoutclean = wingLayoutAsText.trim();
    addWingLayout(wingLayoutclean, currentWingLayoutId);
}


function addWingLayout(wingLayoutAsText, currentWingLayoutId) {
    let wingLayout = wingLayoutAsText;
    if (currentWingLayout.length > 0) {
        currentWingLayout = [];
    }
    if (currentWingLayout.length == 0) {
        pushWingLayoutContent(currentWingLayoutId, wingLayout);
    }
}


function pushWingLayoutContent(currentWingLayoutId, wingLayout) {
    console.log('aktuelle id', currentWingLayoutId);
    console.log('aktueller text', wingLayout);
    let offerWingLayout = {
        'id': currentWingLayoutId,
        'wing-layout': wingLayout
    }
    currentWingLayout.push(offerWingLayout);
}