setURL('https://thomas-ketler.de/gate-fence-configurator/smallest_backend_ever-master');

let allOffers = [];
let currentTotalPrise = ['2300,00'];


async function loadDataBase() {
    await downloadFromServer();
    allOffers = JSON.parse(backend.getItem('allOffers')) || [];
    includeHTML();
}


function initConfigurator() {
    
    renderSummary();
    renderSurface();
    renderColor();
    renderOpeningDirection();
    renderMountingMethod();
    renderMountingGateHinges();
    renderMountingTypePost();
    renderVariantMountingPlates();
    renderGroundClearance();
    renderExecution();
    renderGripSet();
    renderDimensions();
    renderWingLayout();
    renderwideWings();
    renderProductionDrawing();
    renderNumberOfPosts();
    renderOptionalNotes();
    renderEntireSummary();
    //changeFontColorConfigMenu();
}


function renderEntireSummary() {
    renderSurfaceConfiguration();
    renderColorConfigurationen();
    renderOpeningDirectionConfigurationen();
    renderMountingMethodConfiguration();
    renderMountingMethodHingesConfiguration();
    renderExecutionConfiguration();
    renderGripSetConfiguration();
    renderWingLayoutConfiguration();
    renderNumberOfPostsConfiguration();
}


function changeFontColorConfigMenu() {
    // Holen Sie sich den Container
    var container = document.getElementById('configurator-menu-id');

    // Filtern Sie alle Elemente mit der Klasse .collection-titel
    var collectionTitles = container.querySelectorAll('.collection-titel');

    // Iterieren Sie über die gefilterten Elemente und ändern Sie die Schriftfarbe
    collectionTitles.forEach(function(element) {
        element.style.color = 'red'; // Ändern Sie die Schriftfarbe auf Rot
    });
}