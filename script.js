(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const bgList = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'];
    let index = 0;

    button.addEventListener('click', function() {
        // Toggle between different background images
        // Increment index or reset to 0 if end is reached
        index = index === bgList.length - 1 ? 0 : index + 1;
        const currentBg = bgList[index];

        // Set background images for body, banner, and sections
        body.style.backgroundImage = `url(/images/${currentBg})`;
        banner.style.backgroundImage = `url(/images/banner-${currentBg})`;
    });

/*     button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            btnIcon.classList.remove('moon');
            btnIcon.classList.add('sun');
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            btnIcon.classList.remove('sun');
            btnIcon.classList.add('moon');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark'
        }
    }) */
})()