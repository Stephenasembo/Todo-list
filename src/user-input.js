import { todoFormControls, projectFormControls } from './cached-dom.js';

const getProjectName = function(){
    return projectFormControls.projectNameInput.value;
}

const getTodoValues = function(){
    let title = todoFormControls.titleInput.value;
    let description = todoFormControls.desciptionInput.value;
    let dueDate = todoFormControls.dueDateInput.value;
    let priority = todoFormControls.priorityInput.value;
    let notes = todoFormControls.notesInput.value;
    let status = todoFormControls.statusInput.value;

    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        status
    }
}

todoFormControls.todoConfirmBtn.addEventListener('click', getProjectName);
projectFormControls.projectConfirmBtn.addEventListener('click', getTodoValues);

export const getUserInput = function(){
    let projectName = getProjectName();
    let todoInput = getTodoValues();
    let userInput = {};
    userInput.projectName = projectName;

    Object.assign(userInput, todoInput);

    return userInput;
}