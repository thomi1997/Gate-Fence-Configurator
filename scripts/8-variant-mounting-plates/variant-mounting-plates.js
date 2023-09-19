let currentVariantMountingPlates = [];


function renderSurface() {
    let variantMountingPlatesDiv = document.getElementById('variant-mounting-plates-box');
    variantMountingPlatesDiv.innerHTML = htmlVariantMountingPlates();
}


function addVariantMountingPlates(variantMountingPlatesAsText) {
    console.log(variantMountingPlatesAsText);
    if (currentVariantMountingPlates.length > 0) {
        currentVariantMountingPlates.forEach(variantMountingPlates => {
            deleteVariantMountingPlates(variantMountingPlates);
        });
    }

    if (currentVariantMountingPlates.length == 0) {
        let variantMountingPlates = variantMountingPlatesAsText;
        let priseVariantMountingPlates = '49,99';
        let offerVariantMountingPlates = {
            'variant-mounting-plates': variantMountingPlates,
            'prise-variant-mounting-plates': priseVariantMountingPlates,
        }
        currentVariantMountingPlates.push(offerVariantMountingPlates);
    }
}


function deleteVariantMountingPlates(variantMountingPlates) {
    currentVariantMountingPlates.splice(variantMountingPlates, 1);
}


function variantMountingPlatesGetText(i) {
    if (i == '150-150-m') {
        let variantMountingPlates1 = document.getElementById('variant-mounting-plates-1');
        let variantMountingPlates1AsText = variantMountingPlates1.textContent;
        let variantMountingPlates1clean = variantMountingPlates1AsText.trim();
        addVariantMountingPlates(variantMountingPlates1clean);
    }

    if (i == '250-150-m') {
        let variantMountingPlates2 = document.getElementById('variant-mounting-plates-2');
        let variantMountingPlates2AsText = variantMountingPlates2.textContent;
        let variantMountingPlates2clean = variantMountingPlates2AsText.trim();
        addVariantMountingPlates(variantMountingPlates2clean);
    }

    if (i == '250-250-m') {
        let variantMountingPlates3 = document.getElementById('variant-mounting-plates-3');
        let variantMountingPlates3AsText = variantMountingPlates3.textContent;
        let variantMountingPlates3clean = variantMountingPlates3AsText.trim();
        addVariantMountingPlates(variantMountingPlates3clean);
    }

    if (i == '150-150-v') {
        let variantMountingPlates4 = document.getElementById('variant-mounting-plates-4');
        let variantMountingPlates4AsText = variantMountingPlates4.textContent;
        let variantMountingPlates4clean = variantMountingPlates4AsText.trim();
        addVariantMountingPlates(variantMountingPlates4clean);
    }

    if (i == '250-150-v') {
        let variantMountingPlates5 = document.getElementById('variant-mounting-plates-5');
        let variantMountingPlates5AsText = variantMountingPlates5.textContent;
        let variantMountingPlates5clean = variantMountingPlates5AsText.trim();
        addVariantMountingPlates(variantMountingPlates5clean);
    }

    if (i == '250-250-v') {
        let variantMountingPlates6 = document.getElementById('variant-mounting-plates-6');
        let variantMountingPlates6AsText = variantMountingPlates6.textContent;
        let variantMountingPlates6clean = variantMountingPlates6AsText.trim();
        addVariantMountingPlates(variantMountingPlates6clean);
    }
}


function markTheVariantMountingPlatesBox(i) {
    let variantMountingPlates1 = document.getElementById('variant-mounting-plates-1');
    let variantMountingPlates2 = document.getElementById('variant-mounting-plates-2');
    let variantMountingPlates3 = document.getElementById('variant-mounting-plates-3');
    let variantMountingPlates4 = document.getElementById('variant-mounting-plates-4');
    let variantMountingPlates5 = document.getElementById('variant-mounting-plates-5');
    let variantMountingPlates6 = document.getElementById('variant-mounting-plates-6');

    if (i == '150-150-m') {
        variantMountingPlates1.classList.add('mark-the-box');

        variantMountingPlates2.classList.remove('mark-the-box');
        variantMountingPlates3.classList.remove('mark-the-box');
        variantMountingPlates4.classList.remove('mark-the-box');
        variantMountingPlates5.classList.remove('mark-the-box');
        variantMountingPlates6.classList.remove('mark-the-box');
    }

    if (i == '250-150-m') {
        variantMountingPlates2.classList.add('mark-the-box');

        variantMountingPlates1.classList.remove('mark-the-box');
        variantMountingPlates3.classList.remove('mark-the-box');
        variantMountingPlates4.classList.remove('mark-the-box');
        variantMountingPlates5.classList.remove('mark-the-box');
        variantMountingPlates6.classList.remove('mark-the-box');
    }

    if (i == '250-250-m') {
        variantMountingPlates3.classList.add('mark-the-box');

        variantMountingPlates1.classList.remove('mark-the-box');
        variantMountingPlates2.classList.remove('mark-the-box');
        variantMountingPlates4.classList.remove('mark-the-box');
        variantMountingPlates5.classList.remove('mark-the-box');
        variantMountingPlates6.classList.remove('mark-the-box');
    }

    if (i == '150-150-v') {
        variantMountingPlates4.classList.add('mark-the-box');

        variantMountingPlates1.classList.remove('mark-the-box');
        variantMountingPlates2.classList.remove('mark-the-box');
        variantMountingPlates3.classList.remove('mark-the-box');
        variantMountingPlates5.classList.remove('mark-the-box');
        variantMountingPlates6.classList.remove('mark-the-box');
    }

    if (i == '250-150-v') {
        variantMountingPlates5.classList.add('mark-the-box');

        variantMountingPlates1.classList.remove('mark-the-box');
        variantMountingPlates2.classList.remove('mark-the-box');
        variantMountingPlates3.classList.remove('mark-the-box');
        variantMountingPlates4.classList.remove('mark-the-box');
        variantMountingPlates6.classList.remove('mark-the-box');
    }

    if (i == '250-250-v') {
        variantMountingPlates6.classList.add('mark-the-box');

        variantMountingPlates1.classList.remove('mark-the-box');
        variantMountingPlates2.classList.remove('mark-the-box');
        variantMountingPlates3.classList.remove('mark-the-box');
        variantMountingPlates4.classList.remove('mark-the-box');
        variantMountingPlates5.classList.remove('mark-the-box');
    }
    variantMountingPlatesGetText(i);
}