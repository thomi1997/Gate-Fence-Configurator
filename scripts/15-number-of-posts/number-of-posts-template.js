function htmlNumberOfPosts(numberOfPostsNumber) {
    return /*html*/`
        <div onclick="openNumberOfPostsCollectionMobil()" class="collection-titel">
            <h2>
                ${numberOfPostsNumber}. Anzahl der Pfosten
            </h2>
            <svg id="series-15" class="collection-mobile-open-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path 
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </div>
        <div id="open-number-of-posts" class="number-of-posts-collection">
            <p>
                Anzahl der Pfosten: ${currentMountingMethod[0]['how-much-posts']}
            </p>
        </div>
    `;
}