const button = document.getElementById('add');
const txtField = document.getElementById('title');
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
const todoList = document.getElementById('todo-list');
let uList = document.createElement('ul');

function reqAPI(e){
    e.preventDefault();
    const newTodo = {
        title: txtField.value,
        completed: false,
      };
    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: 
        {
          'Content-Type': 'application/json',
          token: 'abc123',
        },
      })
      .then(res => res.json())
      .then(res => addToDoToDom(res));
}
function addToDoToDom(toDo){
    const div = document.createElement('div');
    div.classList.add('todo');
    div.appendChild(document.createTextNode(toDo.title));
    div.setAttribute('data-id', toDo.id);
    if (toDo.completed) {
        div.classList.add('done');
    }
    todoList.appendChild(div);
}
function getToDos(){
    fetch(`${apiUrl}?_limit=5`)
    .then((res) => res.json())
    .then((res) => {
        res.forEach(toDo => addToDoToDom(toDo));
    });
}
const init = () => {
    button.addEventListener('click', reqAPI);
    document.addEventListener('DOMContentLoaded', getToDos);
}

init();