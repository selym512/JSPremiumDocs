let boxes = document.getElementById("insert");

window.addEventListener('keydown' , (e) => {
    console.log(e.key + ' ' + e.keyCode + ` ` + e.code)

    console.log(boxes.childNodes[1].childNodes[2].textContent = e.key == " " ? "SPACE" : e.key)

    console.log(boxes.childNodes[3].childNodes[2].textContent = e.keyCode)

    console.log(boxes.childNodes[5].childNodes[2].textContent = e.code)


})


