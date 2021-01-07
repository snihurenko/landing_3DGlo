

const toggleMenu = () => {

    document.addEventListener('click', event => {
        const menu = document.querySelector('menu');
        const target = event.target;

        const handlerMenu = () => {
            if (!menu.style.transform || menu.style.transform === 'translate(-100%)') {
                menu.style.transform = 'translate(0)';
            } else {
                menu.style.transform = 'translate(-100%)';
            }
        };

        if (!target.closest('menu')) {

            if (target.closest('.menu')) {
                handlerMenu();
            }

            if (!target.closest('.menu')) {
                menu.style.transform = 'translate(-100%)';
            }
        }

        if (target.closest('menu')) {

            if (target.classList.contains('close-btn')) {
                handlerMenu();
            }

            if (target.matches('li>a')) {
                handlerMenu();
            }
        }
    });
};

export default toggleMenu;