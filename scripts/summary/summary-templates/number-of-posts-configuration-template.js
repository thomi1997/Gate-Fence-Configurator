function htmlNumberOfPostsBoxConfiguration() {
    return /*html*/`
        <div class="configuration-column">
            <div class="collection-prise">
                <p>
                    Anzahl der Pfosten
                </p>
                <p>
                    +0,00 €
                </p>
            </div>
            <span>
                ${currentMountingMethod[0]['how-much-posts']}
            </span>
        </div>
    `;
}