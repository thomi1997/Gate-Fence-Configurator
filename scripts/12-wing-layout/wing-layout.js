let currentWingLayout = [];
let previouWingLayoutId = 'wing-layout-1';
let wingLayoutNumber = 10;
let symmetrical = false;
let asymmetric = false;


function renderWingLayout() {
    let wingLayoutDiv = document.getElementById('wing-layout-box');
    queryWingLayoutNumber(wingLayoutDiv);
    let firstWingLayoutMark = document.getElementById('wing-layout-1');
    markTheWingLayoutBox(firstWingLayoutMark);
}


function queryWingLayoutNumber(wingLayoutDiv) {
    
    if (postScrewOn) {
        if (withoutMotor) {
            wingLayoutNumber = 12;
            renderwideWings();
        } else if (withMotor) {
            wingLayoutNumber = 11;
            renderwideWings();
        }
    } else if (postConcrete) {
        if (withMotor) {
            wingLayoutNumber = 9;
            renderwideWings();
        }
    }
    renderHtmlWingLayout(wingLayoutDiv, wingLayoutNumber);
}


function renderHtmlWingLayout(wingLayoutDiv, wingLayoutNumber) {
    wingLayoutDiv.innerHTML = htmlWingLayout(wingLayoutNumber);
}


function markTheWingLayoutBox(thisId) {
    let currentWingLayoutId = thisId.id;
    document.getElementById(`${currentWingLayoutId}`).classList.add('mark-the-box');
    if (previouWingLayoutId !== currentWingLayoutId) {
        document.getElementById(`${previouWingLayoutId}`).classList.remove('mark-the-box');
        previouWingLayoutId = currentWingLayoutId;
    }
    wingLayoutGetText(currentWingLayoutId);
    if (currentWingLayoutId == 'wing-layout-1') {
        symmetrical = true;
        asymmetric = false;
        renderwideWings();
    } else if (currentWingLayoutId == 'wing-layout-2') {
        asymmetric = true;
        symmetrical = false;
        renderwideWings();
    }
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
    //console.log('aktuelle id', currentWingLayoutId);
    //console.log('aktueller text', wingLayout);
    let offerWingLayout = {
        'id': currentWingLayoutId,
        'wing-layout': wingLayout
    }
    currentWingLayout.push(offerWingLayout);
}