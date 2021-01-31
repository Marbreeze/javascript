console.log("time to start the timer!");


let timecount = document.getElementById('timerset');
let start = document.getElementById('start')
let stop1 = document.getElementById('stop')
let reset1 = document.getElementById('reset')
let minutes = document.createElement('time');  
let seconds = document.createElement('time'); 
minutes.innerHTML = 0; 
seconds.innerHTML = 0;


let total = 0;
function setTime(){
    total++;
    minutes = Math.floor(total / 60);
    seconds = parseInt(total % 60);
    minutes < 10 ? "0" + minutes : minutes;
    seconds < 10 ? "0" + seconds : seconds;
    timecount.innerText = minutes + ':' + seconds;

}
var setCount;
start.addEventListener('click', () =>{
    setCount = setInterval(setTime, 1000);
    setCount();
    console.log('clicked', setCount)
})

stop1.addEventListener('click', () =>{
    clearInterval(setCount);
})

reset1.addEventListener('click', () =>{
   clearInterval(setCount);
   setCount = 0;
   total = 0;
   timecount.innerText = 0 + ':' + 0;
})

