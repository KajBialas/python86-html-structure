const taskForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const task = taskInput.value;
    
    if(task !== '') {
        const li = document.createElement('li');
        li.className = 'collection-item';

        li.appendChild(document.createTextNode(task));

        const deleteLink = document.createElement('a');
        deleteLink.className = 'secondary-content';
        deleteLink.innerHTML = '<i class="material-icon">delete</i>';
        deleteLink.addEventListener('click', removeTask);
        li.appendChild(deleteLink);

        taskList.appendChild(li);

        taskForm.reset();
    }
});

function removeTask(e) {
    if (confirm('Napewno?')) {
        const li  = e.target.parentElement.parentElement;
        taskList.removeChild(li);
    }
}