const generateBttn = document.getElementById('generate');
const user = document.getElementById('user');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const userLocation = document.getElementById('location');
const age = document.getElementById('age');
const img = document.getElementById('img');
const body = document.getElementById('body');







function generate(){
    fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then(resp => {
        generateBttn.innerText = "Generate User";
        userName.innerHTML = `<span class="font-bold">Name: </span> ${(resp.results[0].name.title ?? '') + ' ' + resp.results[0].name.first + ' ' + resp.results[0].name.last}`;
        email.innerHTML = `<span class="font-bold">Email: </span> ${resp.results[0].email}`;
        phone.innerHTML = `<span class="font-bold">Phone Number: </span> ${resp.results[0].phone}`;
        userLocation.innerHTML = `<span class="font-bold">Location: </span> ${resp.results[0].location.city + ' ' + resp.results[0].location.state}`;
        age.innerHTML = `<span class="font-bold">Age: </span> ${resp.results[0].dob.age}`;
        img.src = resp.results[0].picture.large;
        if(resp.results[0].gender == 'female'){
            body.classList.remove('bg-sky-500/50');
            body.classList.add('bg-purple-800');
        }
        else{
            body.classList.add('bg-sky-500/50');
            body.classList.remove('bg-purple-800');
        }
        console.log(body.classList);
    });
    generateBttn.innerText = "Loading...";

}

generateBttn.addEventListener('click', generate);