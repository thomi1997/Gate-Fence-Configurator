let numberOfPostsIsOpen = true;


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
    let numberOfPostsSeries = document.getElementById('series-15');
    if (numberOfPostsIsOpen) {
        numberOfPostsSeries.classList.remove('back-rotate-mobile-open-svg');
        numberOfPostsTitelDiv.classList.add('open-number-of-posts-configuration');
        numberOfPostsSeries.classList.add('rotate-mobile-open-svg');
        numberOfPostsIsOpen = false;
    } else {
        numberOfPostsTitelDiv.classList.remove('open-number-of-posts-configuration');
        numberOfPostsSeries.classList.remove('rotate-mobile-open-svg');
        numberOfPostsSeries.classList.add('back-rotate-mobile-open-svg');
        numberOfPostsIsOpen = true;
    }
}