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
const notesBtn = document.querySelector('#notesBtn');

const notesDialog = document.querySelector('#notesDialog');
const notesCancelBtn = document.querySelector('#notesCancel');
const notesConfirmBtn = document.querySelector('#notesConfirm');
const notesTxt = document.querySelector('#notesTxt');

const urgentRadio = document.querySelector('#urgent');
const importantRadio = document.querySelector('#important');
const lowImportanceRadio = document.querySelector('#lowImportance');

const taskPara = document.querySelector('#task');
const notStartedRadio = document.querySelector('#notStarted');
const inProgressRadio = document.querySelector('#inProgress');
const completedRadio = document.querySelector('#completed');

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
    notesBtn,
    todoCancelBtn,
    todoConfirmBtn,
    urgentRadio,
    importantRadio,
    lowImportanceRadio,
    taskPara,
    notStartedRadio,
    inProgressRadio,
    completedRadio,
    notesDialog,
    notesCancelBtn,
    notesConfirmBtn,
    notesTxt,
}

export const projectFormControls = {
    projectNameInput,
    projectCancelBtn,
    projectConfirmBtn,
}

export const displayNodes = {
    projectsDiv,
}