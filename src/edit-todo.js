import { displayInputEdit } from "./display-controller";

export function cacheEditBtns(){
    let inputBtnArr = document.querySelectorAll('.todoInput');
    inputBtnArr.forEach((btn) => {
        btn.addEventListener('click', editInput);
    })
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
}
function editDescription(){
    displayInputEdit('description');
    openDialog();
}
function editDueDate(){
    displayInputEdit('due date');
    openDialog();
}
function editPriority(){
    displayInputEdit('priority level');
    openDialog();
}
function editStatus(){
    displayInputEdit('task status');
    openDialog();
}
function editNotes(){
    displayInputEdit('additional note');
    openDialog();
}

function openDialog(){
    const inputEditDialog = document.querySelector('.inputDialog');
    inputEditDialog.showModal();
}