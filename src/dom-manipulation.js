import { domNodes, todoFormControls, projectFormControls } from './cached-dom';

export const formHandling = (function(){
    const addEventListeners = (function(){
        domNodes.newProjectBtn.addEventListener('click', openProjectForm);
        domNodes.newTodoBtn.addEventListener('click', openTodoForm);
        todoFormControls.todoCancelBtn.addEventListener('click', closeForm);
        projectFormControls.projectCancelBtn.addEventListener('click', closeForm)
    })();

    function openTodoForm(event){
        event.preventDefault();
        clearTodoForm();
        domNodes.todoDialog.showModal();
    }

    function openProjectForm(event){
        event.preventDefault();
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
            todoFormControls[control].value = '';
        }
    }
    
    function clearProjectForm(){
        projectFormControls.projectNameInput.value = '';
    }

    return {
        closeForm,
    }
})();