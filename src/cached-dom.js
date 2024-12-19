const newProjectBtn = document.querySelector('#newProject');
const newTodoBtn = document.querySelector('#newTodo');
const todoCancelBtn = document.querySelector('#todoCancel');
const todoConfirmBtn = document.querySelector('#todoConfirm');
const projectCancelBtn = document.querySelector('#projectCancel');
const projectConfirmBtn = document.querySelector('#projectConfirm');
const todoDialog = document.querySelector('#todoDialog')
const projectDialog = document.querySelector('#projectDialog')

const projectNameInput = document.querySelector('#projectName')
const titleInput = document.querySelector('#title');
const desciptionInput = document.querySelector('#description');
const dueDateInput = document.querySelector('#dueDate');
const priorityInput = document.querySelector('input[type="radio"]:checked');
const notesInput = document.querySelector('#notes');
const statusInput = document.querySelector('#status');

const urgentRadio = document.querySelector('#urgent');
const importantRadio = document.querySelector('#important');
const lowImportanceRadio = document.querySelector('#lowImportance');

const projectsDiv = document.querySelector('.projects');

export const domNodes = {
    newProjectBtn,
    newTodoBtn,
    todoDialog,
    projectDialog,
}

export const todoFormControls = {
    titleInput,
    desciptionInput,
    dueDateInput,
    priorityInput,
    notesInput,
    statusInput,
    todoCancelBtn,
    todoConfirmBtn,
    urgentRadio,
    importantRadio,
    lowImportanceRadio,
}

export const projectFormControls = {
    projectNameInput,
    projectCancelBtn,
    projectConfirmBtn,
}

export const displayNodes = {
    projectsDiv,
}