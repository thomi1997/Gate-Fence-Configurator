let currentMountingTypePost = [];
let previouMountingTypePostId = 'mounting-type-post-1';
let concretePost = false;
let postScrewOn = false;


function renderMountingTypePost() {
    let mountingTypePostDiv = document.getElementById('mounting-type-post-box');
    mountingTypePostDiv.innerHTML = htmlMountingTypePost();
}


function markTheMountingTypePostBox(thisId) {
    let currentMountingTypePostId = thisId.id;
    document.getElementById(`${currentMountingTypePostId}`).classList.add('mark-the-box');
    if (previouMountingTypePostId !== currentMountingTypePostId) {
        document.getElementById(`${previouMountingTypePostId}`).classList.remove('mark-the-box');
        previouMountingTypePostId = currentMountingTypePostId;
    }
    mountingTypePostGetText(currentMountingTypePostId);
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
    console.log('aktuelle id', currentMountingTypePostId);
    console.log('aktueller preis', priseMountingTypePost);
    console.log('aktueller text', mountingTypePost);
    let offerMountingTypePost = {
        'id': currentMountingTypePostId,
        'mounting-type-post': mountingTypePost,
        'prise-mounting-type-post': priseMountingTypePost,
    }
    currentMountingTypePost.push(offerMountingTypePost);
}