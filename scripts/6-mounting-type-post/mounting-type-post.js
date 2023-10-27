let currentMountingTypePost = [];
let previouMountingTypePostId = 'mounting-type-post-1';
let postConcrete = false;
let postScrewOn = false;
let mountingTypePostIsOpen = true;


function renderMountingTypePost() {
    let mountingTypePostDiv = document.getElementById('mounting-type-post-box');
    mountingTypePostDiv.innerHTML = htmlMountingTypePost();
    let firstMountingTypePostMark = document.getElementById('mounting-type-post-1');
    markTheMountingTypePostBox(firstMountingTypePostMark);
    if (pillarsOnly) {
        mountingTypePostDiv.classList.add('d-none');
        renderExecution();
    } else if (!pillarsOnly) {
        mountingTypePostDiv.classList.remove('d-none');
        renderDimensions();
    }
}


function markTheMountingTypePostBox(thisId) {
    let currentMountingTypePostId = thisId.id;
    document.getElementById(`${currentMountingTypePostId}`).classList.add('mark-the-box');
    if (previouMountingTypePostId !== currentMountingTypePostId) {
        document.getElementById(`${previouMountingTypePostId}`).classList.remove('mark-the-box');
        previouMountingTypePostId = currentMountingTypePostId;
    }
    mountingTypePostGetText(currentMountingTypePostId);
    queryMountingTypePost(currentMountingTypePostId);
}


function mountingTypePostGetText(currentMountingTypePostId) {
    let mountingTypePostId = document.getElementById(`${currentMountingTypePostId}`);
    let mountingTypePostAsText = mountingTypePostId.textContent;
    let mountingTypePostclean = mountingTypePostAsText.trim();
    addMountingTypePost(mountingTypePostclean, currentMountingTypePostId);
}


function addMountingTypePost(mountingTypePostAsText, currentMountingTypePostId) {
    let mountingTypePost = mountingTypePostAsText;
    if (currentMountingTypePost.length > 0) {
        currentMountingTypePost = [];
    }
    if (currentMountingTypePost.length == 0) {
        queryIdMountingTypePost(currentMountingTypePostId, mountingTypePost);
    }
}


function queryIdMountingTypePost(currentMountingTypePostId, mountingTypePost) {
    let priseMountingTypePost = '';
    if (currentMountingTypePostId == 'mounting-type-post-1') {
        priseMountingTypePost = '0,00';
    } else if (currentMountingTypePostId == 'mounting-type-post-2') {
        priseMountingTypePost = '0,00';
    }
    pushMountingTypePostContent(currentMountingTypePostId, priseMountingTypePost, mountingTypePost);
}


function pushMountingTypePostContent(currentMountingTypePostId, priseMountingTypePost, mountingTypePost) {
    //console.log('aktuelle id', currentMountingTypePostId);
    //console.log('aktueller preis', priseMountingTypePost);
    //console.log('aktueller text', mountingTypePost);
    let offerMountingTypePost = {
        'id': currentMountingTypePostId,
        'mounting-type-post': mountingTypePost,
        'prise-mounting-type-post': priseMountingTypePost,
    }
    currentMountingTypePost.push(offerMountingTypePost);
    renderMountingTypePostConfiguration();
}


function queryMountingTypePost(currentMountingTypePostId) {
    if (currentMountingTypePostId == 'mounting-type-post-1') {
        postConcrete = true;
        postScrewOn = false;
        renderVariantMountingPlates();
        renderGroundClearance();
        renderExecution();
        renderDimensions();
    } else if (currentMountingTypePostId == 'mounting-type-post-2') {
        postScrewOn = true;
        postConcrete = false;
        renderVariantMountingPlates();
        renderGroundClearance();
        renderExecution();
        renderDimensions();
    }
}


function openMountingTypePostCollectionMobil() {
    let mountingTypePostTitelDiv = document.getElementById('open-mounting-type-post');
    let mountingTypePostSeries = document.getElementById('series-6');
    if (mountingTypePostIsOpen) {
        mountingTypePostSeries.classList.remove('back-rotate-mobile-open-svg');
        mountingTypePostTitelDiv.classList.add('open-mounting-type-post-configuration');
        mountingTypePostSeries.classList.add('rotate-mobile-open-svg');
        mountingTypePostIsOpen = false;
    } else {
        mountingTypePostTitelDiv.classList.remove('open-mounting-type-post-configuration');
        mountingTypePostSeries.classList.remove('rotate-mobile-open-svg');
        mountingTypePostSeries.classList.add('back-rotate-mobile-open-svg');
        mountingTypePostIsOpen = true;
    }
}