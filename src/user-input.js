import { todoFormControls, projectFormControls } from './cached-dom.js';

const getProjectName = function(event){
    event.preventDefault();
    return projectFormControls.projectNameInput.value;
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

    return {
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
    let projectName = getProjectName(event);
    let todoInput = getTodoValues(event);
    let userInput = {};
    userInput.projectName = projectName;

    Object.assign(userInput, todoInput);

    return userInput;
}