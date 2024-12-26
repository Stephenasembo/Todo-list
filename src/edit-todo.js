import { setDateMin } from "./date-constraint.js";
import { displayInputEdit, removeDialog } from "./display-controller";
import { projectManager } from './project-manager.js'
import { format } from 'date-fns';

let inputEditDialog = null;
let closeEdit = null;
let confirmEdit = null;
let obj = null;
let selectedProperty = null;
let selectedProjectIndex = null;
let selectedTodoIndex = null;

export function cacheEditBtns(projectIndex, todoIndex, todo){
    let inputBtnArr = document.querySelectorAll('.todoInput');
    inputBtnArr.forEach((btn) => {
        btn.addEventListener('click', editInput);
    })
    obj = todo;
    selectedProjectIndex = projectIndex;
    selectedTodoIndex = todoIndex;
}

function editInput(event){
    let selectedInput = event.target.id;
    switch(selectedInput){
        case 'title':
            editTitle();
            break;
        case 'description':
            editDescription();
            break;
        case 'dueDate':
            editDueDate();
            break;
        case 'priority':
            editPriority();
            break;
        case 'status':
            editStatus();
            break;
        case 'notes':
            editNotes();
            break;                                            
    }
}

function editTitle(){
    displayInputEdit('title');
    openDialog();
    selectedProperty = 'title';
}
function editDescription(){
    displayInputEdit('description');
    openDialog();
    selectedProperty = 'description';

}
function editDueDate(){
    displayInputEdit('due date');
    openDialog();
    selectedProperty = 'dueDate';

}
function editPriority(){
    displayInputEdit('priority level');
    openDialog();
    selectedProperty = 'priority';

}
function editStatus(){
    displayInputEdit('task status');
    openDialog();
    selectedProperty = 'status';

}
function editNotes(){
    displayInputEdit('additional note');
    openDialog();
    selectedProperty = 'notes';

}

function openDialog(){
    inputEditDialog = document.querySelector('.inputDialog');
    inputEditDialog.showModal();
    addEventListeners();
    let element = document.querySelector('.inputEditElement');
    if (element.type =="datetime-local"){
        let minimumDate = setDateMin();
        element.setAttribute('min', minimumDate);
    }
}

function closeDialog(event){
    event.preventDefault();
    inputEditDialog.close();
    removeDialog(inputEditDialog);
}

function addEventListeners(){
    closeEdit = document.querySelector('#closeEditForm');
    closeEdit.addEventListener('click', closeDialog);
    confirmEdit = document.querySelector('#confirmEditForm');
    confirmEdit.addEventListener('click', submitEdit);
}

function submitEdit(){
    let inputEditElement = null;
    if (selectedProperty == 'priority'){
        inputEditElement = document.querySelector('input[type="radio"]:checked');
    }
    else if (selectedProperty == 'status'){
        inputEditElement = document.querySelector('input[type="radio"]:checked');   
    }
    else {
        inputEditElement = document.querySelector('.inputEditElement');
    }
    let newValue = inputEditElement.value;
    if (selectedProperty == 'dueDate'){
        newValue = format(newValue, "p 'on' PPPP");
    }
    removeDialog(inputEditDialog);
    obj[selectedProperty] = newValue;
    projectManager.updateTodo(selectedProjectIndex, selectedTodoIndex, obj);
}