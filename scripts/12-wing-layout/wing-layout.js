let currentWingLayout = [];


function renderWingLayout() {
    let wingLayoutDiv = document.getElementById('wing-layout-box');
    wingLayoutDiv.innerHTML = htmlWingLayout();
}


function addWingLayout(wingLayoutAsText) {
    console.log(wingLayoutAsText);
    if (currentWingLayout.length > 0) {
        currentWingLayout.forEach(wingLayout => {
            deleteWingLayout(wingLayout);
        });
    }

    if (currentWingLayout.length == 0) {
        let wingLayout = wingLayoutAsText;
        let prisewingLayout = '49,99';
        let offerwingLayout = {
            'wing-layout': wingLayout,
            'prise-wing-layout': prisewingLayout,
        }
        currentWingLayout.push(offerwingLayout);
    }
}


function deleteWingLayout(wingLayout) {
    currentWingLayout.splice(wingLayout, 1);
}


function WingLayoutGetText(i) {
    if (i == 'sy') {
        let wingLayout1 = document.getElementById('wing-layout-1');
        let wingLayout1AsText = wingLayout1.textContent;
        let wingLayout1clean = wingLayout1AsText.trim();
        addWingLayout(wingLayout1clean);
    }

    if (i == 'asy') {
        let wingLayout2 = document.getElementById('wing-layout-2');
        let wingLayout2AsText = wingLayout2.textContent;
        let wingLayout2clean = wingLayout2AsText.trim();
        addWingLayout(wingLayout2clean);
    }
}


function markTheWingLayoutBox(i) {
    let wingLayout1 = document.getElementById('wing-layout-1');
    let wingLayout2 = document.getElementById('wing-layout-2');

    if (i == 'sy') {
        wingLayout1.classList.add('mark-the-box');

        wingLayout2.classList.remove('mark-the-box');
    }

    if (i == 'asy') {
        wingLayout2.classList.add('mark-the-box');

        wingLayout1.classList.remove('mark-the-box');
    }

    WingLayoutGetText(i);
}