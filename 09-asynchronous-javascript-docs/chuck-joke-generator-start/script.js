const req = new XMLHttpRequest();
const jokeText =  document.getElementById('joke');
const jokebttn = document.getElementById('joke-btn');


function makeRequest(){
    req.open('GET','https://api.chucknorris.io/jokes/random');
    req.onreadystatechange = () => {
        if(req.readyState === 4 && req.status === 200){
            jokeText.innerText = JSON.parse(req.responseText).value;
        }
    };
    req.send();
}

makeRequest()

jokebttn.addEventListener('click', makeRequest);