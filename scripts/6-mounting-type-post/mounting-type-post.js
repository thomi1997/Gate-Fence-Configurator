let currentMountingTypePost = [];
let concretePost = false;
let postScrewOn = false;


function renderMountingTypePost() {
    let mountingTypePostDiv = document.getElementById('mounting-type-post-box');
    mountingTypePostDiv.innerHTML = htmlMountingTypePost();
}


function addMountingTypePost(mountingTypePostAsText) {
    console.log(mountingTypePostAsText);
    if (currentMountingTypePost.length > 0) {
        currentMountingTypePost.forEach(mountingTypePost => {
            deleteMountingTypePost(mountingTypePost);
        });
    }

    if (currentMountingTypePost.length == 0) {
        let mountingTypePost = mountingTypePostAsText;
        let priseMountingTypePost = '49,99';
        let offerMountingTypePost = {
            'mounting-type-post': mountingTypePost,
            'prise-mounting-type-post': priseMountingTypePost,
        }
        currentMountingTypePost.push(offerMountingTypePost);
    }
}


function deleteMountingTypePost(mountingTypePost) {
    currentMountingTypePost.splice(mountingTypePost, 1);
}


function mountingTypePostGetText(i) {
    if (i == 'p-e') {
        let mountingTypePost1 = document.getElementById('mounting-type-post-1');
        let mountingTypePost1AsText = mountingTypePost1.textContent;
        let mountingTypePost1clean = mountingTypePost1AsText.trim();
        addMountingTypePost(mountingTypePost1clean);
    }

    if (i == 'p-a') {
        let mountingTypePost2 = document.getElementById('mounting-type-post-2');
        let mountingTypePost2AsText = mountingTypePost2.textContent;
        let mountingTypePost2clean = mountingTypePost2AsText.trim();
        addMountingTypePost(mountingTypePost2clean);
    }
}


function markTheMountingTypePost(i) {
    let mountingTypePost1 = document.getElementById('mounting-type-post-1');
    let mountingTypePost2 = document.getElementById('mounting-type-post-2');

    if (i == 'p-e') {
        mountingTypePost1.classList.add('mark-the-box');

        mountingTypePost2.classList.remove('mark-the-box');
    }

    if (i == 'p-a') {
        mountingTypePost2.classList.add('mark-the-box');

        mountingTypePost1.classList.remove('mark-the-box');
    }
    mountingTypePostGetText(i);
}