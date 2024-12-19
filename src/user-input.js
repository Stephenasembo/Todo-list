import { todoFormControls, projectFormControls } from './cached-dom.js';

let newProjectName = null;
let newTodoObj = null;

const getProjectName = function(event){
    event.preventDefault();
    newProjectName = projectFormControls.projectNameInput.value;
}

const getTodoValues = function(event){
    event.preventDefault();
    let title = todoFormControls.titleInput.value;
    let description = todoFormControls.desciptionInput.value;
    let dueDate = todoFormControls.dueDateInput.value;
    let priority;
    let notes = todoFormControls.notesInput.value;
    let status = todoFormControls.statusInput.value;


    if(todoFormControls.priorityInput.value === 'urgent'){
        priority = 'urgent';
    }

    else if(todoFormControls.priorityInput.value === 'important'){
        priority = 'important';
    }

    else if(todoFormControls.priorityInput.value === 'lowImportance'){
        priority = 'lowImportance';
    }

    newTodoObj = {
        title,
        description,
        dueDate,
        priority,
        notes,
        status
    }
}

todoFormControls.todoConfirmBtn.addEventListener('click', getTodoValues);
projectFormControls.projectConfirmBtn.addEventListener('click', getProjectName);

export const getUserInput = function(){
    let userInput = {};
    userInput.projectName = newProjectName;

    Object.assign(userInput, newTodoObj);

    return userInput;
}