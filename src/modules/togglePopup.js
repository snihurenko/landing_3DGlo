const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupContent = popup.querySelector('.popup-content');
    
    document.body.addEventListener('click', (event) => {
        const target = event.target;

        if (target.matches('.popup-btn')){
            let position = 0;

            const animatePopup = () => {
                popup.style.display = 'block';
                position += 30;
                popupContent.style.left = position + 'px';
                
                if (position < (window.innerWidth / 2 - (popupContent.offsetWidth / 2))) {
                    requestAnimationFrame(animatePopup);
                }
            };

            if (window.innerWidth < '768') {
                popup.style.display = 'block';
                popupContent.style.left = '25%';
            } else {
                requestAnimationFrame(animatePopup);
            }

            window.addEventListener('resize', () => {
                if (window.innerWidth < 600){
                    popupContent.style.left = '20%';
                    popupContent.style.marginRight = '-20rem';

                } else if (window.innerWidth < 400){
                    popupContent.style.left = '10px';
                    popupContent.style.marginRight = '-20rem';

                } else {
                    popupContent.style.left = '30%';
                    popupContent.style.marginRight = '-20rem';
                }
            });
        }
    });

    popup.addEventListener('click', event => {
        const target = event.target;
        const form = document.getElementById('form3');

        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
            form.reset();
        }

        if (!target.closest('.popup-content')) {
            popup.style.display = 'none';
            form.reset();
        }
    });
};

export default togglePopup;