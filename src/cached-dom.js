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
const priorityInput = document.querySelector('#priority');
const notesInput = document.querySelector('#notes');
const statusInput = document.querySelector('#status');


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
}

export const projectFormControls = {
    projectNameInput,
    projectCancelBtn,
    projectConfirmBtn,
}