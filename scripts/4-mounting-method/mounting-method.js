let currentMountingMethod = [];
let previouMountingMethodId = 'mounting-method-1';
let pillarsOnly = false;
let previouMountingMethodPrice = '0,00';
let priseMountingMethodAlreadyExecuted = false;
let mountingMethodIsOpen = true;


let mountingMethodImgPathsLeft = [
    'img/mounting-method-img/key-lock-left/0-mounting-method-left.png',
    'img/mounting-method-img/key-lock-left/1-mounting-method-left.png',
    'img/mounting-method-img/key-lock-left/2-mounting-method-left.png',
    'img/mounting-method-img/key-lock-left/3-mounting-method-left.png',
    'img/mounting-method-img/key-lock-left/4-mounting-method-left.png',
    'img/mounting-method-img/key-lock-left/5-mounting-method-left.png',
    'img/mounting-method-img/key-lock-left/6-mounting-method-left.png'
];


let mountingMethodImgPathsRight = [
    'img/mounting-method-img/key-lock-right/0-mounting-method-right.png',
    'img/mounting-method-img/key-lock-right/1-mounting-method-right.png',
    'img/mounting-method-img/key-lock-right/2-mounting-method-right.png',
    'img/mounting-method-img/key-lock-right/3-mounting-method-right.png',
    'img/mounting-method-img/key-lock-right/4-mounting-method-right.png',
    'img/mounting-method-img/key-lock-right/5-mounting-method-right.png',
    'img/mounting-method-img/key-lock-right/6-mounting-method-right.png'
];


function renderMountingMethod() {
    let mountingMethodDiv = document.getElementById('mounting-method-box');
    if (keyLockLeft) {
        renderKeyLockLeft(mountingMethodDiv);
    } else if (keyLockRight) {
        renderKeyLockRight(mountingMethodDiv);
    }
    let firstMountingMethodMark = document.getElementById('mounting-method-1');
    markTheMountingMethodBox(firstMountingMethodMark);
}


function renderKeyLockLeft(mountingMethodDiv) {
    for (let i = 0; i < mountingMethodImgPathsLeft.length; i++) {
        let keyLockLeftPath = mountingMethodImgPathsLeft;
        mountingMethodDiv.innerHTML = htmlMountingMethod(keyLockLeftPath);
    }
}


function renderKeyLockRight(mountingMethodDiv) {
    for (let i = 0; i < mountingMethodImgPathsRight.length; i++) {
        let keyLockRightPath = mountingMethodImgPathsRight;
        mountingMethodDiv.innerHTML = htmlMountingMethod(keyLockRightPath);
    }
}


function markTheMountingMethodBox(thisId) {
    let currentMountingMethodId = thisId.id;
    document.getElementById(`${currentMountingMethodId}`).classList.add('mark-the-box');
    if (previouMountingMethodId !== currentMountingMethodId) {
        document.getElementById(`${previouMountingMethodId}`).classList.remove('mark-the-box');
        previouMountingMethodId = currentMountingMethodId;
    }
    mountingMethodGetText(currentMountingMethodId);
    renderMountingGateHinges();
    if (currentMountingMethodId == 'mounting-method-1') {
        pillarsOnly = true;
        renderMountingTypePost();
    } else {
        pillarsOnly = false;
        renderMountingTypePost();
    }
}


function mountingMethodGetText(currentMountingMethodId) {
    let mountingMethodId = document.getElementById(`${currentMountingMethodId}`);
    let mountingMethodAsText = mountingMethodId.textContent;
    let mountingMethodclean = mountingMethodAsText.trim();
    addMountingMethod(mountingMethodclean, currentMountingMethodId);
}


function addMountingMethod(mountingMethodAsText, currentMountingMethodId) {
    let mountingMethod = mountingMethodAsText;
    if (currentMountingMethod.length > 0) {
        currentMountingMethod = [];
    }
    if (currentMountingMethod.length == 0) {
        queryIdMountingMethod(currentMountingMethodId, mountingMethod);
    }
}


