import { todoFormControls, projectFormControls } from "./cached-dom";
import { formHandling } from './dom-manipulation.js';
import { getUserInput } from './user-input.js';

export const submitInput = function(){
    let newTodo = null;
    let newProject = null;
    todoFormControls.todoConfirmBtn.addEventListener('click', submitTodo);
    projectFormControls.projectConfirmBtn.addEventListener('click', submitProject);

    function submitTodo(event){
        formHandling.closeForm(event);
        newTodo = getUserInput();
    }

    function submitProject(event){
        formHandling.closeForm(event);
        newProject = getUserInput().projectName;
        console.log(newProject);
    }

    return {
        newTodo,
        newProject,
    }
        
}