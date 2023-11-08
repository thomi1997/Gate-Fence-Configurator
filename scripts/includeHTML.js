async function includeHTML() {
    let includeElements = document.querySelectorAll('[include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}


function openFloppyDisk() {
    window.location.href = "memory-location.html"; //https://thomas-ketler.developerakademie.net/Gruppenarbeit-Join/backlog.html
    console.log('open floppy disk');
}