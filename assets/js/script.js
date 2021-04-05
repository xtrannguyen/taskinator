var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    event.preventDefault();

    // [] selects the HTML element with the name attribute of 'task-name', 
    // the value is going to be the user task input
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    // resets form content
    formEl.reset();

    // package up data as an object
    var taskDataobj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // send it as an argument to createTaskEl
    // collecting the data and sending it elsewhere
    createTaskEl(taskDataobj);
};

var createTaskEl = function(taskDataobj) {
    // create list item
    var listItemEl = document.createElement("li");
    // give list item this class from css
    listItemEl.className = "task-item";
    // the textcontent is going to be the user input for the task
    // listItemEl.textContent = taskNameInput;
    
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    // add html content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataobj.name + "</h3><span class='task-type'>" + taskDataobj.type + "</span>"
    
    // add div element to li
    listItemEl.appendChild(taskInfoEl);
    
    // add entire li item to ul
    tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);