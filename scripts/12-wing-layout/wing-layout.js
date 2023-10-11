let currentWingLayout = [];
let previouWingLayoutId = 'wing-layout-1';
let wingLayoutNumber = 10;
let symmetrical = false;
let asymmetric = false;


let wingLayoutImgsSymmetrical = [
    'img/wing-layout-img/0-symmetrical-key-right-.png',
    'img/wing-layout-img/1-symmetrical-key-left-.png'
];


let wingLayoutImgsAsymmetric = [
    'img/wing-layout-img/2-asymmetric-key-right-.png',
    'img/wing-layout-img/3-asymmetric-key-left-.png'
];


function renderWingLayout() {
    let wingLayoutDiv = document.getElementById('wing-layout-box');
    queryWingLayoutWichImg(wingLayoutDiv);
    
    let firstWingLayoutMark = document.getElementById('wing-layout-1');
    markTheWingLayoutBox(firstWingLayoutMark);
}


function queryWingLayoutWichImg(wingLayoutDiv) {
    let asymmetricKeyRight = wingLayoutImgsAsymmetric[0];
    let asymmetricKeyLeft = wingLayoutImgsAsymmetric[1];
    let symmetricalKeyRight = wingLayoutImgsSymmetrical[0];
    let symmetricalKeyLeft = wingLayoutImgsSymmetrical[1];
    let currentAsymmetric;
    let currentSymmetrical;
    if (keyLockLeft) {
        currentAsymmetric = asymmetricKeyLeft;
        currentSymmetrical = symmetricalKeyLeft;
    } else if (keyLockRight) {
        currentAsymmetric = asymmetricKeyRight;
        currentSymmetrical = symmetricalKeyRight;
    }
    //console.log(currentAsymmetric);
    queryWingLayoutNumber(wingLayoutDiv, currentAsymmetric, currentSymmetrical);
}


function queryWingLayoutNumber(wingLayoutDiv, currentAsymmetric, currentSymmetrical) {
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
            if (pillarsOnly) {
                wingLayoutNumber = 8;
            }
            renderwideWings();
        } else if (withoutMotor) {
            wingLayoutNumber = 10;
            if (pillarsOnly) {
                wingLayoutNumber = 9;
            }
            renderwideWings();
        }
    }
    renderHtmlWingLayout(wingLayoutDiv, wingLayoutNumber, currentAsymmetric, currentSymmetrical);
}


function renderHtmlWingLayout(wingLayoutDiv, wingLayoutNumber, currentAsymmetric, currentSymmetrical) {
    wingLayoutDiv.innerHTML = htmlWingLayout(wingLayoutNumber, currentAsymmetric, currentSymmetrical);
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
        'prise-wing-layout': '0,00',
        'wing-layout': wingLayout
    }
    currentWingLayout.push(offerWingLayout);
    renderWingLayoutConfiguration();
}