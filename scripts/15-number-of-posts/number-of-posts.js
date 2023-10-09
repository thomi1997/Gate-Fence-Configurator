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