const setIntervalBttn = document.getElementById('setInterval');
const clearIntervalBttn = document.getElementById('clearInterval');
let interval;

function setIntervalfunc(){
    interval = setInterval(activate, 100);
}
function clearIntervalfunc(){
    clearInterval(interval);
}
function activate(){
    const randomBackgroundColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomBackgroundColor}`;
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.color = `#${randomColor}`;
}

setIntervalBttn.addEventListener('click', setIntervalfunc);
clearIntervalBttn.addEventListener('click', clearIntervalfunc);
