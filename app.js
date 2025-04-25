const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');

const play = document.querySelector('.fa-play');
const reset = document.querySelector('.fa-rotate-right');

const minutesSpan = document.querySelector('.minutesSpan');
const secondsSpan = document.querySelector('.secondsSpan');
const audio = new Audio('audio/bedside-clock-alarm-95792.mp3');

let min;
let sec;

let timer;

function pomodoroClock() {
    min = 25;
    minute.textContent = min;
    sec = 0;
    second.textContent = sec;

    timer = setInterval(() => {

        if (min == 0 && sec == 0){
            console.log('Stop timer')
            audio.play();
            clearInterval(timer);
            return
        }

        if (sec === 0){
            sec = 60;
            min--
            minute.textContent = min
        }


        if( min > 9){
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

function resetTimer() {

    min = 25;
    minute.textContent = min;
    sec = 0
    second.textContent = sec;
    secondsSpan.classList.remove('hide');

    clearInterval(timer);
}

play.addEventListener('click',pomodoroClock);
reset.addEventListener('click', resetTimer);
