const timer = document.getElementById("timer");

setInterval(callback,2000);
let a = -99;
function callback(){
    timer.innerHTML = a;
    a++;
}
