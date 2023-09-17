function renderColor() {
    let colorDiv = document.getElementById('color-box');
    colorDiv.innerHTML = htmlColor();
    document.getElementById('color-overview').style = 'display: none;'
}


function openColorOverview() {
    let colorOverviewDiv = document.getElementById('color-overview');
    colorOverviewDiv.style = 'display: flex;'
    renderAllRalColorsOverview(colorOverviewDiv);
    //document.getElementById('color-overview').classList.add('d-none');
}


function closeColorOverview() {
    document.getElementById('color-overview').style = 'display: none;'
}


function renderAllRalColorsOverview(colorOverviewDiv) {
    colorOverviewDiv.innerHTML = htmlColorRalOverview();
}