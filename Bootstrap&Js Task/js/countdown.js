var start = document.getElementById("start");
var reset = document.getElementById("reset");
var stop = document.getElementById("stop");

var hr = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

var startTimer = null;

function timer(){
    // sec.value--;
    if(hr.value == 0 && min.value == 0 && sec.value == 0){
        hr.value = 0;
        min.value = 0;
        sec.value = 0;
    }
    else if(sec.value != 0){
        sec.value--;
    }
    else if(min.value != 0 && sec.value == 0){
        sec.value = 60;
        min.value--;
    }
    else if(hr.value != 0 && min.value == 0){
        min.value = 60;
        hr.value--;
    }
}

function resetTimer(){
    clearInterval(startTimer);
}

start.addEventListener('click',()=>{
    function startInterval(){
        startInterval = setInterval(()=>{
            timer();
        }, 1000);
    }
    startInterval();
});

reset.addEventListener('click', ()=>{
    hr.value = 0;
    min.value = 0;
    sec.value = 0;
    resetTimer();
});

stop.addEventListener('click',()=>{
    clearInterval(timer(f));
})