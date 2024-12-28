import { domNodes, todoFormControls, projectFormControls } from '../dom/cached-dom';

export const formHandling = (function(){
    const addEventListeners = (function(){
        domNodes.newProjectBtn.addEventListener('click', openProjectForm);
        domNodes.newTodoBtn.addEventListener('click', openTodoForm);
        todoFormControls.todoCancelBtn.addEventListener('click', closeForm);
        projectFormControls.projectCancelBtn.addEventListener('click', closeForm)
    })();

    function openTodoForm(){
        clearTodoForm();
        domNodes.todoDialog.showModal();
    }

    function openProjectForm(){
        clearProjectForm();
        domNodes.projectDialog.showModal();
    }

    function closeForm(event){
        event.preventDefault();
        domNodes.projectDialog.close();
        domNodes.todoDialog.close();
    }

    function clearTodoForm(){
        for (let control in todoFormControls){
            if (control == 'urgentRadio' || control == 'importantRadio' || control == 'lowImportanceRadio'){
                todoFormControls[control].checked = false;
            }
            else if (control == 'notStartedRadio' || control == 'inProgressRadio' || control == 'completedRadio'){
                todoFormControls[control].checked = false;
            }
            else{
                todoFormControls[control].value = '';
            }
        }
    }
    
    function clearProjectForm(){
        projectFormControls.projectNameInput.value = '';
    }

    return {
        closeForm,
    }
})();