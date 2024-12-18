import { domNodes, todoFormControls, projectFormControls } from './cached-dom';

export const formHandling = (function(){
    const addEventListeners = (function(){
        domNodes.newProjectBtn.addEventListener('click', openProjectForm);
        domNodes.newTodoBtn.addEventListener('click', openTodoForm);
        todoFormControls.todoCancelBtn.addEventListener('click', closeForm);
        projectFormControls.projectCancelBtn.addEventListener('click', closeForm)
    })();

    function openTodoForm(){
        domNodes.todoDialog.showModal();
    }

    function openProjectForm(){
        domNodes.projectDialog.showModal();
    }

    function closeForm(){
        domNodes.projectDialog.close();
        domNodes.todoDialog.close();
    }
})();