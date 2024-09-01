const taskForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const editTaskInput = document.getElementById('edit-task-input');
const saveTaskBtn = document.getElementById('save-task-btn');
const deleteTaskBtn = document.getElementById('delete-task-btn');

let currentTaskElement = null;

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const task = taskInput.value;
    
    if(task !== '') {
        const li = document.createElement('li');
        li.className = 'collection-item';

        li.appendChild(document.createTextNode(task));

        const editLink = document.createElement('a');
        editLink.className = 'secondary-content';
        editLink.innerHTML = '<i class="material-icons">edit</i>';
        editLink.addEventListener('click', openEditModal);

        const deleteLink = document.createElement('a');
        deleteLink.className = 'secondary-content';
        deleteLink.innerHTML = '<i class="material-icons">delete</i>';
        deleteLink.addEventListener('click', openDeleteModal);

        li.appendChild(deleteLink);
        li.appendChild(editLink);

        taskList.appendChild(li);

        taskForm.reset();
    }
});

function openDeleteModal(e) {
    currentTaskElement = e.target.parentElement.parentElement;
    const modal = M.Modal.getInstance(document.getElementById('delete-modal'));
    modal.open();
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });

function openEditModal(e) {
    currentTaskElement = e.target.parentElement.parentElement;
    editTaskInput.value = currentTaskElement.firstChild.textContent;
    const modal = M.Modal.getInstance(document.getElementById('edit-modal'));
    modal.open();
    M.updateTextFields();
}

saveTaskBtn.addEventListener('click', function() {
    if (currentTaskElement) {
        currentTaskElement.firstChild.textContent = editTaskInput.value;
    }
});

deleteTaskBtn.addEventListener('click', function(){
    if (currentTaskElement) {
        taskList.removeChild(currentTaskElement);
        // currentTaskElement = null;
    }
});
