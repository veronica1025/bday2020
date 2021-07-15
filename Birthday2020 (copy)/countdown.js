const startingMinutes = 1;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

setInterval(updateMinutes,1000);

function updateMinutes(){
    time--;
    const remainingMinutes = Math.floor(time/60);
    let remainingSeconds = time % 60 ;
    
    countdownEl.innerHTML = `${remainingMinutes} : ${remainingSeconds}`; 
    
}

function redirecting(){
    window.location.assign("https://drive.google.com/drive/u/0/folders/1fQ0jhBfqiIkUtDATaLximqBQHnnLaBcd");
}

setTimeout(redirecting,60000);