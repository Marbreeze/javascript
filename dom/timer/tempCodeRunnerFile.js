
let startmin = 1;
let first = startmin * 60;

function setTime(){
    let minutes = Math.floor(first / 60);
    let seconds = parseInt(first % 60);
    console.log(minutes ,"minutes")
    minutes.length < 2 ? "0" + minutes: minutes
    seconds.length < 2 ? "0" + seconds: seconds

}
setTime()

setInterval(setTime, 1000)