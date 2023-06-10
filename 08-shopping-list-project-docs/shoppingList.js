const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById("item-list");
const clearbutt = document.getElementById("clear");
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;


function displayItems(){
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach(item => addItemToDom(item));
    checkUI();
}
function onAddItemSubmit(e){
    e.preventDefault();

    let value = itemInput.value;

    if(value == ''){
        alert("Input empty, please add an item.");
    }
    else{
        if(isEditMode){
            const itemToEdit = itemList.querySelector('.edit-mode');
            deleteItemToLocalStorage(itemToEdit.textContent);
            itemToEdit.classList.remove('edit-mode');
            itemToEdit.remove();
            isEditMode = false;
        } else {
            if(checkIfItemExists(itemInput.value)){
                alert('That item already exists!');
                return;
            }
        }
        addItemToDom(itemInput.value);
        addItemToLocalStorage(itemInput.value);
        itemInput.value = '';
    }
    checkUI();
}
function addItemToDom(item){
    li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    button = document.createElement('button');
    button.className = "remove-item btn-link text-red";
    icon = document.createElement('i');
    icon.className = "fa-solid fa-xmark";
    button.appendChild(icon);
    li.appendChild(button);
    itemList.appendChild(li);
}
function addItemToLocalStorage(item){
    const itemsFromStorage = getItemsFromStorage(item);
    itemsFromStorage.push(item);
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
  
}
function deleteItemToLocalStorage(item){
    let itemsFromStorage = getItemsFromStorage();
    itemsFromStorage = itemsFromStorage.filter(word => word != item);
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}
function getItemsFromStorage(){
    let itemsFromStorage;
    if(localStorage.getItem('items') === null){
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    return itemsFromStorage;
}
function onClickItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        removeItem(e.target.parentElement.parentElement);
    }else{
        setItemToEdit(e.target);
    }
}
function setItemToEdit(item){
    isEditMode = true;

    itemList.querySelectorAll('li').forEach(li => li.classList.remove('edit-mode'));
    item.classList.add('edit-mode');
    formBtn.innerHTML = '<i class="fa-solid fa-pen"></i>   Update Item';
    formBtn.style.backgroundColor = '#228B22';
    itemInput.value = item.textContent;
}   
function removeItem(item){
    console.log(item);
    if(confirm("Are you sure?")){
        item.remove();
        deleteItemToLocalStorage(item.textContent);
        checkUI();
    }
}
function clearItems(e){
    if(confirm('Are you sure')){
        while(itemList.firstChild){
            itemList.removeChild(itemList.firstChild);
        }
        localStorage.removeItem('items');
    }
    checkUI();
}
function checkUI(){
    itemInput.value = '';
    const items = itemList.querySelectorAll('li');
    if(items.length === 0){
        clearbutt.style.display = 'none';
        itemFilter.style.display = 'none';
    }
    else{
        clearbutt.style.display = 'block';
        itemFilter.style.display = 'block';
    }
    formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
    formBtn.style.backgroundColor= '#333';
    isEditMode = false;
}
function checkIfItemExists(item){
    const itemsFromStorage = localStorage.getItem('items');
    return itemsFromStorage.includes(item);
}
function filterItems(e){
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();
    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();
        if(itemName.indexOf(text) != -1){
            item.style.display = 'flex';
        }
        else{            
            item.style.display = 'none';
        }
    });


    
}

itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', onClickItem);
clearbutt.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);
document.addEventListener('DOMContentLoaded', displayItems);

checkUI();