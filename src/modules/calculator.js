const calculator = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        calcDay = document.querySelector('.calc-day'),
        totalValue = document.getElementById('total');

    //animate count
    function animateValue(obj, start, end, duration) {
        let startTimestamp;
        const step = timestamp => {
            if (!startTimestamp) {
                startTimestamp = timestamp;
            }
            const progress = (timestamp - startTimestamp) / duration;
            obj.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }

    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
        }

        animateValue(totalValue, 0, total, 1000);
    };

    calcBlock.addEventListener('input', event => {
        const target = event.target;
        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
    });

    calcBlock.addEventListener('input', event => {
        const target = event.target;
        if (target.matches('.calc-square') ||
                target.matches('.calc-count') ||
                target.matches('.calc-day')) {

            target.value = target.value.replace(/\D/g, '');
        }
    });
};

export default calculator;