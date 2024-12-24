import { todoFormControls } from './cached-dom.js'

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
    let userNote = todoFormControls.notesTxt.value;
    console.log(userNote);
    closeNotes(event);
}