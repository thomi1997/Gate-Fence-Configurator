function htmlNumberOfPosts(numberOfPostsNumber) {
    return /*html*/`
        <div class="collection-titel">
            <h2>
                ${numberOfPostsNumber}. Anzahl der Pfosten
            </h2>
        </div>
        <div class="number-of-posts-collection">
            <p>
                Anzahl der Pfosten: ${currentMountingMethod[0]['how-much-posts']}
            </p>
        </div>
    `;
}