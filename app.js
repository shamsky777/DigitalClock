const hoursEl = document.getElementById(`hours`);
const minutesEl = document.getElementById(`minutes`)
const secondsEl = document.getElementById(`seconds`)
const daysEl = document.getElementById(`date`)


const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const days = date.toLocaleDateString();




hoursEl.innerText = hours;
minutesEl.innerText = minutes;
secondsEl.innerText = seconds;
daysEl.innerText = days;

setInterval(() => {
    const date = new Date();
    hoursEl.innerText = nuliani(date.getHours());
    minutesEl.innerText = nuliani(date.getMinutes());
    secondsEl.innerText = nuliani(date.getSeconds());
    daysEl.innerText = date.toLocaleDateString();
}, 1000);

const nuliani = time => time.toString().length < 2 ? `0${time}` : time;