const newItemInput=document.getElementById('new-item-input');
const addItemButton =document.getElementById('add-item-button');
const todoList = document.getElementById('todo-list');

addItemButton.addEventListener('click',()=>{
    const newItemText=newItemInput.value.trim();
    if(newItemText !==''){
        const newItem=document.createElement('li');
        newItem.innerText=newItemText;
        todoList.appendChild(newItem);
        newItemInput.value='';
    }
});
