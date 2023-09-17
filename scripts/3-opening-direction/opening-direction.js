let currentOpeningDirection = [];


function renderOpeningDirection() {
    let openingDirectionDiv = document.getElementById('opening-direction-box');
    openingDirectionDiv.innerHTML = htmlOpeningDirection();
}


function addOpeningDirection(openingDirectionAsText) {
    console.log(openingDirectionAsText);
    if (currentOpeningDirection.length > 0) {
        currentOpeningDirection.forEach(direction => {
            deleteOpeningDirection(direction);
        });
    }

    if (currentOpeningDirection.length == 0) {
        let openingDirection = openingDirectionAsText;
        let priseOpeningDirection = '0,00';
        let offerOpeningDirection = {
            'surface': openingDirection,
            'prise-opening-direction': priseOpeningDirection,
        }
        currentOpeningDirection.push(offerOpeningDirection);
    }
}


function deleteOpeningDirection(direction) {
    currentOpeningDirection.splice(direction, 1);
}


function openingDirectionGetText(i) {
    if (i == 'din-r-i') {
        let openingDirection1 = document.getElementById('opening-direction-1');
        let openingDirection1AsText = openingDirection1.textContent;
        let openingDirection1Clean = openingDirection1AsText.trim();
        addOpeningDirection(openingDirection1Clean);
    }

    if (i == 'din-l-i') {
        let openingDirection2 = document.getElementById('opening-direction-2');
        let openingDirection2AsText = openingDirection2.textContent;
        let openingDirection2Clean = openingDirection2AsText.trim();
        addOpeningDirection(openingDirection2Clean);
    }

    if (i == 'din-r-a') {
        let openingDirection3 = document.getElementById('opening-direction-3');
        let openingDirection3AsText = openingDirection3.textContent;
        let openingDirection3Clean = openingDirection3AsText.trim();
        addOpeningDirection(openingDirection3Clean);
    }

    if (i == 'din-l-a') {
        let openingDirection4 = document.getElementById('opening-direction-4');
        let openingDirection4AsText = openingDirection4.textContent;
        let openingDirection4Clean = openingDirection4AsText.trim();
        addOpeningDirection(openingDirection4Clean);
    }
}


function markTheOpeningDirectionBox(i) {
    console.log(i);
    let openingDirection1 = document.getElementById('opening-direction-1');
    let openingDirection2 = document.getElementById('opening-direction-2');
    let openingDirection3 = document.getElementById('opening-direction-3');
    let openingDirection4 = document.getElementById('opening-direction-4');

    if (i == 'din-r-i') {
        openingDirection1.classList.add('mark-the-box');

        openingDirection2.classList.remove('mark-the-box');
        openingDirection3.classList.remove('mark-the-box');
        openingDirection4.classList.remove('mark-the-box');
    }

    if (i == 'din-l-i') {
        openingDirection2.classList.add('mark-the-box');

        openingDirection1.classList.remove('mark-the-box');
        openingDirection3.classList.remove('mark-the-box');
        openingDirection4.classList.remove('mark-the-box');
    }

    if (i == 'din-r-a') {
        openingDirection3.classList.add('mark-the-box');

        openingDirection1.classList.remove('mark-the-box');
        openingDirection2.classList.remove('mark-the-box');
        openingDirection4.classList.remove('mark-the-box');
    }

    if (i == 'din-l-a') {
        openingDirection4.classList.add('mark-the-box');

        openingDirection1.classList.remove('mark-the-box');
        openingDirection2.classList.remove('mark-the-box');
        openingDirection3.classList.remove('mark-the-box');
    }
    openingDirectionGetText(i);
}