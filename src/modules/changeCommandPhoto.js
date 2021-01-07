const changeCommandPhoto = () => {
    const commandContainer = document.getElementsByClassName('row')[8];
    commandContainer.addEventListener('mouseover', event => {
        const target = event.target;
        if (target.matches('img')) {
            target.src = target.dataset.img;
        }
    });

    commandContainer.addEventListener('mouseout', event => {
        const target = event.target;

        if (target.matches('img')) {
            //[target.src, target.dataset.img] = [target.dataset.img, target.src]
            const src = target.src.substring(0, target.src.length - 5) + '.jpg';
            target.src = src;
        }
    });
};

export default changeCommandPhoto;