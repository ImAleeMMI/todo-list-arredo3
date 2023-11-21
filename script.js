document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const newTaskInput = document.getElementById('new-task');
    const tasksList = document.getElementById('tasks-list');


});



// Function to add a new task
function addTask() {
    // recupero value dell'input
    var task = document.getElementById('new-task').value;

    if (task != '') {
        // Element container delle lista
        var listContainer = document.getElementById('tasks-list');
        // Creo Element li
        var newTaskElem = document.createElement("li");


        // Appendo Element li al container
        var newTask = listContainer.appendChild(newTaskElem);
        newTaskElem.classList.add('task');

        // Scrivo value dell'input nel li
        newTask.innerHTML = task;

        const taskUrg = "urgente";
        if (task.indexOf(taskUrg) !== -1) {
            newTaskElem.classList.add('add-urg');
        }
        // Creo uno span
        var removeElem = document.createElement("span");
        removeElem.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        removeElem.classList.add('icon-remove');
        newTask.appendChild(removeElem);

        var checkElem = document.createElement("span");
        checkElem.innerHTML = '<i class="fa-solid fa-check"></i>';
        checkElem.classList.add('icon-check');
        newTask.id = 'task-' + creteUniqueID();
        newTask.appendChild(checkElem);

        removeElem.addEventListener('click', function (e) {
            removeTask(e.target);
        });

        checkElem.addEventListener('click', function (e) {
            checkedTask(e.target, removeElem);

        });
        console.log(listContainer);

        document.getElementById('new-task').value = "";
        document.getElementById("error-message").innerHTML = "";
        countTask();

        const now = new Date();
        // get the current date and time as a string
        const currentDateTime = now.toLocaleString();
        document.querySelector('#datetime').textContent = currentDateTime;
        newTaskElem.innerHTML = `<span>${currentDateTime}</span>`;
    }
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
        elem.parentNode.parentNode.remove();
        countTask();
    }
}

function checkedTask(elem, removeElem) {
    elem.parentNode.parentNode.classList.add('checked'); console.log(elem.parentNode);
    removeElem.remove();
    elem.remove();
    countTask();
}

function characterCounter(task) {
    console.log(task);
    maxLength = 50;
    if (task.length > maxLength) {
        document.getElementById('new-task').value = task.substring(0, maxLength);
        document.getElementById("error-message").innerHTML = "Attenzione! Il numero massimo di caratteri è " + maxLength;
    }
}

function countTask() {
    var taskList = document.getElementById('tasks-list');
    var totalTask = taskList.querySelectorAll('.task').length;
    var checkedTask = taskList.querySelectorAll('.checked').length;
    document.getElementById("count-total").innerHTML = totalTask;
    document.getElementById("count-checked").innerHTML = checkedTask;
}