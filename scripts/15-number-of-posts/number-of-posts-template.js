function htmlNumberOfPosts(numberOfPostsNumber) {
    return /*html*/`
        <h2>${numberOfPostsNumber}. Anzahl der Pfosten</h2>
        <div class="number-of-posts-collection">
            <p>
                Anzahl der Pfosten: ${currentMountingMethod[0]['how-much-posts']}
            </p>
        </div>
    `;
}