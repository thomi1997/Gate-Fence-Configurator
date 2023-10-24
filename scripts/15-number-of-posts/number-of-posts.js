let numberOfPostsIsOpen = false;


function renderNumberOfPosts() {
    let numberOfPostsDiv = document.getElementById('number-of-posts-box');
    let numberOfPostsNumber = wingLayoutNumber;
    if (asymmetric) {
        numberOfPostsNumber = numberOfPostsNumber +3;
    } else if (symmetrical) {
        numberOfPostsNumber = numberOfPostsNumber +2;
    }
    numberOfPostsDiv.innerHTML = htmlNumberOfPosts(numberOfPostsNumber);
}


function openNumberOfPostsCollectionMobil() {
    let numberOfPostsTitelDiv = document.getElementById('open-number-of-posts');
    numberOfPostsIsOpen = true;
    if (numberOfPostsIsOpen) {
        numberOfPostsTitelDiv.classList.toggle('open-number-of-posts-configuration');
        numberOfPostsIsOpen = false;
    }
}