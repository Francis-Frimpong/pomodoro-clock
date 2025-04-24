const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');

const play = document.querySelector('.fa-play');
const reset = document.querySelector('.fa-rotate-right');

const minutesSpan = document.querySelector('.minutesSpan');
const secondsSpan = document.querySelector('.secondsSpan');

let min;
let sec;

let timer;

function pomodoroClock() {
    min = 25;
    minute.textContent = min;
    sec = 0;
    second.textContent = sec;

    timer = setInterval(() => {
        if (sec === 0){
            sec = 60;
            min--
            minute.textContent = min
            
        }

        if (min === 0 && sec === 0){
            audio.play();
            clearInterval(timer);
            return
        }

        if( min > 10){
            minutesSpan.classList.add('hide');
        } else{
            minutesSpan.classList.remove('hide');
        }
        if( sec > 10){
            secondsSpan.classList.add('hide');
        } else{
            secondsSpan.classList.remove('hide');
        }
        --sec
        second.textContent = sec; 
    }, 1000)

}

pomodoroClock()
