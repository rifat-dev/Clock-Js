let hour= document.getElementById('hour')
let min= document.getElementById('min')
let sec= document.getElementById('sec')
let progressbar = document.getElementById('progressbar')
let progressbar1= document.getElementById('progressbar1')


function showTime(){
    let date = new Date()
    hour.innerText = date.getHours()
    min.innerText = date.getMinutes()
    sec.innerText= date.getSeconds()

    progressbar.style.width = (date.getSeconds() / 60) * 100 + '%';
    progressbar1.style.width = (date.getSeconds() / 60) * 100 + '%';
}

setInterval(showTime,1000)