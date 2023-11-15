document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const newTaskInput = document.getElementById('new-task');
    const tasksList = document.getElementById('tasks-list');


});

// Function to add a new task
function addTask() {
    // recupero value dell'input
    var task = document.getElementById('new-task').value;

    // Element container delle lista
    var listContainer = document.getElementById('tasks-list');

    // Creo Element li
    var newTaskElem = document.createElement("li");
    // Appendo Element li al container
    var newTask = listContainer.appendChild(newTaskElem);

    // Scrivo value dell'input nel li
    newTask.innerHTML = task;

    // Creo uno span
    var checkElem = document.createElement("span");
    checkElem.innerHTML = 'c';
    checkElem.classList.add('icon-check');
    newTask.id = 'task-' + creteUniqueID();
    newTask.appendChild(checkElem);



    var removeElem = document.createElement("span");
    removeElem.innerHTML = 'r';
    removeElem.classList.add('icon-check');
    newTask.appendChild(removeElem);

    removeElem.addEventListener('click', function (e) {
        removeTask(e.target);
    });

    checkElem.addEventListener('click', function (e) {
        checkedTask(e.target, removeElem);
    });

    console.log(listContainer);
};

function creteUniqueID() {
    id = Math.floor(Math.random() * 999999999);
    var help = document.getElementById(id);

    if (help !== null) {
        return creteUniqueID();
    }
    else {
        return id;
    }
}

function removeTask(elem) {

    if (confirm('Sei sicuto di voler cancellare questa task? ') == true) {
        elem.parentNode.remove();
    }
}

function checkedTask(elem,removeElem) {
    elem.parentNode.classList.add('checked');
    removeElem.remove();
    elem.remove();
}
