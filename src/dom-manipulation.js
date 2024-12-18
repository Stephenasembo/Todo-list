import { domNodes } from './cached-dom';

export const formHandling = (function(){
    const addEventListeners = (function(){
        domNodes.newProjectBtn.addEventListener('click', openProjectForm);
        domNodes.newTodoBtn.addEventListener('click', openTodoForm);
        domNodes.todoCancelBtn.addEventListener('click', closeForm);
        domNodes.projectDialog.addEventListener('click', closeForm)
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