setURL('https://thomas-ketler.de/gate-fence-configurator/smallest_backend_ever-master');

let allOffers = [];
let currentTotalPrise = ['2300,00'];
//let basePrise = '2300.00';

// Event-Listener hinzufügen, um zu verfolgen, wenn der Benutzer scrollt
window.addEventListener('scroll', function () {
    // Den aktuellen Scroll-Abstand ermitteln
    let scrollPosition = window.scrollY;
    let divElement = document.getElementById('optional-notes-input'); // oder andere Methoden zur Auswahl

    // Die Y-Position in Pixeln ermitteln
    let yPosition = divElement.getBoundingClientRect().top;
    let ganzeZahlPosition = parseInt(yPosition);



    //console.log('scroll position', scrollPosition);
    //console.log('optional notes pos', ganzeZahlPosition);
    if (scrollPosition > 120) {
        document.getElementById('summary').classList.add('position-fixed');
    } else {
        document.getElementById('summary').classList.remove('position-fixed');
    }

    if (ganzeZahlPosition < 400) {
        //document.getElementById('summary').classList.remove('position-fixed');
        document.getElementById('summary').classList.add('position-fixed-bottom');
    } else if (ganzeZahlPosition > 800) {
        document.getElementById('summary').classList.remove('position-fixed-bottom');
        //document.getElementById('summary').classList.add('position-fixed');
    }
});


async function init() {
    await downloadFromServer();
    allOffers = JSON.parse(backend.getItem('allOffers')) || [];
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


function addOffer() {
    const completeOffer = {
        'selected-surface': currentSurface,
        'selected-color': currentColor,
        'selected-opening-direction': currentOpeningDirection,
        'selected-mounting-method': currentMountingMethod,
        'selected-mounting-gates-hinges': currentMountingGateHinges,
        'selected-mounting-type-post': currentMountingTypePost,
        'selected-execution': currentExecution,
        'selected-variant-mounting-plates': currentVariantMountingPlates,
        'selected-ground-clearance': currentGroundClearance,
        'selected-grip-set': currentGripSet,
        'selected-dimensions-height': currentDimensionsHeight,
        'selected-dimensions-wide': currentDimensionsWide,
        'selected-wing-layout': currentWingLayout,
        'selected-wide-wings': currentWideWings,
        'selected-production-drawing': currentProductionDrawing,
        //number of posts
        'selected-optional-notes': currentOptionalNotes
    };
    console.log(completeOffer);

    //allOffers.push(fruit);
    //backend.setItem('allOffers', JSON.stringify(allOffers));
}


async function saveConfigurations() {
    backend.setItem('allOffers', JSON.stringify(allOffers));
}