import { todoFormControls } from '../dom/cached-dom.js'

export let userNote = null;

todoFormControls.notesBtn.addEventListener('click', displayInput);
todoFormControls.notesCancelBtn.addEventListener('click', closeNotes);
todoFormControls.notesConfirmBtn.addEventListener('click', submitNotes);

function displayInput(event){
    event.preventDefault();
    todoFormControls.notesDialog.showModal()
}

function closeNotes(event){
    event.preventDefault();
    todoFormControls.notesDialog.close();
}

function submitNotes(event){
    userNote = todoFormControls.notesTxt.value;
    console.log(userNote);
    closeNotes(event);
}