function queryIdMountingMethod(currentMountingMethodId, mountingMethod) {
    let priseMountingMethod = '';
    let howMuchPosts = '0';
    if (currentMountingMethodId == 'mounting-method-1') {
        priseMountingMethod = '0,00';
    } else if (currentMountingMethodId == 'mounting-method-2') {
        priseMountingMethod = '198,48';
        howMuchPosts = '1';
    } else if (currentMountingMethodId == 'mounting-method-3') {
        priseMountingMethod = '198,48';
        howMuchPosts = '1';
    } else if (currentMountingMethodId == 'mounting-method-4') {
        priseMountingMethod = '396,96';
        howMuchPosts = '2';
    } else if (currentMountingMethodId == 'mounting-method-5') {
        priseMountingMethod = '0,00';
    } else if (currentMountingMethodId == 'mounting-method-6') {
        priseMountingMethod = '0,00';
    } else if (currentMountingMethodId == 'mounting-method-7') {
        priseMountingMethod = '0,00';
    }
    pushMountingMethodContent(currentMountingMethodId, priseMountingMethod, mountingMethod, howMuchPosts);
}


function pushMountingMethodContent(currentMountingMethodId, priseMountingMethod, mountingMethod, howMuchPosts) {
    //console.log('aktuelle id', currentMountingMethodId);
    //console.log('aktueller preis', priseMountingMethod);
    //console.log('aktueller text', mountingMethod);
    let offerMountingMethod = {
        'id': currentMountingMethodId,
        'mounting-method': mountingMethod,
        'prise-mounting-method': priseMountingMethod,
        'how-much-posts': howMuchPosts
    }
    currentMountingMethod.push(offerMountingMethod);
    renderMountingMethodConfiguration();
    renderNumberOfPostsConfiguration();
    calculationMountingMethod(priseMountingMethod);
}


function calculationMountingMethod(priseMountingMethod) {
    let priseMountingMethodNotSame = parseFloat(priseMountingMethod.replace(",", ""));
    let totalPrise = parseFloat(currentTotalPrise[0].replace(",", ""));
    let currentPreviouMountingMethodPrice = parseFloat(previouMountingMethodPrice.replace(",", ""));
    queryMountingMethodWhatCalculate(priseMountingMethod, priseMountingMethodNotSame, totalPrise, currentPreviouMountingMethodPrice);
}


function queryMountingMethodWhatCalculate(priseMountingMethod, priseMountingMethodNotSame, totalPrise, currentPreviouMountingMethodPrice) {
    if (previouMountingMethodPrice !== priseMountingMethod) {
        calculateNotSameBox(priseMountingMethodNotSame, totalPrise, currentPreviouMountingMethodPrice);
        previouMountingMethodPrice = priseMountingMethod;
    } else if (previouMountingMethodPrice == priseMountingMethod && !priseMountingMethodAlreadyExecuted) {
        priseMountingMethodAlreadyExecuted = true;
        calculateTheFirstBox(totalPrise, currentPreviouMountingMethodPrice);
    }
    renderEndSum();
}


function openMountingMethodCollectionMobil() {
    let mountingMethodTitelDiv = document.getElementById('open-mounting-method');
    let mountingMethodSeries = document.getElementById('series-4');
    if (mountingMethodIsOpen) {
        mountingMethodSeries.classList.remove('back-rotate-mobile-open-svg');
        mountingMethodTitelDiv.classList.add('open-mounting-method-configuration');
        mountingMethodSeries.classList.add('rotate-mobile-open-svg');
        mountingMethodIsOpen = false;
    } else {
        mountingMethodTitelDiv.classList.remove('open-mounting-method-configuration');
        mountingMethodSeries.classList.remove('rotate-mobile-open-svg');
        mountingMethodSeries.classList.add('back-rotate-mobile-open-svg');
        mountingMethodIsOpen = true;
    }
}