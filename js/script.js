'use strict';

window.addEventListener('DOMContentLoaded', function () {
    // Timer

    // A date, when timer will stop
    const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1);

    // Getting time for timer end
    function getTimeRemaining(endtime) {

        const totalTimeEnd = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor((totalTimeEnd / (1000 * 60 * 60 * 24))),
            hours = Math.floor((totalTimeEnd / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((totalTimeEnd / 1000 / 60) % 60),
            seconds = Math.floor((totalTimeEnd / 1000) % 60);

        return {
            'total': totalTimeEnd,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    // Add 0 before number, which less then 10
    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        // Getting selector for timer        
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timerID = setInterval(updateTimer, 1000);

        updateTimer();

        function updateTimer() {
            // Getting data for a timer
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            // Turn off the timer when  the time is up
            if (t.total <= 0) {
                clearInterval(timerID);
            }

        }
    }

    setClock('.timer', deadline);

});