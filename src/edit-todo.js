import { displayInputEdit } from "./display-controller";

export function cacheEditBtns(){
    let inputBtnArr = document.querySelectorAll('.todoInput');
    inputBtnArr.forEach((btn) => {
        btn.addEventListener('click', editInput);
    })
}

function editInput(event){
    let selectedInput = event.target.id;
    if (selectedInput == 'title'){
        editTitle();
    }
}

function editTitle(){
    displayInputEdit('title');
    openDialog();
}
function editDescription(){
    displayInputEdit('description');
}
function editDueDate(){
    displayInputEdit('due date');

}
function editPriority(){
    displayInputEdit('priority level');

}
function editStatus(){
    displayInputEdit('task status');

}
function editNotes(){
    displayInputEdit('additional note');

}

function openDialog(){
    const inputEditDialog = document.querySelector('.inputDialog');
    inputEditDialog.showModal();
}