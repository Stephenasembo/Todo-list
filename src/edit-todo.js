import { displayInputEdit, removeDialog } from "./display-controller";

let inputEditDialog = null;
let closeEdit = null;
let confirmEdit = null;
let obj = null;
let selectedProperty = null;

export function cacheEditBtns(todo){
    let inputBtnArr = document.querySelectorAll('.todoInput');
    inputBtnArr.forEach((btn) => {
        btn.addEventListener('click', editInput);
    })
    obj = todo;
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
    removeDialog(inputEditDialog);
    obj[selectedProperty] = newValue;
    console.log(obj)
}