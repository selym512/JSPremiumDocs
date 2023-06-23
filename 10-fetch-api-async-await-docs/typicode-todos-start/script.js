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
function toggleComplete(e){
    if(e.target.classList.contains('todo')){
        e.target.classList.toggle('done');
    }
    updateToDO(e.target.dataset.id, e.target.classList.contains('done'));
}
function deleteToDo(e){
        if(e.target.classList.contains('todo')){
            const id = e.target.dataset.id;
            fetch(apiUrl + `/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(() => e.target.remove());
        }
    }
function updateToDO(id, completed){
    fetch(apiUrl + `/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ completed }),
        headers: 
        {
          'Content-Type': 'application/json',
          token: 'abc123',
        },
      });
}
const init = () => {
    button.addEventListener('click', reqAPI);
    document.addEventListener('DOMContentLoaded', getToDos);
    document.addEventListener('click', toggleComplete);
    document.addEventListener('dblclick', deleteToDo);

}

init();