let currentMountingMethod = [];


function renderMountingMethod() {
    let mountingMethodDiv = document.getElementById('mounting-method-box');
    mountingMethodDiv.innerHTML = htmlMountingMethod();
}


function addMountingMethod(mountingMethodAsText) {
    console.log(mountingMethodAsText);
    if (currentMountingMethod.length > 0) {
        currentMountingMethod.forEach(mountingMethod => {
            deleteSurface(mountingMethod);
        });
    }

    if (currentMountingMethod.length == 0) {
        let mountingMethod = mountingMethodAsText;
        let priseMountingMethod = '49,99';
        let offerMountingMethod = {
            'mounting-method': mountingMethod,
            'prise-mounting-method': priseMountingMethod,
        }
        currentMountingMethod.push(offerMountingMethod);
    }
}


function deleteSurface(mountingMethod) {
    currentMountingMethod.splice(mountingMethod, 1);
}


function mountingMethodGetText(i) {
    if (i == 'pi-pi') {
        let mountingMethod1 = document.getElementById('mounting-method-1');
        let mountingMethod1AsText = mountingMethod1.textContent;
        let mountingMethod1clean = mountingMethod1AsText.trim();
        addMountingMethod(mountingMethod1clean);
    }

    if (i == 'pi-po') {
        let mountingMethod2 = document.getElementById('mounting-method-2');
        let mountingMethod2AsText = mountingMethod2.textContent;
        let mountingMethod2clean = mountingMethod2AsText.trim();
        addMountingMethod(mountingMethod2clean);
    }

    if (i == 'po-pi') {
        let mountingMethod3 = document.getElementById('mounting-method-3');
        let mountingMethod3AsText = mountingMethod3.textContent;
        let mountingMethod3clean = mountingMethod3AsText.trim();
        addMountingMethod(mountingMethod3clean);
    }

    if (i == 'po-po') {
        let mountingMethod4 = document.getElementById('mounting-method-4');
        let mountingMethod4AsText = mountingMethod4.textContent;
        let mountingMethod4clean = mountingMethod4AsText.trim();
        addMountingMethod(mountingMethod4clean);
    }

    if (i == 'pi-cp') {
        let mountingMethod5 = document.getElementById('mounting-method-5');
        let mountingMethod5AsText = mountingMethod5.textContent;
        let mountingMethod5clean = mountingMethod5AsText.trim();
        addMountingMethod(mountingMethod5clean);
    }

    if (i == 'cp-pi') {
        let mountingMethod6 = document.getElementById('mounting-method-6');
        let mountingMethod6AsText = mountingMethod6.textContent;
        let mountingMethod6clean = mountingMethod6AsText.trim();
        addMountingMethod(mountingMethod6clean);
    }

    if (i == 'cp-cp') {
        let mountingMethod7 = document.getElementById('mounting-method-7');
        let mountingMethod7AsText = mountingMethod7.textContent;
        let mountingMethod7clean = mountingMethod7AsText.trim();
        addMountingMethod(mountingMethod7clean);
    }
}


function markTheMountingMethod(i) {
    let mountingMethod1 = document.getElementById('mounting-method-1');
    let mountingMethod2 = document.getElementById('mounting-method-2');
    let mountingMethod3 = document.getElementById('mounting-method-3');
    let mountingMethod4 = document.getElementById('mounting-method-4');
    let mountingMethod5 = document.getElementById('mounting-method-5');
    let mountingMethod6 = document.getElementById('mounting-method-6');
    let mountingMethod7 = document.getElementById('mounting-method-7');


    if (i == 'pi-pi') {
        mountingMethod1.classList.add('mark-the-box');

        mountingMethod2.classList.remove('mark-the-box');
        mountingMethod3.classList.remove('mark-the-box');
        mountingMethod4.classList.remove('mark-the-box');
        mountingMethod5.classList.remove('mark-the-box');
        mountingMethod6.classList.remove('mark-the-box');
        mountingMethod7.classList.remove('mark-the-box');
    }

    if (i == 'pi-po') {
        mountingMethod2.classList.add('mark-the-box');

        mountingMethod1.classList.remove('mark-the-box');
        mountingMethod3.classList.remove('mark-the-box');
        mountingMethod4.classList.remove('mark-the-box');
        mountingMethod5.classList.remove('mark-the-box');
        mountingMethod6.classList.remove('mark-the-box');
        mountingMethod7.classList.remove('mark-the-box');
    }

    if (i == 'po-pi') {
        mountingMethod3.classList.add('mark-the-box');

        mountingMethod2.classList.remove('mark-the-box');
        mountingMethod1.classList.remove('mark-the-box');
        mountingMethod4.classList.remove('mark-the-box');
        mountingMethod5.classList.remove('mark-the-box');
        mountingMethod6.classList.remove('mark-the-box');
        mountingMethod7.classList.remove('mark-the-box');
    }

    if (i == 'po-po') {
        mountingMethod4.classList.add('mark-the-box');

        mountingMethod2.classList.remove('mark-the-box');
        mountingMethod3.classList.remove('mark-the-box');
        mountingMethod1.classList.remove('mark-the-box');
        mountingMethod5.classList.remove('mark-the-box');
        mountingMethod6.classList.remove('mark-the-box');
        mountingMethod7.classList.remove('mark-the-box');
    }

    if (i == 'pi-cp') {
        mountingMethod5.classList.add('mark-the-box');

        mountingMethod2.classList.remove('mark-the-box');
        mountingMethod3.classList.remove('mark-the-box');
        mountingMethod4.classList.remove('mark-the-box');
        mountingMethod1.classList.remove('mark-the-box');
        mountingMethod6.classList.remove('mark-the-box');
        mountingMethod7.classList.remove('mark-the-box');
    }

    if (i == 'cp-pi') {
        mountingMethod6.classList.add('mark-the-box');

        mountingMethod2.classList.remove('mark-the-box');
        mountingMethod3.classList.remove('mark-the-box');
        mountingMethod4.classList.remove('mark-the-box');
        mountingMethod5.classList.remove('mark-the-box');
        mountingMethod1.classList.remove('mark-the-box');
        mountingMethod7.classList.remove('mark-the-box');
    }

    if (i == 'cp-cp') {
        mountingMethod7.classList.add('mark-the-box');

        mountingMethod2.classList.remove('mark-the-box');
        mountingMethod3.classList.remove('mark-the-box');
        mountingMethod4.classList.remove('mark-the-box');
        mountingMethod5.classList.remove('mark-the-box');
        mountingMethod6.classList.remove('mark-the-box');
        mountingMethod1.classList.remove('mark-the-box');
    }
    mountingMethodGetText(i);
}