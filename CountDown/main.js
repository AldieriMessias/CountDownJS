'use strict';


const formatDigit = (digit) => `0${digit}`.slice(-2);

const updateTime = (time) => {
    const seconds = document.getElementById('seconds');
    const minutes = document.getElementById('minutes');
    const hours = document.getElementById('hours');
    const days = document.getElementById('days');

    const quantitySeconds = time % 60;
    const quantityMinutes = Math.floor( (time % (60 * 60) / 60));
    const quantityHours = Math.floor( (time % (60 * 60 * 24) / (60 * 60)));
    const quantityDays = Math.floor(time / (60 * 60 * 24))


    seconds.textContent = formatDigit(quantitySeconds);
    minutes.textContent = formatDigit(quantityMinutes);
    hours.textContent = formatDigit(quantityHours);
    days.textContent = formatDigit(quantityDays);
}


const countDown = (time) => {
    const stopCount = () => clearInterval(id);
        
    const countTime = () => {
        if(time === 0){ 
            stopCount();
        }
        updateTime(time);
        time--;
    }
    const id = setInterval(countTime , 1000);
}

const timeLeft = () =>{
    // 1 de janeiro de 1970 - data referencia JS
    const eventDate = new Date ('2024-04-05 18:30:00');
    const today = Date.now();
    return Math.floor((eventDate - today)/1000)
}

countDown(timeLeft());