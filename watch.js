function digitalWatch() {
let hours= document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let period = document.getElementById('period')

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let ampm = h >= 12 ? "PM" : "AM";
    h = (h < 10 ) ? '0' + h : h;
    m= (m < 10) ? '0' + m : m;
    s = (s < 10 ) ? '0' + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    period.innerHTML = ampm;
};
setInterval(digitalWatch, 1000);