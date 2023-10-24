let currentMountingGateHinges = [];
let previouMountingGateHingesId = 'mounting-gate-hinges-1';
let mountingGateHingesIsOpen = false;


function renderMountingGateHinges() {
    let mountingGateHingesDiv = document.getElementById('mounting-gate-hinges-box');
    mountingGateHingesDiv.innerHTML = '';
    let currentId = currentMountingMethod[0]['id'];
    let pillarInsideRightAndOutSideLeft = currentId == 'mounting-method-1' || currentId == 'mounting-method-2' || currentId == 'mounting-method-5';
    let postInsideRight = currentId == 'mounting-method-3' || currentId == 'mounting-method-6';
    let pillarOutsideRightInsideLeft = currentId == 'mounting-method-1' || currentId == 'mounting-method-3' || currentId == 'mounting-method-6';
    let postInsideLeft = currentId == 'mounting-method-2' || currentId == 'mounting-method-5';
    let postOutSideRight = currentId == 'mounting-method-2' || currentId == 'mounting-method-5' || currentId == 'mounting-method-4' || currentId == 'mounting-method-7';
    let postOutSideLeft = currentId == 'mounting-method-3' || currentId == 'mounting-method-4' || currentId == 'mounting-method-6' || currentId == 'mounting-method-7';
    let postBothInside = currentId == 'mounting-method-4' || currentId == 'mounting-method-7';
    queryWhichDirection(mountingGateHingesDiv, pillarInsideRightAndOutSideLeft, postInsideRight, pillarOutsideRightInsideLeft, postInsideLeft, postOutSideRight, postOutSideLeft, postBothInside);
    
    let firstMountingGateHingesMark = document.getElementById('mounting-gate-hinges-1');
    markTheMountingGateHingesBox(firstMountingGateHingesMark);
}


function queryWhichDirection(mountingGateHingesDiv, pillarInsideRightAndOutSideLeft, postInsideRight, pillarOutsideRightInsideLeft, postInsideLeft, postOutSideRight, postOutSideLeft, postBothInside) {
    if (insideRight) {
        renderInsideRight(mountingGateHingesDiv, pillarInsideRightAndOutSideLeft, postInsideRight, postBothInside);
    } else if (insideLeft) {
        renderInsideLeft(mountingGateHingesDiv, pillarOutsideRightInsideLeft, postInsideLeft, postBothInside);
    } else if (outsideRight) {
        renderOutSideRight(mountingGateHingesDiv, pillarOutsideRightInsideLeft, postOutSideRight);
    } else if (outsideLeft) {
        renderOutSideLeft(mountingGateHingesDiv, pillarInsideRightAndOutSideLeft, postOutSideLeft);
    }
}


function renderInsideRight(mountingGateHingesDiv, pillarInsideRightAndOutSideLeft, postInsideRight, postBothInside) {
    if (pillarInsideRightAndOutSideLeft) {
        renderMountingGateHingesRightImg(mountingGateHingesDiv, mountingGateHingesImgPathsInsideRight[0], content2DBack[0], content2DBack[1]);
    }
    if (postInsideRight) {
        renderMountingGateHingesRightImg(mountingGateHingesDiv, mountingGateHingesImgPathsInsideRight[1], content2DLateral[0], content2DLateral[1]);
    }
    if (postBothInside) {
        renderMountingGateHingesRightImgs(mountingGateHingesDiv, content3DBack[0], mountingGateHingesImgPathsInsideRight[2], content3DBack[1], content2DLateral[0], mountingGateHingesImgPathsOutSideLeft[1], content2DLateral[1]);
    }
}


function renderInsideLeft(mountingGateHingesDiv, pillarOutsideRightInsideLeft, postInsideLeft, postBothInside) {
    if (pillarOutsideRightInsideLeft) {
        renderMountingGateHingesRightImg(mountingGateHingesDiv, mountingGateHingesImgPathsInsideLeft[0], content2DBack[0], content2DBack[1]);
    }
    if (postInsideLeft) {
        renderMountingGateHingesRightImg(mountingGateHingesDiv, mountingGateHingesImgPathsInsideLeft[1], content2DLateral[0], content2DLateral[1]);
    }
    if (postBothInside) {
        renderMountingGateHingesRightImgs(mountingGateHingesDiv, content3DBack[0], mountingGateHingesImgPathsInsideLeft[2], content3DBack[1], content2DLateral[0],  mountingGateHingesImgPathsOutSideRight[1], content2DLateral[1]);
    }
}


function renderOutSideRight(mountingGateHingesDiv, pillarOutsideRightInsideLeft, postOutSideRight) {
    if (pillarOutsideRightInsideLeft) {
        renderMountingGateHingesRightImg(mountingGateHingesDiv, mountingGateHingesImgPathsOutSideRight[0], content2DLateral[0], content2DLateral[1]);
    }
    if (postOutSideRight) {
        renderMountingGateHingesRightImg(mountingGateHingesDiv, mountingGateHingesImgPathsOutSideRight[1], content2DLateral[0], content2DLateral[1]);
    }
}


