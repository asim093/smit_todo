let list = document.getElementById('todolist');

function add(){
    if (list.children.length >= 6) {
        alert("You can only have 6 tasks at most");
        return;
    }

    let todo = document.getElementById('todovalue').value.trim();
    
    if (todo === "" ) {
        alert("You need to put some text");
        return; 
    }
    
    var li = document.createElement('li');
    li.setAttribute('class', 'li_child');
    li.textContent = todo;
    list.appendChild(li);
    var icon = document.createElement('div');
    icon.setAttribute('class','icons');
    li.appendChild(icon);
    var del = document.createElement('span');
    del.setAttribute('class', 'fa-solid fa-pen-to-square');
    var edit = document.createElement('span');
    edit.setAttribute('class', 'fa-solid fa-trash');

    icon.appendChild(del);
    icon.appendChild(edit);
    document.getElementById('todovalue').value = '';

    del.addEventListener('click', editHandler);
    edit.addEventListener('click', deleteHandler);
}

function editHandler() {
    var editValue = prompt('Enter updated value');
    if (editValue !== null) {
        var listItem = this.parentNode.parentNode; 
        listItem.firstChild.textContent = editValue; 
    }
}

function deleteHandler() {
    var deleteitem = this.parentNode.parentNode;
    deleteitem.remove(); 
}
