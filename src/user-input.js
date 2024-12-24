import { todoFormControls, projectFormControls } from './cached-dom.js';
import { format } from 'date-fns';

let newProjectName = null;
let newTodoObj = null;

const getProjectName = function(){
    newProjectName = projectFormControls.projectNameInput.value;
}

const getTodoValues = function(){
    const priorityInput = document.querySelector('input[type="radio"]:checked');
    const statusInput = todoFormControls.taskPara.querySelector('input[type = "radio"]:checked');
    let title = todoFormControls.titleInput.value;
    let description = todoFormControls.desciptionInput.value;
    let dueDate = todoFormControls.dueDateInput.value;
    let priority = null;
    let status = null;

    if (dueDate){
        dueDate = format(dueDate, "p 'on' PPPP");
    }

    if(priorityInput){
        if(priorityInput.id == 'urgent'){
            priority = 'urgent';
        }

        else if(priorityInput.id == 'important'){
            priority = 'important';
        }

        else if(priorityInput.id == 'lowImportance'){
            priority = 'lowImportance';
        }
    }

    if(statusInput){
        if(statusInput.id == 'notStarted'){
            status = 'notStarted';
        }

        else if(statusInput.id == 'inProgress'){
            status = 'inProgress';
        }

        else if(statusInput.id == 'completed'){
            status = 'completed';
        }

    }
    newTodoObj = {
        title,
        description,
        dueDate,
        priority,
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