function renderOutSideLeft(mountingGateHingesDiv, pillarInsideRightAndOutSideLeft, postOutSideLeft) {
    if (pillarInsideRightAndOutSideLeft) {
        renderMountingGateHingesRightImg(mountingGateHingesDiv, mountingGateHingesImgPathsOutSideLeft[0], content2DLateral[0], content2DLateral[1]);
    }
    if (postOutSideLeft) {
        renderMountingGateHingesRightImg(mountingGateHingesDiv, mountingGateHingesImgPathsOutSideLeft[1], content2DLateral[0], content2DLateral[1]);
    }
}


function renderMountingGateHingesRightImg(mountingGateHingesDiv, imgPath, contentTop, contentBottom) {
    mountingGateHingesDiv.innerHTML = htmlMountingGateHinges(imgPath, contentTop, contentBottom);
}


function renderMountingGateHingesRightImgs(mountingGateHingesDiv, contentTop1, imgPath1, contentBottom1, contentTop2, imgPath2, contentBottom2) {
    mountingGateHingesDiv.innerHTML = htmlMountingGateHingesDouble(contentTop1, imgPath1, contentBottom1, contentTop2, imgPath2, contentBottom2);
}


function markTheMountingGateHingesBox(thisId) {
    let currentMountingGateHingesId = thisId.id;
    document.getElementById(`${currentMountingGateHingesId}`).classList.add('mark-the-box');
    if (previouMountingGateHingesId !== currentMountingGateHingesId) {
        document.getElementById(`${previouMountingGateHingesId}`).classList.remove('mark-the-box');
        previouMountingGateHingesId = currentMountingGateHingesId;
    }
    mountingGateHingesGetText(currentMountingGateHingesId);
}


function mountingGateHingesGetText(currentMountingGateHingesId) {
    let mountingGateHingesId = document.getElementById(`${currentMountingGateHingesId}`);
    let paragraphsmountingGateHinges = mountingGateHingesId.querySelector(`#${currentMountingGateHingesId} p:nth-child(3)`);
    let trimmedMountingGateHinges = paragraphsmountingGateHinges.textContent.trim();
    addMountingGateHinges(trimmedMountingGateHinges, currentMountingGateHingesId);
}


function addMountingGateHinges(allMountingGateHingesAsText, currentMountingGateHingesId) {
    let mountingGateHinges = allMountingGateHingesAsText;
    if (currentMountingGateHinges.length > 0) {
        currentMountingGateHinges = [];
    }
    if (currentMountingGateHinges.length == 0) {
        queryIdMountingGateHinges(currentMountingGateHingesId, mountingGateHinges);
    }
}


function queryIdMountingGateHinges(currentMountingGateHingesId, mountingGateHinges) {
    let priseMountingGateHinges = '';
    if (currentMountingGateHingesId == 'mounting-gate-hinges-1') {
        priseMountingGateHinges = '0,00';
    } else if (currentMountingGateHingesId == 'mounting-gate-hinges-2') {
        priseMountingGateHinges = '0,00';
    } else if (currentMountingGateHingesId == 'mounting-gate-hinges-3') {
        priseMountingGateHinges = '0,00';
    }
    pushMountingGateHingesContent(currentMountingGateHingesId, priseMountingGateHinges, mountingGateHinges);
}


function pushMountingGateHingesContent(currentMountingGateHingesId, priseMountingGateHinges, mountingGateHinges) {
    //console.log('aktuelle id', currentMountingGateHingesId);
    //console.log('aktueller preis', priseMountingGateHinges);
    //console.log('aktueller text', mountingGateHinges);
    let offerMountingGateHinges = {
        'id': currentMountingGateHingesId,
        'mounting-gate-hinges': mountingGateHinges,
        'prise-mounting-gate-hinges': priseMountingGateHinges,
    }
    currentMountingGateHinges.push(offerMountingGateHinges);
    renderMountingMethodHingesConfiguration();
}


function openMountingGateHingesCollectionMobil_1() {
    let mountingGateHingesTitelDiv = document.getElementById('open-mounting-gate-hinges-1');
    mountingGateHingesIsOpen = true;
    if (mountingGateHingesIsOpen) {
        mountingGateHingesTitelDiv.classList.toggle('open-mounting-gate-hinges-configuration');
        mountingGateHingesIsOpen = false;
    }
}


function openMountingGateHingesCollectionMobil_2() {
    let mountingGateHingesTitelDiv = document.getElementById('open-mounting-gate-hinges-2');
    mountingGateHingesIsOpen = true;
    if (mountingGateHingesIsOpen) {
        mountingGateHingesTitelDiv.classList.toggle('open-mounting-gate-hinges-configuration');
        mountingGateHingesIsOpen = false;
    }
}