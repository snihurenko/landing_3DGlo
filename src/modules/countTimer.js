const countTimer = deadline => {
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function formatZero(item) {
        return String(item).padStart(2, '0');
    }

    function getTimeRemaining() {
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
        return { timeRemaining, hours, minutes, seconds };
    }

    function updateClock() {
        const timer = getTimeRemaining();

        timerHours.textContent = formatZero(timer.hours);
        timerMinutes.textContent = formatZero(timer.minutes);
        timerSeconds.textContent = formatZero(timer.seconds);

        if (timer.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        } else {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }

    }

    updateClock();
};

export default countTimer;