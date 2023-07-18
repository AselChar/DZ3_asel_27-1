const input = document.getElementById('gmail_input')
const button = document.getElementById('gmail_button')
const result = document.getElementById('gmail_result')
const regExp = /\@gmail.com$/
button.addEventListener('click', ()=>{
    if (regExp.test(input.value)){
        result.innerHTML= 'CORRECT'
    }else {
        result.innerHTML = 'INCORRECT'
    }
})

const block = document.querySelector('.child_block')
let position = 0
let positionX = 0
let positionY = 0

function move() {
    if (positionX < 448 && positionY === 0) {
        positionX++;
        block.style.left =  `${positionX}px` ;
        setTimeout(move, 10);
    } else if (positionX >= 448 && positionY < 448) {
        positionY++;
        block.style.top = ` ${positionY}px`;
        setTimeout(move, 10);
    } else if (positionX >0 && positionY === 448 ) {
        positionX--;
        block.style.left = `${positionX}px`;
        setTimeout(move, 10);
    } else if (positionX >= 0&& positionY > 0) {
        positionY--;
        block.style.top = `${positionY}px`;
        setTimeout(move, 10);
    }
}

move();

const time = document.getElementById('seconds')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')
let timerId
function timer (){
    time.innerText++
}
start.onclick=function (){
    timerId= setInterval(timer, 1000)
}
stop.onclick= function (){
    clearInterval(timerId)
}
reset.onclick= function (){
    time.innerText='00'